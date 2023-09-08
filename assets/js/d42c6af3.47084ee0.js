"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4258],{3905:(e,a,n)=>{n.d(a,{Zo:()=>u,kt:()=>g});var t=n(7294);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,i=function(e,a){if(null==e)return{};var n,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=t.createContext({}),c=function(e){var a=t.useContext(o),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},u=function(e){var a=c(e.components);return t.createElement(o.Provider,{value:a},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,g=p["".concat(o,".").concat(m)]||p[m]||d[m]||r;return n?t.createElement(g,l(l({ref:a},u),{},{components:n})):t.createElement(g,l({ref:a},u))}));function g(e,a){var n=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=e,s[p]="string"==typeof e?e:i,l[1]=s;for(var c=2;c<r;c++)l[c]=n[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8744:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var t=n(7462),i=(n(7294),n(3905));const r={},l="Java",s={unversionedId:"java_snippets",id:"java_snippets",title:"Java",description:"Hello World",source:"@site/docs/java_snippets.md",sourceDirName:".",slug:"/java_snippets",permalink:"/SnippetsVault/docs/java_snippets",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/java_snippets.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Haskell",permalink:"/SnippetsVault/docs/haskell_snippets"},next:{title:"JavaScript",permalink:"/SnippetsVault/docs/javascript_snippets"}},o={},c=[{value:"Hello World",id:"hello-world",level:3},{value:"Variables",id:"variables",level:3},{value:"Conditional Statements",id:"conditional-statements",level:3},{value:"For loop",id:"for-loop",level:3},{value:"While loop",id:"while-loop",level:3},{value:"Arrays",id:"arrays",level:3},{value:"Array access",id:"array-access",level:3},{value:"List (ArrayList)",id:"list-arraylist",level:3},{value:"List (ArrayList) Operations",id:"list-arraylist-operations",level:3},{value:"Functions (Methods)",id:"functions-methods",level:3},{value:"File reading(Java 7+)",id:"file-readingjava-7",level:3},{value:"File writing(Java 7+)",id:"file-writingjava-7",level:3},{value:"Exeption Handling",id:"exeption-handling",level:3},{value:"Classes and Objects",id:"classes-and-objects",level:3},{value:"Object creation",id:"object-creation",level:3},{value:"Object methods",id:"object-methods",level:3},{value:"Inheritance",id:"inheritance",level:3},{value:"Interfaces",id:"interfaces",level:3},{value:"Lambda Expressions (Java 8+)",id:"lambda-expressions-java-8",level:3},{value:"Sorting arrays",id:"sorting-arrays",level:3},{value:"String Manipulation",id:"string-manipulation",level:3},{value:"List reversal",id:"list-reversal",level:3},{value:"Finding Maximum",id:"finding-maximum",level:3},{value:"Finding Minimum",id:"finding-minimum",level:3},{value:"List Length",id:"list-length",level:3},{value:"List removal",id:"list-removal",level:3},{value:"List Appending",id:"list-appending",level:3},{value:"List copying",id:"list-copying",level:3},{value:"List clearing",id:"list-clearing",level:3},{value:"String Splitting",id:"string-splitting",level:3},{value:"String Joining",id:"string-joining",level:3},{value:"String Formatting",id:"string-formatting",level:3},{value:"Math Operations",id:"math-operations",level:3},{value:"Random number generation",id:"random-number-generation",level:3},{value:"Date and Time (Java 8+)",id:"date-and-time-java-8",level:3},{value:"Set (HashSet)",id:"set-hashset",level:3},{value:"Set operations",id:"set-operations",level:3},{value:"Map (HashMap)",id:"map-hashmap",level:3},{value:"Map operations",id:"map-operations",level:3},{value:"List Comprehension with Streams (Java 8+)",id:"list-comprehension-with-streams-java-8",level:3},{value:"Multithreading with Thread class",id:"multithreading-with-thread-class",level:3},{value:"Multithreading with ExecutorService",id:"multithreading-with-executorservice",level:3},{value:"Exception Handling with Custom Exceptions:",id:"exception-handling-with-custom-exceptions",level:3},{value:"Working with Date and Time using the java.time package:",id:"working-with-date-and-time-using-the-javatime-package",level:3},{value:"File reading with buffered reader",id:"file-reading-with-buffered-reader",level:3},{value:"File writing with buffered writer",id:"file-writing-with-buffered-writer",level:3},{value:"Serializing and Deserializing Objects",id:"serializing-and-deserializing-objects",level:3},{value:"Database connection with JDBC",id:"database-connection-with-jdbc",level:3},{value:"Working with regular expressions",id:"working-with-regular-expressions",level:3},{value:"Sending email with JavaMail API",id:"sending-email-with-javamail-api",level:3},{value:"Working with JSON using Gson (Google JSON library)",id:"working-with-json-using-gson-google-json-library",level:3},{value:"Creating and using Enums:",id:"creating-and-using-enums",level:3},{value:"Working with Collections (Java Collections Framework)",id:"working-with-collections-java-collections-framework",level:3},{value:"Using try-with-resources for Auto-Closable Resources",id:"using-try-with-resources-for-auto-closable-resources",level:3},{value:"Sorting Collections (e.g.,&#39;Collections.sort()&#39;)",id:"sorting-collections-egcollectionssort",level:3},{value:"Using Java Streams and Collectors (Java 8+)",id:"using-java-streams-and-collectors-java-8",level:3},{value:"Functional interfaces and Lambdas (Java8+)",id:"functional-interfaces-and-lambdas-java8",level:3},{value:"Working with threads and synchronization",id:"working-with-threads-and-synchronization",level:3},{value:"Handling Date and Time Zones (Java 8+)",id:"handling-date-and-time-zones-java-8",level:3}],u={toc:c},p="wrapper";function d(e){let{components:a,...n}=e;return(0,i.kt)(p,(0,t.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"java"},"Java"),(0,i.kt)("h3",{id:"hello-world"},"Hello World"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}\n')),(0,i.kt)("h3",{id:"variables"},"Variables"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'String name = "John";\nint age = 30;\n')),(0,i.kt)("h3",{id:"conditional-statements"},"Conditional Statements"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'if (age >= 18) {\n    System.out.println("You are an adult.");\n} else {\n    System.out.println("You are a minor.");\n}\n')),(0,i.kt)("h3",{id:"for-loop"},"For loop"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"for (int i = 0; i < 10; i++) {\n    System.out.println(i);\n}\n")),(0,i.kt)("h3",{id:"while-loop"},"While loop"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"int count = 0;\nwhile (count < 10) {\n    System.out.println(count);\n    count++;\n}\n")),(0,i.kt)("h3",{id:"arrays"},"Arrays"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"int[] myArray = {1, 2, 3, 4, 5};\n")),(0,i.kt)("h3",{id:"array-access"},"Array access"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"int firstElement = myArray[0];\n")),(0,i.kt)("h3",{id:"list-arraylist"},"List (ArrayList)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"import java.util.ArrayList;\nArrayList<String> names = new ArrayList<>();\n")),(0,i.kt)("h3",{id:"list-arraylist-operations"},"List (ArrayList) Operations"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'names.add("Alice");\nnames.remove("Bob");\n')),(0,i.kt)("h3",{id:"functions-methods"},"Functions (Methods)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public static int add(int a, int b) {\n    return a + b;\n}\n")),(0,i.kt)("h3",{id:"file-readingjava-7"},"File reading(Java 7+)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import java.nio.file.*;\nString content = Files.readString(Paths.get("file.txt"));\n')),(0,i.kt)("h3",{id:"file-writingjava-7"},"File writing(Java 7+)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import java.nio.file.*;\nFiles.write(Paths.get("output.txt"), "Hello, World!".getBytes());\n')),(0,i.kt)("h3",{id:"exeption-handling"},"Exeption Handling"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'try {\n    int result = 10 / 0;\n} catch (ArithmeticException e) {\n    System.out.println("Error: Division by zero");\n}\n')),(0,i.kt)("h3",{id:"classes-and-objects"},"Classes and Objects"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class Person {\n    String name;\n    int age;\n}\n")),(0,i.kt)("h3",{id:"object-creation"},"Object creation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'Person person = new Person();\nperson.name = "Alice";\nperson.age = 25;\n')),(0,i.kt)("h3",{id:"object-methods"},"Object methods"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public void greet() {\n    System.out.println("Hello, my name is " + name);\n}\n')),(0,i.kt)("h3",{id:"inheritance"},"Inheritance"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class Student extends Person {\n    String school;\n}\n")),(0,i.kt)("h3",{id:"interfaces"},"Interfaces"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public interface Drawable {\n    void draw();\n}\n")),(0,i.kt)("h3",{id:"lambda-expressions-java-8"},"Lambda Expressions (Java 8+)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'Runnable runnable = () -> {\n    System.out.println("Running a task");\n};\n')),(0,i.kt)("h3",{id:"sorting-arrays"},"Sorting arrays"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"import java.util.Arrays;\nint[] sortedNumbers = Arrays.copyOf(numbers, numbers.length);\nArrays.sort(sortedNumbers);\n")),(0,i.kt)("h3",{id:"string-manipulation"},"String Manipulation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'String text = "Hello, World!";\nString upperText = text.toUpperCase();\n')),(0,i.kt)("h3",{id:"list-reversal"},"List reversal"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Collections.reverse(numbersList);\n")),(0,i.kt)("h3",{id:"finding-maximum"},"Finding Maximum"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"int max = Collections.max(numbersList);\n")),(0,i.kt)("h3",{id:"finding-minimum"},"Finding Minimum"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"int min = Collections.min(numbersList);\n")),(0,i.kt)("h3",{id:"list-length"},"List Length"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"int listSize = numbersList.size();\n")),(0,i.kt)("h3",{id:"list-removal"},"List removal"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"numbersList.remove(3);\n")),(0,i.kt)("h3",{id:"list-appending"},"List Appending"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"numbersList.add(6);\n")),(0,i.kt)("h3",{id:"list-copying"},"List copying"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"ArrayList<Integer> copiedList = new ArrayList<>(numbersList);\n")),(0,i.kt)("h3",{id:"list-clearing"},"List clearing"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"numbersList.clear();\n")),(0,i.kt)("h3",{id:"string-splitting"},"String Splitting"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'String[] words = text.split(", ");\n')),(0,i.kt)("h3",{id:"string-joining"},"String Joining"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'String joinedText = String.join(", ", words);\n')),(0,i.kt)("h3",{id:"string-formatting"},"String Formatting"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'String formattedText = String.format("My name is %s and I am %d years old.", name, age);\n')),(0,i.kt)("h3",{id:"math-operations"},"Math Operations"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"int absoluteValue = Math.abs(-5);\n")),(0,i.kt)("h3",{id:"random-number-generation"},"Random number generation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"import java.util.Random;\nRandom random = new Random();\nint randomNumber = random.nextInt(100);\n")),(0,i.kt)("h3",{id:"date-and-time-java-8"},"Date and Time (Java 8+)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"import java.time.LocalDateTime;\nLocalDateTime currentTime = LocalDateTime.now();\n")),(0,i.kt)("h3",{id:"set-hashset"},"Set (HashSet)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"import java.util.HashSet;\nHashSet<String> uniqueNames = new HashSet<>();\n")),(0,i.kt)("h3",{id:"set-operations"},"Set operations"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'uniqueNames.add("Alice");\nuniqueNames.remove("Bob");\n')),(0,i.kt)("h3",{id:"map-hashmap"},"Map (HashMap)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"import java.util.HashMap;\nHashMap<String, Integer> scoreMap = new HashMap<>();\n")),(0,i.kt)("h3",{id:"map-operations"},"Map operations"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'scoreMap.put("Alice", 95);\nint aliceScore = scoreMap.get("Alice");\n')),(0,i.kt)("h3",{id:"list-comprehension-with-streams-java-8"},"List Comprehension with Streams (Java 8+)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"List<Integer> evenNumbers = numbersList.stream()\n    .filter(n -> n % 2 == 0)\n    .collect(Collectors.toList());\n")),(0,i.kt)("h3",{id:"multithreading-with-thread-class"},"Multithreading with Thread class"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'Thread thread1 = new Thread(() -> {\n    for (int i = 0; i < 5; i++) {\n        System.out.println("Thread 1: " + i);\n    }\n});\nthread1.start();\n')),(0,i.kt)("h3",{id:"multithreading-with-executorservice"},"Multithreading with ExecutorService"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'ExecutorService executorService = Executors.newFixedThreadPool(2);\nexecutorService.submit(() -> System.out.println("Task 1"));\nexecutorService.submit(() -> System.out.println("Task 2"));\nexecutorService.shutdown();\n')),(0,i.kt)("h3",{id:"exception-handling-with-custom-exceptions"},"Exception Handling with Custom Exceptions:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'class CustomException extends Exception {\n    public CustomException(String message) {\n        super(message);\n    }\n}\n\ntry {\n    throw new CustomException("This is a custom exception.");\n} catch (CustomException e) {\n    System.out.println(e.getMessage());\n}\n')),(0,i.kt)("h3",{id:"working-with-date-and-time-using-the-javatime-package"},"Working with Date and Time using the java.time package:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"import java.time.LocalDate;\nLocalDate today = LocalDate.now();\n")),(0,i.kt)("h3",{id:"file-reading-with-buffered-reader"},"File reading with buffered reader"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import java.io.BufferedReader;\nimport java.io.FileReader;\ntry (BufferedReader br = new BufferedReader(new FileReader("file.txt"))) {\n    String line;\n    while ((line = br.readLine()) != null) {\n        System.out.println(line);\n    }\n}\n')),(0,i.kt)("h3",{id:"file-writing-with-buffered-writer"},"File writing with buffered writer"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import java.io.BufferedWriter;\nimport java.io.FileWriter;\ntry (BufferedWriter bw = new BufferedWriter(new FileWriter("output.txt"))) {\n    bw.write("This is some text.");\n}\n')),(0,i.kt)("h3",{id:"serializing-and-deserializing-objects"},"Serializing and Deserializing Objects"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import java.io.*;\nclass Person implements Serializable {\n    String name;\n    int age;\n}\n// Serialization\nPerson person = new Person();\ntry (ObjectOutputStream out = new ObjectOutputStream(new FileOutputStream("person.ser"))) {\n    out.writeObject(person);\n}\n// Deserialization\ntry (ObjectInputStream in = new ObjectInputStream(new FileInputStream("person.ser"))) {\n    Person deserializedPerson = (Person) in.readObject();\n}\n')),(0,i.kt)("h3",{id:"database-connection-with-jdbc"},"Database connection with JDBC"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import java.sql.*;\nString url = "jdbc:mysql://localhost:3306/mydb";\nString user = "username";\nString password = "password";\ntry (Connection connection = DriverManager.getConnection(url, user, password);\n     Statement statement = connection.createStatement()) {\n    ResultSet resultSet = statement.executeQuery("SELECT * FROM users");\n    while (resultSet.next()) {\n        String name = resultSet.getString("name");\n        int age = resultSet.getInt("age");\n    }\n}\n')),(0,i.kt)("h3",{id:"working-with-regular-expressions"},"Working with regular expressions"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import java.util.regex.*;\nPattern pattern = Pattern.compile("\\\\b\\\\d{3}-\\\\d{2}-\\\\d{4}\\\\b");\nMatcher matcher = pattern.matcher("My SSN is 123-45-6789.");\nboolean found = matcher.find();\n')),(0,i.kt)("h3",{id:"sending-email-with-javamail-api"},"Sending email with JavaMail API"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import javax.mail.*;\nimport javax.mail.internet.*;\nProperties properties = new Properties();\nproperties.put("mail.smtp.host", "smtp.example.com");\nSession session = Session.getInstance(properties);\nMimeMessage message = new MimeMessage(session);\nmessage.setFrom(new InternetAddress("sender@example.com"));\nmessage.addRecipient(Message.RecipientType.TO, new InternetAddress("recipient@example.com"));\nmessage.setSubject("Test Email");\nmessage.setText("This is a test email.");\nTransport.send(message);\n')),(0,i.kt)("h3",{id:"working-with-json-using-gson-google-json-library"},"Working with JSON using Gson (Google JSON library)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import com.google.gson.*;\nJsonObject jsonObject = new JsonObject();\njsonObject.addProperty("name", "Alice");\njsonObject.addProperty("age", 25);\nString jsonString = jsonObject.toString();\n')),(0,i.kt)("h3",{id:"creating-and-using-enums"},"Creating and using Enums:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"enum DaysOfWeek {\n    MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY\n}\n")),(0,i.kt)("h3",{id:"working-with-collections-java-collections-framework"},"Working with Collections (Java Collections Framework)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"List<String> names = new ArrayList<>();\nMap<String, Integer> scores = new HashMap<>();\nSet<String> uniqueNames = new HashSet<>();\n")),(0,i.kt)("h3",{id:"using-try-with-resources-for-auto-closable-resources"},"Using try-with-resources for Auto-Closable Resources"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'try (BufferedReader br = new BufferedReader(new FileReader("file.txt"));\n     BufferedWriter bw = new BufferedWriter(new FileWriter("output.txt"))) {\n    String line;\n    while ((line = br.readLine()) != null) {\n        bw.write(line);\n    }\n}\n')),(0,i.kt)("h3",{id:"sorting-collections-egcollectionssort"},"Sorting Collections (e.g.,'Collections.sort()')"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"List<Integer> numbers = new ArrayList<>();\nCollections.sort(numbers);\n")),(0,i.kt)("h3",{id:"using-java-streams-and-collectors-java-8"},"Using Java Streams and Collectors (Java 8+)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'List<String> fruits = Arrays.asList("apple", "banana", "cherry");\nList<String> filteredFruits = fruits.stream()\n    .filter(fruit -> !fruit.equals("banana"))\n    .collect(Collectors.toList());\n')),(0,i.kt)("h3",{id:"functional-interfaces-and-lambdas-java8"},"Functional interfaces and Lambdas (Java8+)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@FunctionalInterface\ninterface MathOperation {\n    int operate(int a, int b);\n}\nMathOperation addition = (a, b) -> a + b;\n")),(0,i.kt)("h3",{id:"working-with-threads-and-synchronization"},"Working with threads and synchronization"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"class Counter {\n    private int count = 0;\n    public synchronized void increment() {\n        count++;\n    }\n}\n")),(0,i.kt)("h3",{id:"handling-date-and-time-zones-java-8"},"Handling Date and Time Zones (Java 8+)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import java.time.ZoneId;\nZoneId zoneId = ZoneId.of("America/New_York");\n')))}d.isMDXComponent=!0}}]);