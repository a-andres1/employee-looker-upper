(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var s=n(2),a=n.n(s),c=n(12),i=n.n(c),r=(n(22),n(23),n(13)),l=n(14),o=n(17),u=n(16),j=n(0),d=function(){return Object(j.jsx)("div",{children:"Employee Sorter"})},h=function(e){return Object(j.jsx)("div",{children:Object(j.jsx)("input",{type:"text",onChange:e.functionThatHandlesTheChange,placeholder:"Search by first name"})})},m=function(e){return Object(s.useEffect)((function(){console.log("check")})),Object(j.jsx)("div",{children:e.employees.map((function(e,t){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"card",style:{justifyContent:"center",maxWidth:"400px",float:"right",margin:"10pt"},children:[Object(j.jsx)("div",{className:"card-image",children:Object(j.jsx)("figure",{className:"image",style:{margin:"10pt"},children:Object(j.jsx)("img",{src:e.picture.medium,style:{maxWidth:"100px",maxHeight:"100px"},alt:""})})}),Object(j.jsx)("div",{className:"card-content",children:Object(j.jsx)("div",{className:"media",children:Object(j.jsxs)("div",{className:"media-content",children:[Object(j.jsxs)("p",{className:"title is-4",children:[e.name.first," ",e.name.last]}),Object(j.jsxs)("p",{className:"subtitle is-6",children:["Located in: ",e.location.city,", ",e.location.state]}),Object(j.jsxs)("p",{className:"subtitle is-6",children:["Email: ",e.email]})]})})})]},t)})}))})},f=n(15),b=n.n(f),p={searchUsers:function(){return b.a.get("https://randomuser.me/api/?results=20&nat=us")}},x=function(e){return Object(j.jsx)("div",{children:Object(j.jsx)("button",{className:"button",onClick:e.fn,children:"Sort by Name"})})},O=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={filterMain:[],employees:[]},e.dataGet=function(){p.searchUsers().then((function(t){e.setState({employees:t.data.results}),e.setState({filterMain:t.data.results})}))},e.handleChange=function(t){var n=e.state.filterMain.filter((function(e){return e.name.first.toLowerCase().includes(t.target.value.toLowerCase())}));e.setState({employees:n})},e.sort=function(t){console.log(e.state.employees);var n=e.state.filterMain.sort((function(e,t){var n=e.name.last,s=t.name.last;return n<s?-1:n>s?1:0}));e.setState({employees:n})},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.dataGet()}},{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(d,{}),Object(j.jsx)(h,{functionThatHandlesTheChange:this.handleChange}),Object(j.jsx)(x,{fn:this.sort}),Object(j.jsx)(m,{employees:this.state.employees})]})}}]),n}(a.a.Component);var g=function(){return Object(j.jsx)(O,{})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),s(e),a(e),c(e),i(e)}))};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root")),y()}},[[43,1,2]]]);
//# sourceMappingURL=main.28ac37b7.chunk.js.map