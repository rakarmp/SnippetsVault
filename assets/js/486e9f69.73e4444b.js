"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8533],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(g,l(l({ref:t},p),{},{components:a})):n.createElement(g,l({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2213:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:1},l="R",o={unversionedId:"R/r_snippets",id:"R/r_snippets",title:"R",description:"Variable assignement and data types",source:"@site/docs/R/r_snippets.md",sourceDirName:"R",slug:"/R/r_snippets",permalink:"/docs/R/r_snippets",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/R/r_snippets.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Text and headings",permalink:"/docs/HTML/html_textandheadings_snippets"},next:{title:"Data cleaning",permalink:"/docs/R/r_datacleaning_snippets"}},s={},c=[{value:"Variable assignement and data types",id:"variable-assignement-and-data-types",level:3},{value:"Vectors",id:"vectors",level:3},{value:"Data Frames",id:"data-frames",level:3},{value:"Basic operations",id:"basic-operations",level:3},{value:"Conditional statements",id:"conditional-statements",level:3},{value:"Loops",id:"loops",level:3},{value:"Functions",id:"functions",level:3},{value:"Data import/export",id:"data-importexport",level:3},{value:"Plotting",id:"plotting",level:3},{value:"Packages (installing and loading)",id:"packages-installing-and-loading",level:3},{value:"Date and time",id:"date-and-time",level:3},{value:"String concatenation",id:"string-concatenation",level:3},{value:"Substring",id:"substring",level:3},{value:"File operations",id:"file-operations",level:3},{value:"Read text file",id:"read-text-file",level:3},{value:"Error handling",id:"error-handling",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"r"},"R"),(0,r.kt)("h3",{id:"variable-assignement-and-data-types"},"Variable assignement and data types"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},'# Assign a value to a variable\nx <- 5\n\n# Numeric variable\ny <- 3.14\n\n# Character variable\nname <- "John"\n\n# Logical (boolean) variable\nis_true <- TRUE\n')),(0,r.kt)("h3",{id:"vectors"},"Vectors"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},'# Create a numeric vector\nnumbers <- c(1, 2, 3, 4, 5)\n\n# Create a character vector\nfruits <- c("apple", "banana", "cherry")\n')),(0,r.kt)("h3",{id:"data-frames"},"Data Frames"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},'# Create a data frame\ndata <- data.frame(\n  Name = c("Alice", "Bob", "Charlie"),\n  Age = c(25, 30, 22)\n)\n')),(0,r.kt)("h3",{id:"basic-operations"},"Basic operations"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},"# Addition\nresult <- 2 + 3\n\n# Subtraction\nresult <- 5 - 2\n\n# Multiplication\nresult <- 4 * 6\n\n# Division\nresult <- 10 / 2\n")),(0,r.kt)("h3",{id:"conditional-statements"},"Conditional statements"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},'# If statement\nif (x > 0) {\n  print("x is positive")\n} else {\n  print("x is non-positive")\n}\n')),(0,r.kt)("h3",{id:"loops"},"Loops"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},"# For loop\nfor (i in 1:5) {\n  print(i)\n}\n\n# While loop\ncount <- 1\nwhile (count <= 5) {\n  print(count)\n  count <- count + 1\n}\n")),(0,r.kt)("h3",{id:"functions"},"Functions"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},"# Define a function\nsquare <- function(x) {\n  return(x^2)\n}\n\n# Call a function\nresult <- square(4)\n")),(0,r.kt)("h3",{id:"data-importexport"},"Data import/export"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},'# Read data from a CSV file\ndata <- read.csv("data.csv")\n\n# Write data to a CSV file\nwrite.csv(data, "output.csv")\n')),(0,r.kt)("h3",{id:"plotting"},"Plotting"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},'# Create a scatter plot\nx <- c(1, 2, 3, 4, 5)\ny <- c(2, 4, 1, 3, 5)\nplot(x, y, type = "p", main = "Scatter Plot", xlab = "X-axis", ylab = "Y-axis")\n')),(0,r.kt)("h3",{id:"packages-installing-and-loading"},"Packages (installing and loading)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},'# Install a package from CRAN\ninstall.packages("package_name")\n\n# Load a package\nlibrary(package_name)\n')),(0,r.kt)("h3",{id:"date-and-time"},"Date and time"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},'current_datetime <- Sys.time()\n\nformatted_date <- format(Sys.Date(), format = "%Y-%m-%d")\n')),(0,r.kt)("h3",{id:"string-concatenation"},"String concatenation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},'concatenated_str <- paste("Hello", "World", sep = " ")\n')),(0,r.kt)("h3",{id:"substring"},"Substring"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},'sub_str <- substr("Hello World", start = 1, stop = 5)\n')),(0,r.kt)("h3",{id:"file-operations"},"File operations"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},'file_list <- list.files(path = "/path/to/directory")\n')),(0,r.kt)("h3",{id:"read-text-file"},"Read text file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},'text <- readLines("file.txt")\n')),(0,r.kt)("h3",{id:"error-handling"},"Error handling"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},"tryCatch(expr, error = function(e) {\n  # Code to handle the error\n})\n")),(0,r.kt)("h3",{id:""}))}u.isMDXComponent=!0}}]);