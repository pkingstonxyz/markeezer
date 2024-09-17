goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__14660){
var map__14661 = p__14660;
var map__14661__$1 = cljs.core.__destructure_map(map__14661);
var runtime = map__14661__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14661__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_15067 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_15067)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__14670 = runtime;
var G__14671 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_15067);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__14670,G__14671) : shadow.remote.runtime.shared.process.call(null, G__14670,G__14671));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__14675,res){
var map__14676 = p__14675;
var map__14676__$1 = cljs.core.__destructure_map(map__14676);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14676__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14676__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__14715 = res;
var G__14715__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14715,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__14715);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14715__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__14715__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__14721 = arguments.length;
switch (G__14721) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__14723,msg,handlers,timeout_after_ms){
var map__14724 = p__14723;
var map__14724__$1 = cljs.core.__destructure_map(map__14724);
var runtime = map__14724__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14724__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___15090 = arguments.length;
var i__5727__auto___15091 = (0);
while(true){
if((i__5727__auto___15091 < len__5726__auto___15090)){
args__5732__auto__.push((arguments[i__5727__auto___15091]));

var G__15092 = (i__5727__auto___15091 + (1));
i__5727__auto___15091 = G__15092;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__14745,ev,args){
var map__14746 = p__14745;
var map__14746__$1 = cljs.core.__destructure_map(map__14746);
var runtime = map__14746__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14746__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__14748 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__14751 = null;
var count__14752 = (0);
var i__14753 = (0);
while(true){
if((i__14753 < count__14752)){
var ext = chunk__14751.cljs$core$IIndexed$_nth$arity$2(null, i__14753);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__15097 = seq__14748;
var G__15098 = chunk__14751;
var G__15099 = count__14752;
var G__15100 = (i__14753 + (1));
seq__14748 = G__15097;
chunk__14751 = G__15098;
count__14752 = G__15099;
i__14753 = G__15100;
continue;
} else {
var G__15103 = seq__14748;
var G__15104 = chunk__14751;
var G__15105 = count__14752;
var G__15106 = (i__14753 + (1));
seq__14748 = G__15103;
chunk__14751 = G__15104;
count__14752 = G__15105;
i__14753 = G__15106;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14748);
if(temp__5804__auto__){
var seq__14748__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14748__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14748__$1);
var G__15109 = cljs.core.chunk_rest(seq__14748__$1);
var G__15110 = c__5525__auto__;
var G__15111 = cljs.core.count(c__5525__auto__);
var G__15112 = (0);
seq__14748 = G__15109;
chunk__14751 = G__15110;
count__14752 = G__15111;
i__14753 = G__15112;
continue;
} else {
var ext = cljs.core.first(seq__14748__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__15113 = cljs.core.next(seq__14748__$1);
var G__15114 = null;
var G__15115 = (0);
var G__15116 = (0);
seq__14748 = G__15113;
chunk__14751 = G__15114;
count__14752 = G__15115;
i__14753 = G__15116;
continue;
} else {
var G__15117 = cljs.core.next(seq__14748__$1);
var G__15118 = null;
var G__15119 = (0);
var G__15120 = (0);
seq__14748 = G__15117;
chunk__14751 = G__15118;
count__14752 = G__15119;
i__14753 = G__15120;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq14733){
var G__14734 = cljs.core.first(seq14733);
var seq14733__$1 = cljs.core.next(seq14733);
var G__14735 = cljs.core.first(seq14733__$1);
var seq14733__$2 = cljs.core.next(seq14733__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14734,G__14735,seq14733__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__14772,p__14773){
var map__14774 = p__14772;
var map__14774__$1 = cljs.core.__destructure_map(map__14774);
var runtime = map__14774__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14774__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__14775 = p__14773;
var map__14775__$1 = cljs.core.__destructure_map(map__14775);
var msg = map__14775__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14775__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__14777 = cljs.core.deref(state_ref);
var map__14777__$1 = cljs.core.__destructure_map(map__14777);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14777__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14777__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__14792,msg){
var map__14793 = p__14792;
var map__14793__$1 = cljs.core.__destructure_map(map__14793);
var runtime = map__14793__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14793__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__14815,key,p__14816){
var map__14820 = p__14815;
var map__14820__$1 = cljs.core.__destructure_map(map__14820);
var state = map__14820__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14820__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__14821 = p__14816;
var map__14821__$1 = cljs.core.__destructure_map(map__14821);
var spec = map__14821__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14821__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14821__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__14841,key,spec){
var map__14843 = p__14841;
var map__14843__$1 = cljs.core.__destructure_map(map__14843);
var runtime = map__14843__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14843__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5808__auto___15166 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5808__auto___15166 == null)){
} else {
var on_welcome_15167 = temp__5808__auto___15166;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_15167.cljs$core$IFn$_invoke$arity$0 ? on_welcome_15167.cljs$core$IFn$_invoke$arity$0() : on_welcome_15167.call(null, ));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__14845_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__14845_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__14846_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__14846_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__14847_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__14847_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__14848_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__14848_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__14850_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__14850_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__14876,key){
var map__14877 = p__14876;
var map__14877__$1 = cljs.core.__destructure_map(map__14877);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14877__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__14905,msg){
var map__14906 = p__14905;
var map__14906__$1 = cljs.core.__destructure_map(map__14906);
var runtime = map__14906__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14906__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__14912,p__14913){
var map__14914 = p__14912;
var map__14914__$1 = cljs.core.__destructure_map(map__14914);
var runtime = map__14914__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14914__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__14915 = p__14913;
var map__14915__$1 = cljs.core.__destructure_map(map__14915);
var msg = map__14915__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14915__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14915__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null, msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__14946 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__14948 = null;
var count__14949 = (0);
var i__14950 = (0);
while(true){
if((i__14950 < count__14949)){
var map__14968 = chunk__14948.cljs$core$IIndexed$_nth$arity$2(null, i__14950);
var map__14968__$1 = cljs.core.__destructure_map(map__14968);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14968__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__15212 = seq__14946;
var G__15213 = chunk__14948;
var G__15214 = count__14949;
var G__15215 = (i__14950 + (1));
seq__14946 = G__15212;
chunk__14948 = G__15213;
count__14949 = G__15214;
i__14950 = G__15215;
continue;
} else {
var G__15216 = seq__14946;
var G__15217 = chunk__14948;
var G__15218 = count__14949;
var G__15219 = (i__14950 + (1));
seq__14946 = G__15216;
chunk__14948 = G__15217;
count__14949 = G__15218;
i__14950 = G__15219;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14946);
if(temp__5804__auto__){
var seq__14946__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14946__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14946__$1);
var G__15220 = cljs.core.chunk_rest(seq__14946__$1);
var G__15221 = c__5525__auto__;
var G__15222 = cljs.core.count(c__5525__auto__);
var G__15223 = (0);
seq__14946 = G__15220;
chunk__14948 = G__15221;
count__14949 = G__15222;
i__14950 = G__15223;
continue;
} else {
var map__14974 = cljs.core.first(seq__14946__$1);
var map__14974__$1 = cljs.core.__destructure_map(map__14974);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14974__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__15224 = cljs.core.next(seq__14946__$1);
var G__15225 = null;
var G__15226 = (0);
var G__15227 = (0);
seq__14946 = G__15224;
chunk__14948 = G__15225;
count__14949 = G__15226;
i__14950 = G__15227;
continue;
} else {
var G__15228 = cljs.core.next(seq__14946__$1);
var G__15229 = null;
var G__15230 = (0);
var G__15231 = (0);
seq__14946 = G__15228;
chunk__14948 = G__15229;
count__14949 = G__15230;
i__14950 = G__15231;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
