goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__19495){
var map__19496 = p__19495;
var map__19496__$1 = cljs.core.__destructure_map(map__19496);
var m = map__19496__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19496__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19496__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19498_19693 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19499_19694 = null;
var count__19500_19695 = (0);
var i__19501_19696 = (0);
while(true){
if((i__19501_19696 < count__19500_19695)){
var f_19703 = chunk__19499_19694.cljs$core$IIndexed$_nth$arity$2(null, i__19501_19696);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19703], 0));


var G__19704 = seq__19498_19693;
var G__19705 = chunk__19499_19694;
var G__19706 = count__19500_19695;
var G__19707 = (i__19501_19696 + (1));
seq__19498_19693 = G__19704;
chunk__19499_19694 = G__19705;
count__19500_19695 = G__19706;
i__19501_19696 = G__19707;
continue;
} else {
var temp__5804__auto___19708 = cljs.core.seq(seq__19498_19693);
if(temp__5804__auto___19708){
var seq__19498_19709__$1 = temp__5804__auto___19708;
if(cljs.core.chunked_seq_QMARK_(seq__19498_19709__$1)){
var c__5525__auto___19710 = cljs.core.chunk_first(seq__19498_19709__$1);
var G__19711 = cljs.core.chunk_rest(seq__19498_19709__$1);
var G__19712 = c__5525__auto___19710;
var G__19713 = cljs.core.count(c__5525__auto___19710);
var G__19714 = (0);
seq__19498_19693 = G__19711;
chunk__19499_19694 = G__19712;
count__19500_19695 = G__19713;
i__19501_19696 = G__19714;
continue;
} else {
var f_19716 = cljs.core.first(seq__19498_19709__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19716], 0));


var G__19717 = cljs.core.next(seq__19498_19709__$1);
var G__19718 = null;
var G__19719 = (0);
var G__19720 = (0);
seq__19498_19693 = G__19717;
chunk__19499_19694 = G__19718;
count__19500_19695 = G__19719;
i__19501_19696 = G__19720;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19722 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_19722], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_19722)))?cljs.core.second(arglists_19722):arglists_19722)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19506_19723 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19507_19724 = null;
var count__19508_19725 = (0);
var i__19509_19726 = (0);
while(true){
if((i__19509_19726 < count__19508_19725)){
var vec__19523_19727 = chunk__19507_19724.cljs$core$IIndexed$_nth$arity$2(null, i__19509_19726);
var name_19728 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19523_19727,(0),null);
var map__19526_19729 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19523_19727,(1),null);
var map__19526_19730__$1 = cljs.core.__destructure_map(map__19526_19729);
var doc_19731 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19526_19730__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19732 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19526_19730__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19728], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19732], 0));

if(cljs.core.truth_(doc_19731)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19731], 0));
} else {
}


var G__19736 = seq__19506_19723;
var G__19737 = chunk__19507_19724;
var G__19738 = count__19508_19725;
var G__19739 = (i__19509_19726 + (1));
seq__19506_19723 = G__19736;
chunk__19507_19724 = G__19737;
count__19508_19725 = G__19738;
i__19509_19726 = G__19739;
continue;
} else {
var temp__5804__auto___19740 = cljs.core.seq(seq__19506_19723);
if(temp__5804__auto___19740){
var seq__19506_19741__$1 = temp__5804__auto___19740;
if(cljs.core.chunked_seq_QMARK_(seq__19506_19741__$1)){
var c__5525__auto___19742 = cljs.core.chunk_first(seq__19506_19741__$1);
var G__19743 = cljs.core.chunk_rest(seq__19506_19741__$1);
var G__19744 = c__5525__auto___19742;
var G__19745 = cljs.core.count(c__5525__auto___19742);
var G__19746 = (0);
seq__19506_19723 = G__19743;
chunk__19507_19724 = G__19744;
count__19508_19725 = G__19745;
i__19509_19726 = G__19746;
continue;
} else {
var vec__19527_19747 = cljs.core.first(seq__19506_19741__$1);
var name_19748 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19527_19747,(0),null);
var map__19530_19749 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19527_19747,(1),null);
var map__19530_19750__$1 = cljs.core.__destructure_map(map__19530_19749);
var doc_19751 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19530_19750__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19752 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19530_19750__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19748], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19752], 0));

if(cljs.core.truth_(doc_19751)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19751], 0));
} else {
}


var G__19757 = cljs.core.next(seq__19506_19741__$1);
var G__19758 = null;
var G__19759 = (0);
var G__19760 = (0);
seq__19506_19723 = G__19757;
chunk__19507_19724 = G__19758;
count__19508_19725 = G__19759;
i__19509_19726 = G__19760;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__19533 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__19534 = null;
var count__19535 = (0);
var i__19536 = (0);
while(true){
if((i__19536 < count__19535)){
var role = chunk__19534.cljs$core$IIndexed$_nth$arity$2(null, i__19536);
var temp__5804__auto___19761__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19761__$1)){
var spec_19762 = temp__5804__auto___19761__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19762)], 0));
} else {
}


var G__19764 = seq__19533;
var G__19765 = chunk__19534;
var G__19766 = count__19535;
var G__19767 = (i__19536 + (1));
seq__19533 = G__19764;
chunk__19534 = G__19765;
count__19535 = G__19766;
i__19536 = G__19767;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__19533);
if(temp__5804__auto____$1){
var seq__19533__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__19533__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__19533__$1);
var G__19769 = cljs.core.chunk_rest(seq__19533__$1);
var G__19770 = c__5525__auto__;
var G__19771 = cljs.core.count(c__5525__auto__);
var G__19772 = (0);
seq__19533 = G__19769;
chunk__19534 = G__19770;
count__19535 = G__19771;
i__19536 = G__19772;
continue;
} else {
var role = cljs.core.first(seq__19533__$1);
var temp__5804__auto___19773__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19773__$2)){
var spec_19774 = temp__5804__auto___19773__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19774)], 0));
} else {
}


var G__19776 = cljs.core.next(seq__19533__$1);
var G__19777 = null;
var G__19778 = (0);
var G__19779 = (0);
seq__19533 = G__19776;
chunk__19534 = G__19777;
count__19535 = G__19778;
i__19536 = G__19779;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__19543 = datafied_throwable;
var map__19543__$1 = cljs.core.__destructure_map(map__19543);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19543__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19543__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19543__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__19544 = cljs.core.last(via);
var map__19544__$1 = cljs.core.__destructure_map(map__19544);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19544__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19544__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19544__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__19545 = data;
var map__19545__$1 = cljs.core.__destructure_map(map__19545);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19545__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19545__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19545__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__19546 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__19546__$1 = cljs.core.__destructure_map(map__19546);
var top_data = map__19546__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19546__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__19548 = phase;
var G__19548__$1 = (((G__19548 instanceof cljs.core.Keyword))?G__19548.fqn:null);
switch (G__19548__$1) {
case "read-source":
var map__19549 = data;
var map__19549__$1 = cljs.core.__destructure_map(map__19549);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19549__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19549__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__19550 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__19550__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19550,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19550);
var G__19550__$2 = (cljs.core.truth_((function (){var fexpr__19551 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19551.cljs$core$IFn$_invoke$arity$1 ? fexpr__19551.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19551.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19550__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19550__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19550__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19550__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__19552 = top_data;
var G__19552__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19552,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19552);
var G__19552__$2 = (cljs.core.truth_((function (){var fexpr__19553 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19553.cljs$core$IFn$_invoke$arity$1 ? fexpr__19553.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19553.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19552__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19552__$1);
var G__19552__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19552__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19552__$2);
var G__19552__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19552__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19552__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19552__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19552__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__19554 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19554,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19554,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19554,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19554,(3),null);
var G__19557 = top_data;
var G__19557__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19557,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__19557);
var G__19557__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19557__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__19557__$1);
var G__19557__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19557__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__19557__$2);
var G__19557__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19557__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19557__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19557__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19557__$4;
}

break;
case "execution":
var vec__19560 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19560,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19560,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19560,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19560,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__19542_SHARP_){
var or__5002__auto__ = (p1__19542_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__19563 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19563.cljs$core$IFn$_invoke$arity$1 ? fexpr__19563.cljs$core$IFn$_invoke$arity$1(p1__19542_SHARP_) : fexpr__19563.call(null, p1__19542_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__19566 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__19566__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19566,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__19566);
var G__19566__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19566__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19566__$1);
var G__19566__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19566__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__19566__$2);
var G__19566__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19566__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__19566__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19566__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19566__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19548__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__19583){
var map__19584 = p__19583;
var map__19584__$1 = cljs.core.__destructure_map(map__19584);
var triage_data = map__19584__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19584__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19584__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19584__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19584__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19584__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19584__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19584__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19584__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__19592 = phase;
var G__19592__$1 = (((G__19592 instanceof cljs.core.Keyword))?G__19592.fqn:null);
switch (G__19592__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null, "Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__19593 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__19594 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19595 = loc;
var G__19596 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19598_19833 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19599_19834 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19600_19835 = true;
var _STAR_print_fn_STAR__temp_val__19601_19836 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19600_19835);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19601_19836);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19574_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19574_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19599_19834);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19598_19833);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null, "%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19593,G__19594,G__19595,G__19596) : format.call(null, G__19593,G__19594,G__19595,G__19596));

break;
case "macroexpansion":
var G__19614 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__19615 = cause_type;
var G__19616 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19617 = loc;
var G__19618 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19614,G__19615,G__19616,G__19617,G__19618) : format.call(null, G__19614,G__19615,G__19616,G__19617,G__19618));

break;
case "compile-syntax-check":
var G__19623 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__19624 = cause_type;
var G__19625 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19626 = loc;
var G__19627 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19623,G__19624,G__19625,G__19626,G__19627) : format.call(null, G__19623,G__19624,G__19625,G__19626,G__19627));

break;
case "compilation":
var G__19629 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__19630 = cause_type;
var G__19631 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19632 = loc;
var G__19633 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19629,G__19630,G__19631,G__19632,G__19633) : format.call(null, G__19629,G__19630,G__19631,G__19632,G__19633));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__19634 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__19635 = symbol;
var G__19636 = loc;
var G__19637 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19638_19869 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19639_19870 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19640_19871 = true;
var _STAR_print_fn_STAR__temp_val__19641_19872 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19640_19871);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19641_19872);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19578_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19578_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19639_19870);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19638_19869);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19634,G__19635,G__19636,G__19637) : format.call(null, G__19634,G__19635,G__19636,G__19637));
} else {
var G__19646 = "Execution error%s at %s(%s).\n%s\n";
var G__19647 = cause_type;
var G__19648 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19649 = loc;
var G__19650 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19646,G__19647,G__19648,G__19649,G__19650) : format.call(null, G__19646,G__19647,G__19648,G__19649,G__19650));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19592__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
