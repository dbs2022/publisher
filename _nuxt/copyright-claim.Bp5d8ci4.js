import{f as z,m as Ue,n as Ne,v as Ge,o as O,c as S,a as y,t as ze,q as He,s as yt,x as _t,k as h,y as ke,z as mt,A as vt,u as wt,r as ee,B as Tt,d as F,b as _,w as x,F as he,C as jt,l as be,i as $t}from"./entry.BQfSxsYq.js";import At from"./Icon.GOZTEj26.js";import{_ as Ot}from"./v-button.vue.BUUfii1h.js";import{s as xt,g as Ct}from"./legal.yzCdT4No.js";import"./index.DKzsDYrr.js";import"./_plugin-vue_export-helper.DlAUqK2U.js";const St=z({__name:"v-input",props:{modelValue:{},modelModifiers:{}},emits:["update:modelValue"],setup(e){const t=Ue(e,"modelValue");return(r,n)=>Ne((O(),S("input",{"onUpdate:modelValue":n[0]||(n[0]=i=>t.value=i),class:"w-full rounded-sm border bg-gray-50 p-2 outline-none transition focus:!border-blue-700 dark:border-gray-400 dark:bg-gray-600 lg:text-[16px]"},null,512)),[[Ge,t.value]])}}),It={class:"mb-1 block text-zinc-400 dark:text-gray-400"},Pt=z({__name:"v-label",props:{label:{}},setup(e){const t=e;return(r,n)=>(O(),S("label",null,[y("span",It,ze(t.label),1),He(r.$slots,"default")]))}}),Lt=["rows"],Et=z({__name:"v-textarea",props:{modelValue:{},rows:{}},emits:["update:modelValue"],setup(e,{emit:t}){const{textarea:r,input:n}=yt({styleProp:"minHeight"}),i=e,a=t,o=_t({get(){return i.modelValue},set(c){a("update:modelValue",c),n.value=c}});return(c,u)=>Ne((O(),S("textarea",{ref_key:"textarea",ref:r,"onUpdate:modelValue":u[0]||(u[0]=s=>ke(o)?o.value=s:null),rows:i.rows,class:"w-full resize-none rounded-sm border bg-gray-50 p-2 outline-none transition focus:!border-blue-700 dark:border-gray-400 dark:bg-gray-600"},null,8,Lt)),[[Ge,h(o)]])}}),Dt={class:"flex items-center gap-3"},Rt=z({__name:"v-checkbox",props:{modelValue:{type:Boolean,default:!1},modelModifiers:{}},emits:["update:modelValue"],setup(e){const t=Ue(e,"modelValue");return(r,n)=>{const i=At;return O(),S("div",Dt,[y("div",{class:"flex h-5 w-5 shrink-0 cursor-pointer items-center justify-center rounded-sm border bg-gray-50 dark:border-gray-400 dark:bg-gray-600",onClick:n[0]||(n[0]=a=>t.value=!t.value)},[t.value?(O(),mt(i,{key:0,name:"tabler:check"})):vt("",!0)]),y("p",null,[He(r.$slots,"default")])])}}});var Ke=typeof global=="object"&&global&&global.Object===Object&&global,Vt=typeof self=="object"&&self&&self.Object===Object&&self,v=Ke||Vt||Function("return this")(),E=v.Symbol,We=Object.prototype,Mt=We.hasOwnProperty,Ft=We.toString,B=E?E.toStringTag:void 0;function Bt(e){var t=Mt.call(e,B),r=e[B];try{e[B]=void 0;var n=!0}catch{}var i=Ft.call(e);return n&&(t?e[B]=r:delete e[B]),i}var Ut=Object.prototype,Nt=Ut.toString;function Gt(e){return Nt.call(e)}var zt="[object Null]",Ht="[object Undefined]",ye=E?E.toStringTag:void 0;function H(e){return e==null?e===void 0?Ht:zt:ye&&ye in Object(e)?Bt(e):Gt(e)}function k(e){return e!=null&&typeof e=="object"}var se=Array.isArray;function K(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var kt="[object AsyncFunction]",Kt="[object Function]",Wt="[object GeneratorFunction]",Yt="[object Proxy]";function Ye(e){if(!K(e))return!1;var t=H(e);return t==Kt||t==Wt||t==kt||t==Yt}var te=v["__core-js_shared__"],_e=function(){var e=/[^.]+$/.exec(te&&te.keys&&te.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function qt(e){return!!_e&&_e in e}var Qt=Function.prototype,Xt=Qt.toString;function P(e){if(e!=null){try{return Xt.call(e)}catch{}try{return e+""}catch{}}return""}var Jt=/[\\^$.*+?()[\]{}|]/g,Zt=/^\[object .+?Constructor\]$/,er=Function.prototype,tr=Object.prototype,rr=er.toString,nr=tr.hasOwnProperty,ar=RegExp("^"+rr.call(nr).replace(Jt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function or(e){if(!K(e)||qt(e))return!1;var t=Ye(e)?ar:Zt;return t.test(P(e))}function ir(e,t){return e==null?void 0:e[t]}function L(e,t){var r=ir(e,t);return or(r)?r:void 0}var ne=L(v,"WeakMap"),me=Object.create,sr=function(){function e(){}return function(t){if(!K(t))return{};if(me)return me(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}();function cr(e,t){var r=-1,n=e.length;for(t||(t=Array(n));++r<n;)t[r]=e[r];return t}var ve=function(){try{var e=L(Object,"defineProperty");return e({},"",{}),e}catch{}}();function ur(e,t){for(var r=-1,n=e==null?0:e.length;++r<n&&t(e[r],r,e)!==!1;);return e}var lr=9007199254740991,fr=/^(?:0|[1-9]\d*)$/;function dr(e,t){var r=typeof e;return t=t??lr,!!t&&(r=="number"||r!="symbol"&&fr.test(e))&&e>-1&&e%1==0&&e<t}function qe(e,t,r){t=="__proto__"&&ve?ve(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}function Qe(e,t){return e===t||e!==e&&t!==t}var pr=Object.prototype,gr=pr.hasOwnProperty;function Xe(e,t,r){var n=e[t];(!(gr.call(e,t)&&Qe(n,r))||r===void 0&&!(t in e))&&qe(e,t,r)}function X(e,t,r,n){var i=!r;r||(r={});for(var a=-1,o=t.length;++a<o;){var c=t[a],u=n?n(r[c],e[c],c,r,e):void 0;u===void 0&&(u=e[c]),i?qe(r,c,u):Xe(r,c,u)}return r}var hr=9007199254740991;function Je(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=hr}function Ze(e){return e!=null&&Je(e.length)&&!Ye(e)}var br=Object.prototype;function ce(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||br;return e===r}function yr(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}var _r="[object Arguments]";function we(e){return k(e)&&H(e)==_r}var et=Object.prototype,mr=et.hasOwnProperty,vr=et.propertyIsEnumerable,wr=we(function(){return arguments}())?we:function(e){return k(e)&&mr.call(e,"callee")&&!vr.call(e,"callee")};function Tr(){return!1}var tt=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Te=tt&&typeof module=="object"&&module&&!module.nodeType&&module,jr=Te&&Te.exports===tt,je=jr?v.Buffer:void 0,$r=je?je.isBuffer:void 0,rt=$r||Tr,Ar="[object Arguments]",Or="[object Array]",xr="[object Boolean]",Cr="[object Date]",Sr="[object Error]",Ir="[object Function]",Pr="[object Map]",Lr="[object Number]",Er="[object Object]",Dr="[object RegExp]",Rr="[object Set]",Vr="[object String]",Mr="[object WeakMap]",Fr="[object ArrayBuffer]",Br="[object DataView]",Ur="[object Float32Array]",Nr="[object Float64Array]",Gr="[object Int8Array]",zr="[object Int16Array]",Hr="[object Int32Array]",kr="[object Uint8Array]",Kr="[object Uint8ClampedArray]",Wr="[object Uint16Array]",Yr="[object Uint32Array]",f={};f[Ur]=f[Nr]=f[Gr]=f[zr]=f[Hr]=f[kr]=f[Kr]=f[Wr]=f[Yr]=!0;f[Ar]=f[Or]=f[Fr]=f[xr]=f[Br]=f[Cr]=f[Sr]=f[Ir]=f[Pr]=f[Lr]=f[Er]=f[Dr]=f[Rr]=f[Vr]=f[Mr]=!1;function qr(e){return k(e)&&Je(e.length)&&!!f[H(e)]}function ue(e){return function(t){return e(t)}}var nt=typeof exports=="object"&&exports&&!exports.nodeType&&exports,U=nt&&typeof module=="object"&&module&&!module.nodeType&&module,Qr=U&&U.exports===nt,re=Qr&&Ke.process,D=function(){try{var e=U&&U.require&&U.require("util").types;return e||re&&re.binding&&re.binding("util")}catch{}}(),$e=D&&D.isTypedArray,Xr=$e?ue($e):qr,Jr=Object.prototype,Zr=Jr.hasOwnProperty;function at(e,t){var r=se(e),n=!r&&wr(e),i=!r&&!n&&rt(e),a=!r&&!n&&!i&&Xr(e),o=r||n||i||a,c=o?yr(e.length,String):[],u=c.length;for(var s in e)(t||Zr.call(e,s))&&!(o&&(s=="length"||i&&(s=="offset"||s=="parent")||a&&(s=="buffer"||s=="byteLength"||s=="byteOffset")||dr(s,u)))&&c.push(s);return c}function ot(e,t){return function(r){return e(t(r))}}var en=ot(Object.keys,Object),tn=Object.prototype,rn=tn.hasOwnProperty;function nn(e){if(!ce(e))return en(e);var t=[];for(var r in Object(e))rn.call(e,r)&&r!="constructor"&&t.push(r);return t}function le(e){return Ze(e)?at(e):nn(e)}function an(e){var t=[];if(e!=null)for(var r in Object(e))t.push(r);return t}var on=Object.prototype,sn=on.hasOwnProperty;function cn(e){if(!K(e))return an(e);var t=ce(e),r=[];for(var n in e)n=="constructor"&&(t||!sn.call(e,n))||r.push(n);return r}function fe(e){return Ze(e)?at(e,!0):cn(e)}var N=L(Object,"create");function un(){this.__data__=N?N(null):{},this.size=0}function ln(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var fn="__lodash_hash_undefined__",dn=Object.prototype,pn=dn.hasOwnProperty;function gn(e){var t=this.__data__;if(N){var r=t[e];return r===fn?void 0:r}return pn.call(t,e)?t[e]:void 0}var hn=Object.prototype,bn=hn.hasOwnProperty;function yn(e){var t=this.__data__;return N?t[e]!==void 0:bn.call(t,e)}var _n="__lodash_hash_undefined__";function mn(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=N&&t===void 0?_n:t,this}function I(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}I.prototype.clear=un;I.prototype.delete=ln;I.prototype.get=gn;I.prototype.has=yn;I.prototype.set=mn;function vn(){this.__data__=[],this.size=0}function J(e,t){for(var r=e.length;r--;)if(Qe(e[r][0],t))return r;return-1}var wn=Array.prototype,Tn=wn.splice;function jn(e){var t=this.__data__,r=J(t,e);if(r<0)return!1;var n=t.length-1;return r==n?t.pop():Tn.call(t,r,1),--this.size,!0}function $n(e){var t=this.__data__,r=J(t,e);return r<0?void 0:t[r][1]}function An(e){return J(this.__data__,e)>-1}function On(e,t){var r=this.__data__,n=J(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this}function j(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}j.prototype.clear=vn;j.prototype.delete=jn;j.prototype.get=$n;j.prototype.has=An;j.prototype.set=On;var G=L(v,"Map");function xn(){this.size=0,this.__data__={hash:new I,map:new(G||j),string:new I}}function Cn(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function Z(e,t){var r=e.__data__;return Cn(t)?r[typeof t=="string"?"string":"hash"]:r.map}function Sn(e){var t=Z(this,e).delete(e);return this.size-=t?1:0,t}function In(e){return Z(this,e).get(e)}function Pn(e){return Z(this,e).has(e)}function Ln(e,t){var r=Z(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this}function V(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}V.prototype.clear=xn;V.prototype.delete=Sn;V.prototype.get=In;V.prototype.has=Pn;V.prototype.set=Ln;function it(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e}var En=ot(Object.getPrototypeOf,Object);const st=En;function Dn(){this.__data__=new j,this.size=0}function Rn(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r}function Vn(e){return this.__data__.get(e)}function Mn(e){return this.__data__.has(e)}var Fn=200;function Bn(e,t){var r=this.__data__;if(r instanceof j){var n=r.__data__;if(!G||n.length<Fn-1)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new V(n)}return r.set(e,t),this.size=r.size,this}function M(e){var t=this.__data__=new j(e);this.size=t.size}M.prototype.clear=Dn;M.prototype.delete=Rn;M.prototype.get=Vn;M.prototype.has=Mn;M.prototype.set=Bn;function Un(e,t){return e&&X(t,le(t),e)}function Nn(e,t){return e&&X(t,fe(t),e)}var ct=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Ae=ct&&typeof module=="object"&&module&&!module.nodeType&&module,Gn=Ae&&Ae.exports===ct,Oe=Gn?v.Buffer:void 0,xe=Oe?Oe.allocUnsafe:void 0;function zn(e,t){if(t)return e.slice();var r=e.length,n=xe?xe(r):new e.constructor(r);return e.copy(n),n}function Hn(e,t){for(var r=-1,n=e==null?0:e.length,i=0,a=[];++r<n;){var o=e[r];t(o,r,e)&&(a[i++]=o)}return a}function ut(){return[]}var kn=Object.prototype,Kn=kn.propertyIsEnumerable,Ce=Object.getOwnPropertySymbols,de=Ce?function(e){return e==null?[]:(e=Object(e),Hn(Ce(e),function(t){return Kn.call(e,t)}))}:ut;function Wn(e,t){return X(e,de(e),t)}var Yn=Object.getOwnPropertySymbols,lt=Yn?function(e){for(var t=[];e;)it(t,de(e)),e=st(e);return t}:ut;function qn(e,t){return X(e,lt(e),t)}function ft(e,t,r){var n=t(e);return se(e)?n:it(n,r(e))}function Qn(e){return ft(e,le,de)}function Xn(e){return ft(e,fe,lt)}var ae=L(v,"DataView"),oe=L(v,"Promise"),ie=L(v,"Set"),Se="[object Map]",Jn="[object Object]",Ie="[object Promise]",Pe="[object Set]",Le="[object WeakMap]",Ee="[object DataView]",Zn=P(ae),ea=P(G),ta=P(oe),ra=P(ie),na=P(ne),C=H;(ae&&C(new ae(new ArrayBuffer(1)))!=Ee||G&&C(new G)!=Se||oe&&C(oe.resolve())!=Ie||ie&&C(new ie)!=Pe||ne&&C(new ne)!=Le)&&(C=function(e){var t=H(e),r=t==Jn?e.constructor:void 0,n=r?P(r):"";if(n)switch(n){case Zn:return Ee;case ea:return Se;case ta:return Ie;case ra:return Pe;case na:return Le}return t});const pe=C;var aa=Object.prototype,oa=aa.hasOwnProperty;function ia(e){var t=e.length,r=new e.constructor(t);return t&&typeof e[0]=="string"&&oa.call(e,"index")&&(r.index=e.index,r.input=e.input),r}var De=v.Uint8Array;function ge(e){var t=new e.constructor(e.byteLength);return new De(t).set(new De(e)),t}function sa(e,t){var r=t?ge(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}var ca=/\w*$/;function ua(e){var t=new e.constructor(e.source,ca.exec(e));return t.lastIndex=e.lastIndex,t}var Re=E?E.prototype:void 0,Ve=Re?Re.valueOf:void 0;function la(e){return Ve?Object(Ve.call(e)):{}}function fa(e,t){var r=t?ge(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}var da="[object Boolean]",pa="[object Date]",ga="[object Map]",ha="[object Number]",ba="[object RegExp]",ya="[object Set]",_a="[object String]",ma="[object Symbol]",va="[object ArrayBuffer]",wa="[object DataView]",Ta="[object Float32Array]",ja="[object Float64Array]",$a="[object Int8Array]",Aa="[object Int16Array]",Oa="[object Int32Array]",xa="[object Uint8Array]",Ca="[object Uint8ClampedArray]",Sa="[object Uint16Array]",Ia="[object Uint32Array]";function Pa(e,t,r){var n=e.constructor;switch(t){case va:return ge(e);case da:case pa:return new n(+e);case wa:return sa(e,r);case Ta:case ja:case $a:case Aa:case Oa:case xa:case Ca:case Sa:case Ia:return fa(e,r);case ga:return new n;case ha:case _a:return new n(e);case ba:return ua(e);case ya:return new n;case ma:return la(e)}}function La(e){return typeof e.constructor=="function"&&!ce(e)?sr(st(e)):{}}var Ea="[object Map]";function Da(e){return k(e)&&pe(e)==Ea}var Me=D&&D.isMap,Ra=Me?ue(Me):Da,Va="[object Set]";function Ma(e){return k(e)&&pe(e)==Va}var Fe=D&&D.isSet,Fa=Fe?ue(Fe):Ma,Ba=1,Ua=2,Na=4,dt="[object Arguments]",Ga="[object Array]",za="[object Boolean]",Ha="[object Date]",ka="[object Error]",pt="[object Function]",Ka="[object GeneratorFunction]",Wa="[object Map]",Ya="[object Number]",gt="[object Object]",qa="[object RegExp]",Qa="[object Set]",Xa="[object String]",Ja="[object Symbol]",Za="[object WeakMap]",eo="[object ArrayBuffer]",to="[object DataView]",ro="[object Float32Array]",no="[object Float64Array]",ao="[object Int8Array]",oo="[object Int16Array]",io="[object Int32Array]",so="[object Uint8Array]",co="[object Uint8ClampedArray]",uo="[object Uint16Array]",lo="[object Uint32Array]",l={};l[dt]=l[Ga]=l[eo]=l[to]=l[za]=l[Ha]=l[ro]=l[no]=l[ao]=l[oo]=l[io]=l[Wa]=l[Ya]=l[gt]=l[qa]=l[Qa]=l[Xa]=l[Ja]=l[so]=l[co]=l[uo]=l[lo]=!0;l[ka]=l[pt]=l[Za]=!1;function q(e,t,r,n,i,a){var o,c=t&Ba,u=t&Ua,s=t&Na;if(r&&(o=i?r(e,n,i,a):r(e)),o!==void 0)return o;if(!K(e))return e;var p=se(e);if(p){if(o=ia(e),!c)return cr(e,o)}else{var b=pe(e),d=b==pt||b==Ka;if(rt(e))return zn(e,c);if(b==gt||b==dt||d&&!i){if(o=u||d?{}:La(e),!c)return u?qn(e,Nn(o,e)):Wn(e,Un(o,e))}else{if(!l[b])return i?e:{};o=Pa(e,b,c)}}a||(a=new M);var $=a.get(e);if($)return $;a.set(e,o),Fa(e)?e.forEach(function(m){o.add(q(m,t,r,m,e,a))}):Ra(e)&&e.forEach(function(m,T){o.set(T,q(m,t,r,T,e,a))});var w=s?u?Xn:Qn:u?fe:le,Y=p?void 0:w(e);return ur(Y||e,function(m,T){Y&&(T=m,m=e[T]),Xe(o,T,q(m,t,r,T,e,a))}),o}var fo=4;function Be(e){return q(e,fo)}var Q=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ht={},R={},W={},po=Q&&Q.__awaiter||function(e,t,r,n){function i(a){return a instanceof r?a:new r(function(o){o(a)})}return new(r||(r=Promise))(function(a,o){function c(p){try{s(n.next(p))}catch(b){o(b)}}function u(p){try{s(n.throw(p))}catch(b){o(b)}}function s(p){p.done?a(p.value):i(p.value).then(c,u)}s((n=n.apply(e,t||[])).next())})},go=Q&&Q.__generator||function(e,t){var r={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,i,a,o;return o={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function c(s){return function(p){return u([s,p])}}function u(s){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,i&&(a=s[0]&2?i.return:s[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,s[1])).done)return a;switch(i=0,a&&(s=[s[0]&2,a.value]),s[0]){case 0:case 1:a=s;break;case 4:return r.label++,{value:s[1],done:!1};case 5:r.label++,i=s[1],s=[0];continue;case 7:s=r.ops.pop(),r.trys.pop();continue;default:if(a=r.trys,!(a=a.length>0&&a[a.length-1])&&(s[0]===6||s[0]===2)){r=0;continue}if(s[0]===3&&(!a||s[1]>a[0]&&s[1]<a[3])){r.label=s[1];break}if(s[0]===6&&r.label<a[1]){r.label=a[1],a=s;break}if(a&&r.label<a[2]){r.label=a[2],r.ops.push(s);break}a[2]&&r.ops.pop(),r.trys.pop();continue}s=t.call(e,r)}catch(p){s=[6,p],i=0}finally{n=a=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}};Object.defineProperty(W,"__esModule",{value:!0});W.ReCaptchaInstance=void 0;var ho=function(){function e(t,r,n){this.siteKey=t,this.recaptchaID=r,this.recaptcha=n,this.styleContainer=null}return e.prototype.execute=function(t){return po(this,void 0,void 0,function(){return go(this,function(r){return[2,this.recaptcha.enterprise?this.recaptcha.enterprise.execute(this.recaptchaID,{action:t}):this.recaptcha.execute(this.recaptchaID,{action:t})]})})},e.prototype.getSiteKey=function(){return this.siteKey},e.prototype.hideBadge=function(){this.styleContainer===null&&(this.styleContainer=document.createElement("style"),this.styleContainer.innerHTML=".grecaptcha-badge{visibility:hidden !important;}",document.head.appendChild(this.styleContainer))},e.prototype.showBadge=function(){this.styleContainer!==null&&(document.head.removeChild(this.styleContainer),this.styleContainer=null)},e}();W.ReCaptchaInstance=ho;Object.defineProperty(R,"__esModule",{value:!0});R.getInstance=R.load=void 0;var bo=W,A;(function(e){e[e.NOT_LOADED=0]="NOT_LOADED",e[e.LOADING=1]="LOADING",e[e.LOADED=2]="LOADED"})(A||(A={}));var bt=function(){function e(){}return e.load=function(t,r){if(r===void 0&&(r={}),typeof document>"u")return Promise.reject(new Error("This is a library for the browser!"));if(e.getLoadingState()===A.LOADED)return e.instance.getSiteKey()===t?Promise.resolve(e.instance):Promise.reject(new Error("reCAPTCHA already loaded with different site key!"));if(e.getLoadingState()===A.LOADING)return t!==e.instanceSiteKey?Promise.reject(new Error("reCAPTCHA already loaded with different site key!")):new Promise(function(i,a){e.successfulLoadingConsumers.push(function(o){return i(o)}),e.errorLoadingRunnable.push(function(o){return a(o)})});e.instanceSiteKey=t,e.setLoadingState(A.LOADING);var n=new e;return new Promise(function(i,a){n.loadScript(t,r.useRecaptchaNet||!1,r.useEnterprise||!1,r.renderParameters?r.renderParameters:{},r.customUrl).then(function(){e.setLoadingState(A.LOADED);var o=n.doExplicitRender(grecaptcha,t,r.explicitRenderParameters?r.explicitRenderParameters:{},r.useEnterprise||!1),c=new bo.ReCaptchaInstance(t,o,grecaptcha);e.successfulLoadingConsumers.forEach(function(u){return u(c)}),e.successfulLoadingConsumers=[],r.autoHideBadge&&c.hideBadge(),e.instance=c,i(c)}).catch(function(o){e.errorLoadingRunnable.forEach(function(c){return c(o)}),e.errorLoadingRunnable=[],a(o)})})},e.getInstance=function(){return e.instance},e.setLoadingState=function(t){e.loadingState=t},e.getLoadingState=function(){return e.loadingState===null?A.NOT_LOADED:e.loadingState},e.prototype.loadScript=function(t,r,n,i,a){var o=this;r===void 0&&(r=!1),n===void 0&&(n=!1),i===void 0&&(i={}),a===void 0&&(a="");var c=document.createElement("script");c.setAttribute("recaptcha-v3-script","");var u="https://www.google.com/recaptcha/api.js";r&&(n?u="https://recaptcha.net/recaptcha/enterprise.js":u="https://recaptcha.net/recaptcha/api.js"),n&&(u="https://www.google.com/recaptcha/enterprise.js"),a&&(u=a),i.render&&(i.render=void 0);var s=this.buildQueryString(i);return c.src=u+"?render=explicit"+s,new Promise(function(p,b){c.addEventListener("load",o.waitForScriptToLoad(function(){p(c)},n),!1),c.onerror=function(d){e.setLoadingState(A.NOT_LOADED),b(d)},document.head.appendChild(c)})},e.prototype.buildQueryString=function(t){var r=Object.keys(t);return r.length<1?"":"&"+Object.keys(t).filter(function(n){return!!t[n]}).map(function(n){return n+"="+t[n]}).join("&")},e.prototype.waitForScriptToLoad=function(t,r){var n=this;return function(){window.grecaptcha===void 0?setTimeout(function(){n.waitForScriptToLoad(t,r)},e.SCRIPT_LOAD_DELAY):r?window.grecaptcha.enterprise.ready(function(){t()}):window.grecaptcha.ready(function(){t()})}},e.prototype.doExplicitRender=function(t,r,n,i){var a={sitekey:r,badge:n.badge,size:n.size,tabindex:n.tabindex};return n.container?i?t.enterprise.render(n.container,a):t.render(n.container,a):i?t.enterprise.render(a):t.render(a)},e.loadingState=null,e.instance=null,e.instanceSiteKey=null,e.successfulLoadingConsumers=[],e.errorLoadingRunnable=[],e.SCRIPT_LOAD_DELAY=25,e}();R.load=bt.load;R.getInstance=bt.getInstance;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.ReCaptchaInstance=e.getInstance=e.load=void 0;var t=R;Object.defineProperty(e,"load",{enumerable:!0,get:function(){return t.load}}),Object.defineProperty(e,"getInstance",{enumerable:!0,get:function(){return t.getInstance}});var r=W;Object.defineProperty(e,"ReCaptchaInstance",{enumerable:!0,get:function(){return r.ReCaptchaInstance}})})(ht);const yo=y("h1",{class:"mb-6 text-3xl font-medium"},"Legal claim submission form",-1),_o=y("b",null,"Wait!",-1),mo=y("b",null,"did you know that appdb is an official app store that works under EU DMA?",-1),vo=["href"],wo=y("p",{class:"my-7"},"Alternatively, you can use this form to submit a claim:",-1),To={class:"grid grid-cols-4 gap-5 xl:grid-cols-2 md:grid-cols-1"},jo={class:"col-span-full"},$o=["href"],Ao={class:"col-span-full"},Lo=z({__name:"copyright-claim",async setup(e){let t,r;wt({title:"Copyright Claim"});const n=be(),i=ee(!1),a={url:"",name:"",phone:"",email:"",license_text:"","g-recaptcha-response":""},o=ee(Be(a)),c=ee(!1);async function u(){if($t().isAuthorized){o.value["g-recaptcha-response"]="";return}const d=be(),w=await(await ht.load(d.public.recaptchaKey,{autoHideBadge:!0})).execute("submit");o.value["g-recaptcha-response"]=w}async function s(){if(!c.value){alert("You have to agree with terms and conditions");return}i.value=!0;try{await u(),await xt(o.value),alert("Your claim has been submitted. Please check your mailbox for further instructions"),o.value=Be(a)}finally{i.value=!1}}const p=([t,r]=Tt(()=>Ct({required_for:"copyright_claims"})),t=await t,r(),t);return(b,d)=>{const $=St,w=Pt,Y=Et,m=Rt,T=Ot;return O(),S(he,null,[yo,y("p",null,[_o,F(" before you continue, "),mo,F(" Here, you can publish apps without Apple restrictions. We have common APIs replacements and much less and fair commissions. "),y("a",{href:h(n).public.registerUrl,target:"_blank"}," Create a publisher ID ",8,vo),F(" and release your app on appdb for free officially. For officially released apps we have technologies that will prevent users from uploading unlicensed copies of your apps. ")]),wo,y("form",To,[_(w,{label:"Full name"},{default:x(()=>[_($,{modelValue:h(o).name,"onUpdate:modelValue":d[0]||(d[0]=g=>h(o).name=g)},null,8,["modelValue"])]),_:1}),_(w,{label:"Corporate email"},{default:x(()=>[_($,{modelValue:h(o).email,"onUpdate:modelValue":d[1]||(d[1]=g=>h(o).email=g),type:"email"},null,8,["modelValue"])]),_:1}),_(w,{label:"Phone number in international format"},{default:x(()=>[_($,{modelValue:h(o).phone,"onUpdate:modelValue":d[2]||(d[2]=g=>h(o).phone=g),type:"tel"},null,8,["modelValue"])]),_:1}),_(w,{label:"URL where infringement content is located"},{default:x(()=>[_($,{modelValue:h(o).url,"onUpdate:modelValue":d[3]||(d[3]=g=>h(o).url=g),type:"url"},null,8,["modelValue"])]),_:1}),_(w,{label:"License text",class:"col-span-full"},{default:x(()=>[_(Y,{modelValue:h(o).license_text,"onUpdate:modelValue":d[4]||(d[4]=g=>h(o).license_text=g),rows:3},null,8,["modelValue"])]),_:1}),y("div",jo,[_(m,{modelValue:h(c),"onUpdate:modelValue":d[5]||(d[5]=g=>ke(c)?c.value=g:null)},{default:x(()=>[F(" By checking this box I agree with "),(O(!0),S(he,null,jt(h(p),g=>(O(),S("span",{key:g.id,class:"not-last:after:content-[',_']"},[y("a",{href:g.uri,target:"_blank"},ze(g.name),9,$o)]))),128))]),_:1},8,["modelValue"])]),y("div",Ao,[_(T,{loading:h(i),variant:"primary",onClick:s},{default:x(()=>[F(" Submit ")]),_:1},8,["loading"])])])],64)}}});export{Lo as default};
//# sourceMappingURL=copyright-claim.Bp5d8ci4.js.map
