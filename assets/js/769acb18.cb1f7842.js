"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3904],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),g=r,m=u["".concat(i,".").concat(g)]||u[g]||d[g]||s;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=g;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<s;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},1848:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const s={},o="JavaScript",l={unversionedId:"javascript_snippets",id:"javascript_snippets",title:"JavaScript",description:"Hello World",source:"@site/docs/javascript_snippets.md",sourceDirName:".",slug:"/javascript_snippets",permalink:"/docs/javascript_snippets",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/javascript_snippets.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Java",permalink:"/docs/java_snippets"},next:{title:"Kotlin",permalink:"/docs/kotlin_snippets"}},i={},c=[{value:"Hello World",id:"hello-world",level:3},{value:"Variables",id:"variables",level:3},{value:"User Input via prompt",id:"user-input-via-prompt",level:3},{value:"if-else",id:"if-else",level:3},{value:"For loop",id:"for-loop",level:3},{value:"While loop",id:"while-loop",level:3},{value:"Arrays",id:"arrays",level:3},{value:"Array access",id:"array-access",level:3},{value:"Array iteration (forEach)",id:"array-iteration-foreach",level:3},{value:"Functions",id:"functions",level:3},{value:"Arrow functions",id:"arrow-functions",level:3},{value:"Object Literal",id:"object-literal",level:3},{value:"Object access",id:"object-access",level:3},{value:"Object methods",id:"object-methods",level:3},{value:"OBject destructuring",id:"object-destructuring",level:3},{value:"Classes and Constructors",id:"classes-and-constructors",level:3},{value:"Class methods",id:"class-methods",level:3},{value:"Inheritance",id:"inheritance",level:3},{value:"Template Literals",id:"template-literals",level:3},{value:"Math Operations",id:"math-operations",level:3},{value:"Random number generation",id:"random-number-generation",level:3},{value:"Date and Time (using Date object)",id:"date-and-time-using-date-object",level:3},{value:"toUpperCase",id:"touppercase",level:3},{value:"String Splitting",id:"string-splitting",level:3},{value:"String Joining",id:"string-joining",level:3},{value:"Working with Sets",id:"working-with-sets",level:3},{value:"Set operations (intersection)",id:"set-operations-intersection",level:3},{value:"Working with Maps",id:"working-with-maps",level:3},{value:"Map operations (getting values)",id:"map-operations-getting-values",level:3},{value:"Map iteration",id:"map-iteration",level:3},{value:"Promises (Async/Await)",id:"promises-asyncawait",level:3},{value:"Fetch API (GET request)",id:"fetch-api-get-request",level:3},{value:"Fetch API (POST request)",id:"fetch-api-post-request",level:3},{value:"Asynchronous Iteration (for...of with async/await)",id:"asynchronous-iteration-forof-with-asyncawait",level:3},{value:"Local storage (storing data)",id:"local-storage-storing-data",level:3},{value:"Local storage (Retrieving data)",id:"local-storage-retrieving-data",level:3},{value:"Event Listeners",id:"event-listeners",level:3},{value:"Debouncing an input field",id:"debouncing-an-input-field",level:3},{value:"Throttling an Event",id:"throttling-an-event",level:3},{value:"Creating a custom event and handling it",id:"creating-a-custom-event-and-handling-it",level:3},{value:"Using promises to fetch multiple resources",id:"using-promises-to-fetch-multiple-resources",level:3},{value:"Higher-Order Functions (map)",id:"higher-order-functions-map",level:3},{value:"Working with Callback Functions",id:"working-with-callback-functions",level:3},{value:"Using the reduce Function",id:"using-the-reduce-function",level:3},{value:"Closures and function factories",id:"closures-and-function-factories",level:3},{value:"Currying and partial application",id:"currying-and-partial-application",level:3},{value:"Working with async iterators (async generator)",id:"working-with-async-iterators-async-generator",level:3},{value:"Fetching data with Axios",id:"fetching-data-with-axios",level:3},{value:"Using localStorage with JSON data",id:"using-localstorage-with-json-data",level:3},{value:"Working with WebSockets (using WebSocket API)",id:"working-with-websockets-using-websocket-api",level:3},{value:"Using the localStorage API for Persistence",id:"using-the-localstorage-api-for-persistence",level:3},{value:"handling forms and forms submission",id:"handling-forms-and-forms-submission",level:3},{value:"Implementing simple javascript router",id:"implementing-simple-javascript-router",level:3},{value:"Using localstorage for User Preferences",id:"using-localstorage-for-user-preferences",level:3},{value:"Implementing a Simple Event Bus (Pub/Sub Pattern)",id:"implementing-a-simple-event-bus-pubsub-pattern",level:3},{value:"Working with web workers (dedicated worker)",id:"working-with-web-workers-dedicated-worker",level:3},{value:"Using the fetch API with Error Handling (async/await)",id:"using-the-fetch-api-with-error-handling-asyncawait",level:3},{value:"Functional Programming with map, filter, and reduce (ES6)",id:"functional-programming-with-map-filter-and-reduce-es6",level:3},{value:"Using the IntersectionObserver API for Lazy Loading Images",id:"using-the-intersectionobserver-api-for-lazy-loading-images",level:3},{value:"Implementing a Simple Drag-and-Drop Feature",id:"implementing-a-simple-drag-and-drop-feature",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"javascript"},"JavaScript"),(0,r.kt)("h3",{id:"hello-world"},"Hello World"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'console.log("Hello, World!");\n')),(0,r.kt)("h3",{id:"variables"},"Variables"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'let name = "John";\nconst age = 30;\n')),(0,r.kt)("h3",{id:"user-input-via-prompt"},"User Input via prompt"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'let user_input = prompt("Enter something: ");\n')),(0,r.kt)("h3",{id:"if-else"},"if-else"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'if (age >= 18) {\n  console.log("You are an adult.");\n} else {\n  console.log("You are a minor.");\n}\n')),(0,r.kt)("h3",{id:"for-loop"},"For loop"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"for (let i = 0; i < 5; i++) {\n  console.log(i);\n}\n")),(0,r.kt)("h3",{id:"while-loop"},"While loop"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"let count = 0;\nwhile (count < 5) {\n  console.log(count);\n  count++;\n}\n")),(0,r.kt)("h3",{id:"arrays"},"Arrays"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"let numbers = [1, 2, 3, 4, 5];\n")),(0,r.kt)("h3",{id:"array-access"},"Array access"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"let firstNumber = numbers[0];\n")),(0,r.kt)("h3",{id:"array-iteration-foreach"},"Array iteration (forEach)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"numbers.forEach((number) => {\n  console.log(number);\n});\n")),(0,r.kt)("h3",{id:"functions"},"Functions"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function greet(name) {\n  return `Hello, ${name}!`;\n}\n")),(0,r.kt)("h3",{id:"arrow-functions"},"Arrow functions"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const add = (a, b) => a + b;\n")),(0,r.kt)("h3",{id:"object-literal"},"Object Literal"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const person = {\n  name: "Alice",\n  age: 25,\n};\n')),(0,r.kt)("h3",{id:"object-access"},"Object access"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const name = person.name;\n")),(0,r.kt)("h3",{id:"object-methods"},"Object methods"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const greet = () => {\n  console.log(`Hello, my name is ${person.name}.`);\n};\n")),(0,r.kt)("h3",{id:"object-destructuring"},"OBject destructuring"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const { name, age } = person;\n")),(0,r.kt)("h3",{id:"classes-and-constructors"},"Classes and Constructors"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"class Person {\n  constructor(name, age) {\n    this.name = name;\n    this.age = age;\n  }\n}\n")),(0,r.kt)("h3",{id:"class-methods"},"Class methods"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"class Person {\n  greet() {\n    console.log(`Hello, my name is ${this.name}.`);\n  }\n}\n")),(0,r.kt)("h3",{id:"inheritance"},"Inheritance"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"class Student extends Person {\n  constructor(name, age, school) {\n    super(name, age);\n    this.school = school;\n  }\n}\n")),(0,r.kt)("h3",{id:"template-literals"},"Template Literals"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const message = `My name is ${name} and I am ${age} years old.`;\n")),(0,r.kt)("h3",{id:"math-operations"},"Math Operations"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const result = Math.abs(-5);\n")),(0,r.kt)("h3",{id:"random-number-generation"},"Random number generation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const randomNum = Math.floor(Math.random() * 100);\n")),(0,r.kt)("h3",{id:"date-and-time-using-date-object"},"Date and Time (using Date object)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const currentDate = new Date();\n")),(0,r.kt)("h3",{id:"touppercase"},"toUpperCase"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const text = "Hello, World!";\nconst upperText = text.toUpperCase();\n')),(0,r.kt)("h3",{id:"string-splitting"},"String Splitting"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const words = text.split(", ");\n')),(0,r.kt)("h3",{id:"string-joining"},"String Joining"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const joinedText = words.join(", ");\n')),(0,r.kt)("h3",{id:"working-with-sets"},"Working with Sets"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const mySet = new Set([1, 2, 3, 4, 5]);\n")),(0,r.kt)("h3",{id:"set-operations-intersection"},"Set operations (intersection)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const intersection = new Set([...mySet].filter((x) => otherSet.has(x)));\n")),(0,r.kt)("h3",{id:"working-with-maps"},"Working with Maps"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const myMap = new Map();\nmyMap.set("name", "Alice");\nmyMap.set("age", 25);\n')),(0,r.kt)("h3",{id:"map-operations-getting-values"},"Map operations (getting values)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const value = myMap.get("name");\n')),(0,r.kt)("h3",{id:"map-iteration"},"Map iteration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"for (const [key, value] of myMap) {\n  console.log(key, value);\n}\n")),(0,r.kt)("h3",{id:"promises-asyncawait"},"Promises (Async/Await)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"async function fetchData() {\n  try {\n    const response = await fetch(url);\n    const data = await response.json();\n    console.log(data);\n  } catch (error) {\n    console.error(error);\n  }\n}\n")),(0,r.kt)("h3",{id:"fetch-api-get-request"},"Fetch API (GET request)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"fetch(url)\n  .then((response) => response.json())\n  .then((data) => console.log(data))\n  .catch((error) => console.error(error));\n")),(0,r.kt)("h3",{id:"fetch-api-post-request"},"Fetch API (POST request)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'fetch(url, {\n  method: "POST",\n  body: JSON.stringify(data),\n  headers: {\n    "Content-Type": "application/json",\n  },\n})\n  .then((response) => response.json())\n  .then((data) => console.log(data))\n  .catch((error) => console.error(error));\n')),(0,r.kt)("h3",{id:"asynchronous-iteration-forof-with-asyncawait"},"Asynchronous Iteration (for...of with async/await)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const fetchData = async () => {\n  for (const item of items) {\n    const result = await processItem(item);\n    console.log(result);\n  }\n};\n")),(0,r.kt)("h3",{id:"local-storage-storing-data"},"Local storage (storing data)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'localStorage.setItem("key", "value");\n')),(0,r.kt)("h3",{id:"local-storage-retrieving-data"},"Local storage (Retrieving data)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const data = localStorage.getItem("key");\n')),(0,r.kt)("h3",{id:"event-listeners"},"Event Listeners"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'document.getElementById("myButton").addEventListener("click", () => {\n  console.log("Button clicked!");\n});\n')),(0,r.kt)("h3",{id:"debouncing-an-input-field"},"Debouncing an input field"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const debounce = (func, delay) => {\n  let timeout;\n  return (...args) => {\n    clearTimeout(timeout);\n    timeout = setTimeout(() => func(...args), delay);\n  };\n};\n")),(0,r.kt)("h3",{id:"throttling-an-event"},"Throttling an Event"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const throttle = (func, limit) => {\n  let inThrottle;\n  return (...args) => {\n    if (!inThrottle) {\n      func(...args);\n      inThrottle = true;\n      setTimeout(() => (inThrottle = false), limit);\n    }\n  };\n};\n")),(0,r.kt)("h3",{id:"creating-a-custom-event-and-handling-it"},"Creating a custom event and handling it"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const customEvent = new Event("myEvent");\nelement.addEventListener("myEvent", () => {\n  console.log("Custom event triggered");\n});\nelement.dispatchEvent(customEvent);\n')),(0,r.kt)("h3",{id:"using-promises-to-fetch-multiple-resources"},"Using promises to fetch multiple resources"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const fetchData = async () => {\n  const [data1, data2] = await Promise.all([fetch(url1), fetch(url2)]);\n  const result1 = await data1.json();\n  const result2 = await data2.json();\n  console.log(result1, result2);\n};\n")),(0,r.kt)("h3",{id:"higher-order-functions-map"},"Higher-Order Functions (map)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const numbers = [1, 2, 3, 4, 5];\nconst squaredNumbers = numbers.map((num) => num ** 2);\n")),(0,r.kt)("h3",{id:"working-with-callback-functions"},"Working with Callback Functions"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'function fetchData(callback) {\n  setTimeout(() => {\n    const data = "Some data";\n    callback(data);\n  }, 1000);\n}\n')),(0,r.kt)("h3",{id:"using-the-reduce-function"},"Using the reduce Function"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const numbers = [1, 2, 3, 4, 5];\nconst sum = numbers.reduce(\n  (accumulator, currentValue) => accumulator + currentValue,\n  0\n);\n")),(0,r.kt)("h3",{id:"closures-and-function-factories"},"Closures and function factories"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function createCounter() {\n  let count = 0;\n  return () => {\n    count++;\n    return count;\n  };\n}\nconst counter = createCounter();\n")),(0,r.kt)("h3",{id:"currying-and-partial-application"},"Currying and partial application"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const multiply = (a) => (b) => a * b;\nconst double = multiply(2);\nconst result = double(5);\n")),(0,r.kt)("h3",{id:"working-with-async-iterators-async-generator"},"Working with async iterators (async generator)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"async function* asyncGenerator() {\n  yield 1;\n  await new Promise((resolve) => setTimeout(resolve, 1000));\n  yield 2;\n}\n")),(0,r.kt)("h3",{id:"fetching-data-with-axios"},"Fetching data with Axios"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"axios\n  .get(url)\n  .then((response) => console.log(response.data))\n  .catch((error) => console.error(error));\n")),(0,r.kt)("h3",{id:"using-localstorage-with-json-data"},"Using localStorage with JSON data"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const data = { name: "Alice", age: 25 };\nlocalStorage.setItem("userData", JSON.stringify(data));\nconst retrievedData = JSON.parse(localStorage.getItem("userData"));\n')),(0,r.kt)("h3",{id:"working-with-websockets-using-websocket-api"},"Working with WebSockets (using WebSocket API)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const socket = new WebSocket("ws://example.com/socket");\nsocket.addEventListener("open", (event) => {\n  console.log("WebSocket connection opened.");\n});\n')),(0,r.kt)("h3",{id:"using-the-localstorage-api-for-persistence"},"Using the localStorage API for Persistence"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'localStorage.setItem("key", "value");\nconst storedValue = localStorage.getItem("key");\n')),(0,r.kt)("h3",{id:"handling-forms-and-forms-submission"},"handling forms and forms submission"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const form = document.getElementById("myForm");\nform.addEventListener("submit", (event) => {\n  event.preventDefault();\n  const formData = new FormData(form);\n  // Process form data or send it to the server.\n});\n')),(0,r.kt)("h3",{id:"implementing-simple-javascript-router"},"Implementing simple javascript router"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const routes = {\n  "/": () => console.log("Home Page"),\n  "/about": () => console.log("About Page"),\n  "/contact": () => console.log("Contact Page"),\n};\nconst navigateTo = (path) => {\n  history.pushState({}, "", path);\n  routes[path]();\n};\n')),(0,r.kt)("h3",{id:"using-localstorage-for-user-preferences"},"Using localstorage for User Preferences"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const darkModeEnabled = localStorage.getItem("darkMode") === "true";\nif (darkModeEnabled) {\n  // Enable dark mode.\n}\n')),(0,r.kt)("h3",{id:"implementing-a-simple-event-bus-pubsub-pattern"},"Implementing a Simple Event Bus (Pub/Sub Pattern)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'class EventBus {\n  constructor() {\n    this.events = {};\n  }\n  subscribe(eventName, callback) {\n    if (!this.events[eventName]) {\n      this.events[eventName] = [];\n    }\n    this.events[eventName].push(callback);\n  }\n  publish(eventName, data) {\n    if (this.events[eventName]) {\n      this.events[eventName].forEach((callback) => callback(data));\n    }\n  }\n}\nconst eventBus = new EventBus();\neventBus.subscribe("userLoggedIn", (userData) => {\n  console.log(`User ${userData.username} logged in.`);\n});\neventBus.publish("userLoggedIn", { username: "Alice" });\n')),(0,r.kt)("h3",{id:"working-with-web-workers-dedicated-worker"},"Working with web workers (dedicated worker)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const worker = new Worker("worker.js");\nworker.postMessage({ task: "doWork" });\nworker.onmessage = (event) => {\n  console.log(event.data);\n};\n')),(0,r.kt)("h3",{id:"using-the-fetch-api-with-error-handling-asyncawait"},"Using the fetch API with Error Handling (async/await)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'try {\n  const response = await fetch(url);\n  if (!response.ok) {\n    throw new Error("HTTP error! Status: " + response.status);\n  }\n  const data = await response.json();\n  console.log(data);\n} catch (error) {\n  console.error("Fetch error:", error);\n}\n')),(0,r.kt)("h3",{id:"functional-programming-with-map-filter-and-reduce-es6"},"Functional Programming with map, filter, and reduce (ES6)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const numbers = [1, 2, 3, 4, 5];\nconst squaredEvenNumbers = numbers\n  .filter((num) => num % 2 === 0)\n  .map((num) => num ** 2)\n  .reduce((acc, val) => acc + val, 0);\n")),(0,r.kt)("h3",{id:"using-the-intersectionobserver-api-for-lazy-loading-images"},"Using the IntersectionObserver API for Lazy Loading Images"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const observer = new IntersectionObserver((entries) => {\n  entries.forEach((entry) => {\n    if (entry.isIntersecting) {\n      const lazyImage = entry.target;\n      lazyImage.src = lazyImage.dataset.src;\n      observer.unobserve(lazyImage);\n    }\n  });\n});\ndocument\n  .querySelectorAll(".lazy-image")\n  .forEach((img) => observer.observe(img));\n')),(0,r.kt)("h3",{id:"implementing-a-simple-drag-and-drop-feature"},"Implementing a Simple Drag-and-Drop Feature"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const draggableElement = document.getElementById("draggable");\ndraggableElement.addEventListener("dragstart", (event) => {\n  event.dataTransfer.setData("text/plain", event.target.id);\n});\nconst dropZone = document.getElementById("drop-zone");\ndropZone.addEventListener("dragover", (event) => {\n  event.preventDefault();\n});\ndropZone.addEventListener("drop", (event) => {\n  event.preventDefault();\n  const data = event.dataTransfer.getData("text/plain");\n  const draggedElement = document.getElementById(data);\n  dropZone.appendChild(draggedElement);\n});\n')))}d.isMDXComponent=!0}}]);