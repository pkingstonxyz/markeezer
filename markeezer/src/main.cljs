(ns main
  (:require [uix.core :refer [defui $]] ;uix is a wrapper over reactjs
            [uix.dom]
            [refx.alpha :as refx]))

;I am commiting a grave sin by allowing randomness(it's impure and should *technically* be an effect)

;Event that initializes the DB
(refx/reg-event-db
  :init-db
  (fn [_ _]
    {:allow-pure? true
     :desired-length 15
     :setlist []}))

;;Db event and subscription for purity
(refx/reg-event-db
  :toggle-pure
  (fn [db _]
    (update db :allow-pure? not)))

(refx/reg-sub
  :allow-pure?
  (fn [db _]
    (:allow-pure? db)))

;;Db event and subscription for desired-length
(refx/reg-event-db
  :set-desired-length
  (fn [db [_ desired-length]]
    (assoc db :desired-length desired-length)))

(refx/reg-sub
  :desired-length
  (fn [db _]
    (:desired-length db)))

(defui pure-checkbox []
  (let [checked? (refx/use-sub [:allow-pure?])]
    ($ :div
       ($ :input {:type "checkbox"
                  :checked checked?
                  :on-change #(refx/dispatch [:toggle-pure])})
       ($ :label "Allow concerts to terminate early? (if the markov chain reaches a song that has only ever been played last in a weezer concert)"))))

(defui setlist-length-slider []
  (let [desired-length (refx/use-sub [:desired-length])]
    ($ :div
       ($ :input {:type "range"
                  :min 0
                  :max 100
                  :value desired-length
                  :on-change #(refx/dispatch [:set-desired-length (-> % .-target .-value)])})
       ($ :label "Desired setlist length: " desired-length))))

(defui interface []
  ($ :div
     ($ pure-checkbox)
     ($ setlist-length-slider)))

(defui app []
  ($ :<>
     ($ :header
        ($ :h1 "Markeezer")
        ($ :h3 "markoVVeezer, if you will")
        ($ :p "For more Weezer related content tune into WBOR 91.1 from 12:00-1:00AM Wednesdays for my weekly show Weezkly where I'll be telling the story of the band and playing the associated music :D"))
     ($ :hr)
     ($ :main
        ($ interface))))

;Using a defonce because I don't want to reinit the root each time the namespace is reloaded during development
(defonce root
  (uix.dom/create-root (js/document.getElementById "root")))

(defn init 
  "Initialize the program by:
  - Initializing the app state in the app-db
  - Mounting the root component" 
  [] ;No necessary params
  (refx/dispatch-sync [:init-db])
  (uix.dom/render-root ($ app) root))
