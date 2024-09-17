(ns main
  (:require [uix.core :refer [defui $]] ;uix is a wrapper over reactjs
            [uix.dom]
            [refx.alpha :as refx]
            [markov :as markov]
            [clojure.string :as string]))


;Event that initializes the DB
(refx/reg-event-db
  :init-db
  (fn [_ _]
    {:desired-length 15
     :setlist []
     :first-song (rand-nth markov/all-possible-first-songs)
     :style (rand-nth ["pre-blue" "feels-like-summer" "canada-2017"])}))

;;Db event and subscription for desired-length
(refx/reg-event-db
  :set-desired-length
  (fn [db [_ desired-length]]
    (assoc db :desired-length desired-length)))
(refx/reg-sub
  :desired-length
  (fn [db _]
    (:desired-length db)))

;;Db event and subscription for the first song
(refx/reg-event-db
  :set-first-song
  (fn [db [_ song]]
    (assoc db :first-song song)))
(refx/reg-sub
  :first-song
  (fn [db _]
    (:first-song db)))

;;Db event and subscription for the setlist
(refx/reg-event-db
  :generate-setlist
  (fn [db _]
    (let [desired-length (:desired-length db)
          first-song     [(:first-song db)]
          setlist        (markov/create-setlist first-song desired-length)]
      (assoc db :setlist setlist))))
(refx/reg-sub
  :setlist
  (fn [db _]
    (:setlist db)))

;;Db event and subscription for style
(refx/reg-event-db
  :set-style
  (fn [db [_ style]]
    (assoc db :style style)))
(refx/reg-sub
  :style
  (fn [db _]
    (:style db)))

;;
;; Controls for setlist
;;
(defui setlist-length-slider []
  (let [desired-length (refx/use-sub [:desired-length])]
    ($ :div.pure-g
       ($ :input.pure-u-2-3 {:type "range"
                             :min 0
                             :max 100
                             :value desired-length
                             :on-change #(refx/dispatch [:set-desired-length (-> % .-target .-value)])})
       ($ :p.pure-u-1-3 "Desired setlist length: " desired-length))))

(defui first-song-dropdown []
  (let [first-song (refx/use-sub [:first-song])]
    ($ :div.pure-g
       ($ :select.pure-u-2-3 {:value first-song
                              :on-change #(refx/dispatch [:set-first-song (-> % .-target .-value)])}
          (for [song markov/all-possible-first-songs]
            ($ :option {:value song :key song} song)))
       ($ :p.pure-u-1-3 "Opening song: " first-song))))

(defui generate-button []
  ($ :div.pure-g
     ($ :button.pure-u-2-3 {:on-click #(refx/dispatch [:generate-setlist])} "go!")
     ($ :p.pure-u-1-3 "Generate a new setlist")))

(defui current-setlist-list []
  (let [setlist (refx/use-sub [:setlist])]
    ($ :div.pure-g
       ($ :div.pure-u-2-3
          ($ :ol
             (for [[idx song] (map-indexed (fn [idx song] [idx song]) setlist)]
               ($ :li {:key idx} song))))
       ($ :div.pure-u-1-3
          ($ :p "Length: " (count setlist))))))

(defui interface []
  ($ :div
     ($ setlist-length-slider)
     ($ first-song-dropdown)
     ($ generate-button)
     ($ current-setlist-list)))

;;
;;Canvas and controls
;;
(defui style-controls []
  (let [style (refx/use-sub [:style])]
    ($ :div.pure-g
       ($ :div.pure-u-1-3
          ($ :label
             ($ :input {:type "radio"
                        :name "radio-group"
                        :value "pre-blue"
                        :checked (= style "pre-blue")
                        :on-change #(refx/dispatch [:set-style "pre-blue"])})
             "Pre Blue Album"))
       ($ :div.pure-u-1-3
          ($ :label
             ($ :input {:type "radio"
                        :name "radio-group"
                        :value "feels-like-summer"
                        :checked (= style "feels-like-summer")
                        :on-change #(refx/dispatch [:set-style "feels-like-summer"])})
             "Feels like summer"))
       ($ :div.pure-u-1-3
          ($ :label
             ($ :input {:type "radio"
                        :name "radio-group"
                        :value "canada-2017"
                        :checked (= style "canada-2017")
                        :on-change #(refx/dispatch [:set-style "canada-2017"])})
             "Canada 2017")))))

(defui display []
  (let [style (refx/use-sub [:style])
        setlist (refx/use-sub [:setlist])]
    ($ :div {:style {:margin-top "30px"
                     :margin-bottom "10px"
                     :max-width "600px"
                     :min-width "500px"}}
       (cond (= style "canada-2017")
             ($ :div {:style {:background-color "black"
                              :color "white"}}
                ($ :img {:src "canada2017.png" :style {:width "100%"}})
                ($ :p {:style {:margin-top "-10px"
                               :margin-bottom "0px"
                               :text-align "center"
                               :font-size 70}} "weezer")
                (for [[idx song] (map-indexed (fn [idx song] [idx song]) setlist)] 
                  ($ :p {:key idx
                         :style {:margin "0px"
                                 :text-align "center"}} song))
                ($ :div {:style {:height "15px"}})) 
             (= style "pre-blue")
             ($ :div {:style {:background-color "white"
                              :padding "5px"
                              :font-family "monospace"}}
                ($ :div.rotated
                   ($ :p {:style {:font-size 50
                                  :margin-bottom "-10px"}}"acoustic night with")
                   ($ :p {:style {:font-size 50
                                  :margin-top 0
                                  :margin-bottom "-10px"}}
                      ($ :u "w")
                      " "
                      ($ :u "e")
                      " "
                      ($ :u "e")
                      " "
                      ($ :u "z")
                      " "
                      ($ :u "e")
                      " "
                      ($ :u "r"))
                   (for [[idx song] (map-indexed (fn [idx song] [idx song]) setlist)]
                     ($ :p {:key idx} (string/lower-case song)))))
             (= style "feels-like-summer")
             ($ :div.feelsbg
                ($ :div.center {:style {:width 300
                                        :margin "auto"
                                        :padding-top "40px"}}
                   ($ :svg {:viewBox "0 0 38 27"}
                         ($ :path {:d "m0 0 0 0 10 0 6 18 3-8 0 8-3 9-6-18-7 0-1-3 7 0-1-3-7 0" :stroke "white" :stroke-width 0 :fill "#eeeeee"})
                         ($ :path {:d "m38 0 0 0-10 0-6 18-3-8 0 8 3 9 6-18 7 0 1-3-7 0 1-3 7 0" :stroke "white" :stroke-width 0 :fill "#eeeeee"})))
                ($ :p {:style {:margin-top "-10px"
                               :margin-bottom "0px"
                               :text-align "center"
                               :color "white"
                               :font-size 140}} "weezer")
                ($ :p {:style {:margin-top "-10px"
                               :margin-bottom "0px"
                               :text-align "center"
                               :color "red"
                               :letter-spacing "10px"
                               :font-size 30}} "feels like summer")
                ($ :p {:style {:margin-top "10px"
                               :margin-bottom "0px"
                               :text-align "center"
                               :color "white"
                               :letter-spacing "10px"
                               :font-size 20}} "uk tour")
                ($ :hr {:width "300px"
                        :color "white"})
                (for [[idx song] (map-indexed (fn [idx song] [idx song]) setlist)]
                  ($ :p {:key idx
                         :style {:text-align "center"
                                 :color (if (even? idx) "red" "white")}} song))
                ($ :div {:style {:height 10}}))))))
     

(defui app []
  ($ :<>
     ($ :header
        ($ :h1.right "Markeezer")
        ($ :h3 "markoVVeezer, if you will")
        ($ :p "For more Weezer related content tune into " 
           ($ :strong "WBOR 91.1 from 12:00-1:00AM Wednesdays") 
           " for my weekly show Weezkly where I'll be telling the story of the band and playing the associated music :D"))
     ($ :hr)
     ($ interface)
     ($ :hr)
     ($ style-controls)
     ($ display)))

;Using a defonce because I don't want to reinit the root each time the namespace is reloaded during development
(defonce root
  (uix.dom/create-root (js/document.getElementById "root")))

(defn init 
  "Initialize the program by:
  - Initializing the app state in the app-db
  - Mounting the root component" 
  [] ;No necessary params
  (refx/dispatch-sync [:init-db])
  (refx/dispatch-sync [:generate-setlist])
  (uix.dom/render-root ($ app) root))
