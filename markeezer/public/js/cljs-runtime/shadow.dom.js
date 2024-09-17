goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_12498 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_12498(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_12500 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_12500(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__11704 = coll;
var G__11705 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__11704,G__11705) : shadow.dom.lazy_native_coll_seq.call(null, G__11704,G__11705));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null, );
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__11719 = arguments.length;
switch (G__11719) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__11721 = arguments.length;
switch (G__11721) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__11730 = arguments.length;
switch (G__11730) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__11735 = arguments.length;
switch (G__11735) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__11739 = arguments.length;
switch (G__11739) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__11749 = arguments.length;
switch (G__11749) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
}));
}catch (e11752){if((e11752 instanceof Object)){
var e = e11752;
return console.log("didnt support attachEvent",el,e);
} else {
throw e11752;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__11755 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__11756 = null;
var count__11757 = (0);
var i__11758 = (0);
while(true){
if((i__11758 < count__11757)){
var el = chunk__11756.cljs$core$IIndexed$_nth$arity$2(null, i__11758);
var handler_12552__$1 = ((function (seq__11755,chunk__11756,count__11757,i__11758,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__11755,chunk__11756,count__11757,i__11758,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12552__$1);


var G__12555 = seq__11755;
var G__12556 = chunk__11756;
var G__12557 = count__11757;
var G__12558 = (i__11758 + (1));
seq__11755 = G__12555;
chunk__11756 = G__12556;
count__11757 = G__12557;
i__11758 = G__12558;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11755);
if(temp__5804__auto__){
var seq__11755__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11755__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11755__$1);
var G__12559 = cljs.core.chunk_rest(seq__11755__$1);
var G__12560 = c__5525__auto__;
var G__12561 = cljs.core.count(c__5525__auto__);
var G__12562 = (0);
seq__11755 = G__12559;
chunk__11756 = G__12560;
count__11757 = G__12561;
i__11758 = G__12562;
continue;
} else {
var el = cljs.core.first(seq__11755__$1);
var handler_12564__$1 = ((function (seq__11755,chunk__11756,count__11757,i__11758,el,seq__11755__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__11755,chunk__11756,count__11757,i__11758,el,seq__11755__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12564__$1);


var G__12565 = cljs.core.next(seq__11755__$1);
var G__12566 = null;
var G__12567 = (0);
var G__12568 = (0);
seq__11755 = G__12565;
chunk__11756 = G__12566;
count__11757 = G__12567;
i__11758 = G__12568;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__11760 = arguments.length;
switch (G__11760) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__11761 = cljs.core.seq(events);
var chunk__11762 = null;
var count__11763 = (0);
var i__11764 = (0);
while(true){
if((i__11764 < count__11763)){
var vec__11782 = chunk__11762.cljs$core$IIndexed$_nth$arity$2(null, i__11764);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11782,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11782,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12573 = seq__11761;
var G__12574 = chunk__11762;
var G__12575 = count__11763;
var G__12576 = (i__11764 + (1));
seq__11761 = G__12573;
chunk__11762 = G__12574;
count__11763 = G__12575;
i__11764 = G__12576;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11761);
if(temp__5804__auto__){
var seq__11761__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11761__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11761__$1);
var G__12578 = cljs.core.chunk_rest(seq__11761__$1);
var G__12579 = c__5525__auto__;
var G__12580 = cljs.core.count(c__5525__auto__);
var G__12581 = (0);
seq__11761 = G__12578;
chunk__11762 = G__12579;
count__11763 = G__12580;
i__11764 = G__12581;
continue;
} else {
var vec__11785 = cljs.core.first(seq__11761__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11785,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11785,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12583 = cljs.core.next(seq__11761__$1);
var G__12584 = null;
var G__12585 = (0);
var G__12586 = (0);
seq__11761 = G__12583;
chunk__11762 = G__12584;
count__11763 = G__12585;
i__11764 = G__12586;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__11788 = cljs.core.seq(styles);
var chunk__11789 = null;
var count__11790 = (0);
var i__11791 = (0);
while(true){
if((i__11791 < count__11790)){
var vec__11810 = chunk__11789.cljs$core$IIndexed$_nth$arity$2(null, i__11791);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11810,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11810,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12588 = seq__11788;
var G__12589 = chunk__11789;
var G__12590 = count__11790;
var G__12591 = (i__11791 + (1));
seq__11788 = G__12588;
chunk__11789 = G__12589;
count__11790 = G__12590;
i__11791 = G__12591;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11788);
if(temp__5804__auto__){
var seq__11788__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11788__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11788__$1);
var G__12592 = cljs.core.chunk_rest(seq__11788__$1);
var G__12593 = c__5525__auto__;
var G__12594 = cljs.core.count(c__5525__auto__);
var G__12595 = (0);
seq__11788 = G__12592;
chunk__11789 = G__12593;
count__11790 = G__12594;
i__11791 = G__12595;
continue;
} else {
var vec__11821 = cljs.core.first(seq__11788__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11821,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11821,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12598 = cljs.core.next(seq__11788__$1);
var G__12599 = null;
var G__12600 = (0);
var G__12601 = (0);
seq__11788 = G__12598;
chunk__11789 = G__12599;
count__11790 = G__12600;
i__11791 = G__12601;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__11829_12603 = key;
var G__11829_12604__$1 = (((G__11829_12603 instanceof cljs.core.Keyword))?G__11829_12603.fqn:null);
switch (G__11829_12604__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_12612 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_12612,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_12612,"aria-");
}
})())){
el.setAttribute(ks_12612,value);
} else {
(el[ks_12612] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__11882){
var map__11883 = p__11882;
var map__11883__$1 = cljs.core.__destructure_map(map__11883);
var props = map__11883__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11883__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__11885 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11885,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11885,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11885,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__11888 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__11888,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__11888;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__11893 = arguments.length;
switch (G__11893) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__11899){
var vec__11901 = p__11899;
var seq__11902 = cljs.core.seq(vec__11901);
var first__11903 = cljs.core.first(seq__11902);
var seq__11902__$1 = cljs.core.next(seq__11902);
var nn = first__11903;
var first__11903__$1 = cljs.core.first(seq__11902__$1);
var seq__11902__$2 = cljs.core.next(seq__11902__$1);
var np = first__11903__$1;
var nc = seq__11902__$2;
var node = vec__11901;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__11908 = nn;
var G__11909 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__11908,G__11909) : create_fn.call(null, G__11908,G__11909));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null, nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__11914 = nn;
var G__11915 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__11914,G__11915) : create_fn.call(null, G__11914,G__11915));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__11920 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11920,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11920,(1),null);
var seq__11923_12623 = cljs.core.seq(node_children);
var chunk__11924_12624 = null;
var count__11925_12625 = (0);
var i__11926_12626 = (0);
while(true){
if((i__11926_12626 < count__11925_12625)){
var child_struct_12634 = chunk__11924_12624.cljs$core$IIndexed$_nth$arity$2(null, i__11926_12626);
var children_12635 = shadow.dom.dom_node(child_struct_12634);
if(cljs.core.seq_QMARK_(children_12635)){
var seq__11974_12639 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12635));
var chunk__11976_12641 = null;
var count__11977_12642 = (0);
var i__11978_12643 = (0);
while(true){
if((i__11978_12643 < count__11977_12642)){
var child_12644 = chunk__11976_12641.cljs$core$IIndexed$_nth$arity$2(null, i__11978_12643);
if(cljs.core.truth_(child_12644)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12644);


var G__12645 = seq__11974_12639;
var G__12646 = chunk__11976_12641;
var G__12647 = count__11977_12642;
var G__12648 = (i__11978_12643 + (1));
seq__11974_12639 = G__12645;
chunk__11976_12641 = G__12646;
count__11977_12642 = G__12647;
i__11978_12643 = G__12648;
continue;
} else {
var G__12649 = seq__11974_12639;
var G__12650 = chunk__11976_12641;
var G__12651 = count__11977_12642;
var G__12652 = (i__11978_12643 + (1));
seq__11974_12639 = G__12649;
chunk__11976_12641 = G__12650;
count__11977_12642 = G__12651;
i__11978_12643 = G__12652;
continue;
}
} else {
var temp__5804__auto___12653 = cljs.core.seq(seq__11974_12639);
if(temp__5804__auto___12653){
var seq__11974_12654__$1 = temp__5804__auto___12653;
if(cljs.core.chunked_seq_QMARK_(seq__11974_12654__$1)){
var c__5525__auto___12655 = cljs.core.chunk_first(seq__11974_12654__$1);
var G__12656 = cljs.core.chunk_rest(seq__11974_12654__$1);
var G__12657 = c__5525__auto___12655;
var G__12658 = cljs.core.count(c__5525__auto___12655);
var G__12659 = (0);
seq__11974_12639 = G__12656;
chunk__11976_12641 = G__12657;
count__11977_12642 = G__12658;
i__11978_12643 = G__12659;
continue;
} else {
var child_12660 = cljs.core.first(seq__11974_12654__$1);
if(cljs.core.truth_(child_12660)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12660);


var G__12661 = cljs.core.next(seq__11974_12654__$1);
var G__12662 = null;
var G__12663 = (0);
var G__12664 = (0);
seq__11974_12639 = G__12661;
chunk__11976_12641 = G__12662;
count__11977_12642 = G__12663;
i__11978_12643 = G__12664;
continue;
} else {
var G__12665 = cljs.core.next(seq__11974_12654__$1);
var G__12666 = null;
var G__12667 = (0);
var G__12668 = (0);
seq__11974_12639 = G__12665;
chunk__11976_12641 = G__12666;
count__11977_12642 = G__12667;
i__11978_12643 = G__12668;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12635);
}


var G__12669 = seq__11923_12623;
var G__12670 = chunk__11924_12624;
var G__12671 = count__11925_12625;
var G__12672 = (i__11926_12626 + (1));
seq__11923_12623 = G__12669;
chunk__11924_12624 = G__12670;
count__11925_12625 = G__12671;
i__11926_12626 = G__12672;
continue;
} else {
var temp__5804__auto___12673 = cljs.core.seq(seq__11923_12623);
if(temp__5804__auto___12673){
var seq__11923_12674__$1 = temp__5804__auto___12673;
if(cljs.core.chunked_seq_QMARK_(seq__11923_12674__$1)){
var c__5525__auto___12675 = cljs.core.chunk_first(seq__11923_12674__$1);
var G__12676 = cljs.core.chunk_rest(seq__11923_12674__$1);
var G__12677 = c__5525__auto___12675;
var G__12678 = cljs.core.count(c__5525__auto___12675);
var G__12679 = (0);
seq__11923_12623 = G__12676;
chunk__11924_12624 = G__12677;
count__11925_12625 = G__12678;
i__11926_12626 = G__12679;
continue;
} else {
var child_struct_12681 = cljs.core.first(seq__11923_12674__$1);
var children_12682 = shadow.dom.dom_node(child_struct_12681);
if(cljs.core.seq_QMARK_(children_12682)){
var seq__11980_12683 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12682));
var chunk__11982_12684 = null;
var count__11983_12685 = (0);
var i__11984_12686 = (0);
while(true){
if((i__11984_12686 < count__11983_12685)){
var child_12687 = chunk__11982_12684.cljs$core$IIndexed$_nth$arity$2(null, i__11984_12686);
if(cljs.core.truth_(child_12687)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12687);


var G__12689 = seq__11980_12683;
var G__12690 = chunk__11982_12684;
var G__12691 = count__11983_12685;
var G__12692 = (i__11984_12686 + (1));
seq__11980_12683 = G__12689;
chunk__11982_12684 = G__12690;
count__11983_12685 = G__12691;
i__11984_12686 = G__12692;
continue;
} else {
var G__12693 = seq__11980_12683;
var G__12694 = chunk__11982_12684;
var G__12695 = count__11983_12685;
var G__12696 = (i__11984_12686 + (1));
seq__11980_12683 = G__12693;
chunk__11982_12684 = G__12694;
count__11983_12685 = G__12695;
i__11984_12686 = G__12696;
continue;
}
} else {
var temp__5804__auto___12697__$1 = cljs.core.seq(seq__11980_12683);
if(temp__5804__auto___12697__$1){
var seq__11980_12699__$1 = temp__5804__auto___12697__$1;
if(cljs.core.chunked_seq_QMARK_(seq__11980_12699__$1)){
var c__5525__auto___12700 = cljs.core.chunk_first(seq__11980_12699__$1);
var G__12702 = cljs.core.chunk_rest(seq__11980_12699__$1);
var G__12703 = c__5525__auto___12700;
var G__12704 = cljs.core.count(c__5525__auto___12700);
var G__12705 = (0);
seq__11980_12683 = G__12702;
chunk__11982_12684 = G__12703;
count__11983_12685 = G__12704;
i__11984_12686 = G__12705;
continue;
} else {
var child_12706 = cljs.core.first(seq__11980_12699__$1);
if(cljs.core.truth_(child_12706)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12706);


var G__12708 = cljs.core.next(seq__11980_12699__$1);
var G__12709 = null;
var G__12710 = (0);
var G__12711 = (0);
seq__11980_12683 = G__12708;
chunk__11982_12684 = G__12709;
count__11983_12685 = G__12710;
i__11984_12686 = G__12711;
continue;
} else {
var G__12712 = cljs.core.next(seq__11980_12699__$1);
var G__12713 = null;
var G__12714 = (0);
var G__12715 = (0);
seq__11980_12683 = G__12712;
chunk__11982_12684 = G__12713;
count__11983_12685 = G__12714;
i__11984_12686 = G__12715;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12682);
}


var G__12716 = cljs.core.next(seq__11923_12674__$1);
var G__12717 = null;
var G__12718 = (0);
var G__12719 = (0);
seq__11923_12623 = G__12716;
chunk__11924_12624 = G__12717;
count__11925_12625 = G__12718;
i__11926_12626 = G__12719;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__11990 = cljs.core.seq(node);
var chunk__11991 = null;
var count__11992 = (0);
var i__11993 = (0);
while(true){
if((i__11993 < count__11992)){
var n = chunk__11991.cljs$core$IIndexed$_nth$arity$2(null, i__11993);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__12723 = seq__11990;
var G__12724 = chunk__11991;
var G__12725 = count__11992;
var G__12726 = (i__11993 + (1));
seq__11990 = G__12723;
chunk__11991 = G__12724;
count__11992 = G__12725;
i__11993 = G__12726;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11990);
if(temp__5804__auto__){
var seq__11990__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11990__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11990__$1);
var G__12729 = cljs.core.chunk_rest(seq__11990__$1);
var G__12730 = c__5525__auto__;
var G__12731 = cljs.core.count(c__5525__auto__);
var G__12732 = (0);
seq__11990 = G__12729;
chunk__11991 = G__12730;
count__11992 = G__12731;
i__11993 = G__12732;
continue;
} else {
var n = cljs.core.first(seq__11990__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__12733 = cljs.core.next(seq__11990__$1);
var G__12734 = null;
var G__12735 = (0);
var G__12736 = (0);
seq__11990 = G__12733;
chunk__11991 = G__12734;
count__11992 = G__12735;
i__11993 = G__12736;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__11998 = arguments.length;
switch (G__11998) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__12000 = arguments.length;
switch (G__12000) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__12002 = arguments.length;
switch (G__12002) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12749 = arguments.length;
var i__5727__auto___12750 = (0);
while(true){
if((i__5727__auto___12750 < len__5726__auto___12749)){
args__5732__auto__.push((arguments[i__5727__auto___12750]));

var G__12752 = (i__5727__auto___12750 + (1));
i__5727__auto___12750 = G__12752;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__12004_12755 = cljs.core.seq(nodes);
var chunk__12005_12756 = null;
var count__12006_12757 = (0);
var i__12007_12758 = (0);
while(true){
if((i__12007_12758 < count__12006_12757)){
var node_12759 = chunk__12005_12756.cljs$core$IIndexed$_nth$arity$2(null, i__12007_12758);
fragment.appendChild(shadow.dom._to_dom(node_12759));


var G__12766 = seq__12004_12755;
var G__12767 = chunk__12005_12756;
var G__12768 = count__12006_12757;
var G__12769 = (i__12007_12758 + (1));
seq__12004_12755 = G__12766;
chunk__12005_12756 = G__12767;
count__12006_12757 = G__12768;
i__12007_12758 = G__12769;
continue;
} else {
var temp__5804__auto___12771 = cljs.core.seq(seq__12004_12755);
if(temp__5804__auto___12771){
var seq__12004_12773__$1 = temp__5804__auto___12771;
if(cljs.core.chunked_seq_QMARK_(seq__12004_12773__$1)){
var c__5525__auto___12774 = cljs.core.chunk_first(seq__12004_12773__$1);
var G__12775 = cljs.core.chunk_rest(seq__12004_12773__$1);
var G__12776 = c__5525__auto___12774;
var G__12777 = cljs.core.count(c__5525__auto___12774);
var G__12778 = (0);
seq__12004_12755 = G__12775;
chunk__12005_12756 = G__12776;
count__12006_12757 = G__12777;
i__12007_12758 = G__12778;
continue;
} else {
var node_12780 = cljs.core.first(seq__12004_12773__$1);
fragment.appendChild(shadow.dom._to_dom(node_12780));


var G__12782 = cljs.core.next(seq__12004_12773__$1);
var G__12783 = null;
var G__12784 = (0);
var G__12785 = (0);
seq__12004_12755 = G__12782;
chunk__12005_12756 = G__12783;
count__12006_12757 = G__12784;
i__12007_12758 = G__12785;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq12003){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12003));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__12008_12788 = cljs.core.seq(scripts);
var chunk__12009_12789 = null;
var count__12010_12790 = (0);
var i__12011_12791 = (0);
while(true){
if((i__12011_12791 < count__12010_12790)){
var vec__12018_12793 = chunk__12009_12789.cljs$core$IIndexed$_nth$arity$2(null, i__12011_12791);
var script_tag_12794 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12018_12793,(0),null);
var script_body_12795 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12018_12793,(1),null);
eval(script_body_12795);


var G__12796 = seq__12008_12788;
var G__12797 = chunk__12009_12789;
var G__12798 = count__12010_12790;
var G__12799 = (i__12011_12791 + (1));
seq__12008_12788 = G__12796;
chunk__12009_12789 = G__12797;
count__12010_12790 = G__12798;
i__12011_12791 = G__12799;
continue;
} else {
var temp__5804__auto___12801 = cljs.core.seq(seq__12008_12788);
if(temp__5804__auto___12801){
var seq__12008_12802__$1 = temp__5804__auto___12801;
if(cljs.core.chunked_seq_QMARK_(seq__12008_12802__$1)){
var c__5525__auto___12803 = cljs.core.chunk_first(seq__12008_12802__$1);
var G__12804 = cljs.core.chunk_rest(seq__12008_12802__$1);
var G__12805 = c__5525__auto___12803;
var G__12806 = cljs.core.count(c__5525__auto___12803);
var G__12807 = (0);
seq__12008_12788 = G__12804;
chunk__12009_12789 = G__12805;
count__12010_12790 = G__12806;
i__12011_12791 = G__12807;
continue;
} else {
var vec__12021_12808 = cljs.core.first(seq__12008_12802__$1);
var script_tag_12809 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12021_12808,(0),null);
var script_body_12810 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12021_12808,(1),null);
eval(script_body_12810);


var G__12811 = cljs.core.next(seq__12008_12802__$1);
var G__12812 = null;
var G__12813 = (0);
var G__12814 = (0);
seq__12008_12788 = G__12811;
chunk__12009_12789 = G__12812;
count__12010_12790 = G__12813;
i__12011_12791 = G__12814;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__12024){
var vec__12025 = p__12024;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12025,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12025,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__12029 = arguments.length;
switch (G__12029) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__12030 = cljs.core.seq(style_keys);
var chunk__12031 = null;
var count__12032 = (0);
var i__12033 = (0);
while(true){
if((i__12033 < count__12032)){
var it = chunk__12031.cljs$core$IIndexed$_nth$arity$2(null, i__12033);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__12820 = seq__12030;
var G__12821 = chunk__12031;
var G__12822 = count__12032;
var G__12823 = (i__12033 + (1));
seq__12030 = G__12820;
chunk__12031 = G__12821;
count__12032 = G__12822;
i__12033 = G__12823;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12030);
if(temp__5804__auto__){
var seq__12030__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12030__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12030__$1);
var G__12832 = cljs.core.chunk_rest(seq__12030__$1);
var G__12833 = c__5525__auto__;
var G__12834 = cljs.core.count(c__5525__auto__);
var G__12835 = (0);
seq__12030 = G__12832;
chunk__12031 = G__12833;
count__12032 = G__12834;
i__12033 = G__12835;
continue;
} else {
var it = cljs.core.first(seq__12030__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__12836 = cljs.core.next(seq__12030__$1);
var G__12837 = null;
var G__12838 = (0);
var G__12839 = (0);
seq__12030 = G__12836;
chunk__12031 = G__12837;
count__12032 = G__12838;
i__12033 = G__12839;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k12035,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__12048 = k12035;
var G__12048__$1 = (((G__12048 instanceof cljs.core.Keyword))?G__12048.fqn:null);
switch (G__12048__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12035,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__12053){
var vec__12054 = p__12053;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12054,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12054,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12034){
var self__ = this;
var G__12034__$1 = this;
return (new cljs.core.RecordIter((0),G__12034__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12036,other12037){
var self__ = this;
var this12036__$1 = this;
return (((!((other12037 == null)))) && ((((this12036__$1.constructor === other12037.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12036__$1.x,other12037.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12036__$1.y,other12037.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12036__$1.__extmap,other12037.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k12035){
var self__ = this;
var this__5307__auto____$1 = this;
var G__12090 = k12035;
var G__12090__$1 = (((G__12090 instanceof cljs.core.Keyword))?G__12090.fqn:null);
switch (G__12090__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12035);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__12034){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__12095 = cljs.core.keyword_identical_QMARK_;
var expr__12096 = k__5309__auto__;
if(cljs.core.truth_((pred__12095.cljs$core$IFn$_invoke$arity$2 ? pred__12095.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__12096) : pred__12095.call(null, new cljs.core.Keyword(null,"x","x",2099068185),expr__12096)))){
return (new shadow.dom.Coordinate(G__12034,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12095.cljs$core$IFn$_invoke$arity$2 ? pred__12095.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__12096) : pred__12095.call(null, new cljs.core.Keyword(null,"y","y",-1757859776),expr__12096)))){
return (new shadow.dom.Coordinate(self__.x,G__12034,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__12034),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__12034){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__12034,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__12041){
var extmap__5342__auto__ = (function (){var G__12119 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12041,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__12041)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12119);
} else {
return G__12119;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__12041),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__12041),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k12168,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__12204 = k12168;
var G__12204__$1 = (((G__12204 instanceof cljs.core.Keyword))?G__12204.fqn:null);
switch (G__12204__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12168,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__12212){
var vec__12217 = p__12212;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12217,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12217,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12167){
var self__ = this;
var G__12167__$1 = this;
return (new cljs.core.RecordIter((0),G__12167__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12169,other12170){
var self__ = this;
var this12169__$1 = this;
return (((!((other12170 == null)))) && ((((this12169__$1.constructor === other12170.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12169__$1.w,other12170.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12169__$1.h,other12170.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12169__$1.__extmap,other12170.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k12168){
var self__ = this;
var this__5307__auto____$1 = this;
var G__12251 = k12168;
var G__12251__$1 = (((G__12251 instanceof cljs.core.Keyword))?G__12251.fqn:null);
switch (G__12251__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12168);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__12167){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__12255 = cljs.core.keyword_identical_QMARK_;
var expr__12256 = k__5309__auto__;
if(cljs.core.truth_((pred__12255.cljs$core$IFn$_invoke$arity$2 ? pred__12255.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__12256) : pred__12255.call(null, new cljs.core.Keyword(null,"w","w",354169001),expr__12256)))){
return (new shadow.dom.Size(G__12167,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12255.cljs$core$IFn$_invoke$arity$2 ? pred__12255.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__12256) : pred__12255.call(null, new cljs.core.Keyword(null,"h","h",1109658740),expr__12256)))){
return (new shadow.dom.Size(self__.w,G__12167,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__12167),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__12167){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__12167,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__12173){
var extmap__5342__auto__ = (function (){var G__12297 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12173,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__12173)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12297);
} else {
return G__12297;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__12173),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__12173),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__12914 = (i + (1));
var G__12915 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__12914;
ret = G__12915;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12330){
var vec__12331 = p__12330;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12331,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12331,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__12335 = arguments.length;
switch (G__12335) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__12918 = ps;
var G__12919 = (i + (1));
el__$1 = G__12918;
i = G__12919;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null, parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__12392 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12392,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12392,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12392,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__12395_12922 = cljs.core.seq(props);
var chunk__12396_12923 = null;
var count__12397_12924 = (0);
var i__12398_12925 = (0);
while(true){
if((i__12398_12925 < count__12397_12924)){
var vec__12408_12926 = chunk__12396_12923.cljs$core$IIndexed$_nth$arity$2(null, i__12398_12925);
var k_12927 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12408_12926,(0),null);
var v_12928 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12408_12926,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_12927);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_12927),v_12928);


var G__12930 = seq__12395_12922;
var G__12931 = chunk__12396_12923;
var G__12932 = count__12397_12924;
var G__12933 = (i__12398_12925 + (1));
seq__12395_12922 = G__12930;
chunk__12396_12923 = G__12931;
count__12397_12924 = G__12932;
i__12398_12925 = G__12933;
continue;
} else {
var temp__5804__auto___12936 = cljs.core.seq(seq__12395_12922);
if(temp__5804__auto___12936){
var seq__12395_12937__$1 = temp__5804__auto___12936;
if(cljs.core.chunked_seq_QMARK_(seq__12395_12937__$1)){
var c__5525__auto___12938 = cljs.core.chunk_first(seq__12395_12937__$1);
var G__12939 = cljs.core.chunk_rest(seq__12395_12937__$1);
var G__12940 = c__5525__auto___12938;
var G__12941 = cljs.core.count(c__5525__auto___12938);
var G__12942 = (0);
seq__12395_12922 = G__12939;
chunk__12396_12923 = G__12940;
count__12397_12924 = G__12941;
i__12398_12925 = G__12942;
continue;
} else {
var vec__12412_12943 = cljs.core.first(seq__12395_12937__$1);
var k_12944 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12412_12943,(0),null);
var v_12945 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12412_12943,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_12944);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_12944),v_12945);


var G__12946 = cljs.core.next(seq__12395_12937__$1);
var G__12947 = null;
var G__12948 = (0);
var G__12949 = (0);
seq__12395_12922 = G__12946;
chunk__12396_12923 = G__12947;
count__12397_12924 = G__12948;
i__12398_12925 = G__12949;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null, );
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__12417 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12417,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12417,(1),null);
var seq__12420_12950 = cljs.core.seq(node_children);
var chunk__12422_12951 = null;
var count__12423_12952 = (0);
var i__12424_12953 = (0);
while(true){
if((i__12424_12953 < count__12423_12952)){
var child_struct_12954 = chunk__12422_12951.cljs$core$IIndexed$_nth$arity$2(null, i__12424_12953);
if((!((child_struct_12954 == null)))){
if(typeof child_struct_12954 === 'string'){
var text_12956 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_12956),child_struct_12954].join(''));
} else {
var children_12957 = shadow.dom.svg_node(child_struct_12954);
if(cljs.core.seq_QMARK_(children_12957)){
var seq__12441_12958 = cljs.core.seq(children_12957);
var chunk__12443_12959 = null;
var count__12444_12960 = (0);
var i__12445_12961 = (0);
while(true){
if((i__12445_12961 < count__12444_12960)){
var child_12963 = chunk__12443_12959.cljs$core$IIndexed$_nth$arity$2(null, i__12445_12961);
if(cljs.core.truth_(child_12963)){
node.appendChild(child_12963);


var G__12964 = seq__12441_12958;
var G__12965 = chunk__12443_12959;
var G__12966 = count__12444_12960;
var G__12967 = (i__12445_12961 + (1));
seq__12441_12958 = G__12964;
chunk__12443_12959 = G__12965;
count__12444_12960 = G__12966;
i__12445_12961 = G__12967;
continue;
} else {
var G__12969 = seq__12441_12958;
var G__12970 = chunk__12443_12959;
var G__12971 = count__12444_12960;
var G__12972 = (i__12445_12961 + (1));
seq__12441_12958 = G__12969;
chunk__12443_12959 = G__12970;
count__12444_12960 = G__12971;
i__12445_12961 = G__12972;
continue;
}
} else {
var temp__5804__auto___12973 = cljs.core.seq(seq__12441_12958);
if(temp__5804__auto___12973){
var seq__12441_12974__$1 = temp__5804__auto___12973;
if(cljs.core.chunked_seq_QMARK_(seq__12441_12974__$1)){
var c__5525__auto___12975 = cljs.core.chunk_first(seq__12441_12974__$1);
var G__12977 = cljs.core.chunk_rest(seq__12441_12974__$1);
var G__12978 = c__5525__auto___12975;
var G__12979 = cljs.core.count(c__5525__auto___12975);
var G__12980 = (0);
seq__12441_12958 = G__12977;
chunk__12443_12959 = G__12978;
count__12444_12960 = G__12979;
i__12445_12961 = G__12980;
continue;
} else {
var child_12981 = cljs.core.first(seq__12441_12974__$1);
if(cljs.core.truth_(child_12981)){
node.appendChild(child_12981);


var G__12983 = cljs.core.next(seq__12441_12974__$1);
var G__12984 = null;
var G__12985 = (0);
var G__12986 = (0);
seq__12441_12958 = G__12983;
chunk__12443_12959 = G__12984;
count__12444_12960 = G__12985;
i__12445_12961 = G__12986;
continue;
} else {
var G__12987 = cljs.core.next(seq__12441_12974__$1);
var G__12988 = null;
var G__12989 = (0);
var G__12990 = (0);
seq__12441_12958 = G__12987;
chunk__12443_12959 = G__12988;
count__12444_12960 = G__12989;
i__12445_12961 = G__12990;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_12957);
}
}


var G__12992 = seq__12420_12950;
var G__12993 = chunk__12422_12951;
var G__12994 = count__12423_12952;
var G__12995 = (i__12424_12953 + (1));
seq__12420_12950 = G__12992;
chunk__12422_12951 = G__12993;
count__12423_12952 = G__12994;
i__12424_12953 = G__12995;
continue;
} else {
var G__12997 = seq__12420_12950;
var G__12998 = chunk__12422_12951;
var G__12999 = count__12423_12952;
var G__13000 = (i__12424_12953 + (1));
seq__12420_12950 = G__12997;
chunk__12422_12951 = G__12998;
count__12423_12952 = G__12999;
i__12424_12953 = G__13000;
continue;
}
} else {
var temp__5804__auto___13001 = cljs.core.seq(seq__12420_12950);
if(temp__5804__auto___13001){
var seq__12420_13003__$1 = temp__5804__auto___13001;
if(cljs.core.chunked_seq_QMARK_(seq__12420_13003__$1)){
var c__5525__auto___13004 = cljs.core.chunk_first(seq__12420_13003__$1);
var G__13005 = cljs.core.chunk_rest(seq__12420_13003__$1);
var G__13006 = c__5525__auto___13004;
var G__13007 = cljs.core.count(c__5525__auto___13004);
var G__13008 = (0);
seq__12420_12950 = G__13005;
chunk__12422_12951 = G__13006;
count__12423_12952 = G__13007;
i__12424_12953 = G__13008;
continue;
} else {
var child_struct_13009 = cljs.core.first(seq__12420_13003__$1);
if((!((child_struct_13009 == null)))){
if(typeof child_struct_13009 === 'string'){
var text_13010 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_13010),child_struct_13009].join(''));
} else {
var children_13011 = shadow.dom.svg_node(child_struct_13009);
if(cljs.core.seq_QMARK_(children_13011)){
var seq__12450_13012 = cljs.core.seq(children_13011);
var chunk__12452_13013 = null;
var count__12453_13014 = (0);
var i__12454_13015 = (0);
while(true){
if((i__12454_13015 < count__12453_13014)){
var child_13016 = chunk__12452_13013.cljs$core$IIndexed$_nth$arity$2(null, i__12454_13015);
if(cljs.core.truth_(child_13016)){
node.appendChild(child_13016);


var G__13018 = seq__12450_13012;
var G__13019 = chunk__12452_13013;
var G__13020 = count__12453_13014;
var G__13021 = (i__12454_13015 + (1));
seq__12450_13012 = G__13018;
chunk__12452_13013 = G__13019;
count__12453_13014 = G__13020;
i__12454_13015 = G__13021;
continue;
} else {
var G__13022 = seq__12450_13012;
var G__13023 = chunk__12452_13013;
var G__13024 = count__12453_13014;
var G__13025 = (i__12454_13015 + (1));
seq__12450_13012 = G__13022;
chunk__12452_13013 = G__13023;
count__12453_13014 = G__13024;
i__12454_13015 = G__13025;
continue;
}
} else {
var temp__5804__auto___13030__$1 = cljs.core.seq(seq__12450_13012);
if(temp__5804__auto___13030__$1){
var seq__12450_13036__$1 = temp__5804__auto___13030__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12450_13036__$1)){
var c__5525__auto___13038 = cljs.core.chunk_first(seq__12450_13036__$1);
var G__13039 = cljs.core.chunk_rest(seq__12450_13036__$1);
var G__13040 = c__5525__auto___13038;
var G__13041 = cljs.core.count(c__5525__auto___13038);
var G__13042 = (0);
seq__12450_13012 = G__13039;
chunk__12452_13013 = G__13040;
count__12453_13014 = G__13041;
i__12454_13015 = G__13042;
continue;
} else {
var child_13043 = cljs.core.first(seq__12450_13036__$1);
if(cljs.core.truth_(child_13043)){
node.appendChild(child_13043);


var G__13044 = cljs.core.next(seq__12450_13036__$1);
var G__13045 = null;
var G__13046 = (0);
var G__13047 = (0);
seq__12450_13012 = G__13044;
chunk__12452_13013 = G__13045;
count__12453_13014 = G__13046;
i__12454_13015 = G__13047;
continue;
} else {
var G__13048 = cljs.core.next(seq__12450_13036__$1);
var G__13049 = null;
var G__13050 = (0);
var G__13051 = (0);
seq__12450_13012 = G__13048;
chunk__12452_13013 = G__13049;
count__12453_13014 = G__13050;
i__12454_13015 = G__13051;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_13011);
}
}


var G__13052 = cljs.core.next(seq__12420_13003__$1);
var G__13053 = null;
var G__13054 = (0);
var G__13055 = (0);
seq__12420_12950 = G__13052;
chunk__12422_12951 = G__13053;
count__12423_12952 = G__13054;
i__12424_12953 = G__13055;
continue;
} else {
var G__13056 = cljs.core.next(seq__12420_13003__$1);
var G__13057 = null;
var G__13058 = (0);
var G__13059 = (0);
seq__12420_12950 = G__13056;
chunk__12422_12951 = G__13057;
count__12423_12952 = G__13058;
i__12424_12953 = G__13059;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___13065 = arguments.length;
var i__5727__auto___13066 = (0);
while(true){
if((i__5727__auto___13066 < len__5726__auto___13065)){
args__5732__auto__.push((arguments[i__5727__auto___13066]));

var G__13068 = (i__5727__auto___13066 + (1));
i__5727__auto___13066 = G__13068;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq12480){
var G__12481 = cljs.core.first(seq12480);
var seq12480__$1 = cljs.core.next(seq12480);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12481,seq12480__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
