goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14557 = (function (f,blockable,meta14558){
this.f = f;
this.blockable = blockable;
this.meta14558 = meta14558;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14557.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14559,meta14558__$1){
var self__ = this;
var _14559__$1 = this;
return (new cljs.core.async.t_cljs$core$async14557(self__.f,self__.blockable,meta14558__$1));
}));

(cljs.core.async.t_cljs$core$async14557.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14559){
var self__ = this;
var _14559__$1 = this;
return self__.meta14558;
}));

(cljs.core.async.t_cljs$core$async14557.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14557.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14557.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async14557.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async14557.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14558","meta14558",1508680548,null)], null);
}));

(cljs.core.async.t_cljs$core$async14557.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14557.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14557");

(cljs.core.async.t_cljs$core$async14557.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14557");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14557.
 */
cljs.core.async.__GT_t_cljs$core$async14557 = (function cljs$core$async$__GT_t_cljs$core$async14557(f,blockable,meta14558){
return (new cljs.core.async.t_cljs$core$async14557(f,blockable,meta14558));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14556 = arguments.length;
switch (G__14556) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async14557(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__14566 = arguments.length;
switch (G__14566) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__14569 = arguments.length;
switch (G__14569) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__14605 = arguments.length;
switch (G__14605) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_17645 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17645) : fn1.call(null, val_17645));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17645) : fn1.call(null, val_17645));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__14608 = arguments.length;
switch (G__14608) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___17648 = n;
var x_17650 = (0);
while(true){
if((x_17650 < n__5593__auto___17648)){
(a[x_17650] = x_17650);

var G__17651 = (x_17650 + (1));
x_17650 = G__17651;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14613 = (function (flag,meta14614){
this.flag = flag;
this.meta14614 = meta14614;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14613.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14615,meta14614__$1){
var self__ = this;
var _14615__$1 = this;
return (new cljs.core.async.t_cljs$core$async14613(self__.flag,meta14614__$1));
}));

(cljs.core.async.t_cljs$core$async14613.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14615){
var self__ = this;
var _14615__$1 = this;
return self__.meta14614;
}));

(cljs.core.async.t_cljs$core$async14613.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14613.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14613.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14613.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async14613.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14614","meta14614",-2121923821,null)], null);
}));

(cljs.core.async.t_cljs$core$async14613.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14613.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14613");

(cljs.core.async.t_cljs$core$async14613.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14613");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14613.
 */
cljs.core.async.__GT_t_cljs$core$async14613 = (function cljs$core$async$__GT_t_cljs$core$async14613(flag,meta14614){
return (new cljs.core.async.t_cljs$core$async14613(flag,meta14614));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async14613(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14626 = (function (flag,cb,meta14627){
this.flag = flag;
this.cb = cb;
this.meta14627 = meta14627;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14626.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14628,meta14627__$1){
var self__ = this;
var _14628__$1 = this;
return (new cljs.core.async.t_cljs$core$async14626(self__.flag,self__.cb,meta14627__$1));
}));

(cljs.core.async.t_cljs$core$async14626.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14628){
var self__ = this;
var _14628__$1 = this;
return self__.meta14627;
}));

(cljs.core.async.t_cljs$core$async14626.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14626.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14626.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14626.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async14626.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14627","meta14627",1301690498,null)], null);
}));

(cljs.core.async.t_cljs$core$async14626.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14626.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14626");

(cljs.core.async.t_cljs$core$async14626.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14626");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14626.
 */
cljs.core.async.__GT_t_cljs$core$async14626 = (function cljs$core$async$__GT_t_cljs$core$async14626(flag,cb,meta14627){
return (new cljs.core.async.t_cljs$core$async14626(flag,cb,meta14627));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async14626(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null, (0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null, (1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14629_SHARP_){
var G__14631 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14629_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14631) : fret.call(null, G__14631));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14630_SHARP_){
var G__14632 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14630_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14632) : fret.call(null, G__14632));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17660 = (i + (1));
i = G__17660;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null, );
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null, );
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17672 = arguments.length;
var i__5727__auto___17673 = (0);
while(true){
if((i__5727__auto___17673 < len__5726__auto___17672)){
args__5732__auto__.push((arguments[i__5727__auto___17673]));

var G__17674 = (i__5727__auto___17673 + (1));
i__5727__auto___17673 = G__17674;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14635){
var map__14636 = p__14635;
var map__14636__$1 = cljs.core.__destructure_map(map__14636);
var opts = map__14636__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14633){
var G__14634 = cljs.core.first(seq14633);
var seq14633__$1 = cljs.core.next(seq14633);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14634,seq14633__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__14638 = arguments.length;
switch (G__14638) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14486__auto___17681 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14487__auto__ = (function (){var switch__14293__auto__ = (function (state_14708){
var state_val_14709 = (state_14708[(1)]);
if((state_val_14709 === (7))){
var inst_14702 = (state_14708[(2)]);
var state_14708__$1 = state_14708;
var statearr_14713_17682 = state_14708__$1;
(statearr_14713_17682[(2)] = inst_14702);

(statearr_14713_17682[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14709 === (1))){
var state_14708__$1 = state_14708;
var statearr_14714_17683 = state_14708__$1;
(statearr_14714_17683[(2)] = null);

(statearr_14714_17683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14709 === (4))){
var inst_14685 = (state_14708[(7)]);
var inst_14685__$1 = (state_14708[(2)]);
var inst_14686 = (inst_14685__$1 == null);
var state_14708__$1 = (function (){var statearr_14716 = state_14708;
(statearr_14716[(7)] = inst_14685__$1);

return statearr_14716;
})();
if(cljs.core.truth_(inst_14686)){
var statearr_14717_17693 = state_14708__$1;
(statearr_14717_17693[(1)] = (5));

} else {
var statearr_14718_17694 = state_14708__$1;
(statearr_14718_17694[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14709 === (13))){
var state_14708__$1 = state_14708;
var statearr_14719_17695 = state_14708__$1;
(statearr_14719_17695[(2)] = null);

(statearr_14719_17695[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14709 === (6))){
var inst_14685 = (state_14708[(7)]);
var state_14708__$1 = state_14708;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14708__$1,(11),to,inst_14685);
} else {
if((state_val_14709 === (3))){
var inst_14704 = (state_14708[(2)]);
var state_14708__$1 = state_14708;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14708__$1,inst_14704);
} else {
if((state_val_14709 === (12))){
var state_14708__$1 = state_14708;
var statearr_14722_17700 = state_14708__$1;
(statearr_14722_17700[(2)] = null);

(statearr_14722_17700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14709 === (2))){
var state_14708__$1 = state_14708;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14708__$1,(4),from);
} else {
if((state_val_14709 === (11))){
var inst_14695 = (state_14708[(2)]);
var state_14708__$1 = state_14708;
if(cljs.core.truth_(inst_14695)){
var statearr_14725_17708 = state_14708__$1;
(statearr_14725_17708[(1)] = (12));

} else {
var statearr_14726_17709 = state_14708__$1;
(statearr_14726_17709[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14709 === (9))){
var state_14708__$1 = state_14708;
var statearr_14727_17711 = state_14708__$1;
(statearr_14727_17711[(2)] = null);

(statearr_14727_17711[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14709 === (5))){
var state_14708__$1 = state_14708;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14728_17723 = state_14708__$1;
(statearr_14728_17723[(1)] = (8));

} else {
var statearr_14729_17725 = state_14708__$1;
(statearr_14729_17725[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14709 === (14))){
var inst_14700 = (state_14708[(2)]);
var state_14708__$1 = state_14708;
var statearr_14730_17731 = state_14708__$1;
(statearr_14730_17731[(2)] = inst_14700);

(statearr_14730_17731[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14709 === (10))){
var inst_14692 = (state_14708[(2)]);
var state_14708__$1 = state_14708;
var statearr_14731_17738 = state_14708__$1;
(statearr_14731_17738[(2)] = inst_14692);

(statearr_14731_17738[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14709 === (8))){
var inst_14689 = cljs.core.async.close_BANG_(to);
var state_14708__$1 = state_14708;
var statearr_14732_17742 = state_14708__$1;
(statearr_14732_17742[(2)] = inst_14689);

(statearr_14732_17742[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14294__auto__ = null;
var cljs$core$async$state_machine__14294__auto____0 = (function (){
var statearr_14736 = [null,null,null,null,null,null,null,null];
(statearr_14736[(0)] = cljs$core$async$state_machine__14294__auto__);

(statearr_14736[(1)] = (1));

return statearr_14736;
});
var cljs$core$async$state_machine__14294__auto____1 = (function (state_14708){
while(true){
var ret_value__14295__auto__ = (function (){try{while(true){
var result__14296__auto__ = switch__14293__auto__(state_14708);
if(cljs.core.keyword_identical_QMARK_(result__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14296__auto__;
}
break;
}
}catch (e14737){var ex__14297__auto__ = e14737;
var statearr_14738_17754 = state_14708;
(statearr_14738_17754[(2)] = ex__14297__auto__);


if(cljs.core.seq((state_14708[(4)]))){
var statearr_14740_17758 = state_14708;
(statearr_14740_17758[(1)] = cljs.core.first((state_14708[(4)])));

} else {
throw ex__14297__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17760 = state_14708;
state_14708 = G__17760;
continue;
} else {
return ret_value__14295__auto__;
}
break;
}
});
cljs$core$async$state_machine__14294__auto__ = function(state_14708){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14294__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14294__auto____1.call(this,state_14708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14294__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14294__auto____0;
cljs$core$async$state_machine__14294__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14294__auto____1;
return cljs$core$async$state_machine__14294__auto__;
})()
})();
var state__14488__auto__ = (function (){var statearr_14744 = f__14487__auto__();
(statearr_14744[(6)] = c__14486__auto___17681);

return statearr_14744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14488__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__14756){
var vec__14757 = p__14756;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14757,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14757,(1),null);
var job = vec__14757;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14486__auto___17762 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14487__auto__ = (function (){var switch__14293__auto__ = (function (state_14765){
var state_val_14766 = (state_14765[(1)]);
if((state_val_14766 === (1))){
var state_14765__$1 = state_14765;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14765__$1,(2),res,v);
} else {
if((state_val_14766 === (2))){
var inst_14762 = (state_14765[(2)]);
var inst_14763 = cljs.core.async.close_BANG_(res);
var state_14765__$1 = (function (){var statearr_14771 = state_14765;
(statearr_14771[(7)] = inst_14762);

return statearr_14771;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14765__$1,inst_14763);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14294__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14294__auto____0 = (function (){
var statearr_14776 = [null,null,null,null,null,null,null,null];
(statearr_14776[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14294__auto__);

(statearr_14776[(1)] = (1));

return statearr_14776;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14294__auto____1 = (function (state_14765){
while(true){
var ret_value__14295__auto__ = (function (){try{while(true){
var result__14296__auto__ = switch__14293__auto__(state_14765);
if(cljs.core.keyword_identical_QMARK_(result__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14296__auto__;
}
break;
}
}catch (e14778){var ex__14297__auto__ = e14778;
var statearr_14779_17771 = state_14765;
(statearr_14779_17771[(2)] = ex__14297__auto__);


if(cljs.core.seq((state_14765[(4)]))){
var statearr_14780_17772 = state_14765;
(statearr_14780_17772[(1)] = cljs.core.first((state_14765[(4)])));

} else {
throw ex__14297__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17773 = state_14765;
state_14765 = G__17773;
continue;
} else {
return ret_value__14295__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14294__auto__ = function(state_14765){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14294__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14294__auto____1.call(this,state_14765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14294__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14294__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14294__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14294__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14294__auto__;
})()
})();
var state__14488__auto__ = (function (){var statearr_14783 = f__14487__auto__();
(statearr_14783[(6)] = c__14486__auto___17762);

return statearr_14783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14488__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__14786){
var vec__14787 = p__14786;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14787,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14787,(1),null);
var job = vec__14787;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null, v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___17778 = n;
var __17779 = (0);
while(true){
if((__17779 < n__5593__auto___17778)){
var G__14796_17780 = type;
var G__14796_17782__$1 = (((G__14796_17780 instanceof cljs.core.Keyword))?G__14796_17780.fqn:null);
switch (G__14796_17782__$1) {
case "compute":
var c__14486__auto___17786 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17779,c__14486__auto___17786,G__14796_17780,G__14796_17782__$1,n__5593__auto___17778,jobs,results,process__$1,async){
return (function (){
var f__14487__auto__ = (function (){var switch__14293__auto__ = ((function (__17779,c__14486__auto___17786,G__14796_17780,G__14796_17782__$1,n__5593__auto___17778,jobs,results,process__$1,async){
return (function (state_14812){
var state_val_14813 = (state_14812[(1)]);
if((state_val_14813 === (1))){
var state_14812__$1 = state_14812;
var statearr_14814_17792 = state_14812__$1;
(statearr_14814_17792[(2)] = null);

(statearr_14814_17792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14813 === (2))){
var state_14812__$1 = state_14812;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14812__$1,(4),jobs);
} else {
if((state_val_14813 === (3))){
var inst_14809 = (state_14812[(2)]);
var state_14812__$1 = state_14812;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14812__$1,inst_14809);
} else {
if((state_val_14813 === (4))){
var inst_14800 = (state_14812[(2)]);
var inst_14802 = process__$1(inst_14800);
var state_14812__$1 = state_14812;
if(cljs.core.truth_(inst_14802)){
var statearr_14825_17797 = state_14812__$1;
(statearr_14825_17797[(1)] = (5));

} else {
var statearr_14826_17799 = state_14812__$1;
(statearr_14826_17799[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14813 === (5))){
var state_14812__$1 = state_14812;
var statearr_14828_17800 = state_14812__$1;
(statearr_14828_17800[(2)] = null);

(statearr_14828_17800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14813 === (6))){
var state_14812__$1 = state_14812;
var statearr_14829_17801 = state_14812__$1;
(statearr_14829_17801[(2)] = null);

(statearr_14829_17801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14813 === (7))){
var inst_14807 = (state_14812[(2)]);
var state_14812__$1 = state_14812;
var statearr_14831_17802 = state_14812__$1;
(statearr_14831_17802[(2)] = inst_14807);

(statearr_14831_17802[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__17779,c__14486__auto___17786,G__14796_17780,G__14796_17782__$1,n__5593__auto___17778,jobs,results,process__$1,async))
;
return ((function (__17779,switch__14293__auto__,c__14486__auto___17786,G__14796_17780,G__14796_17782__$1,n__5593__auto___17778,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14294__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14294__auto____0 = (function (){
var statearr_14834 = [null,null,null,null,null,null,null];
(statearr_14834[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14294__auto__);

(statearr_14834[(1)] = (1));

return statearr_14834;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14294__auto____1 = (function (state_14812){
while(true){
var ret_value__14295__auto__ = (function (){try{while(true){
var result__14296__auto__ = switch__14293__auto__(state_14812);
if(cljs.core.keyword_identical_QMARK_(result__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14296__auto__;
}
break;
}
}catch (e14838){var ex__14297__auto__ = e14838;
var statearr_14839_17806 = state_14812;
(statearr_14839_17806[(2)] = ex__14297__auto__);


if(cljs.core.seq((state_14812[(4)]))){
var statearr_14842_17807 = state_14812;
(statearr_14842_17807[(1)] = cljs.core.first((state_14812[(4)])));

} else {
throw ex__14297__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17809 = state_14812;
state_14812 = G__17809;
continue;
} else {
return ret_value__14295__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14294__auto__ = function(state_14812){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14294__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14294__auto____1.call(this,state_14812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14294__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14294__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14294__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14294__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14294__auto__;
})()
;})(__17779,switch__14293__auto__,c__14486__auto___17786,G__14796_17780,G__14796_17782__$1,n__5593__auto___17778,jobs,results,process__$1,async))
})();
var state__14488__auto__ = (function (){var statearr_14844 = f__14487__auto__();
(statearr_14844[(6)] = c__14486__auto___17786);

return statearr_14844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14488__auto__);
});})(__17779,c__14486__auto___17786,G__14796_17780,G__14796_17782__$1,n__5593__auto___17778,jobs,results,process__$1,async))
);


break;
case "async":
var c__14486__auto___17812 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17779,c__14486__auto___17812,G__14796_17780,G__14796_17782__$1,n__5593__auto___17778,jobs,results,process__$1,async){
return (function (){
var f__14487__auto__ = (function (){var switch__14293__auto__ = ((function (__17779,c__14486__auto___17812,G__14796_17780,G__14796_17782__$1,n__5593__auto___17778,jobs,results,process__$1,async){
return (function (state_14867){
var state_val_14868 = (state_14867[(1)]);
if((state_val_14868 === (1))){
var state_14867__$1 = state_14867;
var statearr_14874_17813 = state_14867__$1;
(statearr_14874_17813[(2)] = null);

(statearr_14874_17813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14868 === (2))){
var state_14867__$1 = state_14867;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14867__$1,(4),jobs);
} else {
if((state_val_14868 === (3))){
var inst_14865 = (state_14867[(2)]);
var state_14867__$1 = state_14867;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14867__$1,inst_14865);
} else {
if((state_val_14868 === (4))){
var inst_14855 = (state_14867[(2)]);
var inst_14856 = async(inst_14855);
var state_14867__$1 = state_14867;
if(cljs.core.truth_(inst_14856)){
var statearr_14882_17814 = state_14867__$1;
(statearr_14882_17814[(1)] = (5));

} else {
var statearr_14885_17815 = state_14867__$1;
(statearr_14885_17815[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14868 === (5))){
var state_14867__$1 = state_14867;
var statearr_14897_17816 = state_14867__$1;
(statearr_14897_17816[(2)] = null);

(statearr_14897_17816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14868 === (6))){
var state_14867__$1 = state_14867;
var statearr_14904_17821 = state_14867__$1;
(statearr_14904_17821[(2)] = null);

(statearr_14904_17821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14868 === (7))){
var inst_14863 = (state_14867[(2)]);
var state_14867__$1 = state_14867;
var statearr_14907_17826 = state_14867__$1;
(statearr_14907_17826[(2)] = inst_14863);

(statearr_14907_17826[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__17779,c__14486__auto___17812,G__14796_17780,G__14796_17782__$1,n__5593__auto___17778,jobs,results,process__$1,async))
;
return ((function (__17779,switch__14293__auto__,c__14486__auto___17812,G__14796_17780,G__14796_17782__$1,n__5593__auto___17778,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14294__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14294__auto____0 = (function (){
var statearr_14908 = [null,null,null,null,null,null,null];
(statearr_14908[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14294__auto__);

(statearr_14908[(1)] = (1));

return statearr_14908;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14294__auto____1 = (function (state_14867){
while(true){
var ret_value__14295__auto__ = (function (){try{while(true){
var result__14296__auto__ = switch__14293__auto__(state_14867);
if(cljs.core.keyword_identical_QMARK_(result__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14296__auto__;
}
break;
}
}catch (e14909){var ex__14297__auto__ = e14909;
var statearr_14910_17832 = state_14867;
(statearr_14910_17832[(2)] = ex__14297__auto__);


if(cljs.core.seq((state_14867[(4)]))){
var statearr_14911_17834 = state_14867;
(statearr_14911_17834[(1)] = cljs.core.first((state_14867[(4)])));

} else {
throw ex__14297__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17839 = state_14867;
state_14867 = G__17839;
continue;
} else {
return ret_value__14295__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14294__auto__ = function(state_14867){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14294__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14294__auto____1.call(this,state_14867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14294__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14294__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14294__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14294__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14294__auto__;
})()
;})(__17779,switch__14293__auto__,c__14486__auto___17812,G__14796_17780,G__14796_17782__$1,n__5593__auto___17778,jobs,results,process__$1,async))
})();
var state__14488__auto__ = (function (){var statearr_14919 = f__14487__auto__();
(statearr_14919[(6)] = c__14486__auto___17812);

return statearr_14919;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14488__auto__);
});})(__17779,c__14486__auto___17812,G__14796_17780,G__14796_17782__$1,n__5593__auto___17778,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14796_17782__$1)].join('')));

}

var G__17841 = (__17779 + (1));
__17779 = G__17841;
continue;
} else {
}
break;
}

var c__14486__auto___17842 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14487__auto__ = (function (){var switch__14293__auto__ = (function (state_14952){
var state_val_14953 = (state_14952[(1)]);
if((state_val_14953 === (7))){
var inst_14941 = (state_14952[(2)]);
var state_14952__$1 = state_14952;
var statearr_14960_17847 = state_14952__$1;
(statearr_14960_17847[(2)] = inst_14941);

(statearr_14960_17847[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (1))){
var state_14952__$1 = state_14952;
var statearr_14963_17848 = state_14952__$1;
(statearr_14963_17848[(2)] = null);

(statearr_14963_17848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (4))){
var inst_14923 = (state_14952[(7)]);
var inst_14923__$1 = (state_14952[(2)]);
var inst_14924 = (inst_14923__$1 == null);
var state_14952__$1 = (function (){var statearr_14966 = state_14952;
(statearr_14966[(7)] = inst_14923__$1);

return statearr_14966;
})();
if(cljs.core.truth_(inst_14924)){
var statearr_14970_17852 = state_14952__$1;
(statearr_14970_17852[(1)] = (5));

} else {
var statearr_14971_17853 = state_14952__$1;
(statearr_14971_17853[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (6))){
var inst_14923 = (state_14952[(7)]);
var inst_14928 = (state_14952[(8)]);
var inst_14928__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_14932 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14933 = [inst_14923,inst_14928__$1];
var inst_14934 = (new cljs.core.PersistentVector(null,2,(5),inst_14932,inst_14933,null));
var state_14952__$1 = (function (){var statearr_14973 = state_14952;
(statearr_14973[(8)] = inst_14928__$1);

return statearr_14973;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14952__$1,(8),jobs,inst_14934);
} else {
if((state_val_14953 === (3))){
var inst_14943 = (state_14952[(2)]);
var state_14952__$1 = state_14952;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14952__$1,inst_14943);
} else {
if((state_val_14953 === (2))){
var state_14952__$1 = state_14952;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14952__$1,(4),from);
} else {
if((state_val_14953 === (9))){
var inst_14938 = (state_14952[(2)]);
var state_14952__$1 = (function (){var statearr_14980 = state_14952;
(statearr_14980[(9)] = inst_14938);

return statearr_14980;
})();
var statearr_14981_17860 = state_14952__$1;
(statearr_14981_17860[(2)] = null);

(statearr_14981_17860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (5))){
var inst_14926 = cljs.core.async.close_BANG_(jobs);
var state_14952__$1 = state_14952;
var statearr_14982_17861 = state_14952__$1;
(statearr_14982_17861[(2)] = inst_14926);

(statearr_14982_17861[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (8))){
var inst_14928 = (state_14952[(8)]);
var inst_14936 = (state_14952[(2)]);
var state_14952__$1 = (function (){var statearr_14985 = state_14952;
(statearr_14985[(10)] = inst_14936);

return statearr_14985;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14952__$1,(9),results,inst_14928);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14294__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14294__auto____0 = (function (){
var statearr_14986 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14986[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14294__auto__);

(statearr_14986[(1)] = (1));

return statearr_14986;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14294__auto____1 = (function (state_14952){
while(true){
var ret_value__14295__auto__ = (function (){try{while(true){
var result__14296__auto__ = switch__14293__auto__(state_14952);
if(cljs.core.keyword_identical_QMARK_(result__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14296__auto__;
}
break;
}
}catch (e14987){var ex__14297__auto__ = e14987;
var statearr_14988_17865 = state_14952;
(statearr_14988_17865[(2)] = ex__14297__auto__);


if(cljs.core.seq((state_14952[(4)]))){
var statearr_14991_17866 = state_14952;
(statearr_14991_17866[(1)] = cljs.core.first((state_14952[(4)])));

} else {
throw ex__14297__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17868 = state_14952;
state_14952 = G__17868;
continue;
} else {
return ret_value__14295__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14294__auto__ = function(state_14952){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14294__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14294__auto____1.call(this,state_14952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14294__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14294__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14294__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14294__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14294__auto__;
})()
})();
var state__14488__auto__ = (function (){var statearr_14995 = f__14487__auto__();
(statearr_14995[(6)] = c__14486__auto___17842);

return statearr_14995;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14488__auto__);
}));


var c__14486__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14487__auto__ = (function (){var switch__14293__auto__ = (function (state_15035){
var state_val_15036 = (state_15035[(1)]);
if((state_val_15036 === (7))){
var inst_15031 = (state_15035[(2)]);
var state_15035__$1 = state_15035;
var statearr_15040_17872 = state_15035__$1;
(statearr_15040_17872[(2)] = inst_15031);

(statearr_15040_17872[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15036 === (20))){
var state_15035__$1 = state_15035;
var statearr_15041_17873 = state_15035__$1;
(statearr_15041_17873[(2)] = null);

(statearr_15041_17873[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15036 === (1))){
var state_15035__$1 = state_15035;
var statearr_15045_17874 = state_15035__$1;
(statearr_15045_17874[(2)] = null);

(statearr_15045_17874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15036 === (4))){
var inst_14998 = (state_15035[(7)]);
var inst_14998__$1 = (state_15035[(2)]);
var inst_14999 = (inst_14998__$1 == null);
var state_15035__$1 = (function (){var statearr_15046 = state_15035;
(statearr_15046[(7)] = inst_14998__$1);

return statearr_15046;
})();
if(cljs.core.truth_(inst_14999)){
var statearr_15047_17875 = state_15035__$1;
(statearr_15047_17875[(1)] = (5));

} else {
var statearr_15048_17876 = state_15035__$1;
(statearr_15048_17876[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15036 === (15))){
var inst_15012 = (state_15035[(8)]);
var state_15035__$1 = state_15035;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15035__$1,(18),to,inst_15012);
} else {
if((state_val_15036 === (21))){
var inst_15026 = (state_15035[(2)]);
var state_15035__$1 = state_15035;
var statearr_15051_17877 = state_15035__$1;
(statearr_15051_17877[(2)] = inst_15026);

(statearr_15051_17877[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15036 === (13))){
var inst_15028 = (state_15035[(2)]);
var state_15035__$1 = (function (){var statearr_15055 = state_15035;
(statearr_15055[(9)] = inst_15028);

return statearr_15055;
})();
var statearr_15056_17878 = state_15035__$1;
(statearr_15056_17878[(2)] = null);

(statearr_15056_17878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15036 === (6))){
var inst_14998 = (state_15035[(7)]);
var state_15035__$1 = state_15035;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15035__$1,(11),inst_14998);
} else {
if((state_val_15036 === (17))){
var inst_15020 = (state_15035[(2)]);
var state_15035__$1 = state_15035;
if(cljs.core.truth_(inst_15020)){
var statearr_15058_17879 = state_15035__$1;
(statearr_15058_17879[(1)] = (19));

} else {
var statearr_15060_17880 = state_15035__$1;
(statearr_15060_17880[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15036 === (3))){
var inst_15033 = (state_15035[(2)]);
var state_15035__$1 = state_15035;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15035__$1,inst_15033);
} else {
if((state_val_15036 === (12))){
var inst_15008 = (state_15035[(10)]);
var state_15035__$1 = state_15035;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15035__$1,(14),inst_15008);
} else {
if((state_val_15036 === (2))){
var state_15035__$1 = state_15035;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15035__$1,(4),results);
} else {
if((state_val_15036 === (19))){
var state_15035__$1 = state_15035;
var statearr_15065_17882 = state_15035__$1;
(statearr_15065_17882[(2)] = null);

(statearr_15065_17882[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15036 === (11))){
var inst_15008 = (state_15035[(2)]);
var state_15035__$1 = (function (){var statearr_15068 = state_15035;
(statearr_15068[(10)] = inst_15008);

return statearr_15068;
})();
var statearr_15069_17883 = state_15035__$1;
(statearr_15069_17883[(2)] = null);

(statearr_15069_17883[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15036 === (9))){
var state_15035__$1 = state_15035;
var statearr_15070_17887 = state_15035__$1;
(statearr_15070_17887[(2)] = null);

(statearr_15070_17887[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15036 === (5))){
var state_15035__$1 = state_15035;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15071_17888 = state_15035__$1;
(statearr_15071_17888[(1)] = (8));

} else {
var statearr_15072_17889 = state_15035__$1;
(statearr_15072_17889[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15036 === (14))){
var inst_15014 = (state_15035[(11)]);
var inst_15012 = (state_15035[(8)]);
var inst_15012__$1 = (state_15035[(2)]);
var inst_15013 = (inst_15012__$1 == null);
var inst_15014__$1 = cljs.core.not(inst_15013);
var state_15035__$1 = (function (){var statearr_15074 = state_15035;
(statearr_15074[(11)] = inst_15014__$1);

(statearr_15074[(8)] = inst_15012__$1);

return statearr_15074;
})();
if(inst_15014__$1){
var statearr_15075_17890 = state_15035__$1;
(statearr_15075_17890[(1)] = (15));

} else {
var statearr_15076_17891 = state_15035__$1;
(statearr_15076_17891[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15036 === (16))){
var inst_15014 = (state_15035[(11)]);
var state_15035__$1 = state_15035;
var statearr_15077_17892 = state_15035__$1;
(statearr_15077_17892[(2)] = inst_15014);

(statearr_15077_17892[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15036 === (10))){
var inst_15005 = (state_15035[(2)]);
var state_15035__$1 = state_15035;
var statearr_15079_17893 = state_15035__$1;
(statearr_15079_17893[(2)] = inst_15005);

(statearr_15079_17893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15036 === (18))){
var inst_15017 = (state_15035[(2)]);
var state_15035__$1 = state_15035;
var statearr_15080_17894 = state_15035__$1;
(statearr_15080_17894[(2)] = inst_15017);

(statearr_15080_17894[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15036 === (8))){
var inst_15002 = cljs.core.async.close_BANG_(to);
var state_15035__$1 = state_15035;
var statearr_15083_17895 = state_15035__$1;
(statearr_15083_17895[(2)] = inst_15002);

(statearr_15083_17895[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14294__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14294__auto____0 = (function (){
var statearr_15085 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15085[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14294__auto__);

(statearr_15085[(1)] = (1));

return statearr_15085;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14294__auto____1 = (function (state_15035){
while(true){
var ret_value__14295__auto__ = (function (){try{while(true){
var result__14296__auto__ = switch__14293__auto__(state_15035);
if(cljs.core.keyword_identical_QMARK_(result__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14296__auto__;
}
break;
}
}catch (e15086){var ex__14297__auto__ = e15086;
var statearr_15087_17896 = state_15035;
(statearr_15087_17896[(2)] = ex__14297__auto__);


if(cljs.core.seq((state_15035[(4)]))){
var statearr_15089_17897 = state_15035;
(statearr_15089_17897[(1)] = cljs.core.first((state_15035[(4)])));

} else {
throw ex__14297__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17898 = state_15035;
state_15035 = G__17898;
continue;
} else {
return ret_value__14295__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14294__auto__ = function(state_15035){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14294__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14294__auto____1.call(this,state_15035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14294__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14294__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14294__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14294__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14294__auto__;
})()
})();
var state__14488__auto__ = (function (){var statearr_15094 = f__14487__auto__();
(statearr_15094[(6)] = c__14486__auto__);

return statearr_15094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14488__auto__);
}));

return c__14486__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__15107 = arguments.length;
switch (G__15107) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__15122 = arguments.length;
switch (G__15122) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__15211 = arguments.length;
switch (G__15211) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__14486__auto___17905 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14487__auto__ = (function (){var switch__14293__auto__ = (function (state_15272){
var state_val_15273 = (state_15272[(1)]);
if((state_val_15273 === (7))){
var inst_15268 = (state_15272[(2)]);
var state_15272__$1 = state_15272;
var statearr_15274_17906 = state_15272__$1;
(statearr_15274_17906[(2)] = inst_15268);

(statearr_15274_17906[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15273 === (1))){
var state_15272__$1 = state_15272;
var statearr_15275_17907 = state_15272__$1;
(statearr_15275_17907[(2)] = null);

(statearr_15275_17907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15273 === (4))){
var inst_15249 = (state_15272[(7)]);
var inst_15249__$1 = (state_15272[(2)]);
var inst_15250 = (inst_15249__$1 == null);
var state_15272__$1 = (function (){var statearr_15276 = state_15272;
(statearr_15276[(7)] = inst_15249__$1);

return statearr_15276;
})();
if(cljs.core.truth_(inst_15250)){
var statearr_15277_17908 = state_15272__$1;
(statearr_15277_17908[(1)] = (5));

} else {
var statearr_15278_17909 = state_15272__$1;
(statearr_15278_17909[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15273 === (13))){
var state_15272__$1 = state_15272;
var statearr_15279_17910 = state_15272__$1;
(statearr_15279_17910[(2)] = null);

(statearr_15279_17910[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15273 === (6))){
var inst_15249 = (state_15272[(7)]);
var inst_15255 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15249) : p.call(null, inst_15249));
var state_15272__$1 = state_15272;
if(cljs.core.truth_(inst_15255)){
var statearr_15283_17911 = state_15272__$1;
(statearr_15283_17911[(1)] = (9));

} else {
var statearr_15284_17912 = state_15272__$1;
(statearr_15284_17912[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15273 === (3))){
var inst_15270 = (state_15272[(2)]);
var state_15272__$1 = state_15272;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15272__$1,inst_15270);
} else {
if((state_val_15273 === (12))){
var state_15272__$1 = state_15272;
var statearr_15287_17913 = state_15272__$1;
(statearr_15287_17913[(2)] = null);

(statearr_15287_17913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15273 === (2))){
var state_15272__$1 = state_15272;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15272__$1,(4),ch);
} else {
if((state_val_15273 === (11))){
var inst_15249 = (state_15272[(7)]);
var inst_15259 = (state_15272[(2)]);
var state_15272__$1 = state_15272;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15272__$1,(8),inst_15259,inst_15249);
} else {
if((state_val_15273 === (9))){
var state_15272__$1 = state_15272;
var statearr_15290_17914 = state_15272__$1;
(statearr_15290_17914[(2)] = tc);

(statearr_15290_17914[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15273 === (5))){
var inst_15252 = cljs.core.async.close_BANG_(tc);
var inst_15253 = cljs.core.async.close_BANG_(fc);
var state_15272__$1 = (function (){var statearr_15292 = state_15272;
(statearr_15292[(8)] = inst_15252);

return statearr_15292;
})();
var statearr_15294_17915 = state_15272__$1;
(statearr_15294_17915[(2)] = inst_15253);

(statearr_15294_17915[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15273 === (14))){
var inst_15266 = (state_15272[(2)]);
var state_15272__$1 = state_15272;
var statearr_15316_17916 = state_15272__$1;
(statearr_15316_17916[(2)] = inst_15266);

(statearr_15316_17916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15273 === (10))){
var state_15272__$1 = state_15272;
var statearr_15317_17926 = state_15272__$1;
(statearr_15317_17926[(2)] = fc);

(statearr_15317_17926[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15273 === (8))){
var inst_15261 = (state_15272[(2)]);
var state_15272__$1 = state_15272;
if(cljs.core.truth_(inst_15261)){
var statearr_15320_17931 = state_15272__$1;
(statearr_15320_17931[(1)] = (12));

} else {
var statearr_15321_17932 = state_15272__$1;
(statearr_15321_17932[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14294__auto__ = null;
var cljs$core$async$state_machine__14294__auto____0 = (function (){
var statearr_15324 = [null,null,null,null,null,null,null,null,null];
(statearr_15324[(0)] = cljs$core$async$state_machine__14294__auto__);

(statearr_15324[(1)] = (1));

return statearr_15324;
});
var cljs$core$async$state_machine__14294__auto____1 = (function (state_15272){
while(true){
var ret_value__14295__auto__ = (function (){try{while(true){
var result__14296__auto__ = switch__14293__auto__(state_15272);
if(cljs.core.keyword_identical_QMARK_(result__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14296__auto__;
}
break;
}
}catch (e15327){var ex__14297__auto__ = e15327;
var statearr_15328_17943 = state_15272;
(statearr_15328_17943[(2)] = ex__14297__auto__);


if(cljs.core.seq((state_15272[(4)]))){
var statearr_15329_17947 = state_15272;
(statearr_15329_17947[(1)] = cljs.core.first((state_15272[(4)])));

} else {
throw ex__14297__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17949 = state_15272;
state_15272 = G__17949;
continue;
} else {
return ret_value__14295__auto__;
}
break;
}
});
cljs$core$async$state_machine__14294__auto__ = function(state_15272){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14294__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14294__auto____1.call(this,state_15272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14294__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14294__auto____0;
cljs$core$async$state_machine__14294__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14294__auto____1;
return cljs$core$async$state_machine__14294__auto__;
})()
})();
var state__14488__auto__ = (function (){var statearr_15333 = f__14487__auto__();
(statearr_15333[(6)] = c__14486__auto___17905);

return statearr_15333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14488__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__14486__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14487__auto__ = (function (){var switch__14293__auto__ = (function (state_15365){
var state_val_15366 = (state_15365[(1)]);
if((state_val_15366 === (7))){
var inst_15361 = (state_15365[(2)]);
var state_15365__$1 = state_15365;
var statearr_15375_17955 = state_15365__$1;
(statearr_15375_17955[(2)] = inst_15361);

(statearr_15375_17955[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15366 === (1))){
var inst_15341 = init;
var inst_15343 = inst_15341;
var state_15365__$1 = (function (){var statearr_15376 = state_15365;
(statearr_15376[(7)] = inst_15343);

return statearr_15376;
})();
var statearr_15377_17956 = state_15365__$1;
(statearr_15377_17956[(2)] = null);

(statearr_15377_17956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15366 === (4))){
var inst_15346 = (state_15365[(8)]);
var inst_15346__$1 = (state_15365[(2)]);
var inst_15347 = (inst_15346__$1 == null);
var state_15365__$1 = (function (){var statearr_15379 = state_15365;
(statearr_15379[(8)] = inst_15346__$1);

return statearr_15379;
})();
if(cljs.core.truth_(inst_15347)){
var statearr_15380_17957 = state_15365__$1;
(statearr_15380_17957[(1)] = (5));

} else {
var statearr_15381_17958 = state_15365__$1;
(statearr_15381_17958[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15366 === (6))){
var inst_15343 = (state_15365[(7)]);
var inst_15351 = (state_15365[(9)]);
var inst_15346 = (state_15365[(8)]);
var inst_15351__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15343,inst_15346) : f.call(null, inst_15343,inst_15346));
var inst_15352 = cljs.core.reduced_QMARK_(inst_15351__$1);
var state_15365__$1 = (function (){var statearr_15386 = state_15365;
(statearr_15386[(9)] = inst_15351__$1);

return statearr_15386;
})();
if(inst_15352){
var statearr_15388_17959 = state_15365__$1;
(statearr_15388_17959[(1)] = (8));

} else {
var statearr_15390_17960 = state_15365__$1;
(statearr_15390_17960[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15366 === (3))){
var inst_15363 = (state_15365[(2)]);
var state_15365__$1 = state_15365;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15365__$1,inst_15363);
} else {
if((state_val_15366 === (2))){
var state_15365__$1 = state_15365;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15365__$1,(4),ch);
} else {
if((state_val_15366 === (9))){
var inst_15351 = (state_15365[(9)]);
var inst_15343 = inst_15351;
var state_15365__$1 = (function (){var statearr_15394 = state_15365;
(statearr_15394[(7)] = inst_15343);

return statearr_15394;
})();
var statearr_15395_17962 = state_15365__$1;
(statearr_15395_17962[(2)] = null);

(statearr_15395_17962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15366 === (5))){
var inst_15343 = (state_15365[(7)]);
var state_15365__$1 = state_15365;
var statearr_15401_17966 = state_15365__$1;
(statearr_15401_17966[(2)] = inst_15343);

(statearr_15401_17966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15366 === (10))){
var inst_15359 = (state_15365[(2)]);
var state_15365__$1 = state_15365;
var statearr_15402_17970 = state_15365__$1;
(statearr_15402_17970[(2)] = inst_15359);

(statearr_15402_17970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15366 === (8))){
var inst_15351 = (state_15365[(9)]);
var inst_15355 = cljs.core.deref(inst_15351);
var state_15365__$1 = state_15365;
var statearr_15403_17971 = state_15365__$1;
(statearr_15403_17971[(2)] = inst_15355);

(statearr_15403_17971[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__14294__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14294__auto____0 = (function (){
var statearr_15408 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15408[(0)] = cljs$core$async$reduce_$_state_machine__14294__auto__);

(statearr_15408[(1)] = (1));

return statearr_15408;
});
var cljs$core$async$reduce_$_state_machine__14294__auto____1 = (function (state_15365){
while(true){
var ret_value__14295__auto__ = (function (){try{while(true){
var result__14296__auto__ = switch__14293__auto__(state_15365);
if(cljs.core.keyword_identical_QMARK_(result__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14296__auto__;
}
break;
}
}catch (e15410){var ex__14297__auto__ = e15410;
var statearr_15411_17976 = state_15365;
(statearr_15411_17976[(2)] = ex__14297__auto__);


if(cljs.core.seq((state_15365[(4)]))){
var statearr_15412_17977 = state_15365;
(statearr_15412_17977[(1)] = cljs.core.first((state_15365[(4)])));

} else {
throw ex__14297__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17978 = state_15365;
state_15365 = G__17978;
continue;
} else {
return ret_value__14295__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14294__auto__ = function(state_15365){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14294__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14294__auto____1.call(this,state_15365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__14294__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14294__auto____0;
cljs$core$async$reduce_$_state_machine__14294__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14294__auto____1;
return cljs$core$async$reduce_$_state_machine__14294__auto__;
})()
})();
var state__14488__auto__ = (function (){var statearr_15414 = f__14487__auto__();
(statearr_15414[(6)] = c__14486__auto__);

return statearr_15414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14488__auto__);
}));

return c__14486__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null, f));
var c__14486__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14487__auto__ = (function (){var switch__14293__auto__ = (function (state_15455){
var state_val_15456 = (state_15455[(1)]);
if((state_val_15456 === (1))){
var inst_15446 = cljs.core.async.reduce(f__$1,init,ch);
var state_15455__$1 = state_15455;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15455__$1,(2),inst_15446);
} else {
if((state_val_15456 === (2))){
var inst_15448 = (state_15455[(2)]);
var inst_15453 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15448) : f__$1.call(null, inst_15448));
var state_15455__$1 = state_15455;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15455__$1,inst_15453);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__14294__auto__ = null;
var cljs$core$async$transduce_$_state_machine__14294__auto____0 = (function (){
var statearr_15467 = [null,null,null,null,null,null,null];
(statearr_15467[(0)] = cljs$core$async$transduce_$_state_machine__14294__auto__);

(statearr_15467[(1)] = (1));

return statearr_15467;
});
var cljs$core$async$transduce_$_state_machine__14294__auto____1 = (function (state_15455){
while(true){
var ret_value__14295__auto__ = (function (){try{while(true){
var result__14296__auto__ = switch__14293__auto__(state_15455);
if(cljs.core.keyword_identical_QMARK_(result__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14296__auto__;
}
break;
}
}catch (e15468){var ex__14297__auto__ = e15468;
var statearr_15469_17986 = state_15455;
(statearr_15469_17986[(2)] = ex__14297__auto__);


if(cljs.core.seq((state_15455[(4)]))){
var statearr_15470_17990 = state_15455;
(statearr_15470_17990[(1)] = cljs.core.first((state_15455[(4)])));

} else {
throw ex__14297__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17991 = state_15455;
state_15455 = G__17991;
continue;
} else {
return ret_value__14295__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__14294__auto__ = function(state_15455){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__14294__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__14294__auto____1.call(this,state_15455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__14294__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__14294__auto____0;
cljs$core$async$transduce_$_state_machine__14294__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__14294__auto____1;
return cljs$core$async$transduce_$_state_machine__14294__auto__;
})()
})();
var state__14488__auto__ = (function (){var statearr_15471 = f__14487__auto__();
(statearr_15471[(6)] = c__14486__auto__);

return statearr_15471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14488__auto__);
}));

return c__14486__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__15473 = arguments.length;
switch (G__15473) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14486__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14487__auto__ = (function (){var switch__14293__auto__ = (function (state_15498){
var state_val_15499 = (state_15498[(1)]);
if((state_val_15499 === (7))){
var inst_15480 = (state_15498[(2)]);
var state_15498__$1 = state_15498;
var statearr_15500_18004 = state_15498__$1;
(statearr_15500_18004[(2)] = inst_15480);

(statearr_15500_18004[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15499 === (1))){
var inst_15474 = cljs.core.seq(coll);
var inst_15475 = inst_15474;
var state_15498__$1 = (function (){var statearr_15501 = state_15498;
(statearr_15501[(7)] = inst_15475);

return statearr_15501;
})();
var statearr_15502_18011 = state_15498__$1;
(statearr_15502_18011[(2)] = null);

(statearr_15502_18011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15499 === (4))){
var inst_15475 = (state_15498[(7)]);
var inst_15478 = cljs.core.first(inst_15475);
var state_15498__$1 = state_15498;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15498__$1,(7),ch,inst_15478);
} else {
if((state_val_15499 === (13))){
var inst_15492 = (state_15498[(2)]);
var state_15498__$1 = state_15498;
var statearr_15504_18017 = state_15498__$1;
(statearr_15504_18017[(2)] = inst_15492);

(statearr_15504_18017[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15499 === (6))){
var inst_15483 = (state_15498[(2)]);
var state_15498__$1 = state_15498;
if(cljs.core.truth_(inst_15483)){
var statearr_15507_18018 = state_15498__$1;
(statearr_15507_18018[(1)] = (8));

} else {
var statearr_15508_18019 = state_15498__$1;
(statearr_15508_18019[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15499 === (3))){
var inst_15496 = (state_15498[(2)]);
var state_15498__$1 = state_15498;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15498__$1,inst_15496);
} else {
if((state_val_15499 === (12))){
var state_15498__$1 = state_15498;
var statearr_15511_18023 = state_15498__$1;
(statearr_15511_18023[(2)] = null);

(statearr_15511_18023[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15499 === (2))){
var inst_15475 = (state_15498[(7)]);
var state_15498__$1 = state_15498;
if(cljs.core.truth_(inst_15475)){
var statearr_15512_18024 = state_15498__$1;
(statearr_15512_18024[(1)] = (4));

} else {
var statearr_15513_18025 = state_15498__$1;
(statearr_15513_18025[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15499 === (11))){
var inst_15489 = cljs.core.async.close_BANG_(ch);
var state_15498__$1 = state_15498;
var statearr_15514_18026 = state_15498__$1;
(statearr_15514_18026[(2)] = inst_15489);

(statearr_15514_18026[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15499 === (9))){
var state_15498__$1 = state_15498;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15516_18033 = state_15498__$1;
(statearr_15516_18033[(1)] = (11));

} else {
var statearr_15517_18034 = state_15498__$1;
(statearr_15517_18034[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15499 === (5))){
var inst_15475 = (state_15498[(7)]);
var state_15498__$1 = state_15498;
var statearr_15520_18035 = state_15498__$1;
(statearr_15520_18035[(2)] = inst_15475);

(statearr_15520_18035[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15499 === (10))){
var inst_15494 = (state_15498[(2)]);
var state_15498__$1 = state_15498;
var statearr_15523_18038 = state_15498__$1;
(statearr_15523_18038[(2)] = inst_15494);

(statearr_15523_18038[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15499 === (8))){
var inst_15475 = (state_15498[(7)]);
var inst_15485 = cljs.core.next(inst_15475);
var inst_15475__$1 = inst_15485;
var state_15498__$1 = (function (){var statearr_15524 = state_15498;
(statearr_15524[(7)] = inst_15475__$1);

return statearr_15524;
})();
var statearr_15525_18040 = state_15498__$1;
(statearr_15525_18040[(2)] = null);

(statearr_15525_18040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14294__auto__ = null;
var cljs$core$async$state_machine__14294__auto____0 = (function (){
var statearr_15527 = [null,null,null,null,null,null,null,null];
(statearr_15527[(0)] = cljs$core$async$state_machine__14294__auto__);

(statearr_15527[(1)] = (1));

return statearr_15527;
});
var cljs$core$async$state_machine__14294__auto____1 = (function (state_15498){
while(true){
var ret_value__14295__auto__ = (function (){try{while(true){
var result__14296__auto__ = switch__14293__auto__(state_15498);
if(cljs.core.keyword_identical_QMARK_(result__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14296__auto__;
}
break;
}
}catch (e15531){var ex__14297__auto__ = e15531;
var statearr_15532_18048 = state_15498;
(statearr_15532_18048[(2)] = ex__14297__auto__);


if(cljs.core.seq((state_15498[(4)]))){
var statearr_15533_18051 = state_15498;
(statearr_15533_18051[(1)] = cljs.core.first((state_15498[(4)])));

} else {
throw ex__14297__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18052 = state_15498;
state_15498 = G__18052;
continue;
} else {
return ret_value__14295__auto__;
}
break;
}
});
cljs$core$async$state_machine__14294__auto__ = function(state_15498){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14294__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14294__auto____1.call(this,state_15498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14294__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14294__auto____0;
cljs$core$async$state_machine__14294__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14294__auto____1;
return cljs$core$async$state_machine__14294__auto__;
})()
})();
var state__14488__auto__ = (function (){var statearr_15540 = f__14487__auto__();
(statearr_15540[(6)] = c__14486__auto__);

return statearr_15540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14488__auto__);
}));

return c__14486__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__15545 = arguments.length;
switch (G__15545) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_18068 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_18068(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_18077 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null, m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null, m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_18077(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_18079 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_18079(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_18081 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_18081(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15552 = (function (ch,cs,meta15553){
this.ch = ch;
this.cs = cs;
this.meta15553 = meta15553;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15552.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15554,meta15553__$1){
var self__ = this;
var _15554__$1 = this;
return (new cljs.core.async.t_cljs$core$async15552(self__.ch,self__.cs,meta15553__$1));
}));

(cljs.core.async.t_cljs$core$async15552.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15554){
var self__ = this;
var _15554__$1 = this;
return self__.meta15553;
}));

(cljs.core.async.t_cljs$core$async15552.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15552.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15552.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15552.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async15552.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async15552.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async15552.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15553","meta15553",-1411819091,null)], null);
}));

(cljs.core.async.t_cljs$core$async15552.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15552.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15552");

(cljs.core.async.t_cljs$core$async15552.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15552");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15552.
 */
cljs.core.async.__GT_t_cljs$core$async15552 = (function cljs$core$async$__GT_t_cljs$core$async15552(ch,cs,meta15553){
return (new cljs.core.async.t_cljs$core$async15552(ch,cs,meta15553));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async15552(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__14486__auto___18092 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14487__auto__ = (function (){var switch__14293__auto__ = (function (state_15714){
var state_val_15715 = (state_15714[(1)]);
if((state_val_15715 === (7))){
var inst_15697 = (state_15714[(2)]);
var state_15714__$1 = state_15714;
var statearr_15716_18104 = state_15714__$1;
(statearr_15716_18104[(2)] = inst_15697);

(statearr_15716_18104[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (20))){
var inst_15596 = (state_15714[(7)]);
var inst_15608 = cljs.core.first(inst_15596);
var inst_15609 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15608,(0),null);
var inst_15610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15608,(1),null);
var state_15714__$1 = (function (){var statearr_15717 = state_15714;
(statearr_15717[(8)] = inst_15609);

return statearr_15717;
})();
if(cljs.core.truth_(inst_15610)){
var statearr_15719_18110 = state_15714__$1;
(statearr_15719_18110[(1)] = (22));

} else {
var statearr_15720_18111 = state_15714__$1;
(statearr_15720_18111[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (27))){
var inst_15640 = (state_15714[(9)]);
var inst_15638 = (state_15714[(10)]);
var inst_15650 = (state_15714[(11)]);
var inst_15564 = (state_15714[(12)]);
var inst_15650__$1 = cljs.core._nth(inst_15638,inst_15640);
var inst_15651 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15650__$1,inst_15564,done);
var state_15714__$1 = (function (){var statearr_15725 = state_15714;
(statearr_15725[(11)] = inst_15650__$1);

return statearr_15725;
})();
if(cljs.core.truth_(inst_15651)){
var statearr_15726_18114 = state_15714__$1;
(statearr_15726_18114[(1)] = (30));

} else {
var statearr_15728_18115 = state_15714__$1;
(statearr_15728_18115[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (1))){
var state_15714__$1 = state_15714;
var statearr_15729_18117 = state_15714__$1;
(statearr_15729_18117[(2)] = null);

(statearr_15729_18117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (24))){
var inst_15596 = (state_15714[(7)]);
var inst_15615 = (state_15714[(2)]);
var inst_15616 = cljs.core.next(inst_15596);
var inst_15574 = inst_15616;
var inst_15575 = null;
var inst_15576 = (0);
var inst_15577 = (0);
var state_15714__$1 = (function (){var statearr_15731 = state_15714;
(statearr_15731[(13)] = inst_15577);

(statearr_15731[(14)] = inst_15575);

(statearr_15731[(15)] = inst_15574);

(statearr_15731[(16)] = inst_15615);

(statearr_15731[(17)] = inst_15576);

return statearr_15731;
})();
var statearr_15732_18137 = state_15714__$1;
(statearr_15732_18137[(2)] = null);

(statearr_15732_18137[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (39))){
var state_15714__$1 = state_15714;
var statearr_15738_18138 = state_15714__$1;
(statearr_15738_18138[(2)] = null);

(statearr_15738_18138[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (4))){
var inst_15564 = (state_15714[(12)]);
var inst_15564__$1 = (state_15714[(2)]);
var inst_15565 = (inst_15564__$1 == null);
var state_15714__$1 = (function (){var statearr_15739 = state_15714;
(statearr_15739[(12)] = inst_15564__$1);

return statearr_15739;
})();
if(cljs.core.truth_(inst_15565)){
var statearr_15740_18139 = state_15714__$1;
(statearr_15740_18139[(1)] = (5));

} else {
var statearr_15741_18140 = state_15714__$1;
(statearr_15741_18140[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (15))){
var inst_15577 = (state_15714[(13)]);
var inst_15575 = (state_15714[(14)]);
var inst_15574 = (state_15714[(15)]);
var inst_15576 = (state_15714[(17)]);
var inst_15592 = (state_15714[(2)]);
var inst_15593 = (inst_15577 + (1));
var tmp15733 = inst_15575;
var tmp15734 = inst_15574;
var tmp15735 = inst_15576;
var inst_15574__$1 = tmp15734;
var inst_15575__$1 = tmp15733;
var inst_15576__$1 = tmp15735;
var inst_15577__$1 = inst_15593;
var state_15714__$1 = (function (){var statearr_15746 = state_15714;
(statearr_15746[(13)] = inst_15577__$1);

(statearr_15746[(14)] = inst_15575__$1);

(statearr_15746[(15)] = inst_15574__$1);

(statearr_15746[(18)] = inst_15592);

(statearr_15746[(17)] = inst_15576__$1);

return statearr_15746;
})();
var statearr_15747_18143 = state_15714__$1;
(statearr_15747_18143[(2)] = null);

(statearr_15747_18143[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (21))){
var inst_15619 = (state_15714[(2)]);
var state_15714__$1 = state_15714;
var statearr_15752_18144 = state_15714__$1;
(statearr_15752_18144[(2)] = inst_15619);

(statearr_15752_18144[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (31))){
var inst_15650 = (state_15714[(11)]);
var inst_15654 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_15650);
var state_15714__$1 = state_15714;
var statearr_15757_18150 = state_15714__$1;
(statearr_15757_18150[(2)] = inst_15654);

(statearr_15757_18150[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (32))){
var inst_15637 = (state_15714[(19)]);
var inst_15639 = (state_15714[(20)]);
var inst_15640 = (state_15714[(9)]);
var inst_15638 = (state_15714[(10)]);
var inst_15656 = (state_15714[(2)]);
var inst_15657 = (inst_15640 + (1));
var tmp15749 = inst_15637;
var tmp15750 = inst_15639;
var tmp15751 = inst_15638;
var inst_15637__$1 = tmp15749;
var inst_15638__$1 = tmp15751;
var inst_15639__$1 = tmp15750;
var inst_15640__$1 = inst_15657;
var state_15714__$1 = (function (){var statearr_15763 = state_15714;
(statearr_15763[(21)] = inst_15656);

(statearr_15763[(19)] = inst_15637__$1);

(statearr_15763[(20)] = inst_15639__$1);

(statearr_15763[(9)] = inst_15640__$1);

(statearr_15763[(10)] = inst_15638__$1);

return statearr_15763;
})();
var statearr_15764_18153 = state_15714__$1;
(statearr_15764_18153[(2)] = null);

(statearr_15764_18153[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (40))){
var inst_15670 = (state_15714[(22)]);
var inst_15674 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_15670);
var state_15714__$1 = state_15714;
var statearr_15772_18154 = state_15714__$1;
(statearr_15772_18154[(2)] = inst_15674);

(statearr_15772_18154[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (33))){
var inst_15660 = (state_15714[(23)]);
var inst_15663 = cljs.core.chunked_seq_QMARK_(inst_15660);
var state_15714__$1 = state_15714;
if(inst_15663){
var statearr_15790_18155 = state_15714__$1;
(statearr_15790_18155[(1)] = (36));

} else {
var statearr_15791_18156 = state_15714__$1;
(statearr_15791_18156[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (13))){
var inst_15586 = (state_15714[(24)]);
var inst_15589 = cljs.core.async.close_BANG_(inst_15586);
var state_15714__$1 = state_15714;
var statearr_15792_18159 = state_15714__$1;
(statearr_15792_18159[(2)] = inst_15589);

(statearr_15792_18159[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (22))){
var inst_15609 = (state_15714[(8)]);
var inst_15612 = cljs.core.async.close_BANG_(inst_15609);
var state_15714__$1 = state_15714;
var statearr_15793_18161 = state_15714__$1;
(statearr_15793_18161[(2)] = inst_15612);

(statearr_15793_18161[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (36))){
var inst_15660 = (state_15714[(23)]);
var inst_15665 = cljs.core.chunk_first(inst_15660);
var inst_15666 = cljs.core.chunk_rest(inst_15660);
var inst_15667 = cljs.core.count(inst_15665);
var inst_15637 = inst_15666;
var inst_15638 = inst_15665;
var inst_15639 = inst_15667;
var inst_15640 = (0);
var state_15714__$1 = (function (){var statearr_15795 = state_15714;
(statearr_15795[(19)] = inst_15637);

(statearr_15795[(20)] = inst_15639);

(statearr_15795[(9)] = inst_15640);

(statearr_15795[(10)] = inst_15638);

return statearr_15795;
})();
var statearr_15796_18168 = state_15714__$1;
(statearr_15796_18168[(2)] = null);

(statearr_15796_18168[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (41))){
var inst_15660 = (state_15714[(23)]);
var inst_15676 = (state_15714[(2)]);
var inst_15677 = cljs.core.next(inst_15660);
var inst_15637 = inst_15677;
var inst_15638 = null;
var inst_15639 = (0);
var inst_15640 = (0);
var state_15714__$1 = (function (){var statearr_15797 = state_15714;
(statearr_15797[(19)] = inst_15637);

(statearr_15797[(20)] = inst_15639);

(statearr_15797[(25)] = inst_15676);

(statearr_15797[(9)] = inst_15640);

(statearr_15797[(10)] = inst_15638);

return statearr_15797;
})();
var statearr_15798_18171 = state_15714__$1;
(statearr_15798_18171[(2)] = null);

(statearr_15798_18171[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (43))){
var state_15714__$1 = state_15714;
var statearr_15799_18174 = state_15714__$1;
(statearr_15799_18174[(2)] = null);

(statearr_15799_18174[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (29))){
var inst_15685 = (state_15714[(2)]);
var state_15714__$1 = state_15714;
var statearr_15801_18175 = state_15714__$1;
(statearr_15801_18175[(2)] = inst_15685);

(statearr_15801_18175[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (44))){
var inst_15694 = (state_15714[(2)]);
var state_15714__$1 = (function (){var statearr_15803 = state_15714;
(statearr_15803[(26)] = inst_15694);

return statearr_15803;
})();
var statearr_15804_18176 = state_15714__$1;
(statearr_15804_18176[(2)] = null);

(statearr_15804_18176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (6))){
var inst_15629 = (state_15714[(27)]);
var inst_15628 = cljs.core.deref(cs);
var inst_15629__$1 = cljs.core.keys(inst_15628);
var inst_15630 = cljs.core.count(inst_15629__$1);
var inst_15631 = cljs.core.reset_BANG_(dctr,inst_15630);
var inst_15636 = cljs.core.seq(inst_15629__$1);
var inst_15637 = inst_15636;
var inst_15638 = null;
var inst_15639 = (0);
var inst_15640 = (0);
var state_15714__$1 = (function (){var statearr_15807 = state_15714;
(statearr_15807[(27)] = inst_15629__$1);

(statearr_15807[(28)] = inst_15631);

(statearr_15807[(19)] = inst_15637);

(statearr_15807[(20)] = inst_15639);

(statearr_15807[(9)] = inst_15640);

(statearr_15807[(10)] = inst_15638);

return statearr_15807;
})();
var statearr_15808_18177 = state_15714__$1;
(statearr_15808_18177[(2)] = null);

(statearr_15808_18177[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (28))){
var inst_15660 = (state_15714[(23)]);
var inst_15637 = (state_15714[(19)]);
var inst_15660__$1 = cljs.core.seq(inst_15637);
var state_15714__$1 = (function (){var statearr_15812 = state_15714;
(statearr_15812[(23)] = inst_15660__$1);

return statearr_15812;
})();
if(inst_15660__$1){
var statearr_15813_18178 = state_15714__$1;
(statearr_15813_18178[(1)] = (33));

} else {
var statearr_15819_18179 = state_15714__$1;
(statearr_15819_18179[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (25))){
var inst_15639 = (state_15714[(20)]);
var inst_15640 = (state_15714[(9)]);
var inst_15647 = (inst_15640 < inst_15639);
var inst_15648 = inst_15647;
var state_15714__$1 = state_15714;
if(cljs.core.truth_(inst_15648)){
var statearr_15826_18180 = state_15714__$1;
(statearr_15826_18180[(1)] = (27));

} else {
var statearr_15827_18181 = state_15714__$1;
(statearr_15827_18181[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (34))){
var state_15714__$1 = state_15714;
var statearr_15831_18184 = state_15714__$1;
(statearr_15831_18184[(2)] = null);

(statearr_15831_18184[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (17))){
var state_15714__$1 = state_15714;
var statearr_15832_18186 = state_15714__$1;
(statearr_15832_18186[(2)] = null);

(statearr_15832_18186[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (3))){
var inst_15699 = (state_15714[(2)]);
var state_15714__$1 = state_15714;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15714__$1,inst_15699);
} else {
if((state_val_15715 === (12))){
var inst_15624 = (state_15714[(2)]);
var state_15714__$1 = state_15714;
var statearr_15837_18187 = state_15714__$1;
(statearr_15837_18187[(2)] = inst_15624);

(statearr_15837_18187[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (2))){
var state_15714__$1 = state_15714;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15714__$1,(4),ch);
} else {
if((state_val_15715 === (23))){
var state_15714__$1 = state_15714;
var statearr_15846_18191 = state_15714__$1;
(statearr_15846_18191[(2)] = null);

(statearr_15846_18191[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (35))){
var inst_15683 = (state_15714[(2)]);
var state_15714__$1 = state_15714;
var statearr_15847_18192 = state_15714__$1;
(statearr_15847_18192[(2)] = inst_15683);

(statearr_15847_18192[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (19))){
var inst_15596 = (state_15714[(7)]);
var inst_15600 = cljs.core.chunk_first(inst_15596);
var inst_15601 = cljs.core.chunk_rest(inst_15596);
var inst_15602 = cljs.core.count(inst_15600);
var inst_15574 = inst_15601;
var inst_15575 = inst_15600;
var inst_15576 = inst_15602;
var inst_15577 = (0);
var state_15714__$1 = (function (){var statearr_15886 = state_15714;
(statearr_15886[(13)] = inst_15577);

(statearr_15886[(14)] = inst_15575);

(statearr_15886[(15)] = inst_15574);

(statearr_15886[(17)] = inst_15576);

return statearr_15886;
})();
var statearr_15911_18195 = state_15714__$1;
(statearr_15911_18195[(2)] = null);

(statearr_15911_18195[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (11))){
var inst_15574 = (state_15714[(15)]);
var inst_15596 = (state_15714[(7)]);
var inst_15596__$1 = cljs.core.seq(inst_15574);
var state_15714__$1 = (function (){var statearr_15913 = state_15714;
(statearr_15913[(7)] = inst_15596__$1);

return statearr_15913;
})();
if(inst_15596__$1){
var statearr_15914_18200 = state_15714__$1;
(statearr_15914_18200[(1)] = (16));

} else {
var statearr_15915_18201 = state_15714__$1;
(statearr_15915_18201[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (9))){
var inst_15626 = (state_15714[(2)]);
var state_15714__$1 = state_15714;
var statearr_15916_18202 = state_15714__$1;
(statearr_15916_18202[(2)] = inst_15626);

(statearr_15916_18202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (5))){
var inst_15571 = cljs.core.deref(cs);
var inst_15572 = cljs.core.seq(inst_15571);
var inst_15574 = inst_15572;
var inst_15575 = null;
var inst_15576 = (0);
var inst_15577 = (0);
var state_15714__$1 = (function (){var statearr_15919 = state_15714;
(statearr_15919[(13)] = inst_15577);

(statearr_15919[(14)] = inst_15575);

(statearr_15919[(15)] = inst_15574);

(statearr_15919[(17)] = inst_15576);

return statearr_15919;
})();
var statearr_15922_18203 = state_15714__$1;
(statearr_15922_18203[(2)] = null);

(statearr_15922_18203[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (14))){
var state_15714__$1 = state_15714;
var statearr_15923_18205 = state_15714__$1;
(statearr_15923_18205[(2)] = null);

(statearr_15923_18205[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (45))){
var inst_15691 = (state_15714[(2)]);
var state_15714__$1 = state_15714;
var statearr_15925_18206 = state_15714__$1;
(statearr_15925_18206[(2)] = inst_15691);

(statearr_15925_18206[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (26))){
var inst_15629 = (state_15714[(27)]);
var inst_15687 = (state_15714[(2)]);
var inst_15688 = cljs.core.seq(inst_15629);
var state_15714__$1 = (function (){var statearr_15926 = state_15714;
(statearr_15926[(29)] = inst_15687);

return statearr_15926;
})();
if(inst_15688){
var statearr_15927_18207 = state_15714__$1;
(statearr_15927_18207[(1)] = (42));

} else {
var statearr_15928_18208 = state_15714__$1;
(statearr_15928_18208[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (16))){
var inst_15596 = (state_15714[(7)]);
var inst_15598 = cljs.core.chunked_seq_QMARK_(inst_15596);
var state_15714__$1 = state_15714;
if(inst_15598){
var statearr_15930_18209 = state_15714__$1;
(statearr_15930_18209[(1)] = (19));

} else {
var statearr_15932_18210 = state_15714__$1;
(statearr_15932_18210[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (38))){
var inst_15680 = (state_15714[(2)]);
var state_15714__$1 = state_15714;
var statearr_15935_18211 = state_15714__$1;
(statearr_15935_18211[(2)] = inst_15680);

(statearr_15935_18211[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (30))){
var state_15714__$1 = state_15714;
var statearr_15940_18213 = state_15714__$1;
(statearr_15940_18213[(2)] = null);

(statearr_15940_18213[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (10))){
var inst_15577 = (state_15714[(13)]);
var inst_15575 = (state_15714[(14)]);
var inst_15585 = cljs.core._nth(inst_15575,inst_15577);
var inst_15586 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15585,(0),null);
var inst_15587 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15585,(1),null);
var state_15714__$1 = (function (){var statearr_15942 = state_15714;
(statearr_15942[(24)] = inst_15586);

return statearr_15942;
})();
if(cljs.core.truth_(inst_15587)){
var statearr_15943_18215 = state_15714__$1;
(statearr_15943_18215[(1)] = (13));

} else {
var statearr_15944_18216 = state_15714__$1;
(statearr_15944_18216[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (18))){
var inst_15622 = (state_15714[(2)]);
var state_15714__$1 = state_15714;
var statearr_15947_18218 = state_15714__$1;
(statearr_15947_18218[(2)] = inst_15622);

(statearr_15947_18218[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (42))){
var state_15714__$1 = state_15714;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15714__$1,(45),dchan);
} else {
if((state_val_15715 === (37))){
var inst_15660 = (state_15714[(23)]);
var inst_15670 = (state_15714[(22)]);
var inst_15564 = (state_15714[(12)]);
var inst_15670__$1 = cljs.core.first(inst_15660);
var inst_15671 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15670__$1,inst_15564,done);
var state_15714__$1 = (function (){var statearr_15949 = state_15714;
(statearr_15949[(22)] = inst_15670__$1);

return statearr_15949;
})();
if(cljs.core.truth_(inst_15671)){
var statearr_15950_18219 = state_15714__$1;
(statearr_15950_18219[(1)] = (39));

} else {
var statearr_15951_18220 = state_15714__$1;
(statearr_15951_18220[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (8))){
var inst_15577 = (state_15714[(13)]);
var inst_15576 = (state_15714[(17)]);
var inst_15579 = (inst_15577 < inst_15576);
var inst_15580 = inst_15579;
var state_15714__$1 = state_15714;
if(cljs.core.truth_(inst_15580)){
var statearr_15952_18221 = state_15714__$1;
(statearr_15952_18221[(1)] = (10));

} else {
var statearr_15953_18222 = state_15714__$1;
(statearr_15953_18222[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__14294__auto__ = null;
var cljs$core$async$mult_$_state_machine__14294__auto____0 = (function (){
var statearr_15957 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15957[(0)] = cljs$core$async$mult_$_state_machine__14294__auto__);

(statearr_15957[(1)] = (1));

return statearr_15957;
});
var cljs$core$async$mult_$_state_machine__14294__auto____1 = (function (state_15714){
while(true){
var ret_value__14295__auto__ = (function (){try{while(true){
var result__14296__auto__ = switch__14293__auto__(state_15714);
if(cljs.core.keyword_identical_QMARK_(result__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14296__auto__;
}
break;
}
}catch (e15961){var ex__14297__auto__ = e15961;
var statearr_15963_18225 = state_15714;
(statearr_15963_18225[(2)] = ex__14297__auto__);


if(cljs.core.seq((state_15714[(4)]))){
var statearr_15966_18226 = state_15714;
(statearr_15966_18226[(1)] = cljs.core.first((state_15714[(4)])));

} else {
throw ex__14297__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18227 = state_15714;
state_15714 = G__18227;
continue;
} else {
return ret_value__14295__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14294__auto__ = function(state_15714){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14294__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14294__auto____1.call(this,state_15714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__14294__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14294__auto____0;
cljs$core$async$mult_$_state_machine__14294__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14294__auto____1;
return cljs$core$async$mult_$_state_machine__14294__auto__;
})()
})();
var state__14488__auto__ = (function (){var statearr_15967 = f__14487__auto__();
(statearr_15967[(6)] = c__14486__auto___18092);

return statearr_15967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14488__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__15969 = arguments.length;
switch (G__15969) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_18238 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_18238(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_18240 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_18240(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_18254 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_18254(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_18256 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null, m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null, m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_18256(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_18262 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null, m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null, m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_18262(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18266 = arguments.length;
var i__5727__auto___18267 = (0);
while(true){
if((i__5727__auto___18267 < len__5726__auto___18266)){
args__5732__auto__.push((arguments[i__5727__auto___18267]));

var G__18268 = (i__5727__auto___18267 + (1));
i__5727__auto___18267 = G__18268;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16002){
var map__16003 = p__16002;
var map__16003__$1 = cljs.core.__destructure_map(map__16003);
var opts = map__16003__$1;
var statearr_16004_18270 = state;
(statearr_16004_18270[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_16005_18271 = state;
(statearr_16005_18271[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_16010_18274 = state;
(statearr_16010_18274[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15993){
var G__15994 = cljs.core.first(seq15993);
var seq15993__$1 = cljs.core.next(seq15993);
var G__15995 = cljs.core.first(seq15993__$1);
var seq15993__$2 = cljs.core.next(seq15993__$1);
var G__15996 = cljs.core.first(seq15993__$2);
var seq15993__$3 = cljs.core.next(seq15993__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15994,G__15995,G__15996,seq15993__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16018 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16019){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16019 = meta16019;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16018.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16020,meta16019__$1){
var self__ = this;
var _16020__$1 = this;
return (new cljs.core.async.t_cljs$core$async16018(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16019__$1));
}));

(cljs.core.async.t_cljs$core$async16018.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16020){
var self__ = this;
var _16020__$1 = this;
return self__.meta16019;
}));

(cljs.core.async.t_cljs$core$async16018.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16018.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async16018.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16018.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16018.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16018.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16018.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16018.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null, mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16018.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta16019","meta16019",-807998607,null)], null);
}));

(cljs.core.async.t_cljs$core$async16018.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16018.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16018");

(cljs.core.async.t_cljs$core$async16018.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16018");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16018.
 */
cljs.core.async.__GT_t_cljs$core$async16018 = (function cljs$core$async$__GT_t_cljs$core$async16018(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16019){
return (new cljs.core.async.t_cljs$core$async16018(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16019));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null, v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async16018(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__14486__auto___18312 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14487__auto__ = (function (){var switch__14293__auto__ = (function (state_16108){
var state_val_16109 = (state_16108[(1)]);
if((state_val_16109 === (7))){
var inst_16061 = (state_16108[(2)]);
var state_16108__$1 = state_16108;
if(cljs.core.truth_(inst_16061)){
var statearr_16113_18313 = state_16108__$1;
(statearr_16113_18313[(1)] = (8));

} else {
var statearr_16114_18314 = state_16108__$1;
(statearr_16114_18314[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16109 === (20))){
var inst_16052 = (state_16108[(7)]);
var state_16108__$1 = state_16108;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16108__$1,(23),out,inst_16052);
} else {
if((state_val_16109 === (1))){
var inst_16035 = calc_state();
var inst_16036 = cljs.core.__destructure_map(inst_16035);
var inst_16037 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16036,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16038 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16036,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16039 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16036,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16040 = inst_16035;
var state_16108__$1 = (function (){var statearr_16115 = state_16108;
(statearr_16115[(8)] = inst_16039);

(statearr_16115[(9)] = inst_16038);

(statearr_16115[(10)] = inst_16040);

(statearr_16115[(11)] = inst_16037);

return statearr_16115;
})();
var statearr_16116_18320 = state_16108__$1;
(statearr_16116_18320[(2)] = null);

(statearr_16116_18320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16109 === (24))){
var inst_16043 = (state_16108[(12)]);
var inst_16040 = inst_16043;
var state_16108__$1 = (function (){var statearr_16125 = state_16108;
(statearr_16125[(10)] = inst_16040);

return statearr_16125;
})();
var statearr_16126_18321 = state_16108__$1;
(statearr_16126_18321[(2)] = null);

(statearr_16126_18321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16109 === (4))){
var inst_16052 = (state_16108[(7)]);
var inst_16056 = (state_16108[(13)]);
var inst_16051 = (state_16108[(2)]);
var inst_16052__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16051,(0),null);
var inst_16053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16051,(1),null);
var inst_16056__$1 = (inst_16052__$1 == null);
var state_16108__$1 = (function (){var statearr_16127 = state_16108;
(statearr_16127[(14)] = inst_16053);

(statearr_16127[(7)] = inst_16052__$1);

(statearr_16127[(13)] = inst_16056__$1);

return statearr_16127;
})();
if(cljs.core.truth_(inst_16056__$1)){
var statearr_16128_18323 = state_16108__$1;
(statearr_16128_18323[(1)] = (5));

} else {
var statearr_16129_18325 = state_16108__$1;
(statearr_16129_18325[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16109 === (15))){
var inst_16078 = (state_16108[(15)]);
var inst_16044 = (state_16108[(16)]);
var inst_16078__$1 = cljs.core.empty_QMARK_(inst_16044);
var state_16108__$1 = (function (){var statearr_16139 = state_16108;
(statearr_16139[(15)] = inst_16078__$1);

return statearr_16139;
})();
if(inst_16078__$1){
var statearr_16140_18328 = state_16108__$1;
(statearr_16140_18328[(1)] = (17));

} else {
var statearr_16141_18334 = state_16108__$1;
(statearr_16141_18334[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16109 === (21))){
var inst_16043 = (state_16108[(12)]);
var inst_16040 = inst_16043;
var state_16108__$1 = (function (){var statearr_16142 = state_16108;
(statearr_16142[(10)] = inst_16040);

return statearr_16142;
})();
var statearr_16143_18338 = state_16108__$1;
(statearr_16143_18338[(2)] = null);

(statearr_16143_18338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16109 === (13))){
var inst_16068 = (state_16108[(2)]);
var inst_16069 = calc_state();
var inst_16040 = inst_16069;
var state_16108__$1 = (function (){var statearr_16146 = state_16108;
(statearr_16146[(17)] = inst_16068);

(statearr_16146[(10)] = inst_16040);

return statearr_16146;
})();
var statearr_16147_18339 = state_16108__$1;
(statearr_16147_18339[(2)] = null);

(statearr_16147_18339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16109 === (22))){
var inst_16101 = (state_16108[(2)]);
var state_16108__$1 = state_16108;
var statearr_16148_18341 = state_16108__$1;
(statearr_16148_18341[(2)] = inst_16101);

(statearr_16148_18341[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16109 === (6))){
var inst_16053 = (state_16108[(14)]);
var inst_16059 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16053,change);
var state_16108__$1 = state_16108;
var statearr_16152_18342 = state_16108__$1;
(statearr_16152_18342[(2)] = inst_16059);

(statearr_16152_18342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16109 === (25))){
var state_16108__$1 = state_16108;
var statearr_16153_18343 = state_16108__$1;
(statearr_16153_18343[(2)] = null);

(statearr_16153_18343[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16109 === (17))){
var inst_16053 = (state_16108[(14)]);
var inst_16045 = (state_16108[(18)]);
var inst_16081 = (inst_16045.cljs$core$IFn$_invoke$arity$1 ? inst_16045.cljs$core$IFn$_invoke$arity$1(inst_16053) : inst_16045.call(null, inst_16053));
var inst_16082 = cljs.core.not(inst_16081);
var state_16108__$1 = state_16108;
var statearr_16154_18348 = state_16108__$1;
(statearr_16154_18348[(2)] = inst_16082);

(statearr_16154_18348[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16109 === (3))){
var inst_16105 = (state_16108[(2)]);
var state_16108__$1 = state_16108;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16108__$1,inst_16105);
} else {
if((state_val_16109 === (12))){
var state_16108__$1 = state_16108;
var statearr_16157_18359 = state_16108__$1;
(statearr_16157_18359[(2)] = null);

(statearr_16157_18359[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16109 === (2))){
var inst_16043 = (state_16108[(12)]);
var inst_16040 = (state_16108[(10)]);
var inst_16043__$1 = cljs.core.__destructure_map(inst_16040);
var inst_16044 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16043__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16045 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16043__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16046 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16043__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16108__$1 = (function (){var statearr_16158 = state_16108;
(statearr_16158[(12)] = inst_16043__$1);

(statearr_16158[(18)] = inst_16045);

(statearr_16158[(16)] = inst_16044);

return statearr_16158;
})();
return cljs.core.async.ioc_alts_BANG_(state_16108__$1,(4),inst_16046);
} else {
if((state_val_16109 === (23))){
var inst_16092 = (state_16108[(2)]);
var state_16108__$1 = state_16108;
if(cljs.core.truth_(inst_16092)){
var statearr_16163_18361 = state_16108__$1;
(statearr_16163_18361[(1)] = (24));

} else {
var statearr_16164_18364 = state_16108__$1;
(statearr_16164_18364[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16109 === (19))){
var inst_16085 = (state_16108[(2)]);
var state_16108__$1 = state_16108;
var statearr_16165_18366 = state_16108__$1;
(statearr_16165_18366[(2)] = inst_16085);

(statearr_16165_18366[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16109 === (11))){
var inst_16053 = (state_16108[(14)]);
var inst_16065 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16053);
var state_16108__$1 = state_16108;
var statearr_16166_18367 = state_16108__$1;
(statearr_16166_18367[(2)] = inst_16065);

(statearr_16166_18367[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16109 === (9))){
var inst_16053 = (state_16108[(14)]);
var inst_16073 = (state_16108[(19)]);
var inst_16044 = (state_16108[(16)]);
var inst_16073__$1 = (inst_16044.cljs$core$IFn$_invoke$arity$1 ? inst_16044.cljs$core$IFn$_invoke$arity$1(inst_16053) : inst_16044.call(null, inst_16053));
var state_16108__$1 = (function (){var statearr_16167 = state_16108;
(statearr_16167[(19)] = inst_16073__$1);

return statearr_16167;
})();
if(cljs.core.truth_(inst_16073__$1)){
var statearr_16168_18375 = state_16108__$1;
(statearr_16168_18375[(1)] = (14));

} else {
var statearr_16169_18376 = state_16108__$1;
(statearr_16169_18376[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16109 === (5))){
var inst_16056 = (state_16108[(13)]);
var state_16108__$1 = state_16108;
var statearr_16170_18377 = state_16108__$1;
(statearr_16170_18377[(2)] = inst_16056);

(statearr_16170_18377[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16109 === (14))){
var inst_16073 = (state_16108[(19)]);
var state_16108__$1 = state_16108;
var statearr_16171_18378 = state_16108__$1;
(statearr_16171_18378[(2)] = inst_16073);

(statearr_16171_18378[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16109 === (26))){
var inst_16097 = (state_16108[(2)]);
var state_16108__$1 = state_16108;
var statearr_16172_18379 = state_16108__$1;
(statearr_16172_18379[(2)] = inst_16097);

(statearr_16172_18379[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16109 === (16))){
var inst_16087 = (state_16108[(2)]);
var state_16108__$1 = state_16108;
if(cljs.core.truth_(inst_16087)){
var statearr_16173_18380 = state_16108__$1;
(statearr_16173_18380[(1)] = (20));

} else {
var statearr_16174_18381 = state_16108__$1;
(statearr_16174_18381[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16109 === (10))){
var inst_16103 = (state_16108[(2)]);
var state_16108__$1 = state_16108;
var statearr_16175_18385 = state_16108__$1;
(statearr_16175_18385[(2)] = inst_16103);

(statearr_16175_18385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16109 === (18))){
var inst_16078 = (state_16108[(15)]);
var state_16108__$1 = state_16108;
var statearr_16176_18388 = state_16108__$1;
(statearr_16176_18388[(2)] = inst_16078);

(statearr_16176_18388[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16109 === (8))){
var inst_16052 = (state_16108[(7)]);
var inst_16063 = (inst_16052 == null);
var state_16108__$1 = state_16108;
if(cljs.core.truth_(inst_16063)){
var statearr_16177_18394 = state_16108__$1;
(statearr_16177_18394[(1)] = (11));

} else {
var statearr_16178_18398 = state_16108__$1;
(statearr_16178_18398[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__14294__auto__ = null;
var cljs$core$async$mix_$_state_machine__14294__auto____0 = (function (){
var statearr_16179 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16179[(0)] = cljs$core$async$mix_$_state_machine__14294__auto__);

(statearr_16179[(1)] = (1));

return statearr_16179;
});
var cljs$core$async$mix_$_state_machine__14294__auto____1 = (function (state_16108){
while(true){
var ret_value__14295__auto__ = (function (){try{while(true){
var result__14296__auto__ = switch__14293__auto__(state_16108);
if(cljs.core.keyword_identical_QMARK_(result__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14296__auto__;
}
break;
}
}catch (e16180){var ex__14297__auto__ = e16180;
var statearr_16181_18399 = state_16108;
(statearr_16181_18399[(2)] = ex__14297__auto__);


if(cljs.core.seq((state_16108[(4)]))){
var statearr_16182_18400 = state_16108;
(statearr_16182_18400[(1)] = cljs.core.first((state_16108[(4)])));

} else {
throw ex__14297__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18402 = state_16108;
state_16108 = G__18402;
continue;
} else {
return ret_value__14295__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14294__auto__ = function(state_16108){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14294__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14294__auto____1.call(this,state_16108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__14294__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14294__auto____0;
cljs$core$async$mix_$_state_machine__14294__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14294__auto____1;
return cljs$core$async$mix_$_state_machine__14294__auto__;
})()
})();
var state__14488__auto__ = (function (){var statearr_16183 = f__14487__auto__();
(statearr_16183[(6)] = c__14486__auto___18312);

return statearr_16183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14488__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_18408 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null, p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null, p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_18408(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_18410 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null, p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null, p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_18410(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_18416 = (function() {
var G__18417 = null;
var G__18417__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null, p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null, p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__18417__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null, p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null, p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__18417 = function(p,v){
switch(arguments.length){
case 1:
return G__18417__1.call(this,p);
case 2:
return G__18417__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18417.cljs$core$IFn$_invoke$arity$1 = G__18417__1;
G__18417.cljs$core$IFn$_invoke$arity$2 = G__18417__2;
return G__18417;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16205 = arguments.length;
switch (G__16205) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18416(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18416(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16212 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16213){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16213 = meta16213;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16212.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16214,meta16213__$1){
var self__ = this;
var _16214__$1 = this;
return (new cljs.core.async.t_cljs$core$async16212(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16213__$1));
}));

(cljs.core.async.t_cljs$core$async16212.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16214){
var self__ = this;
var _16214__$1 = this;
return self__.meta16213;
}));

(cljs.core.async.t_cljs$core$async16212.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16212.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16212.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16212.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null, topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async16212.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async16212.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async16212.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async16212.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16213","meta16213",863151504,null)], null);
}));

(cljs.core.async.t_cljs$core$async16212.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16212.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16212");

(cljs.core.async.t_cljs$core$async16212.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16212");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16212.
 */
cljs.core.async.__GT_t_cljs$core$async16212 = (function cljs$core$async$__GT_t_cljs$core$async16212(ch,topic_fn,buf_fn,mults,ensure_mult,meta16213){
return (new cljs.core.async.t_cljs$core$async16212(ch,topic_fn,buf_fn,mults,ensure_mult,meta16213));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__16211 = arguments.length;
switch (G__16211) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__16209_SHARP_){
if(cljs.core.truth_((p1__16209_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16209_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16209_SHARP_.call(null, topic)))){
return p1__16209_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16209_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null, topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async16212(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__14486__auto___18458 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14487__auto__ = (function (){var switch__14293__auto__ = (function (state_16311){
var state_val_16312 = (state_16311[(1)]);
if((state_val_16312 === (7))){
var inst_16307 = (state_16311[(2)]);
var state_16311__$1 = state_16311;
var statearr_16318_18459 = state_16311__$1;
(statearr_16318_18459[(2)] = inst_16307);

(statearr_16318_18459[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16312 === (20))){
var state_16311__$1 = state_16311;
var statearr_16319_18460 = state_16311__$1;
(statearr_16319_18460[(2)] = null);

(statearr_16319_18460[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16312 === (1))){
var state_16311__$1 = state_16311;
var statearr_16320_18462 = state_16311__$1;
(statearr_16320_18462[(2)] = null);

(statearr_16320_18462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16312 === (24))){
var inst_16289 = (state_16311[(7)]);
var inst_16298 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16289);
var state_16311__$1 = state_16311;
var statearr_16323_18463 = state_16311__$1;
(statearr_16323_18463[(2)] = inst_16298);

(statearr_16323_18463[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16312 === (4))){
var inst_16227 = (state_16311[(8)]);
var inst_16227__$1 = (state_16311[(2)]);
var inst_16228 = (inst_16227__$1 == null);
var state_16311__$1 = (function (){var statearr_16325 = state_16311;
(statearr_16325[(8)] = inst_16227__$1);

return statearr_16325;
})();
if(cljs.core.truth_(inst_16228)){
var statearr_16326_18469 = state_16311__$1;
(statearr_16326_18469[(1)] = (5));

} else {
var statearr_16327_18471 = state_16311__$1;
(statearr_16327_18471[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16312 === (15))){
var inst_16283 = (state_16311[(2)]);
var state_16311__$1 = state_16311;
var statearr_16328_18472 = state_16311__$1;
(statearr_16328_18472[(2)] = inst_16283);

(statearr_16328_18472[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16312 === (21))){
var inst_16304 = (state_16311[(2)]);
var state_16311__$1 = (function (){var statearr_16329 = state_16311;
(statearr_16329[(9)] = inst_16304);

return statearr_16329;
})();
var statearr_16330_18473 = state_16311__$1;
(statearr_16330_18473[(2)] = null);

(statearr_16330_18473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16312 === (13))){
var inst_16256 = (state_16311[(10)]);
var inst_16258 = cljs.core.chunked_seq_QMARK_(inst_16256);
var state_16311__$1 = state_16311;
if(inst_16258){
var statearr_16331_18474 = state_16311__$1;
(statearr_16331_18474[(1)] = (16));

} else {
var statearr_16332_18475 = state_16311__$1;
(statearr_16332_18475[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16312 === (22))){
var inst_16295 = (state_16311[(2)]);
var state_16311__$1 = state_16311;
if(cljs.core.truth_(inst_16295)){
var statearr_16333_18483 = state_16311__$1;
(statearr_16333_18483[(1)] = (23));

} else {
var statearr_16334_18484 = state_16311__$1;
(statearr_16334_18484[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16312 === (6))){
var inst_16227 = (state_16311[(8)]);
var inst_16289 = (state_16311[(7)]);
var inst_16291 = (state_16311[(11)]);
var inst_16289__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16227) : topic_fn.call(null, inst_16227));
var inst_16290 = cljs.core.deref(mults);
var inst_16291__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16290,inst_16289__$1);
var state_16311__$1 = (function (){var statearr_16336 = state_16311;
(statearr_16336[(7)] = inst_16289__$1);

(statearr_16336[(11)] = inst_16291__$1);

return statearr_16336;
})();
if(cljs.core.truth_(inst_16291__$1)){
var statearr_16337_18485 = state_16311__$1;
(statearr_16337_18485[(1)] = (19));

} else {
var statearr_16338_18486 = state_16311__$1;
(statearr_16338_18486[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16312 === (25))){
var inst_16300 = (state_16311[(2)]);
var state_16311__$1 = state_16311;
var statearr_16339_18491 = state_16311__$1;
(statearr_16339_18491[(2)] = inst_16300);

(statearr_16339_18491[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16312 === (17))){
var inst_16256 = (state_16311[(10)]);
var inst_16274 = cljs.core.first(inst_16256);
var inst_16275 = cljs.core.async.muxch_STAR_(inst_16274);
var inst_16276 = cljs.core.async.close_BANG_(inst_16275);
var inst_16277 = cljs.core.next(inst_16256);
var inst_16238 = inst_16277;
var inst_16239 = null;
var inst_16240 = (0);
var inst_16241 = (0);
var state_16311__$1 = (function (){var statearr_16341 = state_16311;
(statearr_16341[(12)] = inst_16240);

(statearr_16341[(13)] = inst_16239);

(statearr_16341[(14)] = inst_16276);

(statearr_16341[(15)] = inst_16238);

(statearr_16341[(16)] = inst_16241);

return statearr_16341;
})();
var statearr_16342_18504 = state_16311__$1;
(statearr_16342_18504[(2)] = null);

(statearr_16342_18504[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16312 === (3))){
var inst_16309 = (state_16311[(2)]);
var state_16311__$1 = state_16311;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16311__$1,inst_16309);
} else {
if((state_val_16312 === (12))){
var inst_16285 = (state_16311[(2)]);
var state_16311__$1 = state_16311;
var statearr_16343_18505 = state_16311__$1;
(statearr_16343_18505[(2)] = inst_16285);

(statearr_16343_18505[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16312 === (2))){
var state_16311__$1 = state_16311;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16311__$1,(4),ch);
} else {
if((state_val_16312 === (23))){
var state_16311__$1 = state_16311;
var statearr_16344_18532 = state_16311__$1;
(statearr_16344_18532[(2)] = null);

(statearr_16344_18532[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16312 === (19))){
var inst_16227 = (state_16311[(8)]);
var inst_16291 = (state_16311[(11)]);
var inst_16293 = cljs.core.async.muxch_STAR_(inst_16291);
var state_16311__$1 = state_16311;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16311__$1,(22),inst_16293,inst_16227);
} else {
if((state_val_16312 === (11))){
var inst_16238 = (state_16311[(15)]);
var inst_16256 = (state_16311[(10)]);
var inst_16256__$1 = cljs.core.seq(inst_16238);
var state_16311__$1 = (function (){var statearr_16346 = state_16311;
(statearr_16346[(10)] = inst_16256__$1);

return statearr_16346;
})();
if(inst_16256__$1){
var statearr_16348_18538 = state_16311__$1;
(statearr_16348_18538[(1)] = (13));

} else {
var statearr_16349_18539 = state_16311__$1;
(statearr_16349_18539[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16312 === (9))){
var inst_16287 = (state_16311[(2)]);
var state_16311__$1 = state_16311;
var statearr_16353_18540 = state_16311__$1;
(statearr_16353_18540[(2)] = inst_16287);

(statearr_16353_18540[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16312 === (5))){
var inst_16235 = cljs.core.deref(mults);
var inst_16236 = cljs.core.vals(inst_16235);
var inst_16237 = cljs.core.seq(inst_16236);
var inst_16238 = inst_16237;
var inst_16239 = null;
var inst_16240 = (0);
var inst_16241 = (0);
var state_16311__$1 = (function (){var statearr_16355 = state_16311;
(statearr_16355[(12)] = inst_16240);

(statearr_16355[(13)] = inst_16239);

(statearr_16355[(15)] = inst_16238);

(statearr_16355[(16)] = inst_16241);

return statearr_16355;
})();
var statearr_16356_18544 = state_16311__$1;
(statearr_16356_18544[(2)] = null);

(statearr_16356_18544[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16312 === (14))){
var state_16311__$1 = state_16311;
var statearr_16362_18545 = state_16311__$1;
(statearr_16362_18545[(2)] = null);

(statearr_16362_18545[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16312 === (16))){
var inst_16256 = (state_16311[(10)]);
var inst_16268 = cljs.core.chunk_first(inst_16256);
var inst_16269 = cljs.core.chunk_rest(inst_16256);
var inst_16271 = cljs.core.count(inst_16268);
var inst_16238 = inst_16269;
var inst_16239 = inst_16268;
var inst_16240 = inst_16271;
var inst_16241 = (0);
var state_16311__$1 = (function (){var statearr_16366 = state_16311;
(statearr_16366[(12)] = inst_16240);

(statearr_16366[(13)] = inst_16239);

(statearr_16366[(15)] = inst_16238);

(statearr_16366[(16)] = inst_16241);

return statearr_16366;
})();
var statearr_16369_18549 = state_16311__$1;
(statearr_16369_18549[(2)] = null);

(statearr_16369_18549[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16312 === (10))){
var inst_16240 = (state_16311[(12)]);
var inst_16239 = (state_16311[(13)]);
var inst_16238 = (state_16311[(15)]);
var inst_16241 = (state_16311[(16)]);
var inst_16246 = cljs.core._nth(inst_16239,inst_16241);
var inst_16249 = cljs.core.async.muxch_STAR_(inst_16246);
var inst_16250 = cljs.core.async.close_BANG_(inst_16249);
var inst_16253 = (inst_16241 + (1));
var tmp16358 = inst_16240;
var tmp16359 = inst_16239;
var tmp16360 = inst_16238;
var inst_16238__$1 = tmp16360;
var inst_16239__$1 = tmp16359;
var inst_16240__$1 = tmp16358;
var inst_16241__$1 = inst_16253;
var state_16311__$1 = (function (){var statearr_16374 = state_16311;
(statearr_16374[(12)] = inst_16240__$1);

(statearr_16374[(13)] = inst_16239__$1);

(statearr_16374[(15)] = inst_16238__$1);

(statearr_16374[(16)] = inst_16241__$1);

(statearr_16374[(17)] = inst_16250);

return statearr_16374;
})();
var statearr_16375_18553 = state_16311__$1;
(statearr_16375_18553[(2)] = null);

(statearr_16375_18553[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16312 === (18))){
var inst_16280 = (state_16311[(2)]);
var state_16311__$1 = state_16311;
var statearr_16377_18554 = state_16311__$1;
(statearr_16377_18554[(2)] = inst_16280);

(statearr_16377_18554[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16312 === (8))){
var inst_16240 = (state_16311[(12)]);
var inst_16241 = (state_16311[(16)]);
var inst_16243 = (inst_16241 < inst_16240);
var inst_16244 = inst_16243;
var state_16311__$1 = state_16311;
if(cljs.core.truth_(inst_16244)){
var statearr_16378_18556 = state_16311__$1;
(statearr_16378_18556[(1)] = (10));

} else {
var statearr_16379_18557 = state_16311__$1;
(statearr_16379_18557[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14294__auto__ = null;
var cljs$core$async$state_machine__14294__auto____0 = (function (){
var statearr_16380 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16380[(0)] = cljs$core$async$state_machine__14294__auto__);

(statearr_16380[(1)] = (1));

return statearr_16380;
});
var cljs$core$async$state_machine__14294__auto____1 = (function (state_16311){
while(true){
var ret_value__14295__auto__ = (function (){try{while(true){
var result__14296__auto__ = switch__14293__auto__(state_16311);
if(cljs.core.keyword_identical_QMARK_(result__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14296__auto__;
}
break;
}
}catch (e16381){var ex__14297__auto__ = e16381;
var statearr_16382_18558 = state_16311;
(statearr_16382_18558[(2)] = ex__14297__auto__);


if(cljs.core.seq((state_16311[(4)]))){
var statearr_16383_18559 = state_16311;
(statearr_16383_18559[(1)] = cljs.core.first((state_16311[(4)])));

} else {
throw ex__14297__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18560 = state_16311;
state_16311 = G__18560;
continue;
} else {
return ret_value__14295__auto__;
}
break;
}
});
cljs$core$async$state_machine__14294__auto__ = function(state_16311){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14294__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14294__auto____1.call(this,state_16311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14294__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14294__auto____0;
cljs$core$async$state_machine__14294__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14294__auto____1;
return cljs$core$async$state_machine__14294__auto__;
})()
})();
var state__14488__auto__ = (function (){var statearr_16385 = f__14487__auto__();
(statearr_16385[(6)] = c__14486__auto___18458);

return statearr_16385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14488__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__16387 = arguments.length;
switch (G__16387) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__16396 = arguments.length;
switch (G__16396) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__16404 = arguments.length;
switch (G__16404) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__14486__auto___18568 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14487__auto__ = (function (){var switch__14293__auto__ = (function (state_16471){
var state_val_16472 = (state_16471[(1)]);
if((state_val_16472 === (7))){
var state_16471__$1 = state_16471;
var statearr_16477_18569 = state_16471__$1;
(statearr_16477_18569[(2)] = null);

(statearr_16477_18569[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16472 === (1))){
var state_16471__$1 = state_16471;
var statearr_16478_18570 = state_16471__$1;
(statearr_16478_18570[(2)] = null);

(statearr_16478_18570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16472 === (4))){
var inst_16417 = (state_16471[(7)]);
var inst_16416 = (state_16471[(8)]);
var inst_16419 = (inst_16417 < inst_16416);
var state_16471__$1 = state_16471;
if(cljs.core.truth_(inst_16419)){
var statearr_16481_18571 = state_16471__$1;
(statearr_16481_18571[(1)] = (6));

} else {
var statearr_16482_18572 = state_16471__$1;
(statearr_16482_18572[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16472 === (15))){
var inst_16453 = (state_16471[(9)]);
var inst_16458 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16453);
var state_16471__$1 = state_16471;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16471__$1,(17),out,inst_16458);
} else {
if((state_val_16472 === (13))){
var inst_16453 = (state_16471[(9)]);
var inst_16453__$1 = (state_16471[(2)]);
var inst_16454 = cljs.core.some(cljs.core.nil_QMARK_,inst_16453__$1);
var state_16471__$1 = (function (){var statearr_16484 = state_16471;
(statearr_16484[(9)] = inst_16453__$1);

return statearr_16484;
})();
if(cljs.core.truth_(inst_16454)){
var statearr_16485_18583 = state_16471__$1;
(statearr_16485_18583[(1)] = (14));

} else {
var statearr_16486_18584 = state_16471__$1;
(statearr_16486_18584[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16472 === (6))){
var state_16471__$1 = state_16471;
var statearr_16487_18585 = state_16471__$1;
(statearr_16487_18585[(2)] = null);

(statearr_16487_18585[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16472 === (17))){
var inst_16460 = (state_16471[(2)]);
var state_16471__$1 = (function (){var statearr_16500 = state_16471;
(statearr_16500[(10)] = inst_16460);

return statearr_16500;
})();
var statearr_16503_18589 = state_16471__$1;
(statearr_16503_18589[(2)] = null);

(statearr_16503_18589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16472 === (3))){
var inst_16465 = (state_16471[(2)]);
var state_16471__$1 = state_16471;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16471__$1,inst_16465);
} else {
if((state_val_16472 === (12))){
var _ = (function (){var statearr_16510 = state_16471;
(statearr_16510[(4)] = cljs.core.rest((state_16471[(4)])));

return statearr_16510;
})();
var state_16471__$1 = state_16471;
var ex16495 = (state_16471__$1[(2)]);
var statearr_16511_18598 = state_16471__$1;
(statearr_16511_18598[(5)] = ex16495);


if((ex16495 instanceof Object)){
var statearr_16514_18599 = state_16471__$1;
(statearr_16514_18599[(1)] = (11));

(statearr_16514_18599[(5)] = null);

} else {
throw ex16495;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16472 === (2))){
var inst_16411 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16416 = cnt;
var inst_16417 = (0);
var state_16471__$1 = (function (){var statearr_16523 = state_16471;
(statearr_16523[(7)] = inst_16417);

(statearr_16523[(11)] = inst_16411);

(statearr_16523[(8)] = inst_16416);

return statearr_16523;
})();
var statearr_16524_18600 = state_16471__$1;
(statearr_16524_18600[(2)] = null);

(statearr_16524_18600[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16472 === (11))){
var inst_16429 = (state_16471[(2)]);
var inst_16430 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16471__$1 = (function (){var statearr_16530 = state_16471;
(statearr_16530[(12)] = inst_16429);

return statearr_16530;
})();
var statearr_16531_18605 = state_16471__$1;
(statearr_16531_18605[(2)] = inst_16430);

(statearr_16531_18605[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16472 === (9))){
var inst_16417 = (state_16471[(7)]);
var _ = (function (){var statearr_16534 = state_16471;
(statearr_16534[(4)] = cljs.core.cons((12),(state_16471[(4)])));

return statearr_16534;
})();
var inst_16436 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16417) : chs__$1.call(null, inst_16417));
var inst_16439 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16417) : done.call(null, inst_16417));
var inst_16440 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16436,inst_16439);
var ___$1 = (function (){var statearr_16540 = state_16471;
(statearr_16540[(4)] = cljs.core.rest((state_16471[(4)])));

return statearr_16540;
})();
var state_16471__$1 = state_16471;
var statearr_16542_18618 = state_16471__$1;
(statearr_16542_18618[(2)] = inst_16440);

(statearr_16542_18618[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16472 === (5))){
var inst_16451 = (state_16471[(2)]);
var state_16471__$1 = (function (){var statearr_16549 = state_16471;
(statearr_16549[(13)] = inst_16451);

return statearr_16549;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16471__$1,(13),dchan);
} else {
if((state_val_16472 === (14))){
var inst_16456 = cljs.core.async.close_BANG_(out);
var state_16471__$1 = state_16471;
var statearr_16552_18619 = state_16471__$1;
(statearr_16552_18619[(2)] = inst_16456);

(statearr_16552_18619[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16472 === (16))){
var inst_16463 = (state_16471[(2)]);
var state_16471__$1 = state_16471;
var statearr_16553_18620 = state_16471__$1;
(statearr_16553_18620[(2)] = inst_16463);

(statearr_16553_18620[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16472 === (10))){
var inst_16417 = (state_16471[(7)]);
var inst_16443 = (state_16471[(2)]);
var inst_16444 = (inst_16417 + (1));
var inst_16417__$1 = inst_16444;
var state_16471__$1 = (function (){var statearr_16554 = state_16471;
(statearr_16554[(14)] = inst_16443);

(statearr_16554[(7)] = inst_16417__$1);

return statearr_16554;
})();
var statearr_16555_18621 = state_16471__$1;
(statearr_16555_18621[(2)] = null);

(statearr_16555_18621[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16472 === (8))){
var inst_16449 = (state_16471[(2)]);
var state_16471__$1 = state_16471;
var statearr_16556_18622 = state_16471__$1;
(statearr_16556_18622[(2)] = inst_16449);

(statearr_16556_18622[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14294__auto__ = null;
var cljs$core$async$state_machine__14294__auto____0 = (function (){
var statearr_16564 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16564[(0)] = cljs$core$async$state_machine__14294__auto__);

(statearr_16564[(1)] = (1));

return statearr_16564;
});
var cljs$core$async$state_machine__14294__auto____1 = (function (state_16471){
while(true){
var ret_value__14295__auto__ = (function (){try{while(true){
var result__14296__auto__ = switch__14293__auto__(state_16471);
if(cljs.core.keyword_identical_QMARK_(result__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14296__auto__;
}
break;
}
}catch (e16568){var ex__14297__auto__ = e16568;
var statearr_16569_18623 = state_16471;
(statearr_16569_18623[(2)] = ex__14297__auto__);


if(cljs.core.seq((state_16471[(4)]))){
var statearr_16570_18627 = state_16471;
(statearr_16570_18627[(1)] = cljs.core.first((state_16471[(4)])));

} else {
throw ex__14297__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18628 = state_16471;
state_16471 = G__18628;
continue;
} else {
return ret_value__14295__auto__;
}
break;
}
});
cljs$core$async$state_machine__14294__auto__ = function(state_16471){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14294__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14294__auto____1.call(this,state_16471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14294__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14294__auto____0;
cljs$core$async$state_machine__14294__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14294__auto____1;
return cljs$core$async$state_machine__14294__auto__;
})()
})();
var state__14488__auto__ = (function (){var statearr_16572 = f__14487__auto__();
(statearr_16572[(6)] = c__14486__auto___18568);

return statearr_16572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14488__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__16585 = arguments.length;
switch (G__16585) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14486__auto___18631 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14487__auto__ = (function (){var switch__14293__auto__ = (function (state_16632){
var state_val_16633 = (state_16632[(1)]);
if((state_val_16633 === (7))){
var inst_16610 = (state_16632[(7)]);
var inst_16608 = (state_16632[(8)]);
var inst_16608__$1 = (state_16632[(2)]);
var inst_16610__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16608__$1,(0),null);
var inst_16611 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16608__$1,(1),null);
var inst_16612 = (inst_16610__$1 == null);
var state_16632__$1 = (function (){var statearr_16642 = state_16632;
(statearr_16642[(7)] = inst_16610__$1);

(statearr_16642[(8)] = inst_16608__$1);

(statearr_16642[(9)] = inst_16611);

return statearr_16642;
})();
if(cljs.core.truth_(inst_16612)){
var statearr_16644_18635 = state_16632__$1;
(statearr_16644_18635[(1)] = (8));

} else {
var statearr_16645_18636 = state_16632__$1;
(statearr_16645_18636[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16633 === (1))){
var inst_16594 = cljs.core.vec(chs);
var inst_16595 = inst_16594;
var state_16632__$1 = (function (){var statearr_16646 = state_16632;
(statearr_16646[(10)] = inst_16595);

return statearr_16646;
})();
var statearr_16649_18637 = state_16632__$1;
(statearr_16649_18637[(2)] = null);

(statearr_16649_18637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16633 === (4))){
var inst_16595 = (state_16632[(10)]);
var state_16632__$1 = state_16632;
return cljs.core.async.ioc_alts_BANG_(state_16632__$1,(7),inst_16595);
} else {
if((state_val_16633 === (6))){
var inst_16627 = (state_16632[(2)]);
var state_16632__$1 = state_16632;
var statearr_16652_18644 = state_16632__$1;
(statearr_16652_18644[(2)] = inst_16627);

(statearr_16652_18644[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16633 === (3))){
var inst_16629 = (state_16632[(2)]);
var state_16632__$1 = state_16632;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16632__$1,inst_16629);
} else {
if((state_val_16633 === (2))){
var inst_16595 = (state_16632[(10)]);
var inst_16597 = cljs.core.count(inst_16595);
var inst_16598 = (inst_16597 > (0));
var state_16632__$1 = state_16632;
if(cljs.core.truth_(inst_16598)){
var statearr_16661_18645 = state_16632__$1;
(statearr_16661_18645[(1)] = (4));

} else {
var statearr_16662_18646 = state_16632__$1;
(statearr_16662_18646[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16633 === (11))){
var inst_16595 = (state_16632[(10)]);
var inst_16620 = (state_16632[(2)]);
var tmp16655 = inst_16595;
var inst_16595__$1 = tmp16655;
var state_16632__$1 = (function (){var statearr_16664 = state_16632;
(statearr_16664[(10)] = inst_16595__$1);

(statearr_16664[(11)] = inst_16620);

return statearr_16664;
})();
var statearr_16665_18647 = state_16632__$1;
(statearr_16665_18647[(2)] = null);

(statearr_16665_18647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16633 === (9))){
var inst_16610 = (state_16632[(7)]);
var state_16632__$1 = state_16632;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16632__$1,(11),out,inst_16610);
} else {
if((state_val_16633 === (5))){
var inst_16625 = cljs.core.async.close_BANG_(out);
var state_16632__$1 = state_16632;
var statearr_16676_18648 = state_16632__$1;
(statearr_16676_18648[(2)] = inst_16625);

(statearr_16676_18648[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16633 === (10))){
var inst_16623 = (state_16632[(2)]);
var state_16632__$1 = state_16632;
var statearr_16679_18649 = state_16632__$1;
(statearr_16679_18649[(2)] = inst_16623);

(statearr_16679_18649[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16633 === (8))){
var inst_16610 = (state_16632[(7)]);
var inst_16595 = (state_16632[(10)]);
var inst_16608 = (state_16632[(8)]);
var inst_16611 = (state_16632[(9)]);
var inst_16614 = (function (){var cs = inst_16595;
var vec__16603 = inst_16608;
var v = inst_16610;
var c = inst_16611;
return (function (p1__16577_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16577_SHARP_);
});
})();
var inst_16616 = cljs.core.filterv(inst_16614,inst_16595);
var inst_16595__$1 = inst_16616;
var state_16632__$1 = (function (){var statearr_16684 = state_16632;
(statearr_16684[(10)] = inst_16595__$1);

return statearr_16684;
})();
var statearr_16696_18650 = state_16632__$1;
(statearr_16696_18650[(2)] = null);

(statearr_16696_18650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14294__auto__ = null;
var cljs$core$async$state_machine__14294__auto____0 = (function (){
var statearr_16701 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16701[(0)] = cljs$core$async$state_machine__14294__auto__);

(statearr_16701[(1)] = (1));

return statearr_16701;
});
var cljs$core$async$state_machine__14294__auto____1 = (function (state_16632){
while(true){
var ret_value__14295__auto__ = (function (){try{while(true){
var result__14296__auto__ = switch__14293__auto__(state_16632);
if(cljs.core.keyword_identical_QMARK_(result__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14296__auto__;
}
break;
}
}catch (e16702){var ex__14297__auto__ = e16702;
var statearr_16703_18651 = state_16632;
(statearr_16703_18651[(2)] = ex__14297__auto__);


if(cljs.core.seq((state_16632[(4)]))){
var statearr_16708_18652 = state_16632;
(statearr_16708_18652[(1)] = cljs.core.first((state_16632[(4)])));

} else {
throw ex__14297__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18653 = state_16632;
state_16632 = G__18653;
continue;
} else {
return ret_value__14295__auto__;
}
break;
}
});
cljs$core$async$state_machine__14294__auto__ = function(state_16632){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14294__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14294__auto____1.call(this,state_16632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14294__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14294__auto____0;
cljs$core$async$state_machine__14294__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14294__auto____1;
return cljs$core$async$state_machine__14294__auto__;
})()
})();
var state__14488__auto__ = (function (){var statearr_16716 = f__14487__auto__();
(statearr_16716[(6)] = c__14486__auto___18631);

return statearr_16716;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14488__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__16730 = arguments.length;
switch (G__16730) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14486__auto___18655 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14487__auto__ = (function (){var switch__14293__auto__ = (function (state_16767){
var state_val_16768 = (state_16767[(1)]);
if((state_val_16768 === (7))){
var inst_16749 = (state_16767[(7)]);
var inst_16749__$1 = (state_16767[(2)]);
var inst_16750 = (inst_16749__$1 == null);
var inst_16751 = cljs.core.not(inst_16750);
var state_16767__$1 = (function (){var statearr_16772 = state_16767;
(statearr_16772[(7)] = inst_16749__$1);

return statearr_16772;
})();
if(inst_16751){
var statearr_16775_18656 = state_16767__$1;
(statearr_16775_18656[(1)] = (8));

} else {
var statearr_16777_18657 = state_16767__$1;
(statearr_16777_18657[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16768 === (1))){
var inst_16741 = (0);
var state_16767__$1 = (function (){var statearr_16778 = state_16767;
(statearr_16778[(8)] = inst_16741);

return statearr_16778;
})();
var statearr_16779_18658 = state_16767__$1;
(statearr_16779_18658[(2)] = null);

(statearr_16779_18658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16768 === (4))){
var state_16767__$1 = state_16767;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16767__$1,(7),ch);
} else {
if((state_val_16768 === (6))){
var inst_16762 = (state_16767[(2)]);
var state_16767__$1 = state_16767;
var statearr_16781_18659 = state_16767__$1;
(statearr_16781_18659[(2)] = inst_16762);

(statearr_16781_18659[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16768 === (3))){
var inst_16764 = (state_16767[(2)]);
var inst_16765 = cljs.core.async.close_BANG_(out);
var state_16767__$1 = (function (){var statearr_16785 = state_16767;
(statearr_16785[(9)] = inst_16764);

return statearr_16785;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16767__$1,inst_16765);
} else {
if((state_val_16768 === (2))){
var inst_16741 = (state_16767[(8)]);
var inst_16744 = (inst_16741 < n);
var state_16767__$1 = state_16767;
if(cljs.core.truth_(inst_16744)){
var statearr_16787_18660 = state_16767__$1;
(statearr_16787_18660[(1)] = (4));

} else {
var statearr_16788_18661 = state_16767__$1;
(statearr_16788_18661[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16768 === (11))){
var inst_16741 = (state_16767[(8)]);
var inst_16754 = (state_16767[(2)]);
var inst_16755 = (inst_16741 + (1));
var inst_16741__$1 = inst_16755;
var state_16767__$1 = (function (){var statearr_16792 = state_16767;
(statearr_16792[(8)] = inst_16741__$1);

(statearr_16792[(10)] = inst_16754);

return statearr_16792;
})();
var statearr_16793_18662 = state_16767__$1;
(statearr_16793_18662[(2)] = null);

(statearr_16793_18662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16768 === (9))){
var state_16767__$1 = state_16767;
var statearr_16794_18663 = state_16767__$1;
(statearr_16794_18663[(2)] = null);

(statearr_16794_18663[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16768 === (5))){
var state_16767__$1 = state_16767;
var statearr_16795_18664 = state_16767__$1;
(statearr_16795_18664[(2)] = null);

(statearr_16795_18664[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16768 === (10))){
var inst_16759 = (state_16767[(2)]);
var state_16767__$1 = state_16767;
var statearr_16799_18665 = state_16767__$1;
(statearr_16799_18665[(2)] = inst_16759);

(statearr_16799_18665[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16768 === (8))){
var inst_16749 = (state_16767[(7)]);
var state_16767__$1 = state_16767;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16767__$1,(11),out,inst_16749);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14294__auto__ = null;
var cljs$core$async$state_machine__14294__auto____0 = (function (){
var statearr_16806 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16806[(0)] = cljs$core$async$state_machine__14294__auto__);

(statearr_16806[(1)] = (1));

return statearr_16806;
});
var cljs$core$async$state_machine__14294__auto____1 = (function (state_16767){
while(true){
var ret_value__14295__auto__ = (function (){try{while(true){
var result__14296__auto__ = switch__14293__auto__(state_16767);
if(cljs.core.keyword_identical_QMARK_(result__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14296__auto__;
}
break;
}
}catch (e16808){var ex__14297__auto__ = e16808;
var statearr_16809_18666 = state_16767;
(statearr_16809_18666[(2)] = ex__14297__auto__);


if(cljs.core.seq((state_16767[(4)]))){
var statearr_16810_18667 = state_16767;
(statearr_16810_18667[(1)] = cljs.core.first((state_16767[(4)])));

} else {
throw ex__14297__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18671 = state_16767;
state_16767 = G__18671;
continue;
} else {
return ret_value__14295__auto__;
}
break;
}
});
cljs$core$async$state_machine__14294__auto__ = function(state_16767){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14294__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14294__auto____1.call(this,state_16767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14294__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14294__auto____0;
cljs$core$async$state_machine__14294__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14294__auto____1;
return cljs$core$async$state_machine__14294__auto__;
})()
})();
var state__14488__auto__ = (function (){var statearr_16818 = f__14487__auto__();
(statearr_16818[(6)] = c__14486__auto___18655);

return statearr_16818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14488__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16838 = (function (f,ch,meta16825,_,fn1,meta16839){
this.f = f;
this.ch = ch;
this.meta16825 = meta16825;
this._ = _;
this.fn1 = fn1;
this.meta16839 = meta16839;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16838.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16840,meta16839__$1){
var self__ = this;
var _16840__$1 = this;
return (new cljs.core.async.t_cljs$core$async16838(self__.f,self__.ch,self__.meta16825,self__._,self__.fn1,meta16839__$1));
}));

(cljs.core.async.t_cljs$core$async16838.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16840){
var self__ = this;
var _16840__$1 = this;
return self__.meta16839;
}));

(cljs.core.async.t_cljs$core$async16838.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16838.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async16838.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16838.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__16820_SHARP_){
var G__16850 = (((p1__16820_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__16820_SHARP_) : self__.f.call(null, p1__16820_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__16850) : f1.call(null, G__16850));
});
}));

(cljs.core.async.t_cljs$core$async16838.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16825","meta16825",673346867,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async16824","cljs.core.async/t_cljs$core$async16824",621241074,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta16839","meta16839",255253542,null)], null);
}));

(cljs.core.async.t_cljs$core$async16838.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16838.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16838");

(cljs.core.async.t_cljs$core$async16838.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16838");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16838.
 */
cljs.core.async.__GT_t_cljs$core$async16838 = (function cljs$core$async$__GT_t_cljs$core$async16838(f,ch,meta16825,_,fn1,meta16839){
return (new cljs.core.async.t_cljs$core$async16838(f,ch,meta16825,_,fn1,meta16839));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16824 = (function (f,ch,meta16825){
this.f = f;
this.ch = ch;
this.meta16825 = meta16825;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16824.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16826,meta16825__$1){
var self__ = this;
var _16826__$1 = this;
return (new cljs.core.async.t_cljs$core$async16824(self__.f,self__.ch,meta16825__$1));
}));

(cljs.core.async.t_cljs$core$async16824.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16826){
var self__ = this;
var _16826__$1 = this;
return self__.meta16825;
}));

(cljs.core.async.t_cljs$core$async16824.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16824.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16824.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16824.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16824.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async16838(self__.f,self__.ch,self__.meta16825,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__16860 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__16860) : self__.f.call(null, G__16860));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async16824.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16824.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async16824.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16825","meta16825",673346867,null)], null);
}));

(cljs.core.async.t_cljs$core$async16824.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16824.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16824");

(cljs.core.async.t_cljs$core$async16824.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16824");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16824.
 */
cljs.core.async.__GT_t_cljs$core$async16824 = (function cljs$core$async$__GT_t_cljs$core$async16824(f,ch,meta16825){
return (new cljs.core.async.t_cljs$core$async16824(f,ch,meta16825));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async16824(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16865 = (function (f,ch,meta16866){
this.f = f;
this.ch = ch;
this.meta16866 = meta16866;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16865.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16867,meta16866__$1){
var self__ = this;
var _16867__$1 = this;
return (new cljs.core.async.t_cljs$core$async16865(self__.f,self__.ch,meta16866__$1));
}));

(cljs.core.async.t_cljs$core$async16865.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16867){
var self__ = this;
var _16867__$1 = this;
return self__.meta16866;
}));

(cljs.core.async.t_cljs$core$async16865.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16865.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16865.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16865.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16865.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16865.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null, val)),fn1);
}));

(cljs.core.async.t_cljs$core$async16865.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16866","meta16866",-276298300,null)], null);
}));

(cljs.core.async.t_cljs$core$async16865.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16865.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16865");

(cljs.core.async.t_cljs$core$async16865.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16865");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16865.
 */
cljs.core.async.__GT_t_cljs$core$async16865 = (function cljs$core$async$__GT_t_cljs$core$async16865(f,ch,meta16866){
return (new cljs.core.async.t_cljs$core$async16865(f,ch,meta16866));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async16865(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16932 = (function (p,ch,meta16933){
this.p = p;
this.ch = ch;
this.meta16933 = meta16933;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16932.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16934,meta16933__$1){
var self__ = this;
var _16934__$1 = this;
return (new cljs.core.async.t_cljs$core$async16932(self__.p,self__.ch,meta16933__$1));
}));

(cljs.core.async.t_cljs$core$async16932.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16934){
var self__ = this;
var _16934__$1 = this;
return self__.meta16933;
}));

(cljs.core.async.t_cljs$core$async16932.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16932.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16932.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16932.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16932.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16932.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16932.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null, val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async16932.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16933","meta16933",-986406734,null)], null);
}));

(cljs.core.async.t_cljs$core$async16932.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16932.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16932");

(cljs.core.async.t_cljs$core$async16932.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16932");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16932.
 */
cljs.core.async.__GT_t_cljs$core$async16932 = (function cljs$core$async$__GT_t_cljs$core$async16932(p,ch,meta16933){
return (new cljs.core.async.t_cljs$core$async16932(p,ch,meta16933));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async16932(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__16972 = arguments.length;
switch (G__16972) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14486__auto___18719 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14487__auto__ = (function (){var switch__14293__auto__ = (function (state_16994){
var state_val_16995 = (state_16994[(1)]);
if((state_val_16995 === (7))){
var inst_16990 = (state_16994[(2)]);
var state_16994__$1 = state_16994;
var statearr_17004_18720 = state_16994__$1;
(statearr_17004_18720[(2)] = inst_16990);

(statearr_17004_18720[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16995 === (1))){
var state_16994__$1 = state_16994;
var statearr_17005_18723 = state_16994__$1;
(statearr_17005_18723[(2)] = null);

(statearr_17005_18723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16995 === (4))){
var inst_16976 = (state_16994[(7)]);
var inst_16976__$1 = (state_16994[(2)]);
var inst_16977 = (inst_16976__$1 == null);
var state_16994__$1 = (function (){var statearr_17006 = state_16994;
(statearr_17006[(7)] = inst_16976__$1);

return statearr_17006;
})();
if(cljs.core.truth_(inst_16977)){
var statearr_17009_18725 = state_16994__$1;
(statearr_17009_18725[(1)] = (5));

} else {
var statearr_17011_18726 = state_16994__$1;
(statearr_17011_18726[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16995 === (6))){
var inst_16976 = (state_16994[(7)]);
var inst_16981 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16976) : p.call(null, inst_16976));
var state_16994__$1 = state_16994;
if(cljs.core.truth_(inst_16981)){
var statearr_17013_18727 = state_16994__$1;
(statearr_17013_18727[(1)] = (8));

} else {
var statearr_17014_18728 = state_16994__$1;
(statearr_17014_18728[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16995 === (3))){
var inst_16992 = (state_16994[(2)]);
var state_16994__$1 = state_16994;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16994__$1,inst_16992);
} else {
if((state_val_16995 === (2))){
var state_16994__$1 = state_16994;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16994__$1,(4),ch);
} else {
if((state_val_16995 === (11))){
var inst_16984 = (state_16994[(2)]);
var state_16994__$1 = state_16994;
var statearr_17019_18729 = state_16994__$1;
(statearr_17019_18729[(2)] = inst_16984);

(statearr_17019_18729[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16995 === (9))){
var state_16994__$1 = state_16994;
var statearr_17020_18730 = state_16994__$1;
(statearr_17020_18730[(2)] = null);

(statearr_17020_18730[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16995 === (5))){
var inst_16979 = cljs.core.async.close_BANG_(out);
var state_16994__$1 = state_16994;
var statearr_17026_18731 = state_16994__$1;
(statearr_17026_18731[(2)] = inst_16979);

(statearr_17026_18731[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16995 === (10))){
var inst_16987 = (state_16994[(2)]);
var state_16994__$1 = (function (){var statearr_17027 = state_16994;
(statearr_17027[(8)] = inst_16987);

return statearr_17027;
})();
var statearr_17028_18733 = state_16994__$1;
(statearr_17028_18733[(2)] = null);

(statearr_17028_18733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16995 === (8))){
var inst_16976 = (state_16994[(7)]);
var state_16994__$1 = state_16994;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16994__$1,(11),out,inst_16976);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14294__auto__ = null;
var cljs$core$async$state_machine__14294__auto____0 = (function (){
var statearr_17039 = [null,null,null,null,null,null,null,null,null];
(statearr_17039[(0)] = cljs$core$async$state_machine__14294__auto__);

(statearr_17039[(1)] = (1));

return statearr_17039;
});
var cljs$core$async$state_machine__14294__auto____1 = (function (state_16994){
while(true){
var ret_value__14295__auto__ = (function (){try{while(true){
var result__14296__auto__ = switch__14293__auto__(state_16994);
if(cljs.core.keyword_identical_QMARK_(result__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14296__auto__;
}
break;
}
}catch (e17041){var ex__14297__auto__ = e17041;
var statearr_17042_18734 = state_16994;
(statearr_17042_18734[(2)] = ex__14297__auto__);


if(cljs.core.seq((state_16994[(4)]))){
var statearr_17043_18735 = state_16994;
(statearr_17043_18735[(1)] = cljs.core.first((state_16994[(4)])));

} else {
throw ex__14297__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18736 = state_16994;
state_16994 = G__18736;
continue;
} else {
return ret_value__14295__auto__;
}
break;
}
});
cljs$core$async$state_machine__14294__auto__ = function(state_16994){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14294__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14294__auto____1.call(this,state_16994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14294__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14294__auto____0;
cljs$core$async$state_machine__14294__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14294__auto____1;
return cljs$core$async$state_machine__14294__auto__;
})()
})();
var state__14488__auto__ = (function (){var statearr_17051 = f__14487__auto__();
(statearr_17051[(6)] = c__14486__auto___18719);

return statearr_17051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14488__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17057 = arguments.length;
switch (G__17057) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__14486__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14487__auto__ = (function (){var switch__14293__auto__ = (function (state_17146){
var state_val_17148 = (state_17146[(1)]);
if((state_val_17148 === (7))){
var inst_17124 = (state_17146[(2)]);
var state_17146__$1 = state_17146;
var statearr_17154_18738 = state_17146__$1;
(statearr_17154_18738[(2)] = inst_17124);

(statearr_17154_18738[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17148 === (20))){
var inst_17093 = (state_17146[(7)]);
var inst_17104 = (state_17146[(2)]);
var inst_17105 = cljs.core.next(inst_17093);
var inst_17079 = inst_17105;
var inst_17080 = null;
var inst_17081 = (0);
var inst_17082 = (0);
var state_17146__$1 = (function (){var statearr_17156 = state_17146;
(statearr_17156[(8)] = inst_17104);

(statearr_17156[(9)] = inst_17080);

(statearr_17156[(10)] = inst_17082);

(statearr_17156[(11)] = inst_17081);

(statearr_17156[(12)] = inst_17079);

return statearr_17156;
})();
var statearr_17157_18739 = state_17146__$1;
(statearr_17157_18739[(2)] = null);

(statearr_17157_18739[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17148 === (1))){
var state_17146__$1 = state_17146;
var statearr_17158_18741 = state_17146__$1;
(statearr_17158_18741[(2)] = null);

(statearr_17158_18741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17148 === (4))){
var inst_17064 = (state_17146[(13)]);
var inst_17064__$1 = (state_17146[(2)]);
var inst_17065 = (inst_17064__$1 == null);
var state_17146__$1 = (function (){var statearr_17159 = state_17146;
(statearr_17159[(13)] = inst_17064__$1);

return statearr_17159;
})();
if(cljs.core.truth_(inst_17065)){
var statearr_17163_18742 = state_17146__$1;
(statearr_17163_18742[(1)] = (5));

} else {
var statearr_17164_18744 = state_17146__$1;
(statearr_17164_18744[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17148 === (15))){
var state_17146__$1 = state_17146;
var statearr_17169_18745 = state_17146__$1;
(statearr_17169_18745[(2)] = null);

(statearr_17169_18745[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17148 === (21))){
var state_17146__$1 = state_17146;
var statearr_17170_18746 = state_17146__$1;
(statearr_17170_18746[(2)] = null);

(statearr_17170_18746[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17148 === (13))){
var inst_17080 = (state_17146[(9)]);
var inst_17082 = (state_17146[(10)]);
var inst_17081 = (state_17146[(11)]);
var inst_17079 = (state_17146[(12)]);
var inst_17089 = (state_17146[(2)]);
var inst_17090 = (inst_17082 + (1));
var tmp17166 = inst_17080;
var tmp17167 = inst_17081;
var tmp17168 = inst_17079;
var inst_17079__$1 = tmp17168;
var inst_17080__$1 = tmp17166;
var inst_17081__$1 = tmp17167;
var inst_17082__$1 = inst_17090;
var state_17146__$1 = (function (){var statearr_17173 = state_17146;
(statearr_17173[(14)] = inst_17089);

(statearr_17173[(9)] = inst_17080__$1);

(statearr_17173[(10)] = inst_17082__$1);

(statearr_17173[(11)] = inst_17081__$1);

(statearr_17173[(12)] = inst_17079__$1);

return statearr_17173;
})();
var statearr_17174_18777 = state_17146__$1;
(statearr_17174_18777[(2)] = null);

(statearr_17174_18777[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17148 === (22))){
var state_17146__$1 = state_17146;
var statearr_17175_18778 = state_17146__$1;
(statearr_17175_18778[(2)] = null);

(statearr_17175_18778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17148 === (6))){
var inst_17064 = (state_17146[(13)]);
var inst_17077 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17064) : f.call(null, inst_17064));
var inst_17078 = cljs.core.seq(inst_17077);
var inst_17079 = inst_17078;
var inst_17080 = null;
var inst_17081 = (0);
var inst_17082 = (0);
var state_17146__$1 = (function (){var statearr_17176 = state_17146;
(statearr_17176[(9)] = inst_17080);

(statearr_17176[(10)] = inst_17082);

(statearr_17176[(11)] = inst_17081);

(statearr_17176[(12)] = inst_17079);

return statearr_17176;
})();
var statearr_17177_18791 = state_17146__$1;
(statearr_17177_18791[(2)] = null);

(statearr_17177_18791[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17148 === (17))){
var inst_17093 = (state_17146[(7)]);
var inst_17097 = cljs.core.chunk_first(inst_17093);
var inst_17098 = cljs.core.chunk_rest(inst_17093);
var inst_17099 = cljs.core.count(inst_17097);
var inst_17079 = inst_17098;
var inst_17080 = inst_17097;
var inst_17081 = inst_17099;
var inst_17082 = (0);
var state_17146__$1 = (function (){var statearr_17185 = state_17146;
(statearr_17185[(9)] = inst_17080);

(statearr_17185[(10)] = inst_17082);

(statearr_17185[(11)] = inst_17081);

(statearr_17185[(12)] = inst_17079);

return statearr_17185;
})();
var statearr_17192_18792 = state_17146__$1;
(statearr_17192_18792[(2)] = null);

(statearr_17192_18792[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17148 === (3))){
var inst_17126 = (state_17146[(2)]);
var state_17146__$1 = state_17146;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17146__$1,inst_17126);
} else {
if((state_val_17148 === (12))){
var inst_17114 = (state_17146[(2)]);
var state_17146__$1 = state_17146;
var statearr_17196_18793 = state_17146__$1;
(statearr_17196_18793[(2)] = inst_17114);

(statearr_17196_18793[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17148 === (2))){
var state_17146__$1 = state_17146;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17146__$1,(4),in$);
} else {
if((state_val_17148 === (23))){
var inst_17122 = (state_17146[(2)]);
var state_17146__$1 = state_17146;
var statearr_17200_18798 = state_17146__$1;
(statearr_17200_18798[(2)] = inst_17122);

(statearr_17200_18798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17148 === (19))){
var inst_17108 = (state_17146[(2)]);
var state_17146__$1 = state_17146;
var statearr_17201_18799 = state_17146__$1;
(statearr_17201_18799[(2)] = inst_17108);

(statearr_17201_18799[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17148 === (11))){
var inst_17093 = (state_17146[(7)]);
var inst_17079 = (state_17146[(12)]);
var inst_17093__$1 = cljs.core.seq(inst_17079);
var state_17146__$1 = (function (){var statearr_17202 = state_17146;
(statearr_17202[(7)] = inst_17093__$1);

return statearr_17202;
})();
if(inst_17093__$1){
var statearr_17203_18832 = state_17146__$1;
(statearr_17203_18832[(1)] = (14));

} else {
var statearr_17204_18833 = state_17146__$1;
(statearr_17204_18833[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17148 === (9))){
var inst_17116 = (state_17146[(2)]);
var inst_17117 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17146__$1 = (function (){var statearr_17212 = state_17146;
(statearr_17212[(15)] = inst_17116);

return statearr_17212;
})();
if(cljs.core.truth_(inst_17117)){
var statearr_17213_18835 = state_17146__$1;
(statearr_17213_18835[(1)] = (21));

} else {
var statearr_17214_18836 = state_17146__$1;
(statearr_17214_18836[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17148 === (5))){
var inst_17071 = cljs.core.async.close_BANG_(out);
var state_17146__$1 = state_17146;
var statearr_17218_18837 = state_17146__$1;
(statearr_17218_18837[(2)] = inst_17071);

(statearr_17218_18837[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17148 === (14))){
var inst_17093 = (state_17146[(7)]);
var inst_17095 = cljs.core.chunked_seq_QMARK_(inst_17093);
var state_17146__$1 = state_17146;
if(inst_17095){
var statearr_17219_18838 = state_17146__$1;
(statearr_17219_18838[(1)] = (17));

} else {
var statearr_17220_18839 = state_17146__$1;
(statearr_17220_18839[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17148 === (16))){
var inst_17112 = (state_17146[(2)]);
var state_17146__$1 = state_17146;
var statearr_17224_18841 = state_17146__$1;
(statearr_17224_18841[(2)] = inst_17112);

(statearr_17224_18841[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17148 === (10))){
var inst_17080 = (state_17146[(9)]);
var inst_17082 = (state_17146[(10)]);
var inst_17087 = cljs.core._nth(inst_17080,inst_17082);
var state_17146__$1 = state_17146;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17146__$1,(13),out,inst_17087);
} else {
if((state_val_17148 === (18))){
var inst_17093 = (state_17146[(7)]);
var inst_17102 = cljs.core.first(inst_17093);
var state_17146__$1 = state_17146;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17146__$1,(20),out,inst_17102);
} else {
if((state_val_17148 === (8))){
var inst_17082 = (state_17146[(10)]);
var inst_17081 = (state_17146[(11)]);
var inst_17084 = (inst_17082 < inst_17081);
var inst_17085 = inst_17084;
var state_17146__$1 = state_17146;
if(cljs.core.truth_(inst_17085)){
var statearr_17225_18842 = state_17146__$1;
(statearr_17225_18842[(1)] = (10));

} else {
var statearr_17226_18845 = state_17146__$1;
(statearr_17226_18845[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__14294__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14294__auto____0 = (function (){
var statearr_17227 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17227[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14294__auto__);

(statearr_17227[(1)] = (1));

return statearr_17227;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14294__auto____1 = (function (state_17146){
while(true){
var ret_value__14295__auto__ = (function (){try{while(true){
var result__14296__auto__ = switch__14293__auto__(state_17146);
if(cljs.core.keyword_identical_QMARK_(result__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14296__auto__;
}
break;
}
}catch (e17230){var ex__14297__auto__ = e17230;
var statearr_17234_18847 = state_17146;
(statearr_17234_18847[(2)] = ex__14297__auto__);


if(cljs.core.seq((state_17146[(4)]))){
var statearr_17235_18848 = state_17146;
(statearr_17235_18848[(1)] = cljs.core.first((state_17146[(4)])));

} else {
throw ex__14297__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18849 = state_17146;
state_17146 = G__18849;
continue;
} else {
return ret_value__14295__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14294__auto__ = function(state_17146){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14294__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14294__auto____1.call(this,state_17146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__14294__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14294__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14294__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14294__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14294__auto__;
})()
})();
var state__14488__auto__ = (function (){var statearr_17236 = f__14487__auto__();
(statearr_17236[(6)] = c__14486__auto__);

return statearr_17236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14488__auto__);
}));

return c__14486__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17238 = arguments.length;
switch (G__17238) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__17244 = arguments.length;
switch (G__17244) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__17250 = arguments.length;
switch (G__17250) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14486__auto___18893 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14487__auto__ = (function (){var switch__14293__auto__ = (function (state_17274){
var state_val_17275 = (state_17274[(1)]);
if((state_val_17275 === (7))){
var inst_17269 = (state_17274[(2)]);
var state_17274__$1 = state_17274;
var statearr_17276_18898 = state_17274__$1;
(statearr_17276_18898[(2)] = inst_17269);

(statearr_17276_18898[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17275 === (1))){
var inst_17251 = null;
var state_17274__$1 = (function (){var statearr_17277 = state_17274;
(statearr_17277[(7)] = inst_17251);

return statearr_17277;
})();
var statearr_17279_18900 = state_17274__$1;
(statearr_17279_18900[(2)] = null);

(statearr_17279_18900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17275 === (4))){
var inst_17254 = (state_17274[(8)]);
var inst_17254__$1 = (state_17274[(2)]);
var inst_17255 = (inst_17254__$1 == null);
var inst_17256 = cljs.core.not(inst_17255);
var state_17274__$1 = (function (){var statearr_17281 = state_17274;
(statearr_17281[(8)] = inst_17254__$1);

return statearr_17281;
})();
if(inst_17256){
var statearr_17282_18905 = state_17274__$1;
(statearr_17282_18905[(1)] = (5));

} else {
var statearr_17283_18907 = state_17274__$1;
(statearr_17283_18907[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17275 === (6))){
var state_17274__$1 = state_17274;
var statearr_17284_18908 = state_17274__$1;
(statearr_17284_18908[(2)] = null);

(statearr_17284_18908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17275 === (3))){
var inst_17271 = (state_17274[(2)]);
var inst_17272 = cljs.core.async.close_BANG_(out);
var state_17274__$1 = (function (){var statearr_17285 = state_17274;
(statearr_17285[(9)] = inst_17271);

return statearr_17285;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17274__$1,inst_17272);
} else {
if((state_val_17275 === (2))){
var state_17274__$1 = state_17274;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17274__$1,(4),ch);
} else {
if((state_val_17275 === (11))){
var inst_17254 = (state_17274[(8)]);
var inst_17263 = (state_17274[(2)]);
var inst_17251 = inst_17254;
var state_17274__$1 = (function (){var statearr_17288 = state_17274;
(statearr_17288[(10)] = inst_17263);

(statearr_17288[(7)] = inst_17251);

return statearr_17288;
})();
var statearr_17292_18913 = state_17274__$1;
(statearr_17292_18913[(2)] = null);

(statearr_17292_18913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17275 === (9))){
var inst_17254 = (state_17274[(8)]);
var state_17274__$1 = state_17274;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17274__$1,(11),out,inst_17254);
} else {
if((state_val_17275 === (5))){
var inst_17254 = (state_17274[(8)]);
var inst_17251 = (state_17274[(7)]);
var inst_17258 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17254,inst_17251);
var state_17274__$1 = state_17274;
if(inst_17258){
var statearr_17318_18917 = state_17274__$1;
(statearr_17318_18917[(1)] = (8));

} else {
var statearr_17319_18918 = state_17274__$1;
(statearr_17319_18918[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17275 === (10))){
var inst_17266 = (state_17274[(2)]);
var state_17274__$1 = state_17274;
var statearr_17320_18919 = state_17274__$1;
(statearr_17320_18919[(2)] = inst_17266);

(statearr_17320_18919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17275 === (8))){
var inst_17251 = (state_17274[(7)]);
var tmp17293 = inst_17251;
var inst_17251__$1 = tmp17293;
var state_17274__$1 = (function (){var statearr_17321 = state_17274;
(statearr_17321[(7)] = inst_17251__$1);

return statearr_17321;
})();
var statearr_17322_18920 = state_17274__$1;
(statearr_17322_18920[(2)] = null);

(statearr_17322_18920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14294__auto__ = null;
var cljs$core$async$state_machine__14294__auto____0 = (function (){
var statearr_17327 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17327[(0)] = cljs$core$async$state_machine__14294__auto__);

(statearr_17327[(1)] = (1));

return statearr_17327;
});
var cljs$core$async$state_machine__14294__auto____1 = (function (state_17274){
while(true){
var ret_value__14295__auto__ = (function (){try{while(true){
var result__14296__auto__ = switch__14293__auto__(state_17274);
if(cljs.core.keyword_identical_QMARK_(result__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14296__auto__;
}
break;
}
}catch (e17328){var ex__14297__auto__ = e17328;
var statearr_17329_18924 = state_17274;
(statearr_17329_18924[(2)] = ex__14297__auto__);


if(cljs.core.seq((state_17274[(4)]))){
var statearr_17331_18925 = state_17274;
(statearr_17331_18925[(1)] = cljs.core.first((state_17274[(4)])));

} else {
throw ex__14297__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18926 = state_17274;
state_17274 = G__18926;
continue;
} else {
return ret_value__14295__auto__;
}
break;
}
});
cljs$core$async$state_machine__14294__auto__ = function(state_17274){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14294__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14294__auto____1.call(this,state_17274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14294__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14294__auto____0;
cljs$core$async$state_machine__14294__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14294__auto____1;
return cljs$core$async$state_machine__14294__auto__;
})()
})();
var state__14488__auto__ = (function (){var statearr_17336 = f__14487__auto__();
(statearr_17336[(6)] = c__14486__auto___18893);

return statearr_17336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14488__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17341 = arguments.length;
switch (G__17341) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14486__auto___18931 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14487__auto__ = (function (){var switch__14293__auto__ = (function (state_17388){
var state_val_17389 = (state_17388[(1)]);
if((state_val_17389 === (7))){
var inst_17384 = (state_17388[(2)]);
var state_17388__$1 = state_17388;
var statearr_17392_18934 = state_17388__$1;
(statearr_17392_18934[(2)] = inst_17384);

(statearr_17392_18934[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17389 === (1))){
var inst_17349 = (new Array(n));
var inst_17351 = inst_17349;
var inst_17352 = (0);
var state_17388__$1 = (function (){var statearr_17393 = state_17388;
(statearr_17393[(7)] = inst_17352);

(statearr_17393[(8)] = inst_17351);

return statearr_17393;
})();
var statearr_17394_18937 = state_17388__$1;
(statearr_17394_18937[(2)] = null);

(statearr_17394_18937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17389 === (4))){
var inst_17355 = (state_17388[(9)]);
var inst_17355__$1 = (state_17388[(2)]);
var inst_17356 = (inst_17355__$1 == null);
var inst_17357 = cljs.core.not(inst_17356);
var state_17388__$1 = (function (){var statearr_17397 = state_17388;
(statearr_17397[(9)] = inst_17355__$1);

return statearr_17397;
})();
if(inst_17357){
var statearr_17398_18938 = state_17388__$1;
(statearr_17398_18938[(1)] = (5));

} else {
var statearr_17399_18939 = state_17388__$1;
(statearr_17399_18939[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17389 === (15))){
var inst_17377 = (state_17388[(2)]);
var state_17388__$1 = state_17388;
var statearr_17400_18940 = state_17388__$1;
(statearr_17400_18940[(2)] = inst_17377);

(statearr_17400_18940[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17389 === (13))){
var state_17388__$1 = state_17388;
var statearr_17403_18942 = state_17388__$1;
(statearr_17403_18942[(2)] = null);

(statearr_17403_18942[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17389 === (6))){
var inst_17352 = (state_17388[(7)]);
var inst_17373 = (inst_17352 > (0));
var state_17388__$1 = state_17388;
if(cljs.core.truth_(inst_17373)){
var statearr_17406_18943 = state_17388__$1;
(statearr_17406_18943[(1)] = (12));

} else {
var statearr_17407_18944 = state_17388__$1;
(statearr_17407_18944[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17389 === (3))){
var inst_17386 = (state_17388[(2)]);
var state_17388__$1 = state_17388;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17388__$1,inst_17386);
} else {
if((state_val_17389 === (12))){
var inst_17351 = (state_17388[(8)]);
var inst_17375 = cljs.core.vec(inst_17351);
var state_17388__$1 = state_17388;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17388__$1,(15),out,inst_17375);
} else {
if((state_val_17389 === (2))){
var state_17388__$1 = state_17388;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17388__$1,(4),ch);
} else {
if((state_val_17389 === (11))){
var inst_17367 = (state_17388[(2)]);
var inst_17368 = (new Array(n));
var inst_17351 = inst_17368;
var inst_17352 = (0);
var state_17388__$1 = (function (){var statearr_17409 = state_17388;
(statearr_17409[(7)] = inst_17352);

(statearr_17409[(10)] = inst_17367);

(statearr_17409[(8)] = inst_17351);

return statearr_17409;
})();
var statearr_17410_18946 = state_17388__$1;
(statearr_17410_18946[(2)] = null);

(statearr_17410_18946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17389 === (9))){
var inst_17351 = (state_17388[(8)]);
var inst_17365 = cljs.core.vec(inst_17351);
var state_17388__$1 = state_17388;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17388__$1,(11),out,inst_17365);
} else {
if((state_val_17389 === (5))){
var inst_17355 = (state_17388[(9)]);
var inst_17352 = (state_17388[(7)]);
var inst_17360 = (state_17388[(11)]);
var inst_17351 = (state_17388[(8)]);
var inst_17359 = (inst_17351[inst_17352] = inst_17355);
var inst_17360__$1 = (inst_17352 + (1));
var inst_17361 = (inst_17360__$1 < n);
var state_17388__$1 = (function (){var statearr_17413 = state_17388;
(statearr_17413[(12)] = inst_17359);

(statearr_17413[(11)] = inst_17360__$1);

return statearr_17413;
})();
if(cljs.core.truth_(inst_17361)){
var statearr_17414_18947 = state_17388__$1;
(statearr_17414_18947[(1)] = (8));

} else {
var statearr_17415_18948 = state_17388__$1;
(statearr_17415_18948[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17389 === (14))){
var inst_17380 = (state_17388[(2)]);
var inst_17382 = cljs.core.async.close_BANG_(out);
var state_17388__$1 = (function (){var statearr_17417 = state_17388;
(statearr_17417[(13)] = inst_17380);

return statearr_17417;
})();
var statearr_17418_18949 = state_17388__$1;
(statearr_17418_18949[(2)] = inst_17382);

(statearr_17418_18949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17389 === (10))){
var inst_17371 = (state_17388[(2)]);
var state_17388__$1 = state_17388;
var statearr_17419_18950 = state_17388__$1;
(statearr_17419_18950[(2)] = inst_17371);

(statearr_17419_18950[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17389 === (8))){
var inst_17360 = (state_17388[(11)]);
var inst_17351 = (state_17388[(8)]);
var tmp17416 = inst_17351;
var inst_17351__$1 = tmp17416;
var inst_17352 = inst_17360;
var state_17388__$1 = (function (){var statearr_17424 = state_17388;
(statearr_17424[(7)] = inst_17352);

(statearr_17424[(8)] = inst_17351__$1);

return statearr_17424;
})();
var statearr_17425_18951 = state_17388__$1;
(statearr_17425_18951[(2)] = null);

(statearr_17425_18951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14294__auto__ = null;
var cljs$core$async$state_machine__14294__auto____0 = (function (){
var statearr_17430 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17430[(0)] = cljs$core$async$state_machine__14294__auto__);

(statearr_17430[(1)] = (1));

return statearr_17430;
});
var cljs$core$async$state_machine__14294__auto____1 = (function (state_17388){
while(true){
var ret_value__14295__auto__ = (function (){try{while(true){
var result__14296__auto__ = switch__14293__auto__(state_17388);
if(cljs.core.keyword_identical_QMARK_(result__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14296__auto__;
}
break;
}
}catch (e17431){var ex__14297__auto__ = e17431;
var statearr_17432_18958 = state_17388;
(statearr_17432_18958[(2)] = ex__14297__auto__);


if(cljs.core.seq((state_17388[(4)]))){
var statearr_17436_18959 = state_17388;
(statearr_17436_18959[(1)] = cljs.core.first((state_17388[(4)])));

} else {
throw ex__14297__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18960 = state_17388;
state_17388 = G__18960;
continue;
} else {
return ret_value__14295__auto__;
}
break;
}
});
cljs$core$async$state_machine__14294__auto__ = function(state_17388){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14294__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14294__auto____1.call(this,state_17388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14294__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14294__auto____0;
cljs$core$async$state_machine__14294__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14294__auto____1;
return cljs$core$async$state_machine__14294__auto__;
})()
})();
var state__14488__auto__ = (function (){var statearr_17437 = f__14487__auto__();
(statearr_17437[(6)] = c__14486__auto___18931);

return statearr_17437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14488__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17441 = arguments.length;
switch (G__17441) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14486__auto___18963 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14487__auto__ = (function (){var switch__14293__auto__ = (function (state_17501){
var state_val_17502 = (state_17501[(1)]);
if((state_val_17502 === (7))){
var inst_17497 = (state_17501[(2)]);
var state_17501__$1 = state_17501;
var statearr_17503_18968 = state_17501__$1;
(statearr_17503_18968[(2)] = inst_17497);

(statearr_17503_18968[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17502 === (1))){
var inst_17449 = [];
var inst_17450 = inst_17449;
var inst_17451 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17501__$1 = (function (){var statearr_17504 = state_17501;
(statearr_17504[(7)] = inst_17450);

(statearr_17504[(8)] = inst_17451);

return statearr_17504;
})();
var statearr_17509_18969 = state_17501__$1;
(statearr_17509_18969[(2)] = null);

(statearr_17509_18969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17502 === (4))){
var inst_17458 = (state_17501[(9)]);
var inst_17458__$1 = (state_17501[(2)]);
var inst_17459 = (inst_17458__$1 == null);
var inst_17460 = cljs.core.not(inst_17459);
var state_17501__$1 = (function (){var statearr_17510 = state_17501;
(statearr_17510[(9)] = inst_17458__$1);

return statearr_17510;
})();
if(inst_17460){
var statearr_17511_18970 = state_17501__$1;
(statearr_17511_18970[(1)] = (5));

} else {
var statearr_17512_18971 = state_17501__$1;
(statearr_17512_18971[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17502 === (15))){
var inst_17450 = (state_17501[(7)]);
var inst_17489 = cljs.core.vec(inst_17450);
var state_17501__$1 = state_17501;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17501__$1,(18),out,inst_17489);
} else {
if((state_val_17502 === (13))){
var inst_17484 = (state_17501[(2)]);
var state_17501__$1 = state_17501;
var statearr_17514_18972 = state_17501__$1;
(statearr_17514_18972[(2)] = inst_17484);

(statearr_17514_18972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17502 === (6))){
var inst_17450 = (state_17501[(7)]);
var inst_17486 = inst_17450.length;
var inst_17487 = (inst_17486 > (0));
var state_17501__$1 = state_17501;
if(cljs.core.truth_(inst_17487)){
var statearr_17515_18976 = state_17501__$1;
(statearr_17515_18976[(1)] = (15));

} else {
var statearr_17516_18977 = state_17501__$1;
(statearr_17516_18977[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17502 === (17))){
var inst_17494 = (state_17501[(2)]);
var inst_17495 = cljs.core.async.close_BANG_(out);
var state_17501__$1 = (function (){var statearr_17517 = state_17501;
(statearr_17517[(10)] = inst_17494);

return statearr_17517;
})();
var statearr_17518_18981 = state_17501__$1;
(statearr_17518_18981[(2)] = inst_17495);

(statearr_17518_18981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17502 === (3))){
var inst_17499 = (state_17501[(2)]);
var state_17501__$1 = state_17501;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17501__$1,inst_17499);
} else {
if((state_val_17502 === (12))){
var inst_17450 = (state_17501[(7)]);
var inst_17477 = cljs.core.vec(inst_17450);
var state_17501__$1 = state_17501;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17501__$1,(14),out,inst_17477);
} else {
if((state_val_17502 === (2))){
var state_17501__$1 = state_17501;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17501__$1,(4),ch);
} else {
if((state_val_17502 === (11))){
var inst_17450 = (state_17501[(7)]);
var inst_17462 = (state_17501[(11)]);
var inst_17458 = (state_17501[(9)]);
var inst_17474 = inst_17450.push(inst_17458);
var tmp17521 = inst_17450;
var inst_17450__$1 = tmp17521;
var inst_17451 = inst_17462;
var state_17501__$1 = (function (){var statearr_17526 = state_17501;
(statearr_17526[(7)] = inst_17450__$1);

(statearr_17526[(8)] = inst_17451);

(statearr_17526[(12)] = inst_17474);

return statearr_17526;
})();
var statearr_17530_18982 = state_17501__$1;
(statearr_17530_18982[(2)] = null);

(statearr_17530_18982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17502 === (9))){
var inst_17451 = (state_17501[(8)]);
var inst_17466 = cljs.core.keyword_identical_QMARK_(inst_17451,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_17501__$1 = state_17501;
var statearr_17536_18990 = state_17501__$1;
(statearr_17536_18990[(2)] = inst_17466);

(statearr_17536_18990[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17502 === (5))){
var inst_17463 = (state_17501[(13)]);
var inst_17451 = (state_17501[(8)]);
var inst_17462 = (state_17501[(11)]);
var inst_17458 = (state_17501[(9)]);
var inst_17462__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17458) : f.call(null, inst_17458));
var inst_17463__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17462__$1,inst_17451);
var state_17501__$1 = (function (){var statearr_17539 = state_17501;
(statearr_17539[(13)] = inst_17463__$1);

(statearr_17539[(11)] = inst_17462__$1);

return statearr_17539;
})();
if(inst_17463__$1){
var statearr_17540_18994 = state_17501__$1;
(statearr_17540_18994[(1)] = (8));

} else {
var statearr_17541_18995 = state_17501__$1;
(statearr_17541_18995[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17502 === (14))){
var inst_17462 = (state_17501[(11)]);
var inst_17458 = (state_17501[(9)]);
var inst_17479 = (state_17501[(2)]);
var inst_17480 = [];
var inst_17481 = inst_17480.push(inst_17458);
var inst_17450 = inst_17480;
var inst_17451 = inst_17462;
var state_17501__$1 = (function (){var statearr_17542 = state_17501;
(statearr_17542[(7)] = inst_17450);

(statearr_17542[(14)] = inst_17481);

(statearr_17542[(8)] = inst_17451);

(statearr_17542[(15)] = inst_17479);

return statearr_17542;
})();
var statearr_17543_19001 = state_17501__$1;
(statearr_17543_19001[(2)] = null);

(statearr_17543_19001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17502 === (16))){
var state_17501__$1 = state_17501;
var statearr_17545_19002 = state_17501__$1;
(statearr_17545_19002[(2)] = null);

(statearr_17545_19002[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17502 === (10))){
var inst_17471 = (state_17501[(2)]);
var state_17501__$1 = state_17501;
if(cljs.core.truth_(inst_17471)){
var statearr_17547_19007 = state_17501__$1;
(statearr_17547_19007[(1)] = (11));

} else {
var statearr_17548_19008 = state_17501__$1;
(statearr_17548_19008[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17502 === (18))){
var inst_17491 = (state_17501[(2)]);
var state_17501__$1 = state_17501;
var statearr_17549_19009 = state_17501__$1;
(statearr_17549_19009[(2)] = inst_17491);

(statearr_17549_19009[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17502 === (8))){
var inst_17463 = (state_17501[(13)]);
var state_17501__$1 = state_17501;
var statearr_17556_19013 = state_17501__$1;
(statearr_17556_19013[(2)] = inst_17463);

(statearr_17556_19013[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14294__auto__ = null;
var cljs$core$async$state_machine__14294__auto____0 = (function (){
var statearr_17559 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17559[(0)] = cljs$core$async$state_machine__14294__auto__);

(statearr_17559[(1)] = (1));

return statearr_17559;
});
var cljs$core$async$state_machine__14294__auto____1 = (function (state_17501){
while(true){
var ret_value__14295__auto__ = (function (){try{while(true){
var result__14296__auto__ = switch__14293__auto__(state_17501);
if(cljs.core.keyword_identical_QMARK_(result__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14296__auto__;
}
break;
}
}catch (e17563){var ex__14297__auto__ = e17563;
var statearr_17564_19019 = state_17501;
(statearr_17564_19019[(2)] = ex__14297__auto__);


if(cljs.core.seq((state_17501[(4)]))){
var statearr_17565_19020 = state_17501;
(statearr_17565_19020[(1)] = cljs.core.first((state_17501[(4)])));

} else {
throw ex__14297__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19021 = state_17501;
state_17501 = G__19021;
continue;
} else {
return ret_value__14295__auto__;
}
break;
}
});
cljs$core$async$state_machine__14294__auto__ = function(state_17501){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14294__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14294__auto____1.call(this,state_17501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14294__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14294__auto____0;
cljs$core$async$state_machine__14294__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14294__auto____1;
return cljs$core$async$state_machine__14294__auto__;
})()
})();
var state__14488__auto__ = (function (){var statearr_17570 = f__14487__auto__();
(statearr_17570[(6)] = c__14486__auto___18963);

return statearr_17570;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14488__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
