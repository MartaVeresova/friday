(this.webpackJsonpfriday=this.webpackJsonpfriday||[]).push([[0],{16:function(e,n,t){e.exports={superInput:"SuperInputText_superInput__17Vb5",spanClassName:"SuperInputText_spanClassName__1zH--",errorInput:"SuperInputText_errorInput__23Wgu",error:"SuperInputText_error__Vma5h"}},20:function(e,n,t){e.exports={default:"SuperButton_default__3R_Y2",red:"SuperButton_red__3n7_T"}},21:function(e,n,t){e.exports={checkbox:"SuperCheckbox_checkbox__1338V",spanClassName:"SuperCheckbox_spanClassName__11YyU"}},22:function(e,n,t){e.exports={menu:"Header_menu__1yvV8",submenu:"Header_submenu__6jHtr",preJunior:"Header_preJunior__V--tU",junior:"Header_junior__2-b9R",juniorPlus:"Header_juniorPlus__22iaL"}},25:function(e,n,t){e.exports={App:"App_App__2MJC2"}},26:function(e,n,t){e.exports={blue:"SuperComponents_blue__1ahlT",column:"SuperComponents_column__1FQh5",testSpanError:"SuperComponents_testSpanError__2sU7a"}},27:function(e,n,t){e.exports={span:"SuperEditableSpan_span__3wfLF"}},28:function(e,n,t){e.exports={select:"SuperSelect_select__1v7Ks"}},35:function(e,n,t){},42:function(e,n,t){"use strict";t.r(n);var c=t(0),r=t.n(c),a=t(14),s=t.n(a),o=(t(35),t(25)),j=t.n(o),u=t(11),i=t(4),b=t(6),l=t(16),d=t.n(l),p=t(1),O=function(e){e.type;var n=e.onChange,t=e.onChangeText,c=e.onKeyPress,r=e.onEnter,a=e.error,s=e.className,o=e.spanClassName,j=Object(b.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),u="".concat(d.a.error," ").concat(o||""),l="".concat(a?d.a.errorInput:d.a.superInput," ").concat(s||"");return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("input",Object(i.a)({type:"text",onChange:function(e){n&&n(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){c&&c(e),r&&"Enter"===e.key&&r(),c&&c(e),r&&"Enter"===e.key&&r()},className:l},j)),a&&Object(p.jsx)("span",{className:u,children:a})]})},h=t(26),x=t.n(h),f=t(20),_=t.n(f),g=function(e){var n=e.red,t=e.className,c=Object(b.a)(e,["red","className"]),r="".concat(n?_.a.red:_.a.default," ").concat(t);return Object(p.jsx)("button",Object(i.a)({className:r},c))},m=t(21),C=t.n(m),v=function(e){e.type;var n=e.onChange,t=e.onChangeChecked,c=e.className,r=(e.spanClassName,e.children),a=Object(b.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(C.a.checkbox," ").concat(c||"");return Object(p.jsxs)("label",{children:[Object(p.jsx)("input",Object(i.a)({type:"checkbox",onChange:function(e){n&&n(e),t&&t(e.currentTarget.checked)},className:s},a)),r&&Object(p.jsx)("span",{className:C.a.spanClassName,children:r})]})},N=t(27),k=t.n(N),y=function(e){e.autoFocus;var n=e.onBlur,t=e.onEnter,r=e.spanProps,a=Object(b.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(c.useState)(!1),o=Object(u.a)(s,2),j=o[0],l=o[1],d=r||{},h=d.children,x=d.onDoubleClick,f=d.className,_=Object(b.a)(d,["children","onDoubleClick","className"]),g=f||k.a.span;return Object(p.jsx)(p.Fragment,{children:j?Object(p.jsx)(O,Object(i.a)({autoFocus:!0,onBlur:function(e){l(!1),n&&n(e)},onEnter:function(){l(!1),t&&t()}},a)):Object(p.jsx)("span",Object(i.a)(Object(i.a)({onDoubleClick:function(e){l(!0),x&&x(e)},className:g},_),{},{children:h||a.value}))})},S=t(28),w=t.n(S),T=function(e){var n=e.options,t=e.onChange,c=e.onChangeOption,r=Object(b.a)(e,["options","onChange","onChangeOption"]),a=n?n.map((function(e,n){return Object(p.jsx)("option",{value:e,children:e},n)})):[];return Object(p.jsx)("select",Object(i.a)(Object(i.a)({className:w.a.select,onChange:function(e){t&&t(e),c&&c(e.currentTarget.value)}},r),{},{children:a}))},I=function(e){e.type;var n=e.name,t=e.options,c=e.value,r=e.onChange,a=e.onChangeOption,s=(Object(b.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){r&&r(e),a&&a(e.currentTarget.value)}),o=t?t.map((function(e,t){return Object(p.jsxs)("label",{children:[Object(p.jsx)("input",{type:"radio",name:n,checked:e===c,value:e,onChange:s}),e]},n+"-"+t)})):[];return Object(p.jsx)(p.Fragment,{children:o})},P=["x","y","z"],E=function(){var e=Object(c.useState)(""),n=Object(u.a)(e,2),t=n[0],r=n[1],a=t?"":"error",s=function(){a?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},o=Object(c.useState)(!1),j=Object(u.a)(o,2),i=j[0],b=j[1],l=Object(c.useState)(""),d=Object(u.a)(l,2),h=d[0],f=d[1],_=Object(c.useState)(P[0]),m=Object(u.a)(_,2),C=m[0],N=m[1];return Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:x.a.column,children:[Object(p.jsx)(O,{value:t,onChangeText:r,onEnter:s,error:a}),Object(p.jsx)(O,{}),Object(p.jsx)(g,{children:"default"}),Object(p.jsx)(g,{red:!0,onClick:s,children:"delete "}),Object(p.jsx)(g,{disabled:!0,children:"disabled"}),Object(p.jsx)(v,{checked:i,onChangeChecked:b,children:"some text "}),Object(p.jsx)(v,{checked:i,onChange:function(e){return b(e.currentTarget.checked)}}),Object(p.jsx)("div",{children:Object(p.jsx)(y,{value:h,onChangeText:f,spanProps:{children:h?void 0:"\ud83d\udd8a\ufe0f enter text..."}})}),Object(p.jsx)("div",{children:Object(p.jsx)(T,{options:P,value:C,onChangeOption:N})}),Object(p.jsx)("div",{children:Object(p.jsx)(I,{name:"radio",options:P,value:C,onChangeOption:N})})]})})},F=t(10),L=t(22),B=t.n(L),H=function(){return Object(p.jsx)("div",{className:B.a.menu,children:Object(p.jsxs)("div",{className:B.a.submenu,children:[Object(p.jsx)(F.b,{to:"/login",children:"login"}),Object(p.jsx)(F.b,{to:"/checkIn",children:"check in"}),Object(p.jsx)(F.b,{to:"/profile",children:"profile"}),Object(p.jsx)(F.b,{to:"/passwordRecovery",children:"password recovery"}),Object(p.jsx)(F.b,{to:"/enteringNewPassword",children:"entering a new password"}),Object(p.jsx)("img",{src:"https://www.westonschools.org/wp-content/uploads/2018/01/homework-icon-1.png",width:"50px"})]})})},A=t(3),D=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{children:"404"}),Object(p.jsx)("div",{children:"Page not found!"}),Object(p.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},J=function(){return Object(p.jsx)("div",{})},R=function(){return Object(p.jsx)("div",{})},V=function(){return Object(p.jsx)("div",{})},K=function(){return Object(p.jsx)("div",{})},U=function(){return Object(p.jsx)("div",{})},z=function(){return Object(p.jsx)("div",{children:Object(p.jsxs)(A.d,{children:[Object(p.jsx)(A.b,{path:"/",exact:!0,render:function(){return Object(p.jsx)(A.a,{to:"/"})}}),Object(p.jsx)(A.b,{path:"/login",render:function(){return Object(p.jsx)(J,{})}}),Object(p.jsx)(A.b,{path:"/checkIn",render:function(){return Object(p.jsx)(R,{})}}),Object(p.jsx)(A.b,{path:"/profile",render:function(){return Object(p.jsx)(V,{})}}),Object(p.jsx)(A.b,{path:"/passwordRecovery",render:function(){return Object(p.jsx)(U,{})}}),Object(p.jsx)(A.b,{path:"/enteringNewPassword",render:function(){return Object(p.jsx)(K,{})}}),Object(p.jsx)(A.b,{path:"/404",render:function(){return Object(p.jsx)(D,{})}}),Object(p.jsx)(A.a,{from:"*",to:"/404"})]})})},M=function(){return Object(p.jsxs)("div",{className:j.a.App,children:[Object(p.jsx)(H,{}),Object(p.jsx)(z,{}),Object(p.jsx)(E,{})]})},Y=t(30),G={isLoading:!1},Q=t(17),W=t(29),q=Object(Q.b)({newReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"LOADING":return Object(i.a)(Object(i.a)({},e),{},{isLoading:n.isLoading});default:return e}}}),X=Object(Q.c)(q,Object(Q.a)(W.a));window.store=X;var Z=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,43)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,a=n.getLCP,s=n.getTTFB;t(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(F.a,{children:Object(p.jsx)(Y.a,{store:X,children:Object(p.jsx)(M,{})})})}),document.getElementById("root")),Z()}},[[42,1,2]]]);
//# sourceMappingURL=main.8b61b386.chunk.js.map