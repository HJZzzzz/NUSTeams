(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[7],{615:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(156),r=a(1),l=a.n(r),c=a(614),o=l.a.memo((function(e){var t=e.name,a=e.text,r=Object(n.a)(e,["name","text"]),o=t?"https://coreui.io/react/docs/components/".concat(t):e.href;return l.a.createElement("div",{className:"card-header-actions"},l.a.createElement(c.db,Object.assign({},r,{href:o,rel:"noreferrer noopener",target:"_blank",className:"card-header-action"}),l.a.createElement("small",{className:"text-muted"},a||"docs")))}))},616:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(617);function r(e,t){if(e){if("string"===typeof e)return Object(n.a)(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Object(n.a)(e,t):void 0}}},617:function(e,t,a){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}a.d(t,"a",(function(){return n}))},618:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(616);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,l=void 0;try{for(var c,o=e[Symbol.iterator]();!(n=(c=o.next()).done)&&(a.push(c.value),!t||a.length!==t);n=!0);}catch(m){r=!0,l=m}finally{try{n||null==o.return||o.return()}finally{if(r)throw l}}return a}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},620:function(e,t){!function(e,t){for(var a in t)e[a]=t[a]}(t,function(e){var t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}return a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=0)}([function(e,t,a){"use strict";a.r(t),a.d(t,"deepObjectsMerge",(function(){return n})),a.d(t,"getColor",(function(){return m})),a.d(t,"getStyle",(function(){return o})),a.d(t,"hexToRgb",(function(){return i})),a.d(t,"hexToRgba",(function(){return s})),a.d(t,"makeUid",(function(){return u})),a.d(t,"omitByKeys",(function(){return d})),a.d(t,"pickByKeys",(function(){return E})),a.d(t,"rgbToHex",(function(){return p}));var n=function e(t,a){for(var n=0,r=Object.keys(a);n<r.length;n++){var l=r[n];a[l]instanceof Object&&Object.assign(a[l],e(t[l],a[l]))}return Object.assign(t||{},a),t},r=function(){for(var e={},t=document.styleSheets,a="",n=t.length-1;n>-1;n--){for(var r=t[n].cssRules,l=r.length-1;l>-1;l--)if(".ie-custom-properties"===r[l].selectorText){a=r[l].cssText;break}if(a)break}return(a=a.substring(a.lastIndexOf("{")+1,a.lastIndexOf("}"))).split(";").forEach((function(t){if(t){var a=t.split(": ")[0],n=t.split(": ")[1];a&&n&&(e["--".concat(a.trim())]=n.trim())}})),e},l=function(){return Boolean(document.documentMode)&&document.documentMode>=10},c=function(e){return e.match(/^--.*/i)},o=function(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;if(c(e)&&l()){var n=r();t=n[e]}else t=window.getComputedStyle(a,null).getPropertyValue(e).replace(/^\s/,"");return t},m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body,a="--".concat(e),n=o(a,t);return n||e},i=function(e){if(void 0===e)throw new TypeError("Hex color is not defined");var t,a,n;if(!e.match(/^#(?:[0-9a-f]{3}){1,2}$/i))throw new Error("".concat(e," is not a valid hex color"));return 7===e.length?(t=parseInt(e.slice(1,3),16),a=parseInt(e.slice(3,5),16),n=parseInt(e.slice(5,7),16)):(t=parseInt(e.slice(1,2),16),a=parseInt(e.slice(2,3),16),n=parseInt(e.slice(3,5),16)),"rgba(".concat(t,", ").concat(a,", ").concat(n,")")},s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;if(void 0===e)throw new TypeError("Hex color is not defined");var a,n,r,l=e.match(/^#(?:[0-9a-f]{3}){1,2}$/i);if(!l)throw new Error("".concat(e," is not a valid hex color"));return 7===e.length?(a=parseInt(e.slice(1,3),16),n=parseInt(e.slice(3,5),16),r=parseInt(e.slice(5,7),16)):(a=parseInt(e.slice(1,2),16),n=parseInt(e.slice(2,3),16),r=parseInt(e.slice(3,5),16)),"rgba(".concat(a,", ").concat(n,", ").concat(r,", ").concat(t/100,")")},u=function(){return"uid-"+Math.random().toString(36).substr(2)},d=function(e,t){for(var a={},n=Object.keys(e),r=0;r<n.length;r++)!t.includes(n[r])&&(a[n[r]]=e[n[r]]);return a},E=function(e,t){for(var a={},n=0;n<t.length;n++)a[t[n]]=e[t[n]];return a},p=function(e){if(void 0===e)throw new TypeError("Hex color is not defined");if("transparent"===e)return"#00000000";var t=e.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);if(!t)throw new Error("".concat(e," is not a valid rgb color"));var a="0".concat(parseInt(t[1],10).toString(16)),n="0".concat(parseInt(t[2],10).toString(16)),r="0".concat(parseInt(t[3],10).toString(16));return"#".concat(a.slice(-2)).concat(n.slice(-2)).concat(r.slice(-2))},b={deepObjectsMerge:n,getColor:m,getStyle:o,hexToRgb:i,hexToRgba:s,makeUid:u,omitByKeys:d,pickByKeys:E,rgbToHex:p};t.default=b}]))},622:function(e,t,a){"use strict";var n=a(156),r=a(1),l=a.n(r),c=a(620),o=a(624),m=function(e){var t=e.borderColor,a=e.backgroundColor,r=e.pointHoverBackgroundColor,m=e.dataPoints,i=e.label,s=e.pointed,u=Object(n.a)(e,["borderColor","backgroundColor","pointHoverBackgroundColor","dataPoints","label","pointed"]),d=r||("transparent"!==a?a:t),E=[{data:m,borderColor:Object(c.getColor)(t),backgroundColor:Object(c.getColor)(a),pointBackgroundColor:Object(c.getColor)(d),pointHoverBackgroundColor:Object(c.getColor)(d),label:i}],p={scales:{xAxes:[{offset:!0,gridLines:{color:"transparent",zeroLineColor:"transparent"},ticks:{fontSize:2,fontColor:"transparent"}}],yAxes:[{display:!1,ticks:{display:!1,min:Math.min.apply(Math,m)-5,max:Math.max.apply(Math,m)+5}}]},elements:{line:{borderWidth:1},point:{radius:4,hitRadius:10,hoverRadius:4}}},b={scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4}}},h=function(){var e=s?p:b;return Object.assign({},e,{maintainAspectRatio:!1,legend:{display:!1}})}(),f=Object(c.deepObjectsMerge)(E,u.datasets||{}),g=Object(c.deepObjectsMerge)(h,u.options||{});return l.a.createElement(o.c,Object.assign({},u,{datasets:f,options:g,labels:i}))};m.defaultProps={borderColor:"rgba(255,255,255,.55)",backgroundColor:"transparent",dataPoints:[10,22,34,46,58,70,46,23,45,78,34,12],label:"Sales"},t.a=m},623:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(617);var r=a(616);function l(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(r.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},702:function(e,t,a){"use strict";a.r(t);var n=a(623),r=a(618),l=a(1),c=a.n(l),o=a(614),m=(a(624),a(619));a(615),a(622),t.default=function(){var e=Object(l.useState)(!1),t=Object(r.a)(e,2),a=(t[0],t[1],Object(l.useState)([!1,!1])),i=Object(r.a)(a,2),s=(i[0],i[1],Object(l.useState)(1)),u=Object(r.a)(s,2),d=u[0],E=u[1],p=Object(l.useState)(!1),b=Object(r.a)(p,2),h=(b[0],b[1],Object(l.useState)(!1)),f=Object(r.a)(h,2),g=f[0],v=f[1],x=Object(l.useState)(!1),w=Object(r.a)(x,2),y=w[0],k=w[1],j=Object(l.useState)(!1),S=Object(r.a)(j,2),O=S[0],N=S[1],C=Object(l.useState)([]),P=Object(r.a)(C,2),I=P[0],T=P[1],M=Object(l.useState)("top-right"),B=Object(r.a)(M,2),F=B[0],K=(B[1],Object(l.useState)(!0)),A=Object(r.a)(K,2),H=A[0],J=A[1],R=Object(l.useState)(5e3),_=Object(r.a)(R,2),L=_[0],V=(_[1],Object(l.useState)(!0)),z=Object(r.a)(V,2),D=z[0],G=(z[1],Object(l.useState)(!0)),U=Object(r.a)(G,2),Y=U[0],q=(U[1],Object(l.useState)(!0)),W=Object(r.a)(q,2),Z=W[0],$=(W[1],Object(l.useState)(!0)),Q=Object(r.a)($,2),X=Q[0],ee=(Q[1],Object(l.useState)(!0)),te=Object(r.a)(ee,2),ae=te[0],ne=(te[1],Object(l.useState)(!0)),re=Object(r.a)(ne,2),le=re[0],ce=(re[1],Object(l.useState)(!0)),oe=Object(r.a)(ce,2),me=oe[0],ie=(oe[1],Object(l.useState)(!0)),se=Object(r.a)(ie,2),ue=se[0],de=(se[1],function(){T([].concat(Object(n.a)(I),[{position:F,autohide:H&&L,closeButton:me,fade:ue,java:D,javaScript:Y,communication:Z,leadership:X,hiphop:ae,piano:le}]))}),Ee=I.reduce((function(e,t){return e[t.position]=e[t.position]||[],e[t.position].push(t),e}),{});return c.a.createElement(c.a.Fragment,null,c.a.createElement(o.wb,null,c.a.createElement(o.u,null,c.a.createElement(o.j,null,c.a.createElement(o.n,null,c.a.createElement("h4",null,"About Me",c.a.createElement(m.a,{width:24,onClick:function(){return v(!g)},className:"float-right",name:"cil-pencil"}))),c.a.createElement(o.k,null,c.a.createElement(o.wb,null,c.a.createElement(o.u,{xs:"12",sm:"6",lg:"3"},c.a.createElement("div",{class:"profile-main"},c.a.createElement("div",{class:"profile-header"},c.a.createElement("div",{class:"user-detail"},c.a.createElement("div",{class:"user-image"},c.a.createElement("img",{src:"https://ii.yuki.la/c/da/3e777cb605409054fab6f88c5cf2ff79c6e42c1d8c3697278129051bcd51adac.jpg"}))))),c.a.createElement("div",{className:"clearfix"},c.a.createElement("div",{className:"float-left"},c.a.createElement(o.b,{color:"success",className:"float-middle"},"WELL-LOVED")),c.a.createElement("div",{className:"float-right"},c.a.createElement("small",{className:"text-muted"},"4.0/4.0"))),c.a.createElement(o.ub,{className:"progress-xs mt-2",precision:1,color:"success",value:100})),c.a.createElement(o.u,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},c.a.createElement(o.J,{action:"",method:"post",className:"form-horizontal"},c.a.createElement(o.K,{row:!0},c.a.createElement(o.u,{md:"4"},c.a.createElement(o.cb,null,c.a.createElement("strong",null,"Name"))),c.a.createElement(o.u,{xs:"12",md:"7"},c.a.createElement("p",{className:"form-control-static"},"Jones Ferdinand"))),c.a.createElement(o.K,{row:!0},c.a.createElement(o.u,{md:"4"},c.a.createElement(o.cb,null,c.a.createElement("strong",null,"Major & Year"))),c.a.createElement(o.u,{xs:"12",md:"7"},c.a.createElement("p",{className:"form-control-static"},"Computer Science, Year 4"))),c.a.createElement(o.K,{row:!0},c.a.createElement(o.u,{md:"4"},c.a.createElement(o.cb,null,c.a.createElement("strong",null,"Bio"))),c.a.createElement(o.u,{xs:"12",md:"7"},c.a.createElement("p",{className:"form-control-static"},"Hello, I am a Year 4 student who is interested in product design, PM me for collab!"))),c.a.createElement(o.K,{row:!0},c.a.createElement(o.u,{md:"4"},c.a.createElement(o.cb,null,c.a.createElement("strong",null,"Contact"))),c.a.createElement(o.u,{xs:"12",md:"7"},c.a.createElement(o.f,{className:"btn-facebook btn-brand mr-1 mb-1"},c.a.createElement(m.a,{name:"cib-facebook"})),c.a.createElement(o.f,{className:"btn-linkedin btn-brand mr-1 mb-1"},c.a.createElement(m.a,{name:"cib-linkedin"})),c.a.createElement(o.f,{className:"btn-github btn-brand mr-1 mb-1"},c.a.createElement(m.a,{name:"cib-github"})),c.a.createElement(o.f,{className:"btn-linkedin btn-brand mr-1 mb-1"},c.a.createElement(m.a,{name:"cil-envelope-closed"})),c.a.createElement(o.f,{className:"btn-github btn-brand mr-1 mb-1"},c.a.createElement(m.a,{name:"cil-phone"}))))))),c.a.createElement(o.gb,{show:g,onClose:function(){return v(!g)},color:"primary",size:"lg"},c.a.createElement(o.jb,{closeButton:!0},c.a.createElement(o.kb,null,"Edit Basic Information")),c.a.createElement(o.hb,null,c.a.createElement(o.J,{action:"",method:"post",encType:"multipart/form-data",className:"form-horizontal"},c.a.createElement(o.K,{row:!0},c.a.createElement(o.u,{md:"3"},c.a.createElement(o.cb,{htmlFor:"text-input"},"Name")),c.a.createElement(o.u,{xs:"12",md:"9"},c.a.createElement(o.S,{id:"text-input",name:"text-input",placeholder:"Jones Ferdinand"}))),c.a.createElement(o.K,{row:!0},c.a.createElement(o.u,{md:"3"},c.a.createElement(o.cb,{htmlFor:"select"},"Major")),c.a.createElement(o.u,{xs:"12",md:"9"},c.a.createElement(o.xb,{custom:!0,name:"select",id:"select"},c.a.createElement("option",{value:"0"},"Computer Science"),c.a.createElement("option",{value:"1"},"Information Systems"),c.a.createElement("option",{value:"2"},"Information Security"),c.a.createElement("option",{value:"3"},"Computer Engineering")))),c.a.createElement(o.K,{row:!0},c.a.createElement(o.u,{md:"3"},c.a.createElement(o.cb,{htmlFor:"select"},"Admit Term")),c.a.createElement(o.u,{xs:"12",md:"9"},c.a.createElement(o.xb,{custom:!0,name:"select",id:"select"},c.a.createElement("option",{value:"0"},"2017/18 Semester 1"),c.a.createElement("option",{value:"1"},"2017/18 Semester 2"),c.a.createElement("option",{value:"2"},"2018/19 Semester 1"),c.a.createElement("option",{value:"3"},"2018/19 Semester 2")))),c.a.createElement(o.K,{row:!0},c.a.createElement(o.u,{md:"3"},c.a.createElement(o.cb,{htmlFor:"textarea-input"},"Bio")),c.a.createElement(o.u,{xs:"12",md:"9"},c.a.createElement(o.Lb,{name:"textarea-input",id:"textarea-input",rows:"9",placeholder:"Hello, I am a Year 4 student who is interested in product design, PM me for collab!"}))),c.a.createElement(o.K,{row:!0},c.a.createElement(o.u,{md:"3"},c.a.createElement(o.cb,{htmlFor:"text-input"},"Facebook")),c.a.createElement(o.u,{xs:"12",md:"6"},c.a.createElement(o.S,{id:"text-input",name:"text-input",placeholder:"Jones_Ferdinand"})),c.a.createElement(o.u,{xs:"12",md:"3"},c.a.createElement(o.Hb,{className:"mr-1",color:"primary",defaultChecked:!0}))),c.a.createElement(o.K,{row:!0},c.a.createElement(o.u,{md:"3"},c.a.createElement(o.cb,{htmlFor:"text-input"},"Linkedin")),c.a.createElement(o.u,{xs:"12",md:"6"},c.a.createElement(o.S,{id:"text-input",name:"text-input",placeholder:"https://www.linkedin.com/in/jones_ferdinand-ba4032179/"})),c.a.createElement(o.u,{xs:"12",md:"3"},c.a.createElement(o.Hb,{className:"mr-1",color:"primary",defaultChecked:!0}))),c.a.createElement(o.K,{row:!0},c.a.createElement(o.u,{md:"3"},c.a.createElement(o.cb,{htmlFor:"text-input"},"GitHub")),c.a.createElement(o.u,{xs:"12",md:"6"},c.a.createElement(o.S,{id:"text-input",name:"text-input",placeholder:"Jones_Ferdinand"})),c.a.createElement(o.u,{xs:"12",md:"3"},c.a.createElement(o.Hb,{className:"mr-1",color:"primary",defaultChecked:!0}))),c.a.createElement(o.K,{row:!0},c.a.createElement(o.u,{md:"3"},c.a.createElement(o.cb,{htmlFor:"text-input"},"Email")),c.a.createElement(o.u,{xs:"12",md:"6"},c.a.createElement(o.S,{id:"text-input",name:"text-input",placeholder:"Jones_Ferdinand@gmail.com"})),c.a.createElement(o.u,{xs:"12",md:"3"},c.a.createElement(o.Hb,{className:"mr-1",color:"primary",defaultChecked:!0}))),c.a.createElement(o.K,{row:!0},c.a.createElement(o.u,{md:"3"},c.a.createElement(o.cb,{htmlFor:"text-input"},"Telegram")),c.a.createElement(o.u,{xs:"12",md:"6"},c.a.createElement(o.S,{id:"text-input",name:"text-input",placeholder:"Jones_Ferdinand"})),c.a.createElement(o.u,{xs:"12",md:"3"},c.a.createElement(o.Hb,{className:"mr-1",color:"primary",defaultChecked:!0}))))),c.a.createElement(o.ib,null,c.a.createElement(o.f,{color:"primary",onClick:function(){return v(!g)}},"Save")," ",c.a.createElement(o.f,{color:"secondary",onClick:function(){return v(!g)}},"Cancel")))))),c.a.createElement(o.u,{xs:"12",xl:"6"},c.a.createElement(o.j,null,c.a.createElement(o.n,null,c.a.createElement("h4",null,"Skills",c.a.createElement(m.a,{width:24,onClick:function(){return k(!y)},className:"float-right",name:"cil-pencil"}))),c.a.createElement(o.k,null,c.a.createElement("div",{id:"accordion"},c.a.createElement(o.j,{className:"mb-0"},c.a.createElement(o.n,{id:"headingOne"},c.a.createElement(o.f,{block:!0,className:"text-left m-0 p-0",onClick:function(){return E(0===d?null:0)}},c.a.createElement("span",{className:"title"},"Tools & Technologies"))),c.a.createElement(o.v,{show:0===d},c.a.createElement(o.k,null,c.a.createElement(o.wb,null,c.a.createElement(o.u,null,c.a.createElement(o.Vb,{text:"Endorced By Ruichun and 10 others",header:"Java",color:"info",iconPadding:!1},c.a.createElement(m.a,{width:24,name:"cil-check"}))),c.a.createElement(o.u,null,c.a.createElement(o.Vb,{text:"Endorced By Shengjing and 10 others",header:"JavaScript",color:"info",iconPadding:!1},c.a.createElement(m.a,{width:24,name:"cil-check"}))))))),c.a.createElement(o.j,{className:"mb-0"},c.a.createElement(o.n,{id:"headingThree"},c.a.createElement(o.f,{block:!0,className:"text-left m-0 p-0",onClick:function(){return E(1===d?null:1)}},c.a.createElement("span",{className:"title"},"Soft Skills"))),c.a.createElement(o.v,{show:1===d},c.a.createElement(o.k,null,c.a.createElement(o.wb,null,c.a.createElement(o.u,null,c.a.createElement(o.Vb,{text:"Endorced By Bryan and 10 others",header:"Communication",color:"info",iconPadding:!1},c.a.createElement(m.a,{width:24,name:"cil-check"}))),c.a.createElement(o.u,null,c.a.createElement(o.Vb,{text:"Endorced By Jingzhan and 10 others",header:"Leadership",color:"info",iconPadding:!1},c.a.createElement(m.a,{width:24,name:"cil-check"}))))))),c.a.createElement(o.j,{className:"mb-0"},c.a.createElement(o.n,{id:"headingThree"},c.a.createElement(o.f,{block:!0,className:"text-left m-0 p-0",onClick:function(){return E(3===d?null:3)}},c.a.createElement("span",{className:"title"},"Other Skills"))),c.a.createElement(o.v,{show:3===d},c.a.createElement(o.k,null,c.a.createElement(o.wb,null,c.a.createElement(o.u,null,c.a.createElement(o.Vb,{header:"Hip-hop",color:"info",iconPadding:!1},c.a.createElement(m.a,{width:24,name:"cil-check"}))),c.a.createElement(o.u,null,c.a.createElement(o.Vb,{header:"Piano",color:"info",iconPadding:!1},c.a.createElement(m.a,{width:24,name:"cil-check"})))))))),c.a.createElement(o.gb,{show:y,onClose:function(){return k(!y)},color:"primary",size:"lg"},c.a.createElement(o.jb,{closeButton:!0},c.a.createElement(o.kb,null,"Edit Skills")),c.a.createElement(o.hb,null,c.a.createElement(o.a,{color:"danger"},"Please note that the endorsement(s) corresponding to removed skills will not be recovered"),c.a.createElement(o.J,null,c.a.createElement("h5",null,"Tools and Technologies"),c.a.createElement(o.wb,null,c.a.createElement(o.u,null,c.a.createElement(o.Vb,{text:"Endorced By Ruichun and 10 others",header:"Java",color:"info",iconPadding:!1},c.a.createElement(m.a,{width:24,name:"cil-trash"}))),c.a.createElement(o.u,null,c.a.createElement(o.Vb,{text:"Endorced By Shengjing and 10 others",header:"JavaScript",color:"info",iconPadding:!1},c.a.createElement(m.a,{width:24,name:"cil-trash"})))),c.a.createElement("h5",null,"Soft Skills"),c.a.createElement(o.wb,null,c.a.createElement(o.u,null,c.a.createElement(o.Vb,{text:"Endorced By Bryan and 10 others",header:"Communication",color:"info",iconPadding:!1},c.a.createElement(m.a,{width:24,name:"cil-trash"}))),c.a.createElement(o.u,null,c.a.createElement(o.Vb,{text:"Endorced By Jingzhan and 10 others",header:"Leadership",color:"info",iconPadding:!1},c.a.createElement(m.a,{width:24,name:"cil-trash"})))),c.a.createElement("h5",null,"Others"),c.a.createElement(o.wb,null,c.a.createElement(o.u,null,c.a.createElement(o.Vb,{header:"Hip-hop",color:"info",iconPadding:!1},c.a.createElement(m.a,{width:24,name:"cil-trash"}))),c.a.createElement(o.u,null,c.a.createElement(o.Vb,{header:"Piano",color:"info",iconPadding:!1},c.a.createElement(m.a,{width:24,name:"cil-trash"})))),c.a.createElement(o.K,{variant:"custom-checkbox",className:"my-2 mt-4"},c.a.createElement(o.T,{id:"autohide",checked:H,onChange:function(e){J(e.target.checked)},custom:!0}),c.a.createElement(o.cb,{variant:"custom-checkbox",htmlFor:"autohide"},"Add New Skills")),H&&c.a.createElement(o.K,{className:"my-2"},c.a.createElement(o.u,null,c.a.createElement(o.cb,{htmlFor:"ccyear"},"Skill Type"),c.a.createElement(o.xb,{custom:!0,name:"select",id:"select"},c.a.createElement("option",{value:"0"},"Please select"),c.a.createElement("option",{value:"1"},"Tools & Technologies"),c.a.createElement("option",{value:"2"},"Soft Skills "),c.a.createElement("option",{value:"3"},"Other Skills"))),c.a.createElement(o.u,null,c.a.createElement(o.cb,{htmlFor:"ccyear"},"Skill Name"),c.a.createElement(o.S,{id:"text-input",name:"text-input",placeholder:"Skill Name"})),c.a.createElement(o.u,null,c.a.createElement("br",null),c.a.createElement(o.f,{className:"mr-1 w-25",color:"info"},"Add")))),Object.keys(Ee).map((function(e){return c.a.createElement(o.Pb,{position:"top-center",key:"toaster"+e},Ee[e].map((function(e,t){return c.a.createElement(o.Mb,{key:"toast"+t,show:!0,autohide:e.autohide,fade:e.fade},c.a.createElement(o.Ob,{closeButton:e.closeButton},"Confirmation"),c.a.createElement(o.Nb,null,"Skills has been updated"))})))}))),c.a.createElement(o.ib,null,c.a.createElement(o.f,{color:"primary",onClick:de},"Save")," ",c.a.createElement(o.f,{color:"secondary",onClick:function(){return k(!y)}},"Cancel"))))))),c.a.createElement(o.wb,null,c.a.createElement(o.u,null,c.a.createElement(o.j,null,c.a.createElement(o.n,null,c.a.createElement("h4",null,"Projects Involved")),c.a.createElement(o.k,null,c.a.createElement(o.eb,null,c.a.createElement(o.fb,{action:!0},c.a.createElement(o.wb,null,c.a.createElement(o.u,{xs:"12",xl:"6"},c.a.createElement("div",{class:"experience-main"},c.a.createElement("div",{class:"experience-detail"},c.a.createElement("div",{class:"experience-data"},c.a.createElement("div",{class:"experience-image"},c.a.createElement("img",{src:"https://www.t2techgroup.com/wp-content/uploads/2017/06/New-Project-Management-Icon.png"})),c.a.createElement("h5",null,c.a.createElement("strong",null,"\xa0 \xa0 \xa0 \xa0 NUSTeams")),c.a.createElement("div",null,"\xa0 \xa0 \xa0 \xa0 Project focuses on design and critique"))))),c.a.createElement(o.u,{xs:"12",sm:"6",lg:"3"},c.a.createElement("div",null,c.a.createElement("strong",null,"Module Project")),c.a.createElement("div",null,"CS3240 Interaction Design")),c.a.createElement(o.u,{xs:"12",sm:"6",lg:"3"},c.a.createElement("div",null,c.a.createElement("strong",null,"2020-2021 Semester 1")),c.a.createElement("div",{className:"float-right"},c.a.createElement(o.b,{color:"success",className:"float-middle"},"COMPLETED"))))),c.a.createElement(o.fb,{action:!0},c.a.createElement(o.wb,null,c.a.createElement(o.u,{xs:"12",xl:"6"},c.a.createElement("div",{class:"experience-main"},c.a.createElement("div",{class:"experience-detail"},c.a.createElement("div",{class:"experience-data"},c.a.createElement("div",{class:"experience-image"},c.a.createElement("img",{src:"https://www.t2techgroup.com/wp-content/uploads/2017/06/New-Project-Management-Icon.png"})),c.a.createElement("h5",null,c.a.createElement("strong",null,"\xa0 \xa0 \xa0 \xa0 IS4103 Team 2")),c.a.createElement("div",null,"\xa0 \xa0 \xa0 \xa0 Project focuses on full stack development"))))),c.a.createElement(o.u,{xs:"12",sm:"6",lg:"3"},c.a.createElement("div",null,c.a.createElement("strong",null,"Module Project")),c.a.createElement("div",null,"IS4103 Capstone Project")),c.a.createElement(o.u,{xs:"12",sm:"6",lg:"3"},c.a.createElement("div",null,c.a.createElement("strong",null,"2020-2021 Semester 1")),c.a.createElement("div",{className:"float-right"},c.a.createElement(o.b,{color:"success",className:"float-middle"},"COMPLETED"))))),c.a.createElement(o.fb,{action:!0},c.a.createElement(o.wb,null,c.a.createElement(o.u,{xs:"12",xl:"6"},c.a.createElement("div",{class:"experience-main"},c.a.createElement("div",{class:"experience-detail"},c.a.createElement("div",{class:"experience-data"},c.a.createElement("div",{class:"experience-image"},c.a.createElement("img",{src:"https://www.t2techgroup.com/wp-content/uploads/2017/06/New-Project-Management-Icon.png"})),c.a.createElement("h5",null,c.a.createElement("strong",null,"\xa0 \xa0 \xa0 \xa0 IS3106 Team 2")),c.a.createElement("div",null,"\xa0 \xa0 \xa0 \xa0 Project focuses on front end development"))))),c.a.createElement(o.u,{xs:"12",sm:"6",lg:"3"},c.a.createElement("div",null,c.a.createElement("strong",null,"Module Project")),c.a.createElement("div",null,"IS3106 Enterprise Systems Interface Design and Development")),c.a.createElement(o.u,{xs:"12",sm:"6",lg:"3"},c.a.createElement("div",null,c.a.createElement("strong",null,"2020-2021 Semester 1")),c.a.createElement("div",{className:"float-right"},c.a.createElement(o.b,{color:"success",className:"float-middle"},"COMPLETED")))))))))),c.a.createElement(o.wb,null,c.a.createElement(o.u,null,c.a.createElement(o.j,null,c.a.createElement(o.n,null,c.a.createElement("h4",null,"Education")),c.a.createElement(o.k,null,c.a.createElement(o.eb,null,c.a.createElement(o.fb,{action:!0},c.a.createElement("div",{class:"education-main"},c.a.createElement("div",{class:"education-detail"},c.a.createElement("div",{class:"education-data"},c.a.createElement("div",{class:"education-image"},c.a.createElement("img",{src:"https://cdn.worldvectorlogo.com/logos/nus.svg"})),c.a.createElement("h5",null,c.a.createElement("strong",null,"\xa0 \xa0 \xa0 \xa0National University of Singapore")),c.a.createElement("div",null,"\xa0 \xa0 \xa0 \xa0 Bachelor of Computing, Information Systems"),c.a.createElement("div",null,"\xa0 \xa0 \xa0 \xa0 2017-2021"))))),c.a.createElement(o.fb,{action:!0},c.a.createElement("div",{class:"education-main"},c.a.createElement("div",{class:"education-detail"},c.a.createElement("div",{class:"education-data"},c.a.createElement("div",{class:"education-image"},c.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Georgia_Tech_seal.svg/1200px-Georgia_Tech_seal.svg.png"})),c.a.createElement("h5",null,c.a.createElement("strong",null,"\xa0 \xa0 \xa0 \xa0 Georgia Institute of Technology")),c.a.createElement("div",null,"\xa0 \xa0 \xa0 \xa0 Student Exchange"),c.a.createElement("div",null,"\xa0 \xa0 \xa0 \xa0 2018-2019"))))),c.a.createElement(o.fb,{action:!0},c.a.createElement("div",{class:"education-main"},c.a.createElement("div",{class:"education-detail"},c.a.createElement("div",{class:"education-data"},c.a.createElement("div",{class:"education-image"},c.a.createElement("img",{src:"https://rafflesmun.files.wordpress.com/2017/01/copy-of-icon.png"})),c.a.createElement("h5",null,c.a.createElement("strong",null,"\xa0 \xa0 \xa0 \xa0 Raffles Institude")),c.a.createElement("div",null,"\xa0 \xa0 \xa0 \xa0 Singapore-Cambridge GCSE A-level"),c.a.createElement("div",null,"\xa0 \xa0 \xa0 \xa0 2015-2017")))))))))),c.a.createElement(o.wb,null,c.a.createElement(o.u,null,c.a.createElement(o.j,null,c.a.createElement(o.n,null,c.a.createElement("h4",null,"Teammates Feedback")),c.a.createElement(o.k,null,c.a.createElement(o.eb,null,c.a.createElement(o.fb,{action:!0},c.a.createElement(o.wb,null,c.a.createElement(o.u,{xs:"12",xl:"6"},c.a.createElement("div",{class:"experience-main"},c.a.createElement("div",{class:"experience-detail"},c.a.createElement("div",{class:"experience-data"},c.a.createElement("div",{class:"experience-image"},c.a.createElement("img",{src:"https://textgod.com/wp-content/uploads/2019/06/louis-roze-trui-pink.jpg"})),c.a.createElement("h5",null,c.a.createElement("strong",null,"\xa0 \xa0 \xa0 \xa0 Tom Cruise")),c.a.createElement("div",null,"\xa0 \xa0 \xa0 \xa0 Posted 3 days ago"))))),c.a.createElement(o.u,{xs:"12",xl:"6"},c.a.createElement("div",null,"Stephen is a hardworker who values teamwork. Highly recommended!"),c.a.createElement(m.a,{width:24,className:"float-right",name:"cil-warning",onClick:function(){return N(!O)}})))),c.a.createElement(o.fb,{action:!0},c.a.createElement(o.wb,null,c.a.createElement(o.u,{xs:"12",xl:"6"},c.a.createElement("div",{class:"experience-main"},c.a.createElement("div",{class:"experience-detail"},c.a.createElement("div",{class:"experience-data"},c.a.createElement("div",{class:"experience-image"},c.a.createElement("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRLpo2kLh0mOYWWqzKaVwIp-FhQkOAkIIDqdg&usqp=CAU"})),c.a.createElement("h5",null,c.a.createElement("strong",null,"\xa0 \xa0 \xa0 \xa0 Matt Damon")),c.a.createElement("div",null,"\xa0 \xa0 \xa0 \xa0 Posted on 3/29/2020"))))),c.a.createElement(o.u,{xs:"12",xl:"6"},c.a.createElement("div",null,"Good programmer"),c.a.createElement(m.a,{width:24,className:"float-right",name:"cil-warning",onClick:function(){return N(!O)}})))),c.a.createElement(o.fb,{action:!0},c.a.createElement(o.wb,null,c.a.createElement(o.u,{xs:"12",xl:"6"},c.a.createElement("div",{class:"experience-main"},c.a.createElement("div",{class:"experience-detail"},c.a.createElement("div",{class:"experience-data"},c.a.createElement("div",{class:"experience-image"},c.a.createElement("img",{src:"https://selectedsoundsblog.files.wordpress.com/2015/09/george1.jpg"})),c.a.createElement("h5",null,c.a.createElement("strong",null,"\xa0 \xa0 \xa0 \xa0 Sam Smith")),c.a.createElement("div",null,"\xa0 \xa0 \xa0 \xa0 Posted on 3/29/2020"))))),c.a.createElement(o.u,{xs:"12",xl:"6"},c.a.createElement("div",null,"Pleasant teammate who you can consult with anything."),c.a.createElement(m.a,{width:24,className:"float-right",name:"cil-warning",onClick:function(){return N(!O)}}))))),c.a.createElement(o.gb,{show:O,onClose:N},c.a.createElement(o.jb,{closeButton:!0},c.a.createElement(o.kb,null,"Report an issue")),c.a.createElement(o.hb,null,c.a.createElement(o.J,{action:"",method:"post",encType:"multipart/form-data",className:"form-horizontal"},c.a.createElement(o.K,{row:!0},c.a.createElement(o.u,{md:"3"},c.a.createElement(o.cb,null,"Name")),c.a.createElement(o.u,{xs:"12",md:"9"},c.a.createElement("p",{className:"form-control-static"},"Tom Cruise"))),c.a.createElement(o.K,{row:!0},c.a.createElement(o.u,{md:"3"},c.a.createElement(o.cb,null,"Content")),c.a.createElement(o.u,{xs:"12",md:"9"},c.a.createElement("p",{className:"form-control-static"},"Stephen is a hardworker who values teamwork. Highly recommended!"))),c.a.createElement(o.K,{row:!0},c.a.createElement(o.u,{md:"3"},c.a.createElement(o.cb,null,"Reason(s)")),c.a.createElement(o.u,{md:"9"},c.a.createElement(o.K,{variant:"checkbox"},c.a.createElement(o.Z,{className:"form-check-input",id:"radio1",name:"radios",value:"option1"}),c.a.createElement(o.cb,{variant:"checkbox",htmlFor:"radio1"},"False Information")),c.a.createElement(o.K,{variant:"checkbox"},c.a.createElement(o.Z,{className:"form-check-input",id:"radio2",name:"radios",value:"option2"}),c.a.createElement(o.cb,{variant:"checkbox",htmlFor:"radio2"},"Illegal Information")),c.a.createElement(o.K,{variant:"checkbox"},c.a.createElement(o.Z,{className:"form-check-input",id:"radio3",name:"radios",value:"option3"}),c.a.createElement(o.cb,{variant:"checkbox",htmlFor:"radio3"},"Personal Attack")),c.a.createElement(o.K,{variant:"checkbox"},c.a.createElement(o.Z,{className:"form-check-input",id:"radio4",name:"radios",value:"option3"}),c.a.createElement(o.cb,{variant:"checkbox",htmlFor:"radio3"},"Others")))),c.a.createElement(o.K,{row:!0},c.a.createElement(o.u,{md:"3"},c.a.createElement(o.cb,{htmlFor:"textarea-input"},"Textarea")),c.a.createElement(o.u,{xs:"12",md:"9"},c.a.createElement(o.Lb,{name:"textarea-input",id:"textarea-input",rows:"9",placeholder:"Report description..."}))))),c.a.createElement(o.ib,null,c.a.createElement(o.f,{color:"primary",onClick:de},"Report")," ",c.a.createElement(o.f,{color:"secondary",onClick:function(){return N(!1)}},"Cancel")),Object.keys(Ee).map((function(e){return c.a.createElement(o.Pb,{position:"top-center",key:"toaster"+e},Ee[e].map((function(e,t){return c.a.createElement(o.Mb,{key:"toast"+t,show:!0,autohide:e.autohide,fade:e.fade},c.a.createElement(o.Ob,{closeButton:e.closeButton},"Confirmation"),c.a.createElement(o.Nb,null,"Your report has been received and will be reviewed by our support staff soon"))})))}))))))))}}}]);
//# sourceMappingURL=7.103c45f1.chunk.js.map