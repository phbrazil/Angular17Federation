var _=Object.defineProperty,k=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var O=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var y=(e,r,u)=>r in e?_(e,r,{enumerable:!0,configurable:!0,writable:!0,value:u}):e[r]=u,a=(e,r)=>{for(var u in r||={})j.call(r,u)&&y(e,u,r[u]);if(O)for(var u of O(r))$.call(r,u)&&y(e,u,r[u]);return e},f=(e,r)=>k(e,q(r));function x(e,r){return Object.is(e,r)}var t=null,c=!1,d=1,h=Symbol("SIGNAL");function T(e){let r=t;return t=e,r}function re(){return t}function B(){return c}function ne(e){return e[h]!==void 0}var I={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function E(e){if(c)throw new Error("");if(t===null)return;t.consumerOnSignalRead(e);let r=t.nextProducerIndex++;if(s(t),r<t.producerNode.length&&t.producerNode[r]!==e&&l(t)){let u=t.producerNode[r];m(u,t.producerIndexOfThis[r])}t.producerNode[r]!==e&&(t.producerNode[r]=e,t.producerIndexOfThis[r]=l(t)?V(e,t,r):0),t.producerLastReadVersion[r]=e.version}function H(){d++}function R(e){if(!(l(e)&&!e.dirty)&&!(!e.dirty&&e.lastCleanEpoch===d)){if(!e.producerMustRecompute(e)&&!L(e)){e.dirty=!1,e.lastCleanEpoch=d;return}e.producerRecomputeValue(e),e.dirty=!1,e.lastCleanEpoch=d}}function w(e){if(e.liveConsumerNode===void 0)return;let r=c;c=!0;try{for(let u of e.liveConsumerNode)u.dirty||A(u)}finally{c=r}}function S(){return t?.consumerAllowSignalWrites!==!1}function A(e){e.dirty=!0,w(e),e.consumerMarkedDirty?.(e)}function D(e){return e&&(e.nextProducerIndex=0),T(e)}function P(e,r){if(T(r),!(!e||e.producerNode===void 0||e.producerIndexOfThis===void 0||e.producerLastReadVersion===void 0)){if(l(e))for(let u=e.nextProducerIndex;u<e.producerNode.length;u++)m(e.producerNode[u],e.producerIndexOfThis[u]);for(;e.producerNode.length>e.nextProducerIndex;)e.producerNode.pop(),e.producerLastReadVersion.pop(),e.producerIndexOfThis.pop()}}function L(e){s(e);for(let r=0;r<e.producerNode.length;r++){let u=e.producerNode[r],n=e.producerLastReadVersion[r];if(n!==u.version||(R(u),n!==u.version))return!0}return!1}function z(e){if(s(e),l(e))for(let r=0;r<e.producerNode.length;r++)m(e.producerNode[r],e.producerIndexOfThis[r]);e.producerNode.length=e.producerLastReadVersion.length=e.producerIndexOfThis.length=0,e.liveConsumerNode&&(e.liveConsumerNode.length=e.liveConsumerIndexOfThis.length=0)}function V(e,r,u){if(F(e),s(e),e.liveConsumerNode.length===0)for(let n=0;n<e.producerNode.length;n++)e.producerIndexOfThis[n]=V(e.producerNode[n],e,n);return e.liveConsumerIndexOfThis.push(u),e.liveConsumerNode.push(r)-1}function m(e,r){if(F(e),s(e),e.liveConsumerNode.length===1)for(let n=0;n<e.producerNode.length;n++)m(e.producerNode[n],e.producerIndexOfThis[n]);let u=e.liveConsumerNode.length-1;if(e.liveConsumerNode[r]=e.liveConsumerNode[u],e.liveConsumerIndexOfThis[r]=e.liveConsumerIndexOfThis[u],e.liveConsumerNode.length--,e.liveConsumerIndexOfThis.length--,r<e.liveConsumerNode.length){let n=e.liveConsumerIndexOfThis[r],i=e.liveConsumerNode[r];s(i),i.producerIndexOfThis[n]=r}}function l(e){return e.consumerIsAlwaysLive||(e?.liveConsumerNode?.length??0)>0}function s(e){e.producerNode??=[],e.producerIndexOfThis??=[],e.producerLastReadVersion??=[]}function F(e){e.liveConsumerNode??=[],e.liveConsumerIndexOfThis??=[]}function ue(e){let r=Object.create(J);r.computation=e;let u=()=>{if(R(r),E(r),r.value===p)throw r.error;return r.value};return u[h]=r,u}var v=Symbol("UNSET"),N=Symbol("COMPUTING"),p=Symbol("ERRORED"),J=f(a({},I),{value:v,dirty:!0,error:null,equal:x,producerMustRecompute(e){return e.value===v||e.value===N},producerRecomputeValue(e){if(e.value===N)throw new Error("Detected cycle in computations.");let r=e.value;e.value=N;let u=D(e),n;try{n=e.computation()}catch(i){n=p,e.error=i}finally{P(e,u)}if(r!==v&&r!==p&&n!==p&&e.equal(r,n)){e.value=r;return}e.value=n,e.version++}});function K(){throw new Error}var M=K;function W(){M()}function te(e){M=e}var C=null;function oe(e){let r=Object.create(X);r.value=e;let u=()=>(E(r),r.value);return u[h]=r,u}function ie(e){let r=C;return C=e,r}function Q(e,r){S()||W(),e.equal(e.value,r)||(e.value=r,Y(e))}function se(e,r){S()||W(),Q(e,r(e.value))}var X=f(a({},I),{equal:x,value:void 0});function Y(e){e.version++,H(),w(e),C?.()}function ce(e,r,u){let n=Object.create(Z);u&&(n.consumerAllowSignalWrites=!0),n.fn=e,n.schedule=r;let i=o=>{n.cleanupFn=o};function b(o){return o.fn===null&&o.schedule===null}function U(o){b(o)||(z(o),o.cleanupFn(),o.fn=null,o.schedule=null,o.cleanupFn=g)}let G=()=>{if(n.fn===null)return;if(B())throw new Error("Schedulers cannot synchronously execute watches while scheduling.");if(n.dirty=!1,n.hasRun&&!L(n))return;n.hasRun=!0;let o=D(n);try{n.cleanupFn(),n.cleanupFn=g,n.fn(i)}finally{P(n,o)}};return n.ref={notify:()=>A(n),run:G,cleanup:()=>n.cleanupFn(),destroy:()=>U(n),[h]:n},n.ref}var g=()=>{},Z=f(a({},I),{consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!1,consumerMarkedDirty:e=>{e.schedule!==null&&e.schedule(e.ref)},hasRun:!1,cleanupFn:g});function le(e){}export{I as REACTIVE_NODE,h as SIGNAL,X as SIGNAL_NODE,P as consumerAfterComputation,D as consumerBeforeComputation,z as consumerDestroy,A as consumerMarkDirty,L as consumerPollProducersForChange,ue as createComputed,oe as createSignal,ce as createWatch,x as defaultEquals,re as getActiveConsumer,B as isInNotificationPhase,ne as isReactive,E as producerAccessed,w as producerNotifyConsumers,R as producerUpdateValueVersion,S as producerUpdatesAllowed,T as setActiveConsumer,le as setAlternateWeakRefImpl,ie as setPostSignalSetFn,te as setThrowInvalidWriteToSignalError,Q as signalSetFn,se as signalUpdateFn};/*! Bundled license information:

@angular/core/fesm2022/primitives/signals.mjs:
  (**
   * @license Angular v17.2.2
   * (c) 2010-2022 Google LLC. https://angular.io/
   * License: MIT
   *)
*/