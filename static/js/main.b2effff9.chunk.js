(this["webpackJsonpreact-calculator"]=this["webpackJsonpreact-calculator"]||[]).push([[0],[,,,,,function(t,e,n){t.exports=n(12)},,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(3),l=n.n(c),o=(n(10),n(1)),s=n(4),u=function(t){return r.a.createElement("button",{className:t.btnStyle,onClick:function(){return t.onPress(t.children)}},t.children)},i=function(t){var e=t.operations,n=t.results;return r.a.createElement("div",{className:"calculator__display"},r.a.createElement("div",{className:"calculator__display__history"},e),r.a.createElement("div",{className:"calculator__display__result"},n))};n(11);var b=function(){var t=Object(a.useState)({firstNumber:0,secondNumber:"",window:"",operator:"+",result:0}),e=Object(s.a)(t,2),n=e[0],c=e[1],l=function(t){var e=m(n.firstNumber),a=n.operator,r=m(n.result),l=n.secondNumber+t;"+"===a?r=parseFloat(e)+parseFloat(l):"-"===a?r=parseFloat(e)-parseFloat(l):"/"===a?r=parseFloat(e)/parseFloat(l):"*"===a&&(r=parseFloat(e)*parseFloat(l)),c(Object(o.a)(Object(o.a)({},n),{},{window:n.window+t,result:r,secondNumber:l}))},b=function(t){c(Object(o.a)(Object(o.a)({},n),{},{window:n.window+t,operator:t,firstNumber:n.result,secondNumber:""}))},m=function(t){var e=parseFloat(t);return isNaN(e)?0:e};return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"calculator"},r.a.createElement(i,{operations:n.window,results:n.result}),r.a.createElement("div",{className:"calculator__keypad"},r.a.createElement("div",{className:"input-keys"},r.a.createElement("div",{className:"function-keys"},r.a.createElement(u,{btnStyle:"calculator__btn btn-clear",onPress:function(){c(Object(o.a)(Object(o.a)({},n),{},{firstNumber:"0",secondNumber:"",window:"",operator:"+",result:0}))}},"AC"),r.a.createElement(u,{btnStyle:"calculator__btn btn-sign",onPress:function(){}},"\xb1"),r.a.createElement(u,{btnStyle:"calculator__btn btn-percent",onPress:function(){}},"%")),r.a.createElement("div",{className:"digit-keys"},r.a.createElement(u,{btnStyle:"calculator__btn btn-7",onPress:function(){return l(7)}},"7"),r.a.createElement(u,{btnStyle:"calculator__btn btn-8",onPress:function(){return l(8)}},"8"),r.a.createElement(u,{btnStyle:"calculator__btn btn-9",onPress:function(){return l(9)}},"9"),r.a.createElement(u,{btnStyle:"calculator__btn btn-4",onPress:function(){return l(4)}},"4"),r.a.createElement(u,{btnStyle:"calculator__btn btn-5",onPress:function(){return l(5)}},"5"),r.a.createElement(u,{btnStyle:"calculator__btn btn-6",onPress:function(){return l(6)}},"6"),r.a.createElement(u,{btnStyle:"calculator__btn btn-1",onPress:function(){return l(1)}},"1"),r.a.createElement(u,{btnStyle:"calculator__btn btn-2",onPress:function(){return l(2)}},"2"),r.a.createElement(u,{btnStyle:"calculator__btn btn-3",onPress:function(){return l(3)}},"3"),r.a.createElement(u,{btnStyle:"calculator__btn btn-0",onPress:function(){return l(0)}},"0"),r.a.createElement(u,{btnStyle:"calculator__btn btn-dot",onPress:function(){return l(".")}},"\u25cf"))),r.a.createElement("div",{className:"operator-keys"},r.a.createElement(u,{btnStyle:"calculator__btn btn-divide",onPress:function(){return b("/")}},"\xf7"),r.a.createElement(u,{btnStyle:"calculator__btn btn-multiply",onPress:function(){return b("*")}},"\xd7"),r.a.createElement(u,{btnStyle:"calculator__btn btn-subtract",onPress:function(){return b("-")}},"\u2212"),r.a.createElement(u,{btnStyle:"calculator__btn btn-add",onPress:function(){return b("+")}},"+"),r.a.createElement(u,{btnStyle:"calculator__btn btn-equals",onPress:function(){c(Object(o.a)(Object(o.a)({},n),{},{firstNumber:"",secondNumber:"",window:""}))}},"=")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.b2effff9.chunk.js.map