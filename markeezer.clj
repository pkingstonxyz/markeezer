(require '[clojure.string :as string])
(def setlists (read-string (slurp "list.edn")))

;Create the set of all states
(def all-songs
  (into #{} (->> (flatten (map second setlists))
                 (filter identity)
                 (map string/capitalize);standardize the capitalization
                 (remove #(= "[1]" %));some gunk slipped through the cracks
                 (remove #(= "[2]" %))
                 (remove #(= "[3]" %))
                 (remove #(= "[4]" %)))))

;Create the base probability table
(def base-transitions (reduce (fn [m v]
                                (assoc m v 0)) {:can-transition? false} all-songs))

;Create the empty transition table
(def empty-table (reduce (fn [m v]
                           (assoc m v base-transitions)) {} all-songs))

;Create a list of all transitions based on the list of all songs
(def transitions (->> setlists
                   (map (fn [setlist]
                          (partition 2 1(second setlist))))
                   (reduce into)
                   (remove (fn [[from to]]
                             (or (nil? from) (nil? to)
                                 (= "[1]" from) (= "[1]" to)
                                 (= "[2]" from) (= "[2]" to)
                                 (= "[3]" from) (= "[3]" to)
                                 (= "[4]" from) (= "[4]" to))))
                   (map #(map string/capitalize %))
                   (map #(into [] %))))

;Create transition table
(def transition-table
  (reduce (fn [m transition]
            (let [from (first transition)
                  to (second transition)]
              (-> m
                  (assoc-in [from :can-transition?] true)
                  (update-in [from to] inc))))
          empty-table transitions))

;Weighted random sampling based on transition table
(defn weighted-rand-choice [m]
    (let [w (reductions #(+ % %2) (vals m))
          r (rand-int (last w))]
         (nth (keys m) (count (take-while #( <= % r ) w)))))

;Create a setlist (markov based)
(defn create-setlist [setlist set-length]
  (if (= (count setlist) set-length) ;Stop recurring if we've made a full set
    setlist
    (let [current-song (last setlist)
          can-transition? (get-in transition-table [current-song :can-transition?])]
      (if (not can-transition?) ;Or if the song we're at is the end
        setlist
        (let [current-probabilities (dissoc (transition-table current-song) :can-transition?)
              next-song (weighted-rand-choice current-probabilities)]
          (create-setlist (conj setlist next-song) set-length))))))

(def generated-lists (repeatedly 1000 #(create-setlist ["Buddy holly"] 100)))
(map count generated-lists)
(nth generated-lists 10)
#_(doseq [l (nth generated-lists 2)]
   (println l))
  
