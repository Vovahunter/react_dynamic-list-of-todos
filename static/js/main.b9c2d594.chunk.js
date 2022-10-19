(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s,a=c(5),n=c.n(a),l=c(2),i=c(1),d=(c(10),c(11),c(4)),o=c.n(d),r=c(0),j=function(e){var t=e.todos,c=e.selectedTodoId,s=e.onSelect;return Object(r.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("th",{children:"Title"}),Object(r.jsx)("th",{children:" "})]})}),Object(r.jsx)("tbody",{children:t.map((function(e){return Object(r.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(r.jsx)("td",{className:"is-vcentered",children:e.id}),Object(r.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(r.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("td",{className:"is-vcentered",children:Object(r.jsx)("p",{className:o()({"has-text-danger":!e.completed,"has-text-success":e.completed}),children:e.title})}),Object(r.jsx)("td",{className:"has-text-right is-vcentered",children:Object(r.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return s(e.id)},children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:o()("far",{"fa-eye-slash":e.id===c,"fa-eye":e.id!==c})})})})})]},e.id)}))})]})};!function(e){e[e.All=0]="All",e[e.Completed=1]="Completed",e[e.Active=2]="Active"}(s||(s={}));var b=function(e){var t=e.query,c=e.changeQuery,a=e.complitedFilter,n=e.setComplitedFilter;return Object(r.jsxs)("form",{className:"field has-addons",children:[Object(r.jsx)("p",{className:"control",children:Object(r.jsx)("span",{className:"select",children:Object(r.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){n(+e.target.value)},value:a,children:[Object(r.jsx)("option",{value:s.All,children:"All"}),Object(r.jsx)("option",{value:s.Active,children:"Active"}),Object(r.jsx)("option",{value:s.Completed,children:"Completed"})]})})}),Object(r.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(r.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(e){return c(e.target.value)}}),Object(r.jsx)("span",{className:"icon is-left",children:Object(r.jsx)("i",{className:"fas fa-magnifying-glass"})}),""!==t&&Object(r.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(r.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){c("")}})})]})]})};function u(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(13);var h=function(){return Object(r.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(r.jsx)("div",{className:"Loader__content"})})},m=function(e){var t=e.todo,c=e.onClose,s=Object(i.useState)(null),a=Object(l.a)(s,2),n=a[0],d=a[1],o=Object(i.useState)(!1),j=Object(l.a)(o,2),b=j[0],m=j[1];return Object(i.useEffect)((function(){var e;m(!0),(e=t.userId,u("/users/".concat(e))).then(d),m(!1)}),[t.userId,b]),Object(r.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(r.jsx)("div",{className:"modal-background"}),n?Object(r.jsxs)("div",{className:"modal-card",children:[Object(r.jsxs)("header",{className:"modal-card-head",children:[Object(r.jsxs)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:["Todo #",t.id]}),Object(r.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return c(null)}})]}),Object(r.jsxs)("div",{className:"modal-card-body",children:[Object(r.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(r.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(r.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(r.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(r.jsx)("a",{href:"mailto:".concat(n.email),children:n.name})]})]})]}):Object(r.jsx)(h,{})]})},O=function(){var e=Object(i.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],n=Object(i.useState)(null),d=Object(l.a)(n,2),o=d[0],O=d[1],x=Object(i.useState)(""),f=Object(l.a)(x,2),p=f[0],N=f[1],v=Object(i.useState)(s.All),y=Object(l.a)(v,2),g=y[0],C=y[1],k=Object(i.useMemo)((function(){return c.find((function(e){return e.id===o}))||null}),[o]);Object(i.useEffect)((function(){u("/todos").then(a)}),[]);var S=Object(i.useMemo)((function(){return c.filter((function(e){var t=e.title.toLowerCase().includes(p.toLowerCase().trim());switch(g){case s.Active:return t&&!1===e.completed;case s.Completed:return t&&!0===e.completed;default:return t}}))}),[p,c,g]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"box",children:[Object(r.jsx)("h1",{className:"title",children:"Todos:"}),Object(r.jsx)("div",{className:"block",children:Object(r.jsx)(b,{query:p,changeQuery:N,complitedFilter:g,setComplitedFilter:C})}),Object(r.jsxs)("div",{className:"block",children:[!c.length&&Object(r.jsx)(h,{}),S.length?Object(r.jsx)(j,{todos:S,selectedTodoId:o,onSelect:O}):Object(r.jsx)("div",{children:"No todos yet"})]})]})})}),k&&Object(r.jsx)(m,{todo:k,onClose:O})]})};n.a.render(Object(r.jsx)(O,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.b9c2d594.chunk.js.map