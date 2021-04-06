(this["webpackJsonprest-countries-api"]=this["webpackJsonprest-countries-api"]||[]).push([[0],{27:function(e,t,a){},28:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var s=a(0),r=a.n(s),c=a(19),n=a.n(c),l=(a(27),a(9)),i=a(2),o=(a(28),a(10)),d=a.n(o),j=a(12),x=a(7),u=a(1),h=r.a.createContext(),b=function(e){var t=e.children,a=Object(s.useState)(!1),r=Object(x.a)(a,2),c=r[0],n=r[1],l=Object(s.useState)("a"),i=Object(x.a)(l,2),o=i[0],b=i[1],m=Object(s.useState)([]),f=Object(x.a)(m,2),g=f[0],p=f[1],O=Object(s.useState)("Filter by region..."),v=Object(x.a)(O,2),y=v[0],w=v[1],N=Object(s.useState)(!0),k=Object(x.a)(N,2),C=k[0],S=k[1];return Object(s.useEffect)((function(){(function(){var e=Object(j.a)(d.a.mark((function e(){var t,a,s,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n(!0),e.prev=1,"Filter by region..."!==y&&"All"!==y){e.next=13;break}return e.next=5,fetch("".concat("https://restcountries.eu/rest/v2/name/").concat(o));case 5:return t=e.sent,e.next=8,t.json();case 8:a=e.sent,p(a),n(!1),e.next=21;break;case 13:return e.next=15,fetch("".concat("https://restcountries.eu/rest/v2/region/").concat(y));case 15:return s=e.sent,e.next=18,s.json();case 18:r=e.sent,p(r),n(!1);case 21:e.next=26;break;case 23:e.prev=23,e.t0=e.catch(1),n(!1);case 26:case"end":return e.stop()}}),e,null,[[1,23]])})));return function(){return e.apply(this,arguments)}})()()}),[o,y]),Object(u.jsx)(h.Provider,{value:{loading:c,countries:g,searchCountry:o,setSearchCountry:b,region:y,setRegion:w,isActive:C,setActive:S},children:t})},m=function(){return Object(s.useContext)(h)};var f=function(e){var t=e.action;return Object(u.jsx)("section",{className:"header fixed z-10 w-full h-20 p-4 flex justify-center items-center bg-light text-dark-2 dark:bg-dark-2 dark:text-light ",children:Object(u.jsxs)("div",{className:"max-w-6xl w-full flex justify-between",children:[Object(u.jsx)("span",{className:"font-bold text-lg",children:"Where in the world?"}),Object(u.jsxs)("div",{className:"font-medium flex gap-2 items-center",children:[Object(u.jsx)("input",{type:"checkbox",id:"toggle",className:"hidden"}),Object(u.jsx)("label",{for:"toggle",children:Object(u.jsxs)("div",{className:"w-full cursor-pointer",onClick:t,children:[Object(u.jsxs)("div",{className:"group dark hidden duration-300 ease-in-out",children:[Object(u.jsx)("i",{className:"group-hover:text-gray fas fa-moon"}),Object(u.jsx)("span",{className:"group-hover:text-gray text-sm px-2",children:"Dark Mode"})]}),Object(u.jsxs)("div",{className:"group light duration-300 ease-in-out",children:[Object(u.jsx)("i",{className:"group-hover:text-gray fas fa-sun"}),Object(u.jsx)("span",{className:"group-hover:text-gray text-sm px-2",children:"Light Mode"})]})]})})]})]})})},g=a(22),p=a(13),O=function(e){var t=e.name,a=e.capital,s=e.region,r=e.population,c=e.flag,n=e.alpha3Code;return Object(u.jsx)(l.b,{to:"/country/".concat(n),children:Object(u.jsxs)("div",{className:"group bg-light dark:bg-dark-2 w-64 h-80 shadow-md rounded-md flex flex-col justify-between cursor-pointer",children:[Object(u.jsx)("img",{src:c,alt:t,className:"rounded-md rounded-b-none w-full object-cover h-40"}),Object(u.jsxs)("div",{className:"group-hover:bg-gray-2 dark:group-hover:bg-gray-1 p-4 flex flex-col text-dark-2 dark:text-light gap-2 w-fulls",children:[Object(u.jsx)("span",{className:"mb-2 font-bold text-lg truncate",children:t}),Object(u.jsxs)("span",{className:"text-base",children:[Object(u.jsx)("strong",{children:"Population:"}),Object(u.jsx)(p.a,{className:"px-2",value:r,displayType:"text",thousandSeparator:!0})]}),Object(u.jsxs)("span",{className:"text-base",children:[Object(u.jsx)("strong",{children:"Region:"})," ",s]}),Object(u.jsxs)("span",{className:"text-base",children:[Object(u.jsx)("strong",{children:"Capital:"})," ",a]})]})]},t)})};var v=function(){return Object(u.jsxs)("main",{className:"w-full h-screen bg-white dark:bg-dark-1 text-dark-1 dark:text-light flex justify-center items-center gap-4",children:[Object(u.jsx)("i",{className:"animate-spin  fas fa-sync text-5xl"}),Object(u.jsx)("h1",{className:"text-lg font-semibold",children:"Laoding Page..."})]})},y=function(){var e=m(),t=e.countries;return e.loading?Object(u.jsx)(v,{}):t.length?Object(u.jsx)("section",{className:"relative top-36 sm:top-20 w-full h-full min-h-screen flex flex-col sm:flex-row sm:flex-wrap gap-10 items-center mt-2 justify-start sm:justify-center sm:items-start",children:t.map((function(e){return Object(u.jsx)(O,Object(g.a)({},e),e.alpha3Code)}))}):Object(u.jsxs)("div",{className:"w-full h-screen text-dark-2 dark:text-light flex flex-col items-center gap-4 sm:flex-row justify-center text-base font-semibold tracking widest italic",children:[Object(u.jsx)("span",{children:"Sorry!!!!!!!!!! "}),Object(u.jsx)("span",{children:Object(u.jsx)("i",{className:"far fa-frown fa-4x px-4 animate-bounce"})}),Object(u.jsx)("span",{children:"No countrie matched your search criteria."})]})},w=a(21),N=function(){var e=Object(s.useState)(!1),t=Object(x.a)(e,2),a=t[0],r=t[1],c=m(),n=c.region,l=c.setRegion;return Object(u.jsxs)("div",{className:"relative font-app w-full px-2 sm:w-2/5",children:[Object(u.jsxs)("button",{type:"button",onClick:function(){return r(!a)},className:"inline-flex justify-around w-full items-center h-12 rounded-md shadow-md px-2 py-2 bg-light dark:bg-dark-2 text-md font-semibold text-dark-2 dark:text-light hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500",id:"options-menu",ariaExpanded:"true",ariaHaspopup:"true",children:[n,Object(u.jsx)("i",{className:"fas fa-chevron-down"})]}),Object(u.jsx)(w.a,{show:a,enter:"transition ease-out duration-100 transform",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"transition ease-in duration-75 transform",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:Object(u.jsx)("div",{className:"origin-top-right absolute px-4 right-0 mt-2 w-1/2 sm:w-full rounded-md shadow-md",onClick:function(){return r(!a)},children:Object(u.jsx)("div",{className:"rounded-md bg-white shadow-xs",children:Object(u.jsx)("div",{classsName:"origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none",role:"menu",ariaOrientation:"vertical",ariaLabelledby:"options-menu",children:Object(u.jsx)("div",{className:"py-2 rounded-md bg-light dark:bg-dark-2 h-auto",role:"none",children:["All","Africa","Americas","Asia","Europe","Oceania","Polar"].map((function(e){return Object(u.jsx)("a",{href:!0,className:"block px-4 py-2 text-sm text-gray-700 hover:bg-white dark:hover:bg-dark-1 hover:text-gray-900 text-dark-2 dark:text-light font-semibold",value:e,onClick:function(){return l(e)},children:e},e)}))})})})})})]})};var k=function(){var e=m().setSearchCountry,t=r.a.useRef("");return Object(u.jsxs)("main",{className:"search relative w-full px-2 sm:w-3/5",children:[Object(u.jsx)("span",{className:"fa fa-search absolute text-dark-2 dark:text-light top-1/3 left-4"}),Object(u.jsx)("input",{placeholder:"Search for a country...",type:"text",name:"search",className:"text-base  text-dark-2  placeholder-dark-2 dark:placeholder-light dark:text-light h-12 w-full bg-light dark:bg-dark-2 rounded-md shadow-md pl-12",onChange:function(){e(t.current.value)},ref:t})]})};var C=function(){return Object(u.jsxs)("main",{className:"fixed z-10 w-full bg-white dark:bg-dark-1 max-w-6xl flex flex-col items-center sm:flex-row sm:justify-between py-4 gap-4",children:[Object(u.jsx)(k,{}),Object(u.jsx)(N,{})]})};var S=function(){return Object(u.jsx)("main",{className:"relative top-20 w-full h-full flex justify-center bg-white dark:bg-dark-1",children:Object(u.jsxs)("div",{className:"w-full h-full flex flex-col max-w-6xl",children:[Object(u.jsx)(C,{}),Object(u.jsx)(y,{})]})})},A="https://restcountries.eu/rest/v2/alpha/",F=function(){var e=Object(i.f)().alpha3Code,t=Object(s.useState)(!1),a=Object(x.a)(t,2),r=a[0],c=a[1],n=Object(s.useState)(null),o=Object(x.a)(n,2),h=o[0],b=o[1],f=m().countries.map((function(e){return{name:e.name,alpha3Code:e.alpha3Code}}));return Object(s.useEffect)((function(){function t(){return(t=Object(j.a)(d.a.mark((function t(){var a,s;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(A).concat(e));case 3:return a=t.sent,t.next=6,a.json();case 6:s=t.sent,b(s||null),c(!1),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0),c(!1);case 15:case"end":return t.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}c(!0),function(){t.apply(this,arguments)}()}),[e]),r?Object(u.jsx)(v,{}):h?Object(u.jsx)("main",{className:"relative top-20 bg-white dark:bg-dark-1 w-full h-screen p-4 flex flex-col items-center sm:justify-start",children:Object(u.jsxs)("div",{className:"w-full h-full max-w-6xl flex flex-col gap-y-4",children:[Object(u.jsx)("div",{className:"back-button sm:h-1/5 flex justify-start items-center",children:Object(u.jsx)(l.b,{to:"/",children:Object(u.jsxs)("button",{className:"h-10 w-24 bg-light dark:bg-dark-2 text-dark-2 dark:text-light p-2 flex items-center justify-around rounded-sm shadow-md cursor-pointer hover:bg-gray-2 dark:hover:bg-gray-1",children:[Object(u.jsx)("i",{className:"fas fa-arrow-left"}),"Back"]})})}),Object(u.jsxs)("div",{className:"country w-full flex flex-col gap-y-4 sm:gap-y-2 sm:flex-row sm:gap-12",children:[Object(u.jsx)("img",{src:h.flag,alt:h.name,className:"sm:w-1/2 sm:h-96 m-0 shadow-lg"}),Object(u.jsxs)("div",{className:"country-disc w-full sm:w-1/2 text-dark-2 dark:text-light flex flex-col sm:justify-between sm:py-8 gap-y-4",children:[Object(u.jsx)("h2",{className:"name font-semibold text-3xl hover:text-gray",children:h.name}),Object(u.jsxs)("div",{className:"main flex flex-col gap-y-4 sm:flex-row w-full sm:justify-between",children:[Object(u.jsxs)("div",{className:"main-left w-full sm:w-1/2 flex flex-col sm:gap-2",children:[Object(u.jsxs)("span",{className:"hover:text-gray",children:[Object(u.jsx)("strong",{children:"Native Name:"})," ",h.nativeName]}),Object(u.jsxs)("span",{className:"hover:text-gray",children:[Object(u.jsx)("strong",{children:"Population:"}),Object(u.jsx)(p.a,{className:"px-2 hover:text-gray",value:h.population,displayType:"text",thousandSeparator:!0})]}),Object(u.jsxs)("span",{className:"hover:text-gray",children:[Object(u.jsx)("strong",{children:"Region"}),": ",h.region]}),Object(u.jsxs)("span",{className:"hover:text-gray",children:[Object(u.jsx)("strong",{children:"Sub-region:"})," ",h.subregion]}),Object(u.jsxs)("span",{className:"hover:text-gray",children:[Object(u.jsx)("strong",{children:"Capital:"})," ",h.capital]})]}),Object(u.jsxs)("div",{className:"main-right sm:w-1/2 flex flex-col sm:gap-2",children:[Object(u.jsxs)("span",{className:"hover:text-gray",children:[Object(u.jsx)("strong",{children:"Top Level Domain:"})," ",h.topLevelDomain]}),Object(u.jsxs)("span",{className:"hover:text-gray",children:[Object(u.jsx)("strong",{children:"Currencies:"})," ",h.currencies[0].name]}),Object(u.jsxs)("span",{className:"hover:text-gray",children:[Object(u.jsx)("strong",{children:"Languages:"})," ",h.languages[0].name]})]})]}),Object(u.jsxs)("div",{className:"border-countries",children:[Object(u.jsx)("h1",{className:"hover:text-gray",children:Object(u.jsx)("strong",{children:"Border Countries:"})}),0!==h.borders.length?h.borders.map((function(e){return Object(u.jsx)("span",{className:"hover:text-gray gap-y-2 sm:p-2 flex flex-col sm:flex-row",children:f.map((function(t){return t.alpha3Code===e?t.name:null}))})})):Object(u.jsx)("span",{className:"",children:"No Borders"})]})]})]})]})}):Object(u.jsx)("h2",{children:"No country to display."})};var L=function(){var e=m(),t=e.isActive,a=e.setActive;return Object(u.jsx)(l.a,{children:Object(u.jsxs)("section",{className:t?"dark":" ",children:[Object(u.jsx)("section",{className:"app-header",children:Object(u.jsx)(f,{action:function(){a(!t)}})}),Object(u.jsxs)(i.c,{children:[Object(u.jsx)(i.a,{exact:!0,path:"/country-info",children:Object(u.jsx)("section",{className:"app-main",children:Object(u.jsx)(S,{})})}),Object(u.jsx)(i.a,{path:"/country/:alpha3Code",children:Object(u.jsx)("section",{className:"app-country",children:Object(u.jsx)(F,{})})})]})]})})},P=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,37)).then((function(t){var a=t.getCLS,s=t.getFID,r=t.getFCP,c=t.getLCP,n=t.getTTFB;a(e),s(e),r(e),c(e),n(e)}))};n.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(b,{children:Object(u.jsx)(L,{})})}),document.getElementById("root")),P()}},[[36,1,2]]]);
//# sourceMappingURL=main.55650a1c.chunk.js.map