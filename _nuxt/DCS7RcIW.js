import{a as h,b as C,S as s,i as A}from"./CqO_RI43.js";var v="[object Symbol]";function T(r){return typeof r=="symbol"||h(r)&&C(r)==v}function $(r,e){for(var o=-1,f=r==null?0:r.length,n=Array(f);++o<f;)n[o]=e(r[o],o,r);return n}var M=1/0,a=s?s.prototype:void 0,c=a?a.toString:void 0;function l(r){if(typeof r=="string")return r;if(A(r))return $(r,l)+"";if(T(r))return c?c.call(r):"";var e=r+"";return e=="0"&&1/r==-M?"-0":e}function b(r){return r==null?"":l(r)}function j(r,e,o){var f=-1,n=r.length;e<0&&(e=-e>n?0:n+e),o=o>n?n:o,o<0&&(o+=n),n=e>o?0:o-e>>>0,e>>>=0;for(var t=Array(n);++f<n;)t[f]=r[f+e];return t}function k(r,e,o){var f=r.length;return o=o===void 0?f:o,!e&&o>=f?r:j(r,e,o)}var x="\\ud800-\\udfff",F="\\u0300-\\u036f",O="\\ufe20-\\ufe2f",U="\\u20d0-\\u20ff",w=F+O+U,H="\\ufe0e\\ufe0f",I="\\u200d",J=RegExp("["+I+x+w+H+"]");function d(r){return J.test(r)}function N(r){return r.split("")}var g="\\ud800-\\udfff",V="\\u0300-\\u036f",z="\\ufe20-\\ufe2f",E="\\u20d0-\\u20ff",L=V+z+E,P="\\ufe0e\\ufe0f",W="["+g+"]",u="["+L+"]",i="\\ud83c[\\udffb-\\udfff]",Z="(?:"+u+"|"+i+")",m="[^"+g+"]",p="(?:\\ud83c[\\udde6-\\uddff]){2}",S="[\\ud800-\\udbff][\\udc00-\\udfff]",q="\\u200d",y=Z+"?",R="["+P+"]?",G="(?:"+q+"(?:"+[m,p,S].join("|")+")"+R+y+")*",Y=R+y+G,B="(?:"+[m+u+"?",u,p,S,W].join("|")+")",D=RegExp(i+"(?="+i+")|"+B+Y,"g");function K(r){return r.match(D)||[]}function Q(r){return d(r)?K(r):N(r)}function X(r){return function(e){e=b(e);var o=d(e)?Q(e):void 0,f=o?o[0]:e.charAt(0),n=o?k(o,1).join(""):e.slice(1);return f[r]()+n}}var _=X("toUpperCase");function er(r){return _(b(r).toLowerCase())}export{er as c};
//# sourceMappingURL=DCS7RcIW.js.map
