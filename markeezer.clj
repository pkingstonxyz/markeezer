(require '[babashka.http-client :as http])
(require '[babashka.pods :as pods])
(pods/load-pod 'retrogradeorbit/bootleg "0.1.9")
(require '[pod.retrogradeorbit.bootleg.utils :refer [convert-to]])
(require '[pod.retrogradeorbit.hickory.select :as s])
(require '[clojure.string :as string])

(def concert-list (http/get "https://www.weezerpedia.com/wiki/List_of_Weezer_concerts"))
(def concert-list-hickory (convert-to (:body concert-list) :hickory))
(def all-concerts
  (s/select (s/and
              (s/tag :td)
              (s/child
                (s/tag :tr)
                (s/nth-child 8))) concert-list-hickory))
(def links 
  (->> all-concerts
    (map (comp :href :attrs first :content))
    (filter identity) ;get rid of nils
    (remove #(re-find #"redlink=1" %)) ;Get rid of all of the "red links"
    (remove #(re-find #"TV_appearance" %)) ;Get rid of all of the tv appearances
    (remove #(re-find #"\(" %)) ;Get rid of the (a) and (b) concerts so its easier to sort
    (map #(str "https://www.weezerpedia.com" %)) ;Convert them to links
    (map identity)))

;this is for scraping im so sorry weezerpedia
(def link-partitions (partition 50 50 nil links))

; 19 total
;
(def part0 (doall (map http/get (nth link-partitions 0)))) 
(def part1 (doall (map http/get (nth link-partitions 1)))) 
(def part2 (doall (map http/get (nth link-partitions 2)))) 
(def part3 (doall (map http/get (nth link-partitions 3)))) 
(def part4 (doall (map http/get (nth link-partitions 4)))) 
(def part5 (doall (map http/get (nth link-partitions 5)))) 
(def part6 (doall (map http/get (nth link-partitions 6)))) 
(def part7 (doall (map http/get (nth link-partitions 7)))) 
(def part8 (doall (map http/get (nth link-partitions 8)))) 
(def part9 (doall (map http/get (nth link-partitions 9)))) 
(def part10 (doall (map http/get (nth link-partitions 10)))) 
(def part11 (doall (map http/get (nth link-partitions 11)))) 
(def part12 (doall (map http/get (nth link-partitions 12)))) 
(def part13 (doall (map http/get (nth link-partitions 13)))) 
(def part14 (doall (map http/get (nth link-partitions 14)))) 
(def part15 (doall (map http/get (nth link-partitions 15)))) 
(def part16 (doall (map http/get (nth link-partitions 16)))) 
(def part17 (doall (map http/get (nth link-partitions 17)))) 
(def part18 (doall (map http/get (nth link-partitions 18)))) 
(defn check [l]
  (->> l
       (map :status)
       (map #(= 200 %))
       (every? identity)))
(def allpages (flatten [part0 part1 part2 part3 part4 part5
                        part6 part7 part8 part9 part10 part11
                        part12 part13 part14 part15 part16
                        part17 part8]))
(def all-hickory 
  (map #(convert-to (:body %) :hickory) allpages))

(def testpage (first all-hickory))
(first (s/select (s/and (s/tag :div) (s/class "setlist")) testpage))
(def all-setlist-hickory
  (map (fn [page]
         (let [setlist (first (s/select (s/and (s/tag :div) (s/class "setlist")) page))
               date (first (s/select (s/tag :h1) page))]
           [date setlist])) all-hickory))

(def setlists-raw
  (filter #(identity (second %)) all-setlist-hickory))

(def setlists
  (map (fn [[title setlist]]
         (let [processed-title (-> title
                                   :content
                                   first
                                   :content
                                   first)
               songlist (map (fn [raw-songlist]
                               (-> (s/select (s/tag :a) raw-songlist)
                                   first :content first)) (s/select (s/child (s/tag :tr) (s/and (s/tag :td) (s/nth-child 2))) setlist))]
           [processed-title songlist]))
       setlists-raw))

(map (fn [raw-setlist]
       (-> (s/select (s/tag :a) raw-setlist)
           first
           :content
           first))
     (second (first setlists)))
(spit "list.edn" (pr-str setlists))
