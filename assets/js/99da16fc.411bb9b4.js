"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5016],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,b=d["".concat(i,".").concat(m)]||d[m]||u[m]||s;return r?n.createElement(b,c(c({ref:t},p),{},{components:r})):n.createElement(b,c({ref:t},p))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,c=new Array(s);c[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[d]="string"==typeof e?e:a,c[1]=o;for(var l=2;l<s;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5264:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const s={sidebar_position:2},c="Classes and Objects",o={unversionedId:"Dart/dart_classes_objects_snippets",id:"Dart/dart_classes_objects_snippets",title:"Classes and Objects",description:"Class",source:"@site/docs/Dart/dart_classes_objects_snippets.md",sourceDirName:"Dart",slug:"/Dart/dart_classes_objects_snippets",permalink:"/docs/Dart/dart_classes_objects_snippets",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Dart/dart_classes_objects_snippets.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/Dart/dart_getting_started_snippets"},next:{title:"Operators",permalink:"/docs/Dart/dart_operators_snippets"}},i={},l=[{value:"Class",id:"class",level:3},{value:"Object",id:"object",level:3},{value:"Constructors",id:"constructors",level:3},{value:"Abstract Classes",id:"abstract-classes",level:3},{value:"Getters Setters",id:"getters-setters",level:3}],p={toc:l},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"classes-and-objects"},"Classes and Objects"),(0,a.kt)("h3",{id:"class"},"Class"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},'class Cat {\n    String name;\n\n    // method\n    void voice(){\n        print("Meow");\n    }\n}\n')),(0,a.kt)("h3",{id:"object"},"Object"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},'// instance of a class\n// below myCat is Object of class Cat\n\nvoid main(){\n    Cat myCat = Cat();\n    myCat.name = "Kitty";\n    myCat.voice(); // Prints: Meow\n}\n')),(0,a.kt)("h3",{id:"constructors"},"Constructors"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},'class Cat {\n    String name;\n    Cat(this.name);\n}\nvoid main(){\n    Cat myCat = Cat("Kitty");\n    print(myCat.name); // Prints: Kitty\n}\n')),(0,a.kt)("h3",{id:"abstract-classes"},"Abstract Classes"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"// abstract class\u2014a class that can\u2019t be instantiated\n// This class is declared abstract and thus can't be instantiated.\nabstract class AbstractContainer {\n  // Define constructors, fields, methods...\n\n  void updateChildren(); // Abstract method.\n}\n")),(0,a.kt)("h3",{id:"getters-setters"},"Getters Setters"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"// provide read and write access to an object\u2019s properties\nclass Cat {\n    String name;\n\n    // getter\n    String get catName {\n        return name;\n    }\n\n    // setter\n    void set catName(String name){\n        this.name = name;\n    }\n}\n")))}u.isMDXComponent=!0}}]);