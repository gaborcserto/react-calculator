(this["webpackJsonpreact-calculator"]=this["webpackJsonpreact-calculator"]||[]).push([[0],[,,,,,function(e,t,n){e.exports=n(12)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(3),o=n.n(c),l=(n(10),n(1)),s=n(4),u=function(e){return r.a.createElement("button",{className:e.btnStyle,onClick:function(){return e.onPress(e.children)}},e.children)},b=function(e){var t=e.operations,n=e.results;return r.a.createElement("div",{className:"calculator__display"},r.a.createElement("div",{className:"calculator__display__history"},t),r.a.createElement("div",{className:"calculator__display__result"},n))};n(11);var i=function(){var e=Object(a.useState)({firstNumber:"0",secondNumber:"",window:"",operator:"+",result:0}),t=Object(s.a)(e,2),n=t[0],c=t[1],o=function(e){var t=i(n.firstNumber),a=n.operator,r=i(n.result),o=n.secondNumber+e;"+"===a?r=Math.round(100*(parseFloat("".concat(t))+parseFloat(o)))/100:"-"===a?r=Math.round(1e3*(parseFloat("".concat(t))-parseFloat(o)))/1e3:"/"===a?r=Math.round(parseFloat("".concat(t))/parseFloat(o)*1e3)/1e3:"*"===a&&(r=Math.round(parseFloat("".concat(t))*parseFloat(o)*1e3)/1e3),"."===a?d(e,r,o):c(Object(l.a)(Object(l.a)({},n),{},{window:n.window+e,result:r,secondNumber:o}))},i=function(e){var t=parseFloat(e);return isNaN(t)?0:t},m=function(e){c(Object(l.a)(Object(l.a)({},n),{},{window:n.window+e,operator:e,firstNumber:n.result,secondNumber:""}))},d=function(e,t,a){var r="".concat(t,".").concat(e);n.result.toString().includes(".")&&(r="".concat(t).concat(e),console.log("kl")),c(Object(l.a)(Object(l.a)({},n),{},{window:n.window+e,result:r,secondNumber:a}))};return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"calculator"},r.a.createElement(b,{operations:n.window,results:n.result}),r.a.createElement("div",{className:"calculator__keypad"},r.a.createElement("div",{className:"input-keys"},r.a.createElement("div",{className:"function-keys"},r.a.createElement(u,{btnStyle:"calculator__btn btn-clear",onPress:function(){c(Object(l.a)(Object(l.a)({},n),{},{firstNumber:"0",secondNumber:"",window:"",operator:"+",result:0}))}},"AC"),r.a.createElement(u,{btnStyle:"calculator__btn btn-sign",onPress:function(){return function(){var e=n.secondNumber;if(n.secondNumber!==n.result&&(e="".concat(n.result)),parseFloat(n.secondNumber)>0)c(Object(l.a)(Object(l.a)({},n),{},{secondNumber:"-".concat(e),window:"-".concat(e),result:-1*parseFloat(e)}));else if(parseFloat(e)<0){var t=e.slice(1);c(Object(l.a)(Object(l.a)({},n),{},{secondNumber:t,window:t,result:-1*parseFloat(e)}))}}()}},"\xb1"),r.a.createElement(u,{btnStyle:"calculator__btn btn-del",onPress:function(){return function(){if(n.secondNumber.length>1){var e=n.secondNumber.slice(0,n.secondNumber.length-1);c(Object(l.a)(Object(l.a)({},n),{},{secondNumber:e,window:e,result:parseFloat(e)}))}}()}},"\u232b")),r.a.createElement("div",{className:"digit-keys"},r.a.createElement(u,{btnStyle:"calculator__btn btn-7",onPress:function(){return o(7)}},"7"),r.a.createElement(u,{btnStyle:"calculator__btn btn-8",onPress:function(){return o(8)}},"8"),r.a.createElement(u,{btnStyle:"calculator__btn btn-9",onPress:function(){return o(9)}},"9"),r.a.createElement(u,{btnStyle:"calculator__btn btn-4",onPress:function(){return o(4)}},"4"),r.a.createElement(u,{btnStyle:"calculator__btn btn-5",onPress:function(){return o(5)}},"5"),r.a.createElement(u,{btnStyle:"calculator__btn btn-6",onPress:function(){return o(6)}},"6"),r.a.createElement(u,{btnStyle:"calculator__btn btn-1",onPress:function(){return o(1)}},"1"),r.a.createElement(u,{btnStyle:"calculator__btn btn-2",onPress:function(){return o(2)}},"2"),r.a.createElement(u,{btnStyle:"calculator__btn btn-3",onPress:function(){return o(3)}},"3"),r.a.createElement(u,{btnStyle:"calculator__btn btn-0",onPress:function(){return o(0)}},"0"),r.a.createElement(u,{btnStyle:"calculator__btn btn-dot",onPress:function(){""===n.secondNumber?c(Object(l.a)(Object(l.a)({},n),{},{secondNumber:"0.",window:"0.",result:parseFloat("0.")})):n.secondNumber===n.result||n.secondNumber.includes(".")?n.secondNumber.includes(".")||c(Object(l.a)(Object(l.a)({},n),{},{secondNumber:"".concat(n.secondNumber,"."),window:"".concat(n.secondNumber,"."),result:parseFloat("".concat(n.secondNumber,"."))})):c(Object(l.a)(Object(l.a)({},n),{},{secondNumber:"".concat(n.result,"."),window:"".concat(n.result,"."),operator:".",result:parseFloat("".concat(n.result,"."))}))}},"\u25cf"))),r.a.createElement("div",{className:"operator-keys"},r.a.createElement(u,{btnStyle:"calculator__btn btn-divide",onPress:function(){return m("/")}},"\xf7"),r.a.createElement(u,{btnStyle:"calculator__btn btn-multiply",onPress:function(){return m("*")}},"\xd7"),r.a.createElement(u,{btnStyle:"calculator__btn btn-subtract",onPress:function(){return m("-")}},"\u2212"),r.a.createElement(u,{btnStyle:"calculator__btn btn-add",onPress:function(){return m("+")}},"+"),r.a.createElement(u,{btnStyle:"calculator__btn btn-equals",onPress:function(){c(Object(l.a)(Object(l.a)({},n),{},{firstNumber:"",secondNumber:"",window:n.result}))}},"=")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.6ee423f5.chunk.js.map