"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5819],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),d=o,b=c["".concat(s,".").concat(d)]||c[d]||m[d]||a;return r?n.createElement(b,l(l({ref:t},u),{},{components:r})):n.createElement(b,l({ref:t},u))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3430:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={},l="Forms",i={unversionedId:"HTML/html_forms_snippets",id:"HTML/html_forms_snippets",title:"Forms",description:"Form element",source:"@site/docs/HTML/html_forms_snippets.md",sourceDirName:"HTML",slug:"/HTML/html_forms_snippets",permalink:"/SnippetsVault/docs/HTML/html_forms_snippets",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/HTML/html_forms_snippets.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"HTML",permalink:"/SnippetsVault/docs/HTML/html_snippets"},next:{title:"Images",permalink:"/SnippetsVault/docs/HTML/html_images_snippets"}},s={},p=[{value:"Form element",id:"form-element",level:3},{value:"Text input",id:"text-input",level:3},{value:"Password input",id:"password-input",level:3},{value:"Radio buttons",id:"radio-buttons",level:3},{value:"Checkbox",id:"checkbox",level:3},{value:"Sumbit button",id:"sumbit-button",level:3}],u={toc:p},c="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"forms"},"Forms"),(0,o.kt)("h3",{id:"form-element"},"Form element"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<form action="/submit" method="POST">\x3c!-- Form elements go here --\x3e</form>\n')),(0,o.kt)("h3",{id:"text-input"},"Text input"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<input type="text" name="username" placeholder="Username" />\n')),(0,o.kt)("h3",{id:"password-input"},"Password input"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<input type="password" name="password" placeholder="Password" />\n')),(0,o.kt)("h3",{id:"radio-buttons"},"Radio buttons"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<input type="radio" id="option1" name="option" value="1" />\n<label for="option1">Option 1</label>\n<input type="radio" id="option2" name="option" value="2" />\n<label for="option2">Option 2</label>\n')),(0,o.kt)("h3",{id:"checkbox"},"Checkbox"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<input type="checkbox" id="subscribe" name="subscribe" value="yes" />\n<label for="subscribe">Subscribe to Newsletter</label>\n')),(0,o.kt)("h3",{id:"sumbit-button"},"Sumbit button"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<input type="submit" value="Submit" />\n')))}m.isMDXComponent=!0}}]);