"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7704],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1051:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},s="Collections",i={unversionedId:"Dart/dart_collections_snippets",id:"Dart/dart_collections_snippets",title:"Collections",description:"Lists",source:"@site/docs/Dart/dart_collections_snippets.md",sourceDirName:"Dart",slug:"/Dart/dart_collections_snippets",permalink:"/docs/Dart/dart_collections_snippets",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Dart/dart_collections_snippets.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Control Flows : Conditionals",permalink:"/docs/Dart/dart_conditionals_snippets"},next:{title:"Exceptions",permalink:"/docs/Dart/dart_exceptions_snippets"}},l={},c=[{value:"Lists",id:"lists",level:3},{value:"Sets",id:"sets",level:3},{value:"Maps",id:"maps",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"collections"},"Collections"),(0,a.kt)("h3",{id:"lists"},"Lists"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},'// ordered group of objects\nvar list = [1, 2, 3];\n\nprint(list.length); //Print: 3\nprint(list[1]); //Print: 2\n\n// other ways of list declaration and initializations\n\nList<String> cities = <String>["New York", "Mumbai", "Tokyo"];\n\n// To create a list that\u2019s a compile-time constant\nconst constantCities = const ["New York", "Mumbai", "Tokyo"];\n')),(0,a.kt)("h3",{id:"sets"},"Sets"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"// A set in Dart is an unordered collection of unique items.\nvar halogens = {'fluorine', 'chlorine', 'bromine', 'iodine', 'astatine'};\n\n// to create an empty set\nvar names = <String>{};\nSet<String> names = {}; // This works, too.\n//var names = {}; // Creates a map, not a set.\n")),(0,a.kt)("h3",{id:"maps"},"Maps"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"// a map is an object that associates keys and values\nvar person = Map<String, String>();\n// To initialize the map, do this:\nperson['firstName'] = 'Nicola';\nperson['lastName'] = 'Tesla';\n\nprint(person); //Print: {firstName: Nicola, lastName: Tesla}\nprint(person['lastName']); //Print: Tesla\n\n\nvar nobleGases = {\n  // Key: Value\n  2: 'helium',\n  10: 'neon',\n  18: 'argon',\n};\n")))}d.isMDXComponent=!0}}]);