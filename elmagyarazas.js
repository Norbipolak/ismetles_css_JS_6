/*
Mik a legfontosabb property-ei a document object-nek?
The document object in the JavaScript Document Object Model (DOM) represents the HTML document loaded in the browser window. 
It provides access to the content and structure of the document, allowing you to manipulate it dynamically. 
Here are some of the most important properties and methods of the document object:

1.
document.documentElement: Returns the html element of the document.

2.
document.body: Returns the body element of the document.

3.
document.title: Gets or sets the title of the document, which appears in the browser's title bar or tab.

4.
document.URL: Returns the URL of the document.

5.
document.domain: Gets or sets the domain of the document.

6.
document.head: Returns the head element of the document.

7.
document.forms: Returns a collection of all <form> elements in the document.

8.
document.links: Returns a collection of all <a> elements with an href attribute in the document.

9.
document.images: Returns a collection of all <img> elements in the document.

10.
document.all: Returns a collection of all elements in the document. (Note: This property is deprecated and not recommended for use.)

Fontos és most jönnek a metódusok!!!!!!!!!!!!!!!!!!!!!!

1.
document.getElementById(id): Returns the element with the specified ID.

2.
document.getElementsByClassName(className): Returns a collection of elements with the specified class name.

3.
document.getElementsByTagName(tagName): Returns a collection of elements with the specified tag name.

4. !!!!!!!!!!!!!!
document.querySelector(selector): Returns the first element that matches the specified CSS selector.

5. !!!!!!!!!!
document.querySelectorAll(selector): Returns a NodeList containing all elements that match the specified CSS selector.

6. !!!!!!!!!!!!!
document.createElement(tagName): Creates a new HTML element with the specified tag name.

7.
document.createTextNode(text): Creates a new text node with the specified text.

8.
document.createDocumentFragment(): Creates a new empty DocumentFragment node, which can be used as a temporary container for DOM elements.

9.
document.write(text): Writes HTML content to the document.

10.
document.open() and document.close(): Used to open and close a document for writing.
**********************************************************************************************************************************************
Mi az a content type?
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
The term "Content-Type" refers to an HTTP header field that indicates the type of content (i.e., media type) being sent in an HTTP message, 
such as a request or a response. 
It helps the receiving party (typically a web browser or a server) understand how to interpret the body of the message.

The Content-Type header is crucial for web servers to properly handle the content they receive from clients 
and for clients to interpret the content they receive from servers. 
It specifies the MIME (Multipurpose Internet Mail Extensions) type of the content, which defines 
the format and structure of the data being transmitted.

Common MIME types include:

text/html: HTML documents
text/plain: Plain text documents
application/json: JSON (JavaScript Object Notation) data
application/xml: XML (eXtensible Markup Language) documents
image/jpeg: JPEG images
image/png: PNG images
audio/mpeg: MP3 audio files
video/mp4: MP4 video files
application/pdf: PDF (Portable Document Format) documents
When a client sends a request to a server, it includes a Content-Type header to indicate the type of data being sent in the request body (e.g., form data, JSON data). When a server responds to a client request, it includes a Content-Type header to specify the type of data being sent in the response body (e.g., HTML page, JSON response).

The Content-Type header is crucial for ensuring that the content is correctly processed and rendered by the receiving party. 
If the Content-Type header is missing or incorrect, the receiving party may not be able to interpret the content properly, 
leading to errors or unexpected behavior. 
Therefore, it's important for developers to set the Content-Type header correctly when sending HTTP requests or responses.
***************************************************************************************************************************
JavaScriptben minden protoType egy object!!!!!!!!!!!!!!!!!!!!

Prototype Chain: Every object in JavaScript has a prototype except for the root object, which is Object.prototype. 
When you access a property or method on an object, JavaScript first looks for that property or method on the object itself. 
If it doesn't find it, it then looks at the object's prototype, and if the property or method is still not found, 
it continues up the prototype chain until it reaches Object.prototype.

Object Prototype: The Object.prototype is the ultimate prototype in JavaScript. 
It contains common methods and properties that are inherited by all objects in JavaScript. 
Some of the commonly used methods in Object.prototype include toString(), hasOwnProperty(), and valueOf().

As for which methods are used the most when dealing with prototypes in JavaScript:

Object.create(): This method creates a new object with the specified prototype object and properties.

Object.getPrototypeOf(): This method returns the prototype of the specified object.

Object.setPrototypeOf(): This method sets the prototype 
(i.e., the internal [[Prototype]] property) of a specified object to another object or null.

Function.prototype: The Function.prototype object serves as the prototype for all function objects in JavaScript. 
It contains methods such as call(), apply(), and bind(), which are frequently used for function manipulation and invocation.

Constructor Functions: Constructor functions and their prototypes are often used to create objects with shared methods. 
By adding methods to the prototype of a constructor function, those methods become accessible to all instances created from that constructor.

Inheritance: Prototypal inheritance is a key concept in JavaScript, 
and understanding how to work with prototypes is essential for implementing inheritance patterns. 
This often involves setting the prototype of a constructor function to another object's prototype.
*********************************************************************************************************************************************
Leggyakrabban használt metódusai az object-nek 

bject.keys(): Returns an array of a given object's own enumerable property names.

Object.values(): Returns an array of a given object's own enumerable property values.

Object.entries(): Returns an array of a given object's own enumerable property key-value pairs.

Object.assign(): Copies the values of all enumerable own properties from one or more source objects to a target object.

Object.hasOwnProperty(): Returns a boolean indicating whether the object has the specified property as its own property 
(not inherited from its prototype chain).

Object.getOwnPropertyNames(): Returns an array of all own property names of a given object.

Object.freeze(): Freezes an object, preventing new properties from being added to it, 
existing properties from being removed, and changes to existing properties or their attributes.

Object.seal(): Seals an object, preventing new properties from being added to it 
and marking all existing properties as non-configurable.

Object.create(): Creates a new object with the specified prototype object and properties.

Object.getPrototypeOf(): Returns the prototype of the specified object.
*********************************************************************************************************************************************
Leggyakrabban használt Tömb metódusok

Array.push(): Adds one or more elements to the end of an array and returns the new length of the array.

Array.pop(): Removes the last element from an array and returns that element.

Array.unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array.

Array.shift(): Removes the first element from an array and returns that element.

Array.concat(): Combines two or more arrays and returns a new array.

Array.join(): Joins all elements of an array into a string.

Array.slice(): Returns a shallow copy of a portion of an array into a new array object.

Array.splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements.

Array.indexOf(): Returns the first index at which a given element can be found in the array, or -1 if it is not present.

Array.includes(): Determines whether an array includes a certain element, returning true or false as appropriate.

Array.find(): Returns the first element in the array that satisfies the provided testing function, or undefined if no such element is found.

Array.filter(): Creates a new array with all elements that pass the test implemented by the provided function.

Array.map(): Creates a new array populated with the results of calling a provided function on every element in the calling array.

Array.reduce(): Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

Array.forEach(): Executes a provided function once for each array element.
****************************************************************************************************************************************
Stringeknél 
String.length: Returns the length of the string.

String.charAt(): Returns the character at a specified index in the string.

String.charCodeAt(): Returns the Unicode value of the character at a specified index in the string.

String.concat(): Combines two or more strings and returns a new string.

String.includes(): Determines whether one string may be found within another string, returning true or false as appropriate.

String.indexOf(): Returns the index within the calling string of the first occurrence of the specified value, or -1 if not found.

String.lastIndexOf(): Returns the index within the calling string of the last occurrence of the specified value, or -1 if not found.

String.slice(): Extracts a section of a string and returns it as a new string.

String.substring(): Returns the part of the string between the start and end indexes, or to the end of the string.

String.substr(): Returns the part of a string between the start index and a number of characters after it.

String.split(): Splits a string into an array of substrings based on a specified separator.

String.trim(): Removes whitespace from both ends of a string.

String.toUpperCase(): Returns the calling string value converted to uppercase.

String.toLowerCase(): Returns the calling string value converted to lowercase.

String.replace(): Searches a string for a specified value, or a regular expression, 
and returns a new string where the specified values are replaced.

Split példa -> 
1.
const sentence = "The quick brown fox jumps over the lazy dog";

Split the sentence into an array of words using a space as the separator
const words = sentence.split(" ");

console.log(words);
["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"]

2.
const numbers = "1,2,3,4,5";

Split the numbers string into an array of numbers using a comma as the separator
const numberArray = numbers.split(",");

console.log(numberArray);
***********************************************************************************************************************************************
Leggyakrabb prototype fajták 
Object.prototype: The prototype object for all standard built-in objects. 
It provides common methods and properties that are inherited by all objects in JavaScript.

Array.prototype: The prototype object for all array instances. 
It provides methods for working with arrays, such as push(), pop(), slice(), map(), filter(), and many others.

String.prototype: The prototype object for all string instances. 
It provides methods for working with strings, such as charAt(), indexOf(), substring(), split(), toUpperCase(), toLowerCase(), and others.

Function.prototype: The prototype object for all function instances. 
It provides methods such as call(), apply(), and bind() for working with functions.

Number.prototype: The prototype object for all number instances. 
It provides methods for working with numbers, such as toFixed(), toPrecision(), and toString().

Date.prototype: The prototype object for all date instances. 
It provides methods for working with dates, such as getDate(), getMonth(), getFullYear(), getHours(), getMinutes(), getSeconds(), and others.

RegExp.prototype: The prototype object for all regular expression instances. 
It provides methods for working with regular expressions, such as test(), exec(), and others
**************************************************************************************************
Példa a number-re

const num = 123.456;

Using toFixed() method to round the number to two decimal places
const roundedNum = num.toFixed(2);
console.log(roundedNum); // Output: "123.46"

Using toString() method to convert the number to a string
const numString = num.toString();
console.log(numString); // Output: "123.456"

Using parseInt() method to parse a string and convert it to an integer
const integerString = "42";
const parsedInt = parseInt(integerString);
console.log(parsedInt); // Output: 42
********************************************************************************************************************************************
Event objektum fontosabb property-jei és metódusai

In JavaScript, the variable e is commonly used as a parameter name in event handler functions to represent an event object. 
The properties and methods of the event object (e) vary depending on the type of event being handled 
and the browser's implementation of the event object. 
However, there are some commonly used properties and methods that are available across most modern browsers. 
Here are a few of them:
e.target: Returns the element that triggered the event.

e.currentTarget: Returns the element that the event handler is attached to.

e.type: Returns the type of the event (e.g., "click", "mouseover", "keydown").

e.clientX and e.clientY: Returns the horizontal and vertical coordinates of the mouse pointer relative to the viewport.

e.pageX and e.pageY: Returns the horizontal and vertical coordinates of the mouse pointer relative to the document.

e.keyCode: Returns the Unicode value of a key that is pressed.

Methods:

e.preventDefault(): Prevents the default action of the event from being executed.

e.stopPropagation(): Stops the propagation of the event through the DOM hierarchy.

e.stopImmediatePropagation(): Stops the propagation of the event and prevents other event handlers from being executed on the same element.
***************************************************************************************************************************
Unicode!!!!!!!!!!!!!!!!!!!!!!!!
A Unicode value, also known as a Unicode code point, is a unique numerical identifier
assigned to every character and symbolin the Unicode standard. 
Unicode is a character encoding standard that aims to represent every character from all the world's languages, 
as well as symbols and other textual elements, consistently across different platforms and systems

const euroSign = '\u20AC';
console.log(euroSign); // Output: €
*******************************************************************************************************************************************
Prototype

In JavaScript, every function has a prototype property, which is a reference to an object. 
This prototype object is used primarily for implementing inheritance and sharing properties and methods 
among multiple instances of a constructor function.

When you create a function in JavaScript, whether it's a regular function or a constructor function, 
it automatically gets a prototype property. 
This property initially points to an empty object ({}), which you can then add properties and methods to. 
These properties and methods become accessible to all instances created using the constructor function through the prototype chain.

function Person(name, age) {
  this.name = name;
  this.age = age;
}


Adding a method to the prototype of the Person constructor function
Person.prototype.sayHello = function() {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

const john = new Person('John', 30);
john.sayHello(); ->  Output: Hello, my name is John and I am 30 years old.

We define a constructor function Person that takes name and age parameters and assigns them to this.name and this.age respectively.

We add a sayHello method to the prototype of the Person constructor function. 
This method will be shared among all instances created using Person.

We create an instance of Person called john.

We call the sayHello method on the john instance, which prints a message using the name and age properties of the instance.

The prototype property of the Person function is an object that contains 
properties and methods shared among all instances created using Person. 
By adding properties and methods to the prototype, you can achieve efficient code reuse and inheritance in JavaScript.
*******************************************************************************************************************************
JavaScriptben beépített objektumok!!!!!!!!!!!!!!!!!!!!!!!(window, location, document)
In JavaScript, the window, location, and document objects are three fundamental built-in objects 
provided by the web browser environment. Each serves a distinct purpose in web development:
1.Window Object (window):
  - The window object represents the browser window or tab that contains the web page.
  - It serves as the global object in client-side JavaScript, providing access to various browser-related functionality and properties.
  - Commonly used properties and methods of the window object include 
  window.innerWidth, window.innerHeight, window.alert(), window.setTimeout(), window.open(), and many more.

2. Location Object (location):
  - The location object represents the current URL of the browser window or tab.
  - It provides information about the URL, such as the protocol, hostname, port, pathname, search parameters, and hash fragment.
  - Commonly used properties of the location object include 
  location.href, location.protocol, location.hostname, location.pathname, location.search, and location.hash.

3. Document Object (document):
  - The document object represents the DOM (Document Object Model) of the web page loaded in the browser window or tab.
  - It provides methods and properties for accessing and manipulating the content, structure, and styles of the web page.
  - Commonly used methods and properties of the document object include 
  document.getElementById(), document.querySelector(), document.createElement(), document.body, document.title, document.cookie, and many more.

Többi fontos beépített objektumok a JavaScriptben

4. Console
  - The console object provides methods for logging messages to the browser's console, such as 
console.log(), console.warn(), console.error(), and console.info(). It is useful for debugging and monitoring code execution.

5.Event 
  - Event objects are automatically generated by the browser when events occur, 
such as user interactions (clicks, key presses) or changes in the document (loading, resizing). 
They contain information about the event and are passed as arguments to event handler functions.

6. Math
  - The Math object provides mathematical functions and constants for performing common mathematical operations, 
such as trigonometric functions (Math.sin(), Math.cos()), rounding (Math.round()), and random number generation (Math.random()).

7. Array(tömb)
  - The Array object provides methods for working with arrays, such as creating arrays (Array() constructor), 
adding or removing elements (push(), pop(), shift(), unshift()), iterating over arrays (forEach(), map(), filter()), and many others.

8. string
  - The String object provides methods for working with strings, such as accessing individual characters 
(charAt()), converting case (toUpperCase(), toLowerCase()), searching for substrings (indexOf(), lastIndexOf()), and more.

9. Date
Date Object (Date):
  - The Date object represents dates and times in JavaScript. 
It provides methods for creating date objects (new Date()), getting and setting various components of dates 
(getFullYear(), getMonth(), getDate()), and performing operations such as adding or subtracting time intervals.

10. JSON
  - The JSON object provides methods for parsing JSON strings 
(JSON.parse()) and converting JavaScript objects to JSON strings (JSON.stringify()). 
It is commonly used for exchanging data between a web server and a client.
*********************************************************************************************************************************************
Mi az a promise és mikor használjuk

In JavaScript, a Promise is an object representing the eventual completion or failure of an asynchronous operation. 
It allows you to handle asynchronous operations more easily and provides a way to execute code asynchronously 
and handle the result when it's ready.

A Promise can be in one of three states:

Pending: Initial state, neither fulfilled nor rejected.
Fulfilled (Resolved): The operation completed successfully.
Rejected: The operation failed with an error.

const myPromise = new Promise((resolve, reject) => {
  -> Perform an asynchronous operation, such as fetching data from a server
  setTimeout(() => {
    const data = 'Data fetched successfully';
    -> If the operation succeeds, call the resolve function with the result
    resolve(data);
    -> If the operation fails, call the reject function with an error
    reject(new Error('Failed to fetch data'));
  }, 2000);
});

-> Using the then() method to handle the fulfilled state
myPromise.then((result) => {
  console.log('Promise fulfilled:', result);
}).catch((error) => {
  console.error('Promise rejected:', error);
});

We create a new Promise object (myPromise) with a callback function that takes two parameters: resolve and reject.

Inside the callback function, we perform an asynchronous operation (simulated with setTimeout) 
and then call resolve with the result when the operation is successful.

We use the then() method to specify a callback function to be executed when the Promise is fulfilled (resolved) 
and the catch() method to specify a callback function to be executed when the Promise is rejected.

If the asynchronous operation fails, we call reject with an error, and the catch() method will be triggered with the error.

Promises are commonly used for handling asynchronous tasks such as fetching data from a server, 
reading files, or performing long-running computations. They provide a cleaner and more structured way to deal with asynchronous code
compared to traditional callback-based approaches.

*/