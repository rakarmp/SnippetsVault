"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8756],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),u=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},p=function(t){var e=u(t.components);return r.createElement(c.Provider,{value:e},t.children)},l="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),l=u(n),f=a,m=l["".concat(c,".").concat(f)]||l[f]||d[f]||o;return n?r.createElement(m,s(s({ref:e},p),{},{components:n})):r.createElement(m,s({ref:e},p))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,s=new Array(o);s[0]=f;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i[l]="string"==typeof t?t:a,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8245:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={},s="Functions",i={unversionedId:"Dart/dart_functions_snippets",id:"Dart/dart_functions_snippets",title:"Functions",description:"Functions",source:"@site/docs/Dart/dart_functions_snippets.md",sourceDirName:"Dart",slug:"/Dart/dart_functions_snippets",permalink:"/SnippetsVault/docs/Dart/dart_functions_snippets",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Dart/dart_functions_snippets.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Exceptions",permalink:"/SnippetsVault/docs/Dart/dart_exceptions_snippets"},next:{title:"Futures",permalink:"/SnippetsVault/docs/Dart/dart_futures_snippets"}},c={},u=[{value:"Functions",id:"functions-1",level:3},{value:"Arrow Syntax (=&gt;)",id:"arrow-syntax-",level:3},{value:"Anonymous (lambda) functions",id:"anonymous-lambda-functions",level:3}],p={toc:u},l="wrapper";function d(t){let{components:e,...n}=t;return(0,a.kt)(l,(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"functions-1"},"Functions"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"// functions in dart are objects and have a type\nint add(int a, int b){\n    return a+b;\n}\n\n// functions can be assigned to variables\nint sum = add(2,3); // returns: 5\n\n// can be passed as arguments to other functions\nint totalSum = add(2, add(2,3)); // returns : 7\n")),(0,a.kt)("h3",{id:"arrow-syntax-"},"Arrow Syntax (=>)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"// functions that contain just one expression, you can use a shorthand syntax\nbool isFav(Product product) => favProductsList.contains(product);\n")),(0,a.kt)("h3",{id:"anonymous-lambda-functions"},"Anonymous (lambda) functions"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"// small one line functions that dont have name\nint add(a,b) => a+b;\n\n// lambda functions mostly passed as parameter to other functions\nconst list = ['apples', 'bananas', 'oranges'];\nlist.forEach(\n(item) => print('${list.indexOf(item)}: $item'));\n//Prints: 0: apples 1: bananas 2: oranges\n")))}d.isMDXComponent=!0}}]);