(this.webpackJsonpcalcool=this.webpackJsonpcalcool||[]).push([[0],{12:function(n,t,e){n.exports=e(22)},17:function(n,t,e){},20:function(n,t,e){},21:function(n,t,e){},22:function(n,t,e){"use strict";e.r(t);var r=e(0),a=e.n(r),c=e(8),u=e.n(c),o=(e(17),e(3)),i=e(1),l=e(2);function s(){var n=Object(i.a)(["\n  background: ",";\n  color: ",";\n  font-size: 2rem;\n  border: 2px solid black;\n  border-radius: 1vh;\n\n  :active {\n    opacity: 0.75;\n  }\n"]);return s=function(){return n},n}var f=l.a.button(s(),(function(n){return n.background?n.background:"black"}),(function(n){return n.color?n.color:"white"})),d=function(n){var t=n.label,e=n.onClick;return a.a.createElement(f,{onClick:function(n){var t=n.target;return e(t.value)},value:t},t)};function v(){var n=Object(i.a)(["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-gap: 1vh;\n"]);return v=function(){return n},n}var b=l.a.section(v()),g=(e(20),function(n){var t=n.keys,e=n.onPress;return a.a.createElement(b,null,t&&t.map((function(n){return a.a.createElement(d,{onClick:e,label:n})})))});function m(){var n=Object(i.a)(["\n  text-align: right;\n  background: black;\n  color: white;\n  min-height: 15vh;\n  font-size: 2em;\n  padding: 1vh;\n"]);return m=function(){return n},n}var h=l.a.section(m()),p=function(n){var t=n.data;return a.a.createElement(h,null,t)};function k(){var n=Object(i.a)(["\n  margin-bottom: 1vh;\n"]);return k=function(){return n},n}function E(){var n=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  border: 1px solid black;\n  border-radius: 1vh;\n  padding: 1vh;\n  width: 250px;\n  height: fit-content;\n"]);return E=function(){return n},n}var x=l.a.div(E()),S=l.a.div(k()),j=function(){var n=a.a.useState(""),t=Object(o.a)(n,2),e=t[0],r=t[1],c=a.a.useState(""),u=Object(o.a)(c,2),i=u[0],l=u[1],s=a.a.useState(!1),f=Object(o.a)(s,2),d=f[0],v=f[1],b=a.a.useState(""),m=Object(o.a)(b,2),h=m[0],k=m[1],E=["%","/","x","-","+","="],j=["AC","C"],O=function(n){return"."===n},C=function(n){return"="===n},w=function(n,t,e){try{var r=n.includes(".")?parseFloat(n):parseInt(n),a=t.includes(".")?parseFloat(t):parseInt(t);switch(e){case"+":return(r+a).toString();case"-":return(r-a).toString();case"x":return(r*a).toString();case"/":return(r/a).toString();case"%":return(r%a).toString();default:return"bad expression"}}catch(c){return"something wrong"}};return a.a.createElement(x,null,a.a.createElement(S,null,a.a.createElement(p,{data:d&&i?i:e})),a.a.createElement(S,null,a.a.createElement(g,{keys:["AC","C","%","/","7","8","9","x","4","5","6","-","1","2","3","+",".","0","="],onPress:function(n){if(function(n){return j.includes(n)}(n))return function(n){return"AC"===n}(n)?(r(""),l(""),v(!1),void k("")):d?i&&l(i.slice(0,i.length-1)):e&&r(e.slice(0,e.length-1));if(!function(n){return E.includes(n)}(n))return O(n)&&(d?!i.includes(n):!e.includes(n))||!O(n)?d?l("".concat(i).concat(n)):r("".concat(e).concat(n)):void 0;if(C(n)&&e&&i&&h){var t=w(e,i,h);r("".concat(t)),v(!1),l("")}else if(!C(n)){if(e&&i){var a=w(e,i,h);r("".concat(a))}v(!0),k(n),l("")}}})))};e(21);var O=function(){return a.a.createElement("div",{className:"container"},a.a.createElement(j,null))};u.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(O,null)),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.911b9f8a.chunk.js.map