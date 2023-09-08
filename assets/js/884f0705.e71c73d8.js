"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6584],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},l="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(n),d=a,m=l["".concat(s,".").concat(d)]||l[d]||f[d]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[l]="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7919:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={},i="Functions",c={unversionedId:"R/r_functions_snippets",id:"R/r_functions_snippets",title:"Functions",description:"Create a function",source:"@site/docs/R/r_functions_snippets.md",sourceDirName:"R",slug:"/R/r_functions_snippets",permalink:"/SnippetsVault/docs/R/r_functions_snippets",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/R/r_functions_snippets.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Data Visualization",permalink:"/SnippetsVault/docs/R/r_datavisualization_snippets"},next:{title:"Geospatial Analysis (with 'sf' package)",permalink:"/SnippetsVault/docs/R/r_geospatialanalysis_sf_snippets"}},s={},u=[{value:"Create a function",id:"create-a-function",level:3},{value:"Apply a function to a column",id:"apply-a-function-to-a-column",level:3}],p={toc:u},l="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(l,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"create-a-function"},"Create a function"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-r"},"my_function <- function(x, y) {\n  result <- x + y\n  return(result)\n}\n")),(0,a.kt)("h3",{id:"apply-a-function-to-a-column"},"Apply a function to a column"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-r"},"df$NewColumn <- sapply(df$OldColumn, my_function)\n")))}f.isMDXComponent=!0}}]);