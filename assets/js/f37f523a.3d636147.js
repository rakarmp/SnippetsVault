"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6300],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>f});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=r.createContext({}),c=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=c(e.components);return r.createElement(s.Provider,{value:a},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(t),m=n,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return t?r.createElement(f,i(i({ref:a},u),{},{components:t})):r.createElement(f,i({ref:a},u))}));function f(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[p]="string"==typeof e?e:n,i[1]=o;for(var c=2;c<l;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2997:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=t(7462),n=(t(7294),t(3905));const l={},i="Data analysis",o={unversionedId:"R/r_datanalysis_snippets",id:"R/r_datanalysis_snippets",title:"Data analysis",description:"Calculate mean",source:"@site/docs/R/r_datanalysis_snippets.md",sourceDirName:"R",slug:"/R/r_datanalysis_snippets",permalink:"/docs/R/r_datanalysis_snippets",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/R/r_datanalysis_snippets.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Data Manipulation",permalink:"/docs/R/r_datamanipulation_snippets"},next:{title:"Data Visualization",permalink:"/docs/R/r_datavisualization_snippets"}},s={},c=[{value:"Calculate mean",id:"calculate-mean",level:3},{value:"Calculate median",id:"calculate-median",level:3},{value:"Calculate standard deviation",id:"calculate-standard-deviation",level:3},{value:"Correlation matrix",id:"correlation-matrix",level:3},{value:"Linear regression",id:"linear-regression",level:3}],u={toc:c},p="wrapper";function d(e){let{components:a,...t}=e;return(0,n.kt)(p,(0,r.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"data-analysis"},"Data analysis"),(0,n.kt)("h3",{id:"calculate-mean"},"Calculate mean"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-r"},"mean_value <- mean(my_vector)\n")),(0,n.kt)("h3",{id:"calculate-median"},"Calculate median"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-r"},"median_value <- median(my_vector)\n")),(0,n.kt)("h3",{id:"calculate-standard-deviation"},"Calculate standard deviation"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-r"},"sd_value <- sd(my_vector)\n")),(0,n.kt)("h3",{id:"correlation-matrix"},"Correlation matrix"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-r"},"corr_matrix <- cor(df)\n")),(0,n.kt)("h3",{id:"linear-regression"},"Linear regression"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-r"},"lm_model <- lm(Y ~ X1 + X2, data = df)\n")))}d.isMDXComponent=!0}}]);