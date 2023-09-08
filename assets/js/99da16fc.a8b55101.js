"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5016],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,b=d["".concat(i,".").concat(m)]||d[m]||u[m]||s;return n?r.createElement(b,c(c({ref:t},p),{},{components:n})):r.createElement(b,c({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,c=new Array(s);c[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[d]="string"==typeof e?e:a,c[1]=o;for(var l=2;l<s;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5264:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const s={sidebar_position:2},c="Classes and Objects",o={unversionedId:"Dart/dart_classes_objects_snippets",id:"Dart/dart_classes_objects_snippets",title:"Classes and Objects",description:"Class",source:"@site/docs/Dart/dart_classes_objects_snippets.md",sourceDirName:"Dart",slug:"/Dart/dart_classes_objects_snippets",permalink:"/SnippetsVault/docs/Dart/dart_classes_objects_snippets",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Dart/dart_classes_objects_snippets.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/SnippetsVault/docs/Dart/dart_getting_started_snippets"},next:{title:"Operators",permalink:"/SnippetsVault/docs/Dart/dart_operators_snippets"}},i={},l=[{value:"Class",id:"class",level:3},{value:"Object",id:"object",level:3},{value:"Constructors",id:"constructors",level:3},{value:"Abstract Classes",id:"abstract-classes",level:3},{value:"Getters Setters",id:"getters-setters",level:3}],p={toc:l},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"classes-and-objects"},"Classes and Objects"),(0,a.kt)("h3",{id:"class"},"Class"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},'class Cat {\n    String name;\n\n    // method\n    void voice(){\n        print("Meow");\n    }\n}\n')),(0,a.kt)("h3",{id:"object"},"Object"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},'// instance of a class\n// below myCat is Object of class Cat\n\nvoid main(){\n    Cat myCat = Cat();\n    myCat.name = "Kitty";\n    myCat.voice(); // Prints: Meow\n}\n')),(0,a.kt)("h3",{id:"constructors"},"Constructors"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},'class Cat {\n    String name;\n    Cat(this.name);\n}\nvoid main(){\n    Cat myCat = Cat("Kitty");\n    print(myCat.name); // Prints: Kitty\n}\n')),(0,a.kt)("h3",{id:"abstract-classes"},"Abstract Classes"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"// abstract class\u2014a class that can\u2019t be instantiated\n// This class is declared abstract and thus can't be instantiated.\nabstract class AbstractContainer {\n  // Define constructors, fields, methods...\n\n  void updateChildren(); // Abstract method.\n}\n")),(0,a.kt)("h3",{id:"getters-setters"},"Getters Setters"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"// provide read and write access to an object\u2019s properties\nclass Cat {\n    String name;\n\n    // getter\n    String get catName {\n        return name;\n    }\n\n    // setter\n    void set catName(String name){\n        this.name = name;\n    }\n}\n")))}u.isMDXComponent=!0}}]);