(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{32:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var a=c(22),s=c.n(a),n=c(7),i=(c(30),c(31),c(32),c(11)),b=c.n(i),j=c(2),r=c(3),l=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{className:"title",children:"Page not found"}),Object(r.jsx)("p",{children:"Oops! We ran out of code!"})]})},d=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("h1",{className:"title",children:"Home page"})})},o=function(e){var t=e.tabs,c=Object(j.q)().tabId,a=t.find((function(e){return e.id===c}));return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{className:"title",children:"Tabs page"}),Object(r.jsx)("div",{className:"tabs is-boxed",children:Object(r.jsx)("ul",{children:t.map((function(e){return Object(r.jsx)("li",{"data-cy":"Tab",className:b()("",{"is-active":e.id===c}),children:Object(r.jsx)(n.b,{to:"/tabs/".concat(e.id),children:e.title})},e.id)}))})}),Object(r.jsx)("div",{className:"block","data-cy":"TabContent",children:a?a.content:"Please select a tab"})]})},h=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],x=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"Nav",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"navbar-brand",children:[Object(r.jsx)(n.c,{to:"/",className:function(e){var t=e.isActive;return b()("navbar-item",{"is-active":t})},children:"Home"}),Object(r.jsx)(n.c,{to:"/tabs",className:function(e){var t=e.isActive;return b()("navbar-item",{"is-active":t})},children:"Tabs"})]})})}),Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)(j.d,{children:[Object(r.jsx)(j.b,{path:"/",element:Object(r.jsx)(d,{})}),Object(r.jsxs)(j.b,{path:"tabs",children:[Object(r.jsx)(j.b,{index:!0,element:Object(r.jsx)(o,{tabs:h})}),Object(r.jsx)(j.b,{path:":tabId",element:Object(r.jsx)(o,{tabs:h})})]}),Object(r.jsx)(j.b,{path:"/home",element:Object(r.jsx)(j.a,{to:"/"})}),Object(r.jsx)(j.b,{path:"*",element:Object(r.jsx)(l,{})})]})})})]})};s.a.render(Object(r.jsx)(n.a,{children:Object(r.jsx)(x,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.bcb764ae.chunk.js.map