# HTML
## Vocab
 - **Atribute:** This is the element within a tag, such as `class = ` or `placeholder` these go within the chevrons (`<` or `>`) 
 - **`<div>`:** a **tag** that indicates a section of the webpage. does not have ineherent qualities, a good organiztional tool. 
 - **Tag:**  This is like the bins that things get filed into and describe how they are shown. for example `<p>` or `<input>`
## Useful Attributes 
### General
  - **class:** Allows for the attribution of CSS properties to a HTML tag.
### Input
  - **placeholder:** This gives a value to display into an input box prior to user entry.
### Basic HTML framework to start off with 
take this from the text editor and remove the backticks (`) at either end. 
`<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">

  <title>The HTML5 Herald</title>
  <meta name="description" content="The HTML5 Herald">
  <meta name="author" content="SitePoint">

  <link rel="stylesheet" href="css/styles.css?v=1.0">

</head>

<body>
  <script src="js/scripts.js"></script>
</body>
</html>`

## Tags
- `script` - brings in JS (Java Script) onto the page 
  - goes in the body of the page 
# CSS
## The Box Model
- Display
  - `inline` use this to get any tag to display like inline text
 # JavaScript
 ## Vocab 
 - **aON.:** This is a shorthand I am using to mean Array or Object Name, primarly used for making notes on **methods**
 - **Arrays:** these are similar to **objects** but are ordered.
   - declared using `const arrayName = [ value0,value1,value2,value3]` (note the square brackets)
 - **booleans:** Simple true or false statements, used everywhere
   - Santax 
    - true or false
 - **Builtins:** These are functions that are part of JS and can be called whenever. 
 - **camelCasing**: this is typing out variables or methods `likeThisOrThis`
   - See **kebab-casing** for a counterpoint
 - **call:** this is the act of using a variable conducted using `functionName(inputs)`
 - **callback:** This is the funciton called by an **EventListener**, called this because it is called back when the event occurs again. 
 - **const:** delcaring a constant. 
   - no spaces
   - can not be changed (see `let`)
 - **Context:** Important for keywords like `this` is basically the smallest "div" that you are in. 
   - "A good rule of thumb (that is unfortunately not always true) is that if you're inside an object of some sort, the this will be that object. If not, it'll be the global object, window. "
 - **Control Flow:** fancy term for using if and for loops and similar item.
 - **Control Variable:** This is the `i` or `j` term that is used in a for loop. 'i' is the prefered variable for JS
 - **DOM (the):** The Document Obejct Model - this is how JS and HTML/CSS interract. This includes a bunch of **objects** and **methods** that can be called in JS to interract with HTML/CSS
 - **Events**: when a user is interracting with a webpage things that happen are **events**. This term is relevant when working with **DOM** in order to change the webpage in response to the user. 
 - **Event Listeners**: These are the tools that are used to track **events** on the webpage. 
 - **Global Scope:** These are variables that apply across the entirety of the code section. 
 - **Index:** this is the spot in the matrix that an item is occupying
   - For example, given string `0,1,2,3,4,5` index 4 has a value of 4. As an alternate example, given string `1,2,3,4,5,6` index 4 has a value of 5. 
  - **kebab-casing**: this is typing out variables `like-this-or-this`
   - See **camelCasing** for a counterpoint
 - **Keyword:** commands to start off the line letting javascript know there is an item coming.
 - **Keys:** this is how data is ordered in an **object** the key is on the left side of the `:`
 - **Let:** delcaring a variable 
   - variable must have no spaces
   - this creates a true variable, see **const** for a value that you would like to have fixed.
 - **Method:** a function that acts on an **Object** or **Array** 
   - called with `objectOrArrayName.methodName()`
 - **Number:** There is just one kind of number for JS no need to worry about other types like float or otherwise.
 - **Object:** this is a collection of data about a variable (e.g. a person with some characteristics, favorite food, city, amount of food desired) Similar to **Arrays** but unordered and containing keys.
   - declared using `const objName = { key0:value0,key1:value1,key2:value2,key3:value3 }` (note the curly brackets)
   - see **keys**
   - Example: `const person = {`
                `name: "Brian Holt",`
                `city: "Seattle",`
                `state: "WA",`
                `favoriteFood: "🌮",`
                `wantsTacosRightNow: true,`
                `numberOfTacosWanted: 100`
              `};`
 - **Property:** a **key**/value pair within an **object**
 - **Scope:** This is the "Black Box" inside of a function. 
   - things not specifically output from the scope of a function is disregarded after the function exits.
   - This includes counting variables, giving the need to redefine them if you want them to be used outside of the function. 
   - a loose way to think about this, the "scope" lives between the brackets
   - nothing else can "peer into" a function's scope unless specifically returned. 
 - **var:** this is an old version of `let`, this is not used anymore.
 - **`window`** can used in relation to the `this` **keyword** to check if your **scope** is equal to the outermost layer. 
 
 
 
 ## General Advice
 - Use as many variables as possible 
 - "Principle of least power" - always chose the least powerful "thing" to accomplish whatever you're trying to do. 
 - In coding, counting goes from 0 up not from 1 (see `index` in vocab)
 - Context is confusing and is consistantly asked about in interviews to determine where you are on the topic.
 
 ## Commands used in Toutorial
 -  `console.log()` - this logs whatever you put in the function to the JS command console.
 - `for (let i = 0; i <=10; i++) {...}` run the code inside the parens for eleven cycles.
   - `let i = 0; - this is defining the control variable
   - `i <= 10; - this is setting the limit to the number of cycles, similar to a while loop.
   - `i++` - increments the control variable every time the code whithin the loop runs.
 - `function functionName(inputVariable) {contents of function}`
   - example: `function addTwo(number) { return number + 2; }`
    - this creates a function called `addTwo` with the input of a number and the output of that number plus two increments. 
    
 ### Methods 
 - `objectName.length()` - This is a **method**, returning the length of the object or array that is listed. 
 - `arrayName.join("deliminating characters for example " , " or " | ")` converts an **array** into a single text string.
 - `.forEach()` - this takes a function and applies it to each individual item in the array or object.
  - This looks like this:
    - `arrayName.forEach(functionToBeApplied){});
  - However, this is more complex than required because the funciton that is being applied is usually prettly local to this particular **method** This means that the actual use will look closer to something like this. 
    - `arrayName.forEach(function(item, index, array) { some sort of logging function or another maniuplation });
     - this is useful because it reduces the number of funcitons and looks cleaner. 
     - go to this youtube video for more information: https://www.youtube.com/watch?v=159EAISAxwg
 
 
 ## Syntax Points likley to be useful
 - JS exclusivley uses **camelCasing** not **kebab-casing** like CSS does so make sure that is used, especially when working with **DOM** **methods**.
 - strings can include variable with the following 
   - `Hello ${variableOne} ${variableTwo}! How are you?`
     -This will create a string with the variables plugged into the exact location of the ${...}'s meaning that any spaces included in the string are expressed in the final product.
 - `=` means *is assigned to*
 - `==` means something similar to tripple equals but different, this gets very into the nuances and I won't need this for this level of programming. 
 - `===` means *IS this equal to that*
 - `!==` means *IS this NOT equal to that*
 - greater than, greater than or equal to, or vice versa act as expected
   - `>=` or `<=`
 - call a nested function from inside an object `objectName.functionName`
 - `this` calls to the containing object. This is used in functions nested into the object. 
   - the **context** of the command is generated when **function** is defined.
   - For example, if a **function** is defined within an **object**, `this` will point to the **object** that it was defined in.
 - `.push` method - this adds an **element** onto the end of an **object**  
### Incrementing shortcuts
  - All four of these lines are equivilant  
    - `friendsAtYourParty = friendsAtYourParty + 1;`
    - `friendsAtYourParty += 1;`
     - This can also be edited to include any number after the `+=`
     - also works with the other operators
      - `**=` is exponent
    - `friendsAtYourParty++;`
    - `++friendsAtYourParty;`
     - don't use this one, people think it's weird 
## Objects
- See definition above 
- To call a property using it's key, the santax is: `objectName.keyName`
  -this calls the object and then the specific value that you want 
- Objects can be nested 
- if a function is within an object, it can be called outside of the object, for example given object `dog` with the nested function `speak` you can call the nested function with `dog.speak`

## Interractions between JS HTML/CSS - The DOM
### Pulling a CSS tag into JS 
- ` const newVariableName = document.querySelector('.name-of-css-tag');`
- take this example `GenericTagName.style.marginBottom = '50px'` This takes the tag that is being pointed to, taps into the **object** called style (see below) and then adjusts the **property** called marginBottom according to the input on the 
- Example of manipulating the DOM:
    
    `<button class="event-button">Click me!</button>`
    
    `<script>`
    
    `const button = document.querySelector('.event-button');`
    
    `button.addEventListener('click', function () {`
    
    `alert("Hey there!");`
    
    `});`

- In this example, the **callback** is the generic function that executes the commands within the curlies. 
### Events
Events are JS commands that are used in **eventListeners** to specifiy what the **listener** is looking for. 
  - `keyup` Event: look for when a key is released.
  - `change` Event: happens whenever a user types something in an input and then unfocuses the input by clicking somewhere else or hitting tab to change the focus.
- **Event Bubbling:** this is when an **event** occurs on a child element and that **event** gets carried up through the parents until it means something. ( a bunch of HTML buttons within a `div`. That `div` has a `class` that is modified by a JS function, click any button in the `div` and the whole function will run
  - a useful thing for redirecting event bubbling is `.target.` which is a generic parameter that points back to the originator of the event. `genericFunction(genericObject.target.genericKey)` This would input the specified object, in this case the object that contains the element that experienced the event, then point to something within the the element as specified by the Key. 

### Methods in the DOM
Multiple **methods** can be used to interract some examples are below 
- `document`: global variable in the browser that can be used to interract with the HTML/CSS 
- `.querrySelector`: grabs a CSS selector and returns the _first_ one that matches
  - if there are many of this CSS selector on the page it will only effect the first one
-   `.querrySelectorAll`: selects _all_ of a querry
- `.style.`: object that is used to store all of the CSS styles that are being applied to the object at that time. 

## Troubleshooting 
### Is the script linked to the HTML properly? 
 `  let d = new Date();
alert("Today's date is " + d);`
- This will create an alert that will tell todays date. If it shows, it works. 
 
# AJAX
- this is basically recontacting the server for more informaiton after the page has been loaded
- stands for Asynhrounous JavaScript And XML
  - this isn't really a good indicator of what it does, is grandfathered in. 
## Vocab for AJAX
- **fetch**: is the root browser function used to reach out to the server again 
  - returns a **promise**
-**JSON**: Java Script Object Notation, this is the format typically used to exchange data over the internet. 
- **promise**: allows the page to load things asynchronously. An example is like if you have a web page but want to insert content into the middle of it from an API but don't want to wait for that response for the information to load prior to loading the rest of the page. 
-**promise chaining**: this is like setting up a to do list for the browser to execute of promises. Uses the `.then` method. Syntax looks something like this:

    ```
    promise    
        .then(function(response) {      
        const processingPromise = response.json();        
        return processingPromise;        
        })      
        .then(function(processedResponse) {      
        console.log(processedResponse);        
    }); 
    ```    
-**`then`**: method waits for something to happen then comits the rest of the contained whitin the curls. 


   
 



# Formatting Notes

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
