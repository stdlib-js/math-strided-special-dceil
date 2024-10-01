"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var v=u(function(z,s){
var f=require('@stdlib/strided-base-dmap/dist'),j=require('@stdlib/math-base-special-ceil/dist');function x(e,r,i,a,t){return f(e,r,i,a,t,j)}s.exports=x
});var q=u(function(A,c){
var R=require('@stdlib/strided-base-dmap/dist').ndarray,_=require('@stdlib/math-base-special-ceil/dist');function E(e,r,i,a,t,m,y){return R(e,r,i,a,t,m,y,_)}c.exports=E
});var p=u(function(B,o){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=v(),b=q();O(d,"ndarray",b);o.exports=d
});var g=require("path").join,h=require('@stdlib/utils-try-require/dist'),k=p(),n,l=h(g(__dirname,"./native.js"));l instanceof Error?n=k:n=l;module.exports=n;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
