"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[67],{7067:function(n,e,t){t.r(e),t.d(e,{default:function(){return I}});var r,a,u,c=t(5861),o=t(885),i=t(7757),s=t.n(i),p=t(2791),f=t(8479),l=t(501),d=t(4869),h=t(168),x=t(1242),v=x.ZP.input(r||(r=(0,h.Z)(["\n  width: 250px;\n  padding: 5px;\n  font-size: 15px;\n"]))),m=x.ZP.form(a||(a=(0,h.Z)(["\n  width: 350px;\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 15px;\n  margin-left: 10px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n"]))),y=x.ZP.button(u||(u=(0,h.Z)(["\n  padding: 8px;\n  margin-left: 5px;\n  background-color: #6360f7;\n  color: #fff;\n  border: none;\n  border-radius: 2px;\n  cursor: pointer;\n\n  &:hover {\n    background-color: #3936f5;\n  }\n"]))),g=t(184);function w(){var n=(0,l.lr)(),e=(0,o.Z)(n,2),t=e[0],r=e[1],a=t.get("query"),u=(0,p.useState)(null!==a&&void 0!==a?a:""),c=(0,o.Z)(u,2),i=c[0],s=c[1];return(0,g.jsxs)(m,{onSubmit:function(n){(n.preventDefault(),i)?r({query:i}):f.ZP.error("B\u044b \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0432\u0432\u0435\u043b\u0438")},children:[(0,g.jsx)(v,{type:"text",name:"name",value:i,onChange:function(n){s(n.currentTarget.value.toLowerCase())},autoComplete:"off"}),(0,g.jsx)(y,{type:"submit",children:"Search"})]})}var Z,k,b,j=t(6871),_=(0,x.ZP)(l.rU)(Z||(Z=(0,h.Z)(["\n  color: black;\n  text-decoration: none;\n  &:hover {\n    color: #6149fc;\n  }\n"]))),P=x.ZP.ul(k||(k=(0,h.Z)(["\n  list-style: none;\n  margin: 0;\n  margin-top: 10px;\n"]))),q=x.ZP.li(b||(b=(0,h.Z)(["\n  padding: 5px;\n  font-weight: 600;\n"])));function C(n){var e=n.qwery,t=(0,j.TH)();return(0,g.jsx)(P,{children:e.map((function(n){var e=n.id,r=n.original_title;return(0,g.jsx)(q,{children:(0,g.jsxs)(_,{to:"/movies/".concat(e),state:{from:t},children:["\ud83c\udfa5 ",r]})},e)}))})}var S=t(854);function I(){var n=(0,p.useState)(""),e=(0,o.Z)(n,2),t=e[0],r=e[1],a=(0,p.useState)(!1),u=(0,o.Z)(a,2),i=u[0],h=u[1],x=(0,l.lr)(),v=(0,o.Z)(x,2),m=v[0],y=v[1],Z=m.get("query");return(0,p.useEffect)((function(){function n(){return(n=(0,c.Z)(s().mark((function n(){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,h(!0),n.next=4,(0,d.NI)(Z);case 4:(e=n.sent).length>0?r(e):f.ZP.error("\u0424\u0438\u043b\u044c\u043c \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d"),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:return n.prev=11,h(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})))).apply(this,arguments)}Z&&function(){n.apply(this,arguments)}()}),[Z,y]),(0,g.jsxs)("main",{children:[(0,g.jsx)(w,{}),i&&(0,g.jsx)(S.i,{}),t&&(0,g.jsx)(C,{qwery:t})]})}},4869:function(n,e,t){t.d(e,{Dv:function(){return f},NI:function(){return m},Yc:function(){return d},fI:function(){return x},ur:function(){return s}});var r=t(5861),a=t(7757),u=t.n(a),c=t(4569),o=t.n(c),i="a8a4168eeeb623f39ee02028275e7a3e";function s(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("/trending/movie/day?api_key=".concat(i));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("/movie/".concat(e,"?api_key=").concat(i));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("/movie/".concat(e,"/credits?api_key=").concat(i));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("/movie/".concat(e,"/reviews?api_key=").concat(i));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("/search/movie?api_key=".concat(i,"&query=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}o().defaults.baseURL="https://api.themoviedb.org/3"}}]);
//# sourceMappingURL=67.d1ad564d.chunk.js.map