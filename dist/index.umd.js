!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((t="undefined"!=typeof globalThis?globalThis:t||self).polyline={})}(this,(function(t){"use strict";var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(t,n){return t(n={exports:{}},n.exports),n.exports}var r=function(t){return t&&t.Math==Math&&t},o=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n&&n)||Function("return this")(),i=function(t){try{return!!t()}catch(t){return!0}},u=!i((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),f={}.propertyIsEnumerable,c=Object.getOwnPropertyDescriptor,a={f:c&&!f.call({1:2},1)?function(t){var n=c(this,t);return!!n&&n.enumerable}:f},l=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}},p={}.toString,s="".split,h=i((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==function(t){return p.call(t).slice(8,-1)}(t)?s.call(t,""):Object(t)}:Object,y=function(t){return h(function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}(t))},d=function(t){return"object"==typeof t?null!==t:"function"==typeof t},g=function(t,n){if(!d(t))return t;var e,r;if(n&&"function"==typeof(e=t.toString)&&!d(r=e.call(t)))return r;if("function"==typeof(e=t.valueOf)&&!d(r=e.call(t)))return r;if(!n&&"function"==typeof(e=t.toString)&&!d(r=e.call(t)))return r;throw TypeError("Can't convert object to primitive value")},v={}.hasOwnProperty,b=function(t,n){return v.call(t,n)},m=o.document,w=d(m)&&d(m.createElement),j=!u&&!i((function(){return 7!=Object.defineProperty((t="div",w?m.createElement(t):{}),"a",{get:function(){return 7}}).a;var t})),O=Object.getOwnPropertyDescriptor,S={f:u?O:function(t,n){if(t=y(t),n=g(n,!0),j)try{return O(t,n)}catch(t){}if(b(t,n))return l(!a.f.call(t,n),t[n])}},M=function(t){if(!d(t))throw TypeError(String(t)+" is not an object");return t},P=Object.defineProperty,T={f:u?P:function(t,n,e){if(M(t),n=g(n,!0),M(e),j)try{return P(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},E=u?function(t,n,e){return T.f(t,n,l(1,e))}:function(t,n,e){return t[n]=e,t},x=function(t,n){try{E(o,t,n)}catch(e){o[t]=n}return n},C="__core-js_shared__",A=o[C]||x(C,{}),_=Function.toString;"function"!=typeof A.inspectSource&&(A.inspectSource=function(t){return _.call(t)});var I,L,k,F,N=A.inspectSource,z=o.WeakMap,D="function"==typeof z&&/native code/.test(N(z)),G=e((function(t){(t.exports=function(t,n){return A[t]||(A[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.6.5",mode:"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})})),W=0,q=Math.random(),K=G("keys"),R={},V=o.WeakMap;if(D){var Y=new V,B=Y.get,H=Y.has,J=Y.set;I=function(t,n){return J.call(Y,t,n),n},L=function(t){return B.call(Y,t)||{}},k=function(t){return H.call(Y,t)}}else{var Q=K[F="state"]||(K[F]=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++W+q).toString(36)}(F));R[Q]=!0,I=function(t,n){return E(t,Q,n),n},L=function(t){return b(t,Q)?t[Q]:{}},k=function(t){return b(t,Q)}}var U,X,Z={set:I,get:L,has:k,enforce:function(t){return k(t)?L(t):I(t,{})},getterFor:function(t){return function(n){var e;if(!d(n)||(e=L(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}},$=e((function(t){var n=Z.get,e=Z.enforce,r=String(String).split("String");(t.exports=function(t,n,i,u){var f=!!u&&!!u.unsafe,c=!!u&&!!u.enumerable,a=!!u&&!!u.noTargetGet;"function"==typeof i&&("string"!=typeof n||b(i,"name")||E(i,"name",n),e(i).source=r.join("string"==typeof n?n:"")),t!==o?(f?!a&&t[n]&&(c=!0):delete t[n],c?t[n]=i:E(t,n,i)):c?t[n]=i:x(n,i)})(Function.prototype,"toString",(function(){return"function"==typeof this&&n(this).source||N(this)}))})),tt=o,nt=function(t){return"function"==typeof t?t:void 0},et=Math.ceil,rt=Math.floor,ot=function(t){return isNaN(t=+t)?0:(t>0?rt:et)(t)},it=Math.min,ut=Math.max,ft=Math.min,ct=function(t){return function(n,e,r){var o,i,u=y(n),f=(o=u.length)>0?it(ot(o),9007199254740991):0,c=function(t,n){var e=ot(t);return e<0?ut(e+n,0):ft(e,n)}(r,f);if(t&&e!=e){for(;f>c;)if((i=u[c++])!=i)return!0}else for(;f>c;c++)if((t||c in u)&&u[c]===e)return t||c||0;return!t&&-1}},at={includes:ct(!0),indexOf:ct(!1)}.indexOf,lt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype"),pt={f:Object.getOwnPropertyNames||function(t){return function(t,n){var e,r=y(t),o=0,i=[];for(e in r)!b(R,e)&&b(r,e)&&i.push(e);for(;n.length>o;)b(r,e=n[o++])&&(~at(i,e)||i.push(e));return i}(t,lt)}},st={f:Object.getOwnPropertySymbols},ht=function(t,n){return arguments.length<2?nt(tt[t])||nt(o[t]):tt[t]&&tt[t][n]||o[t]&&o[t][n]}("Reflect","ownKeys")||function(t){var n=pt.f(M(t)),e=st.f;return e?n.concat(e(t)):n},yt=function(t,n){for(var e=ht(n),r=T.f,o=S.f,i=0;i<e.length;i++){var u=e[i];b(t,u)||r(t,u,o(n,u))}},dt=/#|\.prototype\./,gt=function(t,n){var e=bt[vt(t)];return e==wt||e!=mt&&("function"==typeof n?i(n):!!n)},vt=gt.normalize=function(t){return String(t).replace(dt,".").toLowerCase()},bt=gt.data={},mt=gt.NATIVE="N",wt=gt.POLYFILL="P",jt=gt,Ot=S.f,St=[].join,Mt=h!=Object,Pt=(U=",",!!(X=[]["join"])&&i((function(){X.call(null,U||function(){throw 1},1)})));!function(t,n){var e,r,i,u,f,c=t.target,a=t.global,l=t.stat;if(e=a?o:l?o[c]||x(c,{}):(o[c]||{}).prototype)for(r in n){if(u=n[r],i=t.noTargetGet?(f=Ot(e,r))&&f.value:e[r],!jt(a?r:c+(l?".":"#")+r,t.forced)&&void 0!==i){if(typeof u==typeof i)continue;yt(u,i)}(t.sham||i&&i.sham)&&E(u,"sham",!0),$(e,r,u,t)}}({target:"Array",proto:!0,forced:Mt||!Pt},{join:function(t){return St.call(y(this),void 0===t?",":t)}});var Tt=function(t,n){for(var e,r=[],o=[0,0],i=0,u=t.length;i<u;++i)e=n(t[i]),Et(Ct(e[0])-Ct(o[0]),r),Et(Ct(e[1])-Ct(o[1]),r),o=e;return r.join("")},Et=function(t,n){return xt(t<0?~(t<<1):t<<1,n)},xt=function(t,n){for(;t>=32;)n.push(String.fromCharCode(63+(32|31&t))),t>>=5;return n.push(String.fromCharCode(t+63)),n},Ct=function(t){return Math.floor(Math.abs(t)+.5)*(t>=0?1:-1)};t.decode=function(t,n){void 0===n&&(n=5);for(var e=Math.pow(10,n),r=t.length,o=new Array(Math.floor(t.length/2)),i=0,u=0,f=0,c=0;i<r;++c){var a=1,l=0,p=void 0;do{a+=(p=t.charCodeAt(i++)-63-1)<<l,l+=5}while(p>=31);u+=1&a?~(a>>1):a>>1,a=1,l=0;do{a+=(p=t.charCodeAt(i++)-63-1)<<l,l+=5}while(p>=31);f+=1&a?~(a>>1):a>>1,o[c]=[u/e,f/e]}return o.length=c,o},t.encode=function(t,n){void 0===n&&(n=5);var e=Math.pow(10,n);return Tt(t,(function(t){return Array.isArray(t)||(t=[t.lat,t.lng]),[Ct(t[0]*e),Ct(t[1]*e)]}))},t.polylineEncodeLine=Tt,Object.defineProperty(t,"__esModule",{value:!0})}));
