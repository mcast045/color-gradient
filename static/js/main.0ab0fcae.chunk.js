(this.webpackJsonpdelete_me=this.webpackJsonpdelete_me||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),s=c.n(a),r=c(8),o=c.n(r),i=c(3),l=(c(14),c(15),Object(a.createContext)({rgbValues:[0,0,0],background:"",setRgbValues:function(){}})),u=Object(a.createContext)({slideMenu:"",isShowingMenu:!1,setSlideMenu:function(){},setIsShowingMenu:function(){}}),j=c(4),b=(c(16),function(){return localStorage.getItem("gradient")}),d=function(e){var t=b();if(t){var c=JSON.parse(t);if(c.slice(c.length-6).every((function(t,c){return t===e[c]})))return;var n=[].concat(Object(j.a)(c),Object(j.a)(e));n.length<31&&localStorage.setItem("gradient",JSON.stringify(n))}else localStorage.setItem("gradient",JSON.stringify(e))},O=c(2),f=Object(a.createContext)({copyIconClass:{color_1:"",color_2:"",save:""},setCopyIconClass:function(){}}),v=function(e){var t=e.toString(16);return 1===t.length?"0"+t:t},h=function(e,t,c){return"#".concat(v(e)).concat(v(t)).concat(v(c))},g=function(e){return(299*parseInt(e.substr(1,2),16)+587*parseInt(e.substr(3,2),16)+114*parseInt(e.substr(4,2),16))/1e3>=128?"#333":"#eee"},x=function(e){var t=e.gradient;return Object(n.jsxs)(a.Fragment,{children:[Object(n.jsxs)("div",{className:"menu_gradient_content-1",style:{color:g(h(t[0],t[1],t[2]))},children:[Object(n.jsx)("span",{children:"HEX: ".concat(h(t[0],t[1],t[2]))}),Object(n.jsx)("span",{className:"menu_gradient_content-rgb",children:"RGB: (".concat(t[0],", ").concat(t[1],", ").concat(t[2],")")})]}),Object(n.jsxs)("div",{className:"menu_gradient_content-2",style:{color:g(h(t[3],t[4],t[5]))},children:[Object(n.jsx)("span",{children:"HEX: ".concat(h(t[3],t[4],t[5]))}),Object(n.jsx)("span",{className:"menu_gradient_content-rgb",children:"RGB: (".concat(t[3],", ").concat(t[4],", ").concat(t[5],")")})]})]})},m=function(e){var t=e.i,c=e.setGradients,s=e.getGradients,r=e.rawGradient,o=Object(a.useContext)(l).rgbValues,i=Object(a.useContext)(f),u=i.setCopyIconClass,j=i.copyIconClass,b=function(e,t){if("fas fa-trash"===t.target.className||"btn removeBtn pointer"===t.target.className){var n=6*e,a=r.splice(n,6);localStorage.removeItem("gradient"),r.length>0&&d(r),c(s(r)),o.every((function(e,t){return e===a[t]}))&&u(Object(O.a)(Object(O.a)({},j),{},{save:"far fa-save"}))}};return Object(n.jsx)("button",{className:"btn removeBtn pointer",title:"Remove Gradient",onClick:function(e){return b(t,e)},children:Object(n.jsx)("i",{className:"fas fa-trash"})})},p=function(e){var t=e.gradients,c=e.setGradients,s=e.rawGradient,r=e.getGradients,o=Object(a.useContext)(l).setRgbValues,i=Object(a.useContext)(f),u=i.setCopyIconClass,j=i.copyIconClass;return Object(n.jsx)(a.Fragment,{children:t.map((function(e,t){return Object(n.jsx)("div",{onClick:function(t){return function(e,t){"fas fa-trash"!==t.target.className&&"btn removeBtn pointer"!==t.target.className&&(o(e),u(Object(O.a)(Object(O.a)({},j),{},{save:"fas fa-check"})))}(e,t)},className:"menu_gradient pointer",style:{background:"linear-gradient(to right, rgba(".concat(e[0],", ").concat(e[1],", ").concat(e[2],", 1), rgba(").concat(e[3],", ").concat(e[4],", ").concat(e[5],", 1))")},children:Object(n.jsxs)("div",{className:"menu_gradient_content",children:[Object(n.jsx)(x,{gradient:e}),Object(n.jsx)(m,{i:t,setGradients:c,getGradients:r,rawGradient:s})]})},t)}))})},C=function(){var e=JSON.parse(b()),t=Object(a.useState)([]),c=Object(i.a)(t,2),s=c[0],r=c[1],o=Object(a.useContext)(u).slideMenu,l=function(e){var t=[];if(e.length>6){for(var c=0;c<e.length;)t.push([e[c],e[c+1],e[c+2],e[c+3],e[c+4],e[c+5]]),c+=6;return t}return 6===e.length?(t.push(Object(j.a)(e)),t):t};return Object(a.useEffect)((function(){e&&6*s.length!==e.length?r(l(e)):e||r([])}),[e,s.length]),Object(n.jsxs)("div",{className:"menu_container ".concat(o),children:[Object(n.jsx)("h3",{className:"menu_title",children:"Saved Gradients"}),Object(n.jsx)("div",{className:"underline"}),Object(n.jsx)("div",{className:"menu_gradient_container",children:0===s.length?Object(n.jsx)("div",{className:"menu_empty",children:"No Saved Gradients"}):Object(n.jsx)(p,{gradients:s,setGradients:r,rawGradient:e,getGradients:l})})]})},N=function(){var e=Object(a.useContext)(l).rgbValues,t=Object(a.useContext)(f),c=t.copyIconClass,s=t.setCopyIconClass,r=Object(i.a)(e,6),o=r[0],u=r[1],j=r[2],b=r[3],d=r[4],v=r[5],x=Object(a.useState)(!1),m=Object(i.a)(x,2),p=m[0],C=m[1],N=Object(a.useState)(!1),y=Object(i.a)(N,2),_=y[0],S=y[1],k=Object(a.useState)(""),M=Object(i.a)(k,2),I=M[0],w=M[1],G=Object(a.useState)(""),E=Object(i.a)(G,2),R=E[0],B=E[1];Object(a.useEffect)((function(){w(h(o,u,j)),B(h(b,d,v))}),[o,b,u,d,j,v]);var V=function(){p&&"fas fa-check"!==c.color_1?(s(Object(O.a)(Object(O.a)({},c),{},{color_1:"fas fa-check",color_2:"fas fa-copy"})),navigator.clipboard.writeText(I)):_&&"fas fa-check"!==c.color_2&&(s(Object(O.a)(Object(O.a)({},c),{},{color_1:"fas fa-copy",color_2:"fas fa-check"})),navigator.clipboard.writeText(R))};return Object(n.jsx)("div",{className:"color_container",children:Object(n.jsxs)("div",{className:"color_flex",children:[Object(n.jsx)("div",{className:"color-1",style:{color:g(I)},children:Object(n.jsxs)("div",{onMouseEnter:function(){return C(!p)},onMouseLeave:function(){return C(!p)},children:[Object(n.jsxs)("div",{className:"flex reverse-column",children:[Object(n.jsx)("div",{className:"color-1_values",children:"HEX: ".concat(I)}),Object(n.jsx)("div",{style:{visibility:p?"visible":"hidden"},children:Object(n.jsx)("i",{className:"".concat(c.color_1," icon-absolute pointer"),title:"Copy HEX",onClick:function(){return V()}})})]}),Object(n.jsx)("div",{className:"color-1_values",children:"RGB: (".concat(o,", ").concat(u,", ").concat(j,")")})]})}),Object(n.jsx)("div",{className:"color-2",style:{color:g(R)},children:Object(n.jsxs)("div",{onMouseEnter:function(){return S(!_)},onMouseLeave:function(){return S(!_)},children:[Object(n.jsxs)("div",{className:"flex",children:[Object(n.jsx)("div",{style:{visibility:_?"visible":"hidden"},children:Object(n.jsx)("i",{className:"".concat(c.color_2," icon-absolute pointer"),title:"Copy HEX",onClick:function(){return V()}})}),Object(n.jsx)("div",{className:"color-2_values",children:"HEX: ".concat(R)})]}),Object(n.jsx)("div",{className:"color-2_values",children:"RGB: (".concat(b,", ").concat(d,", ").concat(v,")")})]})})]})})},y=function(){var e=Object(a.useContext)(l).background,t=Object(a.useContext)(u).isShowingMenu;return Object(n.jsxs)("div",{className:"color_container",style:{background:e},children:[Object(n.jsx)(N,{}),t&&Object(n.jsx)(C,{})]})},_=(c(17),function(){var e=Object(a.useContext)(l),t=e.rgbValues,c=e.setRgbValues,s=Object(a.useContext)(f),r=s.copyIconClass,o=s.setCopyIconClass,u=Object(i.a)(t,6),b=u[0],d=u[1],v=u[2],g=u[3],x=u[4],m=u[5],p=function(e){var n=function(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}(e.target.value),a=n.r,s=n.g,i=n.b,l=Object(j.a)(t);"colorOne"===e.target.name?(l.splice(0,3,a,s,i),o(Object(O.a)(Object(O.a)({},r),{},{color_1:"fas fa-copy",save:"far fa-save"}))):"colorTwo"===e.target.name&&(l.splice(3,3,a,s,i),o(Object(O.a)(Object(O.a)({},r),{},{color_2:"fas fa-copy",save:"far fa-save"}))),c(l)};return Object(n.jsxs)("div",{className:"header_colorSelector",children:[Object(n.jsx)("input",{className:"colorPicker pickerOne",type:"color",name:"colorOne",value:h(b,d,v),onChange:function(e){return p(e)}}),Object(n.jsx)("input",{className:"colorPicker pickerTwo",type:"color",name:"colorTwo",value:h(g,x,m),onChange:function(e){return p(e)}})]})}),S=function(){var e=Object(a.useContext)(l).background,t=Object(a.useContext)(u),c=t.isShowingMenu,s=t.setIsShowingMenu,r=t.setSlideMenu,o=window.screen.width,j=Object(a.useState)(!0),b=Object(i.a)(j,2),d=b[0],O=b[1];Object(a.useEffect)((function(){o<1351&&O(!1)}),[o]);return Object(n.jsx)("div",{children:c?Object(n.jsx)("button",{className:"btn pointer",title:"Expand Saved Gradients",style:{background:e},onClick:function(){return r("slideOut"),void setTimeout((function(){return s(!1)}),475)},children:d?Object(n.jsx)("i",{className:"fas fa-arrow-right"}):Object(n.jsx)("i",{className:"fas fa-arrow-down"})}):Object(n.jsx)("button",{className:"btn pointer",title:"Expand Saved Gradients",style:{background:e},onClick:function(){return s(!0),void r("slideIn")},children:d?Object(n.jsx)("i",{className:"fas fa-arrow-left"}):Object(n.jsx)("i",{className:"fas fa-arrow-up"})})})},k=function(e){var t=e.randomRGB,c=Object(a.useContext)(l),s=c.rgbValues,r=c.background,o=c.setRgbValues,i=Object(a.useContext)(f),j=i.copyIconClass,v=i.setCopyIconClass,h=Object(a.useContext)(u).isShowingMenu,g=JSON.parse(b());return Object(n.jsxs)("div",{className:"header_util",children:[Object(n.jsx)("button",{className:"btn pointer randomPicker",title:"Random Gradient",style:{background:r},onClick:function(){return v({color_1:"fas fa-copy",color_2:"fas fa-copy",save:"far fa-save"}),void o(t())},disabled:h,children:Object(n.jsx)("i",{className:"fas fa-random"})}),Object(n.jsx)("button",{className:"btn saveBtn pointer",title:"Save Current Gradient",style:{background:r},onClick:function(){"fas fa-check"!==j.save&&(d(s),v(Object(O.a)(Object(O.a)({},j),{},{save:"fas fa-check"})))},disabled:!!(g&&g.length>29)||!!h,children:Object(n.jsx)("i",{className:"".concat(j.save)})}),Object(n.jsx)(S,{})]})},M=function(e){var t=e.randomRGB;return Object(n.jsx)("div",{className:"header",children:Object(n.jsxs)("div",{className:"header_container",children:[Object(n.jsx)(_,{}),Object(n.jsx)(k,{randomRGB:t})]})})},I=function(){return[Math.floor(256*Math.random()),Math.floor(256*Math.random()),Math.floor(256*Math.random()),Math.floor(256*Math.random()),Math.floor(256*Math.random()),Math.floor(256*Math.random())]};var w=function(){var e=Object(a.useState)(I()),t=Object(i.a)(e,2),c=t[0],s=t[1],r=Object(a.useState)(""),o=Object(i.a)(r,2),j=o[0],b=o[1],d=Object(a.useState)(!1),O=Object(i.a)(d,2),v=O[0],h=O[1],g=Object(a.useState)({color_1:"fas fa-copy",color_2:"fas fa-copy",save:"far fa-save"}),x=Object(i.a)(g,2),m=x[0],p=x[1],C=Object(a.useState)("slideIn"),N=Object(i.a)(C,2),_=N[0],S=N[1];return Object(a.useEffect)((function(){b("linear-gradient(to right, rgba(".concat(c[0],", ").concat(c[1],", ").concat(c[2],", 1), rgba(").concat(c[3],", ").concat(c[4],", ").concat(c[5],", 1))"))}),[c]),Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(l.Provider,{value:{rgbValues:c,setRgbValues:s,background:j},children:Object(n.jsx)(u.Provider,{value:{slideMenu:_,isShowingMenu:v,setSlideMenu:S,setIsShowingMenu:h},children:Object(n.jsxs)(f.Provider,{value:{copyIconClass:m,setCopyIconClass:p},children:[Object(n.jsx)(M,{randomRGB:I}),Object(n.jsx)(y,{})]})})})})};o.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(w,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.0ab0fcae.chunk.js.map