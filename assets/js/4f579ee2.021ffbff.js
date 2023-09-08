"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7848],{3905:(e,n,a)=>{a.d(n,{Zo:()=>p,kt:()=>g});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),d=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},p=function(e){var n=d(e.components);return t.createElement(s.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(a),m=r,g=c["".concat(s,".").concat(m)]||c[m]||u[m]||l;return a?t.createElement(g,i(i({ref:n},p),{},{components:a})):t.createElement(g,i({ref:n},p))}));function g(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4610:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var t=a(7462),r=(a(7294),a(3905));const l={},i="Haskell",o={unversionedId:"haskell_snippets",id:"haskell_snippets",title:"Haskell",description:"Hello World",source:"@site/docs/haskell_snippets.md",sourceDirName:".",slug:"/haskell_snippets",permalink:"/SnippetsVault/docs/haskell_snippets",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/haskell_snippets.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Go (Golang)",permalink:"/SnippetsVault/docs/golang_snippets"},next:{title:"Java",permalink:"/SnippetsVault/docs/java_snippets"}},s={},d=[{value:"Hello World",id:"hello-world",level:3},{value:"Variables",id:"variables",level:3},{value:"Function definition",id:"function-definition",level:3},{value:"Function application",id:"function-application",level:3},{value:"Lists",id:"lists",level:3},{value:"Tuples",id:"tuples",level:3},{value:"Patter Matching",id:"patter-matching",level:3},{value:"Guards",id:"guards",level:3},{value:"Higher Order Functions",id:"higher-order-functions",level:3},{value:"Lambda Functions",id:"lambda-functions",level:3},{value:"List comprehension",id:"list-comprehension",level:3},{value:"Type aliases",id:"type-aliases",level:3},{value:"Algebraic data types",id:"algebraic-data-types",level:3},{value:"Record syntax",id:"record-syntax",level:3},{value:"Recursive functions",id:"recursive-functions",level:3},{value:"Monads and IO",id:"monads-and-io",level:3},{value:"Fmap (Functor)",id:"fmap-functor",level:3},{value:"Applicative style",id:"applicative-style",level:3},{value:"Monads (maybe)",id:"monads-maybe",level:3},{value:"Monads (either)",id:"monads-either",level:3},{value:"Monads (state)",id:"monads-state",level:3},{value:"Error handling with maybe",id:"error-handling-with-maybe",level:3},{value:"Error handling with either",id:"error-handling-with-either",level:3},{value:"Monadic error handling",id:"monadic-error-handling",level:3},{value:"Monadic error handling with maybe",id:"monadic-error-handling-with-maybe",level:3},{value:"Monadic error handling with Either",id:"monadic-error-handling-with-either",level:3},{value:"Custom Monadic error handling",id:"custom-monadic-error-handling",level:3},{value:"Monadic Input/Output (with text.IO)",id:"monadic-inputoutput-with-textio",level:3},{value:"Lazy evaluation",id:"lazy-evaluation",level:3},{value:"Memoization",id:"memoization",level:3},{value:"Monadic parsing with Parsec",id:"monadic-parsing-with-parsec",level:3},{value:"Reading and writing files",id:"reading-and-writing-files",level:3},{value:"Working with Monads",id:"working-with-monads",level:3},{value:"Using Data.Map for key-value pairs",id:"using-datamap-for-key-value-pairs",level:3},{value:"Using data.set for sets",id:"using-dataset-for-sets",level:3},{value:"Sorting lists",id:"sorting-lists",level:3},{value:"Zipping Lists",id:"zipping-lists",level:3},{value:"Using data.text for text processing",id:"using-datatext-for-text-processing",level:3},{value:"Working with data.byteString for binary data",id:"working-with-databytestring-for-binary-data",level:3},{value:"Concurrent programming (Control.Concurrent)",id:"concurrent-programming-controlconcurrent",level:3},{value:"Working with JSON (aeson library)",id:"working-with-json-aeson-library",level:3},{value:"Parsing XML (xml-conduit library)",id:"parsing-xml-xml-conduit-library",level:3},{value:"Using ST monads for mutable data",id:"using-st-monads-for-mutable-data",level:3},{value:"Using Data.Vetor for efficient sequences",id:"using-datavetor-for-efficient-sequences",level:3},{value:"Using STM for concurrent programmnig",id:"using-stm-for-concurrent-programmnig",level:3},{value:"Custom monads with mtl library",id:"custom-monads-with-mtl-library",level:3},{value:"Creating a RESTful API server (with Servant library)",id:"creating-a-restful-api-server-with-servant-library",level:3},{value:"Using template haskell with TH library",id:"using-template-haskell-with-th-library",level:3},{value:"Using Data.ByteString.Lazy for efficient binary data",id:"using-databytestringlazy-for-efficient-binary-data",level:3},{value:"Parsing CSV with cassava library",id:"parsing-csv-with-cassava-library",level:3},{value:"Working with type classes with typeclassopedia",id:"working-with-type-classes-with-typeclassopedia",level:3},{value:"Using data.text.lazy for text processing",id:"using-datatextlazy-for-text-processing",level:3},{value:"Building a RESTful API client with http-client library",id:"building-a-restful-api-client-with-http-client-library",level:3},{value:"Using data.text.encoding for text encoding/decoding",id:"using-datatextencoding-for-text-encodingdecoding",level:3},{value:"Concurrency with softwaare transactional memory (STM)",id:"concurrency-with-softwaare-transactional-memory-stm",level:3},{value:"Concurrency with parallelism",id:"concurrency-with-parallelism",level:3},{value:"Building a GraphQL API server with graphql-api library",id:"building-a-graphql-api-server-with-graphql-api-library",level:3},{value:"Using mtl for monad transformers",id:"using-mtl-for-monad-transformers",level:3}],p={toc:d},c="wrapper";function u(e){let{components:n,...a}=e;return(0,r.kt)(c,(0,t.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"haskell"},"Haskell"),(0,r.kt)("h3",{id:"hello-world"},"Hello World"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'main :: IO ()\nmain = putStrLn "Hello, World!"\n')),(0,r.kt)("h3",{id:"variables"},"Variables"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'let variable = "Value"\n')),(0,r.kt)("h3",{id:"function-definition"},"Function definition"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"add :: Int -> Int -> Int\nadd x y = x + y\n")),(0,r.kt)("h3",{id:"function-application"},"Function application"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"result = add 3 5\n")),(0,r.kt)("h3",{id:"lists"},"Lists"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"let myList = [1, 2, 3]\n")),(0,r.kt)("h3",{id:"tuples"},"Tuples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'let myTuple = (1, "Hello")\n')),(0,r.kt)("h3",{id:"patter-matching"},"Patter Matching"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'myFunction :: Int -> String\nmyFunction 0 = "Zero"\nmyFunction _ = "Non-zero"\n')),(0,r.kt)("h3",{id:"guards"},"Guards"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"isEven :: Int -> Bool\nisEven x\n    | x `mod` 2 == 0 = True\n    | otherwise      = False\n")),(0,r.kt)("h3",{id:"higher-order-functions"},"Higher Order Functions"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"applyTwice :: (a -> a) -> a -> a\napplyTwice f x = f (f x)\n")),(0,r.kt)("h3",{id:"lambda-functions"},"Lambda Functions"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"addOne = \\x -> x + 1\n")),(0,r.kt)("h3",{id:"list-comprehension"},"List comprehension"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"evenNumbers = [x | x <- [1..10], x `mod` 2 == 0]\n")),(0,r.kt)("h3",{id:"type-aliases"},"Type aliases"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"type Name = String\n")),(0,r.kt)("h3",{id:"algebraic-data-types"},"Algebraic data types"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"data Shape = Circle Float | Rectangle Float Float\n")),(0,r.kt)("h3",{id:"record-syntax"},"Record syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"data Person = Person { name :: String, age :: Int }\n")),(0,r.kt)("h3",{id:"recursive-functions"},"Recursive functions"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"factorial :: Integer -> Integer\nfactorial 0 = 1\nfactorial n = n * factorial (n - 1)\n")),(0,r.kt)("h3",{id:"monads-and-io"},"Monads and IO"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'main :: IO ()\nmain = do\n    putStrLn "Enter your name: "\n    name <- getLine\n    putStrLn $ "Hello, " ++ name ++ "!"\n')),(0,r.kt)("h3",{id:"fmap-functor"},"Fmap (Functor)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"fmap (+ 1) [1, 2, 3] -- Applies the function to each element\n")),(0,r.kt)("h3",{id:"applicative-style"},"Applicative style"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"(+) <$> [1, 2] <*> [3, 4] -- Applies functions to all combinations\n")),(0,r.kt)("h3",{id:"monads-maybe"},"Monads (maybe)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"safeDivide :: Double -> Double -> Maybe Double\nsafeDivide _ 0 = Nothing\nsafeDivide x y = Just (x / y)\n")),(0,r.kt)("h3",{id:"monads-either"},"Monads (either)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"data MyError = DivideByZero | NegativeResult\n\nsafeDivide :: Double -> Double -> Either MyError Double\nsafeDivide _ 0 = Left DivideByZero\nsafeDivide x y\n    | result < 0 = Left NegativeResult\n    | otherwise  = Right result\n    where result = x / y\n")),(0,r.kt)("h3",{id:"monads-state"},"Monads (state)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"import Control.Monad.State\n\ntype MyState = State Int\n\nincrementState :: MyState ()\nincrementState = modify (+1)\n\ngetStateValue :: MyState Int\ngetStateValue = get\n\nrunMyState :: MyState a -> a\nrunMyState action = evalState action 0\n")),(0,r.kt)("h3",{id:"error-handling-with-maybe"},"Error handling with maybe"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"safeHead :: [a] -> Maybe a\nsafeHead [] = Nothing\nsafeHead (x:_) = Just x\n")),(0,r.kt)("h3",{id:"error-handling-with-either"},"Error handling with either"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'divide :: Double -> Double -> Either String Double\ndivide _ 0 = Left "Division by zero"\ndivide x y = Right (x / y)\n')),(0,r.kt)("h3",{id:"monadic-error-handling"},"Monadic error handling"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'divideMonad :: Double -> Double -> Either String Double\ndivideMonad x y = do\n    if y == 0 then\n        Left "Division by zero"\n    else\n        Right (x / y)\n')),(0,r.kt)("h3",{id:"monadic-error-handling-with-maybe"},"Monadic error handling with maybe"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"safeDivideMonad :: Double -> Double -> Maybe Double\nsafeDivideMonad x y = do\n    guard (y /= 0)\n    return (x / y)\n")),(0,r.kt)("h3",{id:"monadic-error-handling-with-either"},"Monadic error handling with Either"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'safeDivideMonad :: Double -> Double -> Either String Double\nsafeDivideMonad x y = do\n    if y == 0 then\n        Left "Division by zero"\n    else\n        Right (x / y)\n')),(0,r.kt)("h3",{id:"custom-monadic-error-handling"},"Custom Monadic error handling"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'data MyError = MyError String\n\ninstance Show MyError where\n    show (MyError msg) = "Custom Error: " ++ msg\n\ninstance MonadError MyError (Either MyError) where\n    throwError = Left . MyError\n    catchError (Right x) _ = Right x\n    catchError (Left e) handler = handler e\n\nsafeDivideMonad :: Double -> Double -> Either MyError Double\nsafeDivideMonad x y =\n    if y == 0 then\n        throwError (MyError "Division by zero")\n    else\n        return (x / y)\n\nresult = safeDivideMonad 10 0 `catchError` (\\e -> Left (MyError ("Handled: " ++ show e)))\n')),(0,r.kt)("h3",{id:"monadic-inputoutput-with-textio"},"Monadic Input/Output (with text.IO)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'import System.IO\n\nmain :: IO ()\nmain = do\n    putStr "Enter your name: "\n    hFlush stdout\n    name <- getLine\n    putStrLn $ "Hello, " ++ name ++ "!"\n')),(0,r.kt)("h3",{id:"lazy-evaluation"},"Lazy evaluation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"fib :: Integer -> Integer\nfib n = fibs !! fromIntegral n\n    where fibs = 0 : 1 : zipWith (+) fibs (tail fibs)\n")),(0,r.kt)("h3",{id:"memoization"},"Memoization"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"fib :: Integer -> Integer\nfib = (map fib' [0..] !!)\n    where fib' 0 = 0\n          fib' 1 = 1\n          fib' n = fib (n-1) + fib (n-2)\n")),(0,r.kt)("h3",{id:"monadic-parsing-with-parsec"},"Monadic parsing with Parsec"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'import Text.Parsec\nimport Text.Parsec.String\n\nparser :: Parser Int\nparser = do\n    x <- many1 digit\n    if length x > 2\n        then fail "Number too large"\n        else return (read x)\n\nparseResult = parse parser "" "123"\n')),(0,r.kt)("h3",{id:"reading-and-writing-files"},"Reading and writing files"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'import System.IO\n\nmain :: IO ()\nmain = do\n    writeFile "output.txt" "Hello, Haskell!"\n    contents <- readFile "output.txt"\n    putStrLn contents\n')),(0,r.kt)("h3",{id:"working-with-monads"},"Working with Monads"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"import Control.Monad\n\nprintList :: [Int] -> IO ()\nprintList xs = forM_ xs print\n")),(0,r.kt)("h3",{id:"using-datamap-for-key-value-pairs"},"Using Data.Map for key-value pairs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'import qualified Data.Map as Map\n\nmyMap = Map.fromList [("key1", "value1"), ("key2", "value2")]\n')),(0,r.kt)("h3",{id:"using-dataset-for-sets"},"Using data.set for sets"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"import qualified Data.Set as Set\n\nmySet = Set.fromList [1, 2, 3, 3]\n")),(0,r.kt)("h3",{id:"sorting-lists"},"Sorting lists"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"import Data.List\n\nsortedList = sort [3, 1, 2]\n")),(0,r.kt)("h3",{id:"zipping-lists"},"Zipping Lists"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'list1 = [1, 2, 3]\nlist2 = ["one", "two", "three"]\nzippedList = zip list1 list2\n')),(0,r.kt)("h3",{id:"using-datatext-for-text-processing"},"Using data.text for text processing"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'import qualified Data.Text as T\n\ntext1 = T.pack "Hello, "\ntext2 = T.pack "Haskell!"\ncombinedText = T.append text1 text2\n')),(0,r.kt)("h3",{id:"working-with-databytestring-for-binary-data"},"Working with data.byteString for binary data"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'import qualified Data.ByteString as BS\n\nbyteString = BS.pack [72, 101, 108, 108, 111]  -- "Hello"\n')),(0,r.kt)("h3",{id:"concurrent-programming-controlconcurrent"},"Concurrent programming (Control.Concurrent)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'import Control.Concurrent\n\nmain :: IO ()\nmain = do\n    tid <- forkIO $ putStrLn "Hello from another thread"\n    putStrLn "Hello from the main thread"\n    threadDelay 2000000\n')),(0,r.kt)("h3",{id:"working-with-json-aeson-library"},"Working with JSON (aeson library)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'{-# LANGUAGE DeriveGeneric #-}\n\nimport Data.Aeson\nimport GHC.Generics\n\ndata Person = Person\n    { name :: String\n    , age :: Int\n    } deriving (Generic, Show)\n\ninstance FromJSON Person\ninstance ToJSON Person\n\nmain :: IO ()\nmain = do\n    let jsonString = "{\\"name\\":\\"Alice\\",\\"age\\":30}"\n    case decode jsonString of\n        Just person -> print (person :: Person)\n        Nothing     -> putStrLn "Invalid JSON"\n')),(0,r.kt)("h3",{id:"parsing-xml-xml-conduit-library"},"Parsing XML (xml-conduit library)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'{-# LANGUAGE OverloadedStrings #-}\n\nimport Text.XML\nimport Text.XML.Cursor\n\nmain :: IO ()\nmain = do\n    let doc = parseText_ def "<root><item>1</item><item>2</item></root>"\n    let cursor = fromDocument doc\n    let values = cursor $// element "item" >=> attribute "value"\n    print values\n')),(0,r.kt)("h3",{id:"using-st-monads-for-mutable-data"},"Using ST monads for mutable data"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"import Control.Monad.ST\nimport Data.STRef\n\nmain :: IO ()\nmain = do\n    let result = runST $ do\n        ref <- newSTRef 0\n        writeSTRef ref 42\n        readSTRef ref\n    print result\n")),(0,r.kt)("h3",{id:"using-datavetor-for-efficient-sequences"},"Using Data.Vetor for efficient sequences"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"import qualified Data.Vector as V\n\nmain :: IO ()\nmain = do\n    let vector = V.fromList [1..1000000] :: V.Vector Int\n    let sum = V.foldl' (+) 0 vector\n    print sum\n")),(0,r.kt)("h3",{id:"using-stm-for-concurrent-programmnig"},"Using STM for concurrent programmnig"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"import Control.Concurrent.STM\n\nmain :: IO ()\nmain = do\n    account <- atomically $ newTVar 1000\n    forkIO $ withdraw account 500\n    forkIO $ deposit account 300\n    threadDelay 2000000\n    balance <- atomically $ readTVar account\n    print balance\n\nwithdraw :: TVar Int -> Int -> IO ()\nwithdraw account amount = atomically $ do\n    balance <- readTVar account\n    writeTVar account (balance - amount)\n\ndeposit :: TVar Int -> Int -> IO ()\ndeposit account amount = atomically $ do\n    balance <- readTVar account\n    writeTVar account (balance + amount)\n")),(0,r.kt)("h3",{id:"custom-monads-with-mtl-library"},"Custom monads with mtl library"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'{-# LANGUAGE FlexibleContexts #-}\n\nimport Control.Monad.Reader\n\ndata AppConfig = AppConfig { appName :: String }\n\nsayHello :: Reader AppConfig String\nsayHello = do\n    app <- ask\n    return $ "Hello, " ++ appName app\n\nmain :: IO ()\nmain = do\n    let config = AppConfig { appName = "Haskell" }\n    let result = runReader sayHello config\n    putStrLn result\n')),(0,r.kt)("h3",{id:"creating-a-restful-api-server-with-servant-library"},"Creating a RESTful API server (with Servant library)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'{-# LANGUAGE DataKinds #-}\n{-# LANGUAGE TypeOperators #-}\n\nimport Data.Proxy\nimport Network.Wai\nimport Network.Wai.Handler.Warp\nimport Servant\n\ntype API = "hello" :> Get \'[JSON] String\n\nserver :: Server API\nserver = return "Hello, Haskell!"\n\napi :: Proxy API\napi = Proxy\n\napp :: Application\napp = serve api server\n\nmain :: IO ()\nmain = run 8080 app\n')),(0,r.kt)("h3",{id:"using-template-haskell-with-th-library"},"Using template haskell with TH library"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'{-# LANGUAGE TemplateHaskell #-}\n\nimport Language.Haskell.TH\n\ngreet :: String -> Q [Dec]\ngreet name = do\n    let funName = mkName "sayHello"\n    let body = NormalB (AppE (LitE (StringL "Hello, ")) (VarE (mkName name)))\n    return [FunD funName [Clause [] body []]]\n\ngreet "Alice"\n\nmain :: IO ()\nmain = putStrLn $(sayHello "Alice")\n')),(0,r.kt)("h3",{id:"using-databytestringlazy-for-efficient-binary-data"},"Using Data.ByteString.Lazy for efficient binary data"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'import qualified Data.ByteString.Lazy as BSL\n\nbyteString = BSL.pack [72, 101, 108, 108, 111]  -- "Hello"\n')),(0,r.kt)("h3",{id:"parsing-csv-with-cassava-library"},"Parsing CSV with cassava library"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'import qualified Data.Csv as Csv\nimport Data.Vector (Vector)\n\ndata Person = Person\n    { name :: String\n    , age :: Int\n    } deriving (Show)\n\ninstance Csv.FromNamedRecord Person where\n    parseNamedRecord r = Person <$> r Csv..: "name" <*> r Csv..: "age"\n\nmain :: IO ()\nmain = do\n    let csvData = "name,age\\nAlice,30\\nBob,25\\n"\n    case Csv.decodeByName csvData of\n        Left err -> putStrLn err\n        Right (_, v) -> print (v :: Vector Person)\n')),(0,r.kt)("h3",{id:"working-with-type-classes-with-typeclassopedia"},"Working with type classes with typeclassopedia"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'class MyShow a where\n    myShow :: a -> String\n\ninstance MyShow Int where\n    myShow = show\n\ninstance MyShow Bool where\n    myShow True = "Yes"\n    myShow False = "No"\n\nmain :: IO ()\nmain = do\n    print (myShow (5 :: Int))\n    print (myShow True)\n')),(0,r.kt)("h3",{id:"using-datatextlazy-for-text-processing"},"Using data.text.lazy for text processing"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'import qualified Data.Text.Lazy as TL\n\ntext1 = TL.pack "Hello, "\ntext2 = TL.pack "Haskell!"\ncombinedText = TL.append text1 text2\n')),(0,r.kt)("h3",{id:"building-a-restful-api-client-with-http-client-library"},"Building a RESTful API client with http-client library"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'import Network.HTTP.Client\nimport Network.HTTP.Client.TLS\n\nmain :: IO ()\nmain = do\n    manager <- newManager tlsManagerSettings\n    request <- parseRequest "https://api.example.com/resource"\n    response <- httpLbs request manager\n    putStrLn $ "Response status code: " ++ show (responseStatus response)\n')),(0,r.kt)("h3",{id:"using-datatextencoding-for-text-encodingdecoding"},"Using data.text.encoding for text encoding/decoding"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'import qualified Data.Text as T\nimport qualified Data.Text.Encoding as TE\n\nencodedText = TE.encodeUtf8 (T.pack "Hello, Haskell!")\ndecodedText = T.unpack (TE.decodeUtf8 encodedText)\n')),(0,r.kt)("h3",{id:"concurrency-with-softwaare-transactional-memory-stm"},"Concurrency with softwaare transactional memory (STM)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"import Control.Concurrent.STM\n\nmain :: IO ()\nmain = do\n    account <- atomically $ newTVar 1000\n    forkIO $ withdraw account 500\n    forkIO $ deposit account 300\n    threadDelay 2000000\n    balance <- atomically $ readTVar account\n    print balance\n\nwithdraw :: TVar Int -> Int -> IO ()\nwithdraw account amount = atomically $ do\n    balance <- readTVar account\n    writeTVar account (balance - amount)\n\ndeposit :: TVar Int -> Int -> IO ()\ndeposit account amount = atomically $ do\n    balance <- readTVar account\n    writeTVar account (balance + amount)\n")),(0,r.kt)("h3",{id:"concurrency-with-parallelism"},"Concurrency with parallelism"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"import Control.Parallel\n\nmain :: IO ()\nmain = do\n    let x = 2 + 3\n    let y = 4 + 5\n    let result = x `par` y `pseq` (x + y)\n    print result\n")),(0,r.kt)("h3",{id:"building-a-graphql-api-server-with-graphql-api-library"},"Building a GraphQL API server with graphql-api library"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'{-# LANGUAGE DeriveGeneric #-}\n{-# LANGUAGE OverloadedStrings #-}\n\nimport Data.Aeson\nimport GHC.Generics\nimport Web.Scotty\nimport Web.Scotty.Internal.Types (ActionT)\n\ndata Person = Person\n    { name :: String\n    , age :: Int\n    } deriving (Generic)\n\ninstance ToJSON Person\n\nmain :: IO ()\nmain = scotty 3000 $ do\n    post "/graphql" $ do\n        -- Parse GraphQL query and execute\n        json (Person "Alice" 30)\n')),(0,r.kt)("h3",{id:"using-mtl-for-monad-transformers"},"Using mtl for monad transformers"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'{-# LANGUAGE FlexibleContexts #-}\n\nimport Control.Monad.Reader\nimport Control.Monad.Except\n\ndata AppConfig = AppConfig { appName :: String }\ndata AppError = MyError String\n\ntype MyApp a = ReaderT AppConfig (ExceptT AppError IO) a\n\nsayHello :: String -> MyApp String\nsayHello name = do\n    app <- ask\n    if appName app /= "Haskell"\n        then throwError (MyError "Invalid app name")\n        else return $ "Hello, " ++ name\n\nmain :: IO ()\nmain = do\n    let config = AppConfig { appName = "Haskell" }\n    result <- runExceptT (runReaderT (sayHello "Alice") config)\n    case result of\n        Left (MyError err) -> putStrLn err\n        Right msg -> putStrLn msg\n')))}u.isMDXComponent=!0}}]);