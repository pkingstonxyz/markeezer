goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___21262 = arguments.length;
var i__5727__auto___21263 = (0);
while(true){
if((i__5727__auto___21263 < len__5726__auto___21262)){
args__5732__auto__.push((arguments[i__5727__auto___21263]));

var G__21264 = (i__5727__auto___21263 + (1));
i__5727__auto___21263 = G__21264;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq20774){
var G__20775 = cljs.core.first(seq20774);
var seq20774__$1 = cljs.core.next(seq20774);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20775,seq20774__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__20796 = cljs.core.seq(sources);
var chunk__20797 = null;
var count__20798 = (0);
var i__20799 = (0);
while(true){
if((i__20799 < count__20798)){
var map__20827 = chunk__20797.cljs$core$IIndexed$_nth$arity$2(null, i__20799);
var map__20827__$1 = cljs.core.__destructure_map(map__20827);
var src = map__20827__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20827__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20827__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20827__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20827__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20831){var e_21265 = e20831;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21265);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21265.message)].join('')));
}

var G__21266 = seq__20796;
var G__21267 = chunk__20797;
var G__21268 = count__20798;
var G__21269 = (i__20799 + (1));
seq__20796 = G__21266;
chunk__20797 = G__21267;
count__20798 = G__21268;
i__20799 = G__21269;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20796);
if(temp__5804__auto__){
var seq__20796__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20796__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20796__$1);
var G__21270 = cljs.core.chunk_rest(seq__20796__$1);
var G__21271 = c__5525__auto__;
var G__21272 = cljs.core.count(c__5525__auto__);
var G__21273 = (0);
seq__20796 = G__21270;
chunk__20797 = G__21271;
count__20798 = G__21272;
i__20799 = G__21273;
continue;
} else {
var map__20836 = cljs.core.first(seq__20796__$1);
var map__20836__$1 = cljs.core.__destructure_map(map__20836);
var src = map__20836__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20836__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20836__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20836__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20836__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20841){var e_21274 = e20841;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21274);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21274.message)].join('')));
}

var G__21275 = cljs.core.next(seq__20796__$1);
var G__21276 = null;
var G__21277 = (0);
var G__21278 = (0);
seq__20796 = G__21275;
chunk__20797 = G__21276;
count__20798 = G__21277;
i__20799 = G__21278;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__20860 = cljs.core.seq(js_requires);
var chunk__20861 = null;
var count__20862 = (0);
var i__20863 = (0);
while(true){
if((i__20863 < count__20862)){
var js_ns = chunk__20861.cljs$core$IIndexed$_nth$arity$2(null, i__20863);
var require_str_21279 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21279);


var G__21280 = seq__20860;
var G__21281 = chunk__20861;
var G__21282 = count__20862;
var G__21283 = (i__20863 + (1));
seq__20860 = G__21280;
chunk__20861 = G__21281;
count__20862 = G__21282;
i__20863 = G__21283;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20860);
if(temp__5804__auto__){
var seq__20860__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20860__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20860__$1);
var G__21284 = cljs.core.chunk_rest(seq__20860__$1);
var G__21285 = c__5525__auto__;
var G__21286 = cljs.core.count(c__5525__auto__);
var G__21287 = (0);
seq__20860 = G__21284;
chunk__20861 = G__21285;
count__20862 = G__21286;
i__20863 = G__21287;
continue;
} else {
var js_ns = cljs.core.first(seq__20860__$1);
var require_str_21288 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21288);


var G__21289 = cljs.core.next(seq__20860__$1);
var G__21290 = null;
var G__21291 = (0);
var G__21292 = (0);
seq__20860 = G__21289;
chunk__20861 = G__21290;
count__20862 = G__21291;
i__20863 = G__21292;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__20873){
var map__20874 = p__20873;
var map__20874__$1 = cljs.core.__destructure_map(map__20874);
var msg = map__20874__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20874__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20874__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20878(s__20879){
return (new cljs.core.LazySeq(null,(function (){
var s__20879__$1 = s__20879;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__20879__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__20888 = cljs.core.first(xs__6360__auto__);
var map__20888__$1 = cljs.core.__destructure_map(map__20888);
var src = map__20888__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20888__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20888__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__20879__$1,map__20888,map__20888__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20874,map__20874__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20878_$_iter__20880(s__20881){
return (new cljs.core.LazySeq(null,((function (s__20879__$1,map__20888,map__20888__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20874,map__20874__$1,msg,info,reload_info){
return (function (){
var s__20881__$1 = s__20881;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__20881__$1);
if(temp__5804__auto____$1){
var s__20881__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20881__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__20881__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__20883 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__20882 = (0);
while(true){
if((i__20882 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__20882);
cljs.core.chunk_append(b__20883,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21293 = (i__20882 + (1));
i__20882 = G__21293;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20883),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20878_$_iter__20880(cljs.core.chunk_rest(s__20881__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20883),null);
}
} else {
var warning = cljs.core.first(s__20881__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20878_$_iter__20880(cljs.core.rest(s__20881__$2)));
}
} else {
return null;
}
break;
}
});})(s__20879__$1,map__20888,map__20888__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20874,map__20874__$1,msg,info,reload_info))
,null,null));
});})(s__20879__$1,map__20888,map__20888__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20874,map__20874__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20878(cljs.core.rest(s__20879__$1)));
} else {
var G__21294 = cljs.core.rest(s__20879__$1);
s__20879__$1 = G__21294;
continue;
}
} else {
var G__21295 = cljs.core.rest(s__20879__$1);
s__20879__$1 = G__21295;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__20934_21296 = cljs.core.seq(warnings);
var chunk__20935_21297 = null;
var count__20936_21298 = (0);
var i__20937_21299 = (0);
while(true){
if((i__20937_21299 < count__20936_21298)){
var map__20956_21300 = chunk__20935_21297.cljs$core$IIndexed$_nth$arity$2(null, i__20937_21299);
var map__20956_21301__$1 = cljs.core.__destructure_map(map__20956_21300);
var w_21302 = map__20956_21301__$1;
var msg_21303__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20956_21301__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21304 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20956_21301__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21305 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20956_21301__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21306 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20956_21301__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21306)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21304),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21305),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21303__$1)].join(''));


var G__21307 = seq__20934_21296;
var G__21308 = chunk__20935_21297;
var G__21309 = count__20936_21298;
var G__21310 = (i__20937_21299 + (1));
seq__20934_21296 = G__21307;
chunk__20935_21297 = G__21308;
count__20936_21298 = G__21309;
i__20937_21299 = G__21310;
continue;
} else {
var temp__5804__auto___21311 = cljs.core.seq(seq__20934_21296);
if(temp__5804__auto___21311){
var seq__20934_21312__$1 = temp__5804__auto___21311;
if(cljs.core.chunked_seq_QMARK_(seq__20934_21312__$1)){
var c__5525__auto___21313 = cljs.core.chunk_first(seq__20934_21312__$1);
var G__21314 = cljs.core.chunk_rest(seq__20934_21312__$1);
var G__21315 = c__5525__auto___21313;
var G__21316 = cljs.core.count(c__5525__auto___21313);
var G__21317 = (0);
seq__20934_21296 = G__21314;
chunk__20935_21297 = G__21315;
count__20936_21298 = G__21316;
i__20937_21299 = G__21317;
continue;
} else {
var map__20957_21318 = cljs.core.first(seq__20934_21312__$1);
var map__20957_21319__$1 = cljs.core.__destructure_map(map__20957_21318);
var w_21320 = map__20957_21319__$1;
var msg_21321__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20957_21319__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21322 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20957_21319__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21323 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20957_21319__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21324 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20957_21319__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21324)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21322),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21323),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21321__$1)].join(''));


var G__21325 = cljs.core.next(seq__20934_21312__$1);
var G__21326 = null;
var G__21327 = (0);
var G__21328 = (0);
seq__20934_21296 = G__21325;
chunk__20935_21297 = G__21326;
count__20936_21298 = G__21327;
i__20937_21299 = G__21328;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__20866_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__20866_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5000__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5000__auto____$1){
return new$;
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__20992){
var map__20993 = p__20992;
var map__20993__$1 = cljs.core.__destructure_map(map__20993);
var msg = map__20993__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20993__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20993__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__20994 = cljs.core.seq(updates);
var chunk__20996 = null;
var count__20997 = (0);
var i__20998 = (0);
while(true){
if((i__20998 < count__20997)){
var path = chunk__20996.cljs$core$IIndexed$_nth$arity$2(null, i__20998);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21136_21329 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21140_21330 = null;
var count__21141_21331 = (0);
var i__21142_21332 = (0);
while(true){
if((i__21142_21332 < count__21141_21331)){
var node_21333 = chunk__21140_21330.cljs$core$IIndexed$_nth$arity$2(null, i__21142_21332);
if(cljs.core.not(node_21333.shadow$old)){
var path_match_21334 = shadow.cljs.devtools.client.browser.match_paths(node_21333.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21334)){
var new_link_21335 = (function (){var G__21168 = node_21333.cloneNode(true);
G__21168.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21334),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21168;
})();
(node_21333.shadow$old = true);

(new_link_21335.onload = ((function (seq__21136_21329,chunk__21140_21330,count__21141_21331,i__21142_21332,seq__20994,chunk__20996,count__20997,i__20998,new_link_21335,path_match_21334,node_21333,path,map__20993,map__20993__$1,msg,updates,reload_info){
return (function (e){
var seq__21169_21336 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21171_21337 = null;
var count__21172_21338 = (0);
var i__21173_21339 = (0);
while(true){
if((i__21173_21339 < count__21172_21338)){
var map__21177_21340 = chunk__21171_21337.cljs$core$IIndexed$_nth$arity$2(null, i__21173_21339);
var map__21177_21341__$1 = cljs.core.__destructure_map(map__21177_21340);
var task_21342 = map__21177_21341__$1;
var fn_str_21343 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21177_21341__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21344 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21177_21341__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21345 = goog.getObjectByName(fn_str_21343,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21344)].join(''));

(fn_obj_21345.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21345.cljs$core$IFn$_invoke$arity$2(path,new_link_21335) : fn_obj_21345.call(null, path,new_link_21335));


var G__21346 = seq__21169_21336;
var G__21347 = chunk__21171_21337;
var G__21348 = count__21172_21338;
var G__21349 = (i__21173_21339 + (1));
seq__21169_21336 = G__21346;
chunk__21171_21337 = G__21347;
count__21172_21338 = G__21348;
i__21173_21339 = G__21349;
continue;
} else {
var temp__5804__auto___21350 = cljs.core.seq(seq__21169_21336);
if(temp__5804__auto___21350){
var seq__21169_21351__$1 = temp__5804__auto___21350;
if(cljs.core.chunked_seq_QMARK_(seq__21169_21351__$1)){
var c__5525__auto___21352 = cljs.core.chunk_first(seq__21169_21351__$1);
var G__21353 = cljs.core.chunk_rest(seq__21169_21351__$1);
var G__21354 = c__5525__auto___21352;
var G__21355 = cljs.core.count(c__5525__auto___21352);
var G__21356 = (0);
seq__21169_21336 = G__21353;
chunk__21171_21337 = G__21354;
count__21172_21338 = G__21355;
i__21173_21339 = G__21356;
continue;
} else {
var map__21178_21357 = cljs.core.first(seq__21169_21351__$1);
var map__21178_21358__$1 = cljs.core.__destructure_map(map__21178_21357);
var task_21359 = map__21178_21358__$1;
var fn_str_21360 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21178_21358__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21361 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21178_21358__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21362 = goog.getObjectByName(fn_str_21360,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21361)].join(''));

(fn_obj_21362.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21362.cljs$core$IFn$_invoke$arity$2(path,new_link_21335) : fn_obj_21362.call(null, path,new_link_21335));


var G__21363 = cljs.core.next(seq__21169_21351__$1);
var G__21364 = null;
var G__21365 = (0);
var G__21366 = (0);
seq__21169_21336 = G__21363;
chunk__21171_21337 = G__21364;
count__21172_21338 = G__21365;
i__21173_21339 = G__21366;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21333);
});})(seq__21136_21329,chunk__21140_21330,count__21141_21331,i__21142_21332,seq__20994,chunk__20996,count__20997,i__20998,new_link_21335,path_match_21334,node_21333,path,map__20993,map__20993__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21334], 0));

goog.dom.insertSiblingAfter(new_link_21335,node_21333);


var G__21367 = seq__21136_21329;
var G__21368 = chunk__21140_21330;
var G__21369 = count__21141_21331;
var G__21370 = (i__21142_21332 + (1));
seq__21136_21329 = G__21367;
chunk__21140_21330 = G__21368;
count__21141_21331 = G__21369;
i__21142_21332 = G__21370;
continue;
} else {
var G__21371 = seq__21136_21329;
var G__21372 = chunk__21140_21330;
var G__21373 = count__21141_21331;
var G__21374 = (i__21142_21332 + (1));
seq__21136_21329 = G__21371;
chunk__21140_21330 = G__21372;
count__21141_21331 = G__21373;
i__21142_21332 = G__21374;
continue;
}
} else {
var G__21375 = seq__21136_21329;
var G__21376 = chunk__21140_21330;
var G__21377 = count__21141_21331;
var G__21378 = (i__21142_21332 + (1));
seq__21136_21329 = G__21375;
chunk__21140_21330 = G__21376;
count__21141_21331 = G__21377;
i__21142_21332 = G__21378;
continue;
}
} else {
var temp__5804__auto___21379 = cljs.core.seq(seq__21136_21329);
if(temp__5804__auto___21379){
var seq__21136_21380__$1 = temp__5804__auto___21379;
if(cljs.core.chunked_seq_QMARK_(seq__21136_21380__$1)){
var c__5525__auto___21381 = cljs.core.chunk_first(seq__21136_21380__$1);
var G__21382 = cljs.core.chunk_rest(seq__21136_21380__$1);
var G__21383 = c__5525__auto___21381;
var G__21384 = cljs.core.count(c__5525__auto___21381);
var G__21385 = (0);
seq__21136_21329 = G__21382;
chunk__21140_21330 = G__21383;
count__21141_21331 = G__21384;
i__21142_21332 = G__21385;
continue;
} else {
var node_21386 = cljs.core.first(seq__21136_21380__$1);
if(cljs.core.not(node_21386.shadow$old)){
var path_match_21387 = shadow.cljs.devtools.client.browser.match_paths(node_21386.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21387)){
var new_link_21388 = (function (){var G__21179 = node_21386.cloneNode(true);
G__21179.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21387),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21179;
})();
(node_21386.shadow$old = true);

(new_link_21388.onload = ((function (seq__21136_21329,chunk__21140_21330,count__21141_21331,i__21142_21332,seq__20994,chunk__20996,count__20997,i__20998,new_link_21388,path_match_21387,node_21386,seq__21136_21380__$1,temp__5804__auto___21379,path,map__20993,map__20993__$1,msg,updates,reload_info){
return (function (e){
var seq__21180_21389 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21182_21390 = null;
var count__21183_21391 = (0);
var i__21184_21392 = (0);
while(true){
if((i__21184_21392 < count__21183_21391)){
var map__21188_21393 = chunk__21182_21390.cljs$core$IIndexed$_nth$arity$2(null, i__21184_21392);
var map__21188_21394__$1 = cljs.core.__destructure_map(map__21188_21393);
var task_21395 = map__21188_21394__$1;
var fn_str_21396 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21188_21394__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21397 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21188_21394__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21398 = goog.getObjectByName(fn_str_21396,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21397)].join(''));

(fn_obj_21398.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21398.cljs$core$IFn$_invoke$arity$2(path,new_link_21388) : fn_obj_21398.call(null, path,new_link_21388));


var G__21399 = seq__21180_21389;
var G__21400 = chunk__21182_21390;
var G__21401 = count__21183_21391;
var G__21402 = (i__21184_21392 + (1));
seq__21180_21389 = G__21399;
chunk__21182_21390 = G__21400;
count__21183_21391 = G__21401;
i__21184_21392 = G__21402;
continue;
} else {
var temp__5804__auto___21403__$1 = cljs.core.seq(seq__21180_21389);
if(temp__5804__auto___21403__$1){
var seq__21180_21404__$1 = temp__5804__auto___21403__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21180_21404__$1)){
var c__5525__auto___21405 = cljs.core.chunk_first(seq__21180_21404__$1);
var G__21406 = cljs.core.chunk_rest(seq__21180_21404__$1);
var G__21407 = c__5525__auto___21405;
var G__21408 = cljs.core.count(c__5525__auto___21405);
var G__21409 = (0);
seq__21180_21389 = G__21406;
chunk__21182_21390 = G__21407;
count__21183_21391 = G__21408;
i__21184_21392 = G__21409;
continue;
} else {
var map__21189_21410 = cljs.core.first(seq__21180_21404__$1);
var map__21189_21411__$1 = cljs.core.__destructure_map(map__21189_21410);
var task_21412 = map__21189_21411__$1;
var fn_str_21413 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21189_21411__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21414 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21189_21411__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21415 = goog.getObjectByName(fn_str_21413,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21414)].join(''));

(fn_obj_21415.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21415.cljs$core$IFn$_invoke$arity$2(path,new_link_21388) : fn_obj_21415.call(null, path,new_link_21388));


var G__21416 = cljs.core.next(seq__21180_21404__$1);
var G__21417 = null;
var G__21418 = (0);
var G__21419 = (0);
seq__21180_21389 = G__21416;
chunk__21182_21390 = G__21417;
count__21183_21391 = G__21418;
i__21184_21392 = G__21419;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21386);
});})(seq__21136_21329,chunk__21140_21330,count__21141_21331,i__21142_21332,seq__20994,chunk__20996,count__20997,i__20998,new_link_21388,path_match_21387,node_21386,seq__21136_21380__$1,temp__5804__auto___21379,path,map__20993,map__20993__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21387], 0));

goog.dom.insertSiblingAfter(new_link_21388,node_21386);


var G__21420 = cljs.core.next(seq__21136_21380__$1);
var G__21421 = null;
var G__21422 = (0);
var G__21423 = (0);
seq__21136_21329 = G__21420;
chunk__21140_21330 = G__21421;
count__21141_21331 = G__21422;
i__21142_21332 = G__21423;
continue;
} else {
var G__21424 = cljs.core.next(seq__21136_21380__$1);
var G__21425 = null;
var G__21426 = (0);
var G__21427 = (0);
seq__21136_21329 = G__21424;
chunk__21140_21330 = G__21425;
count__21141_21331 = G__21426;
i__21142_21332 = G__21427;
continue;
}
} else {
var G__21428 = cljs.core.next(seq__21136_21380__$1);
var G__21429 = null;
var G__21430 = (0);
var G__21431 = (0);
seq__21136_21329 = G__21428;
chunk__21140_21330 = G__21429;
count__21141_21331 = G__21430;
i__21142_21332 = G__21431;
continue;
}
}
} else {
}
}
break;
}


var G__21432 = seq__20994;
var G__21433 = chunk__20996;
var G__21434 = count__20997;
var G__21435 = (i__20998 + (1));
seq__20994 = G__21432;
chunk__20996 = G__21433;
count__20997 = G__21434;
i__20998 = G__21435;
continue;
} else {
var G__21436 = seq__20994;
var G__21437 = chunk__20996;
var G__21438 = count__20997;
var G__21439 = (i__20998 + (1));
seq__20994 = G__21436;
chunk__20996 = G__21437;
count__20997 = G__21438;
i__20998 = G__21439;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20994);
if(temp__5804__auto__){
var seq__20994__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20994__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20994__$1);
var G__21440 = cljs.core.chunk_rest(seq__20994__$1);
var G__21441 = c__5525__auto__;
var G__21442 = cljs.core.count(c__5525__auto__);
var G__21443 = (0);
seq__20994 = G__21440;
chunk__20996 = G__21441;
count__20997 = G__21442;
i__20998 = G__21443;
continue;
} else {
var path = cljs.core.first(seq__20994__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21190_21444 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21194_21445 = null;
var count__21195_21446 = (0);
var i__21196_21447 = (0);
while(true){
if((i__21196_21447 < count__21195_21446)){
var node_21448 = chunk__21194_21445.cljs$core$IIndexed$_nth$arity$2(null, i__21196_21447);
if(cljs.core.not(node_21448.shadow$old)){
var path_match_21449 = shadow.cljs.devtools.client.browser.match_paths(node_21448.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21449)){
var new_link_21450 = (function (){var G__21222 = node_21448.cloneNode(true);
G__21222.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21449),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21222;
})();
(node_21448.shadow$old = true);

(new_link_21450.onload = ((function (seq__21190_21444,chunk__21194_21445,count__21195_21446,i__21196_21447,seq__20994,chunk__20996,count__20997,i__20998,new_link_21450,path_match_21449,node_21448,path,seq__20994__$1,temp__5804__auto__,map__20993,map__20993__$1,msg,updates,reload_info){
return (function (e){
var seq__21223_21451 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21225_21452 = null;
var count__21226_21453 = (0);
var i__21227_21454 = (0);
while(true){
if((i__21227_21454 < count__21226_21453)){
var map__21231_21455 = chunk__21225_21452.cljs$core$IIndexed$_nth$arity$2(null, i__21227_21454);
var map__21231_21456__$1 = cljs.core.__destructure_map(map__21231_21455);
var task_21457 = map__21231_21456__$1;
var fn_str_21458 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21231_21456__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21459 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21231_21456__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21460 = goog.getObjectByName(fn_str_21458,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21459)].join(''));

(fn_obj_21460.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21460.cljs$core$IFn$_invoke$arity$2(path,new_link_21450) : fn_obj_21460.call(null, path,new_link_21450));


var G__21461 = seq__21223_21451;
var G__21462 = chunk__21225_21452;
var G__21463 = count__21226_21453;
var G__21464 = (i__21227_21454 + (1));
seq__21223_21451 = G__21461;
chunk__21225_21452 = G__21462;
count__21226_21453 = G__21463;
i__21227_21454 = G__21464;
continue;
} else {
var temp__5804__auto___21465__$1 = cljs.core.seq(seq__21223_21451);
if(temp__5804__auto___21465__$1){
var seq__21223_21466__$1 = temp__5804__auto___21465__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21223_21466__$1)){
var c__5525__auto___21467 = cljs.core.chunk_first(seq__21223_21466__$1);
var G__21468 = cljs.core.chunk_rest(seq__21223_21466__$1);
var G__21469 = c__5525__auto___21467;
var G__21470 = cljs.core.count(c__5525__auto___21467);
var G__21471 = (0);
seq__21223_21451 = G__21468;
chunk__21225_21452 = G__21469;
count__21226_21453 = G__21470;
i__21227_21454 = G__21471;
continue;
} else {
var map__21232_21472 = cljs.core.first(seq__21223_21466__$1);
var map__21232_21473__$1 = cljs.core.__destructure_map(map__21232_21472);
var task_21474 = map__21232_21473__$1;
var fn_str_21475 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21232_21473__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21476 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21232_21473__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21477 = goog.getObjectByName(fn_str_21475,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21476)].join(''));

(fn_obj_21477.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21477.cljs$core$IFn$_invoke$arity$2(path,new_link_21450) : fn_obj_21477.call(null, path,new_link_21450));


var G__21478 = cljs.core.next(seq__21223_21466__$1);
var G__21479 = null;
var G__21480 = (0);
var G__21481 = (0);
seq__21223_21451 = G__21478;
chunk__21225_21452 = G__21479;
count__21226_21453 = G__21480;
i__21227_21454 = G__21481;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21448);
});})(seq__21190_21444,chunk__21194_21445,count__21195_21446,i__21196_21447,seq__20994,chunk__20996,count__20997,i__20998,new_link_21450,path_match_21449,node_21448,path,seq__20994__$1,temp__5804__auto__,map__20993,map__20993__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21449], 0));

goog.dom.insertSiblingAfter(new_link_21450,node_21448);


var G__21482 = seq__21190_21444;
var G__21483 = chunk__21194_21445;
var G__21484 = count__21195_21446;
var G__21485 = (i__21196_21447 + (1));
seq__21190_21444 = G__21482;
chunk__21194_21445 = G__21483;
count__21195_21446 = G__21484;
i__21196_21447 = G__21485;
continue;
} else {
var G__21486 = seq__21190_21444;
var G__21487 = chunk__21194_21445;
var G__21488 = count__21195_21446;
var G__21489 = (i__21196_21447 + (1));
seq__21190_21444 = G__21486;
chunk__21194_21445 = G__21487;
count__21195_21446 = G__21488;
i__21196_21447 = G__21489;
continue;
}
} else {
var G__21490 = seq__21190_21444;
var G__21491 = chunk__21194_21445;
var G__21492 = count__21195_21446;
var G__21493 = (i__21196_21447 + (1));
seq__21190_21444 = G__21490;
chunk__21194_21445 = G__21491;
count__21195_21446 = G__21492;
i__21196_21447 = G__21493;
continue;
}
} else {
var temp__5804__auto___21494__$1 = cljs.core.seq(seq__21190_21444);
if(temp__5804__auto___21494__$1){
var seq__21190_21495__$1 = temp__5804__auto___21494__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21190_21495__$1)){
var c__5525__auto___21496 = cljs.core.chunk_first(seq__21190_21495__$1);
var G__21497 = cljs.core.chunk_rest(seq__21190_21495__$1);
var G__21498 = c__5525__auto___21496;
var G__21499 = cljs.core.count(c__5525__auto___21496);
var G__21500 = (0);
seq__21190_21444 = G__21497;
chunk__21194_21445 = G__21498;
count__21195_21446 = G__21499;
i__21196_21447 = G__21500;
continue;
} else {
var node_21501 = cljs.core.first(seq__21190_21495__$1);
if(cljs.core.not(node_21501.shadow$old)){
var path_match_21502 = shadow.cljs.devtools.client.browser.match_paths(node_21501.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21502)){
var new_link_21503 = (function (){var G__21233 = node_21501.cloneNode(true);
G__21233.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21502),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21233;
})();
(node_21501.shadow$old = true);

(new_link_21503.onload = ((function (seq__21190_21444,chunk__21194_21445,count__21195_21446,i__21196_21447,seq__20994,chunk__20996,count__20997,i__20998,new_link_21503,path_match_21502,node_21501,seq__21190_21495__$1,temp__5804__auto___21494__$1,path,seq__20994__$1,temp__5804__auto__,map__20993,map__20993__$1,msg,updates,reload_info){
return (function (e){
var seq__21234_21504 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21236_21505 = null;
var count__21237_21506 = (0);
var i__21238_21507 = (0);
while(true){
if((i__21238_21507 < count__21237_21506)){
var map__21242_21508 = chunk__21236_21505.cljs$core$IIndexed$_nth$arity$2(null, i__21238_21507);
var map__21242_21509__$1 = cljs.core.__destructure_map(map__21242_21508);
var task_21510 = map__21242_21509__$1;
var fn_str_21511 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21242_21509__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21512 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21242_21509__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21513 = goog.getObjectByName(fn_str_21511,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21512)].join(''));

(fn_obj_21513.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21513.cljs$core$IFn$_invoke$arity$2(path,new_link_21503) : fn_obj_21513.call(null, path,new_link_21503));


var G__21514 = seq__21234_21504;
var G__21515 = chunk__21236_21505;
var G__21516 = count__21237_21506;
var G__21517 = (i__21238_21507 + (1));
seq__21234_21504 = G__21514;
chunk__21236_21505 = G__21515;
count__21237_21506 = G__21516;
i__21238_21507 = G__21517;
continue;
} else {
var temp__5804__auto___21518__$2 = cljs.core.seq(seq__21234_21504);
if(temp__5804__auto___21518__$2){
var seq__21234_21519__$1 = temp__5804__auto___21518__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21234_21519__$1)){
var c__5525__auto___21520 = cljs.core.chunk_first(seq__21234_21519__$1);
var G__21521 = cljs.core.chunk_rest(seq__21234_21519__$1);
var G__21522 = c__5525__auto___21520;
var G__21523 = cljs.core.count(c__5525__auto___21520);
var G__21524 = (0);
seq__21234_21504 = G__21521;
chunk__21236_21505 = G__21522;
count__21237_21506 = G__21523;
i__21238_21507 = G__21524;
continue;
} else {
var map__21243_21525 = cljs.core.first(seq__21234_21519__$1);
var map__21243_21526__$1 = cljs.core.__destructure_map(map__21243_21525);
var task_21527 = map__21243_21526__$1;
var fn_str_21528 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21243_21526__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21529 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21243_21526__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21530 = goog.getObjectByName(fn_str_21528,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21529)].join(''));

(fn_obj_21530.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21530.cljs$core$IFn$_invoke$arity$2(path,new_link_21503) : fn_obj_21530.call(null, path,new_link_21503));


var G__21531 = cljs.core.next(seq__21234_21519__$1);
var G__21532 = null;
var G__21533 = (0);
var G__21534 = (0);
seq__21234_21504 = G__21531;
chunk__21236_21505 = G__21532;
count__21237_21506 = G__21533;
i__21238_21507 = G__21534;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21501);
});})(seq__21190_21444,chunk__21194_21445,count__21195_21446,i__21196_21447,seq__20994,chunk__20996,count__20997,i__20998,new_link_21503,path_match_21502,node_21501,seq__21190_21495__$1,temp__5804__auto___21494__$1,path,seq__20994__$1,temp__5804__auto__,map__20993,map__20993__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21502], 0));

goog.dom.insertSiblingAfter(new_link_21503,node_21501);


var G__21535 = cljs.core.next(seq__21190_21495__$1);
var G__21536 = null;
var G__21537 = (0);
var G__21538 = (0);
seq__21190_21444 = G__21535;
chunk__21194_21445 = G__21536;
count__21195_21446 = G__21537;
i__21196_21447 = G__21538;
continue;
} else {
var G__21539 = cljs.core.next(seq__21190_21495__$1);
var G__21540 = null;
var G__21541 = (0);
var G__21542 = (0);
seq__21190_21444 = G__21539;
chunk__21194_21445 = G__21540;
count__21195_21446 = G__21541;
i__21196_21447 = G__21542;
continue;
}
} else {
var G__21543 = cljs.core.next(seq__21190_21495__$1);
var G__21544 = null;
var G__21545 = (0);
var G__21546 = (0);
seq__21190_21444 = G__21543;
chunk__21194_21445 = G__21544;
count__21195_21446 = G__21545;
i__21196_21447 = G__21546;
continue;
}
}
} else {
}
}
break;
}


var G__21547 = cljs.core.next(seq__20994__$1);
var G__21548 = null;
var G__21549 = (0);
var G__21550 = (0);
seq__20994 = G__21547;
chunk__20996 = G__21548;
count__20997 = G__21549;
i__20998 = G__21550;
continue;
} else {
var G__21551 = cljs.core.next(seq__20994__$1);
var G__21552 = null;
var G__21553 = (0);
var G__21554 = (0);
seq__20994 = G__21551;
chunk__20996 = G__21552;
count__20997 = G__21553;
i__20998 = G__21554;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__21244){
var map__21245 = p__21244;
var map__21245__$1 = cljs.core.__destructure_map(map__21245);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21245__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21246,done,error){
var map__21247 = p__21246;
var map__21247__$1 = cljs.core.__destructure_map(map__21247);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21247__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null, ));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21248,done,error){
var map__21249 = p__21248;
var map__21249__$1 = cljs.core.__destructure_map(map__21249);
var msg = map__21249__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21249__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21249__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21249__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21250){
var map__21251 = p__21250;
var map__21251__$1 = cljs.core.__destructure_map(map__21251);
var src = map__21251__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21251__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21252 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21252) : done.call(null, G__21252));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21253){
var map__21254 = p__21253;
var map__21254__$1 = cljs.core.__destructure_map(map__21254);
var msg__$1 = map__21254__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21254__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null, sources_to_load));
}catch (e21255){var ex = e21255;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null, ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21256){
var map__21257 = p__21256;
var map__21257__$1 = cljs.core.__destructure_map(map__21257);
var env = map__21257__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21257__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21258){
var map__21259 = p__21258;
var map__21259__$1 = cljs.core.__destructure_map(map__21259);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21259__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21259__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__21260){
var map__21261 = p__21260;
var map__21261__$1 = cljs.core.__destructure_map(map__21261);
var svc = map__21261__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21261__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
