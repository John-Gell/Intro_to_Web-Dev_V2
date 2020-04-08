# HTML
## Tags
- `script` - brings in JS (Java Script) onto the page 
  - goes in the body of the page 
# CSS
## The Box Model
- Display
  - `inline` use this to get any tag to display like inline text
 # JavaScript
 ## Vocab 
 - **Arrays:** these are similar to **objects** but are ordered.
   - declared using `const arrayName = [ value0,value1,value2,value3]` (note the square brackets)
 - **booleans:** Simple true or false statements, used everywhere
   - Santax 
    - true or false
 - **Builtins:** These are functions that are part of JS and can be called whenever. 
 - **call:** this is the act of using a variable conducted using `functionName(inputs)`
 - **const:** delcaring a constant. 
   - no spaces
   - can not be changed (see `let`)
 - **Context:** Important for keywords like `this` is basically the smallest "div" that you are in. 
   - "A good rule of thumb (that is unfortunately not always true) is that if you're inside an object of some sort, the this will be that object. If not, it'll be the global object, window. "
 - **Control Flow:** fancy term for thesuing if and for loops and similar item.
 - **Control Variable:** This is the `i` or `j` term that is used in a for loop.
 - **Global Scope:** These are variables that apply across the entirety of the code section. 
 - **Index:** this is the spot in the matrix that an item is occupying
  - For example, given string `0,1,2,3,4,5` index 4 has a value of 3. As an alternate example, given string `1,2,3,4,5,6` index 4 has a value of 4. 
 - **Keyword:** commands to start off the line letting javascript know there is an item coming.
 - **Keys:** this is how data is ordered in an *object* the key is on the left side of the `:`
 - **Let:** delcaring a variable 
   - no spaces
   - this is a true variable, see `const` for constants
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
 
 
 
 ## General Advice
 - Use as many variables as possible 
 - "Principle of least power" - always chose the least pwerful "thing" to accomplish whaterver you're trying to do. 
 - In coding, counting goes from 0 up not from 1 (see `index` in vocab)
 - Context is confusing and is consistantly asked about in interviews to determine where you are on the topic. 
 ## Commands used in Toutorial
 -  `console.log()` - this logs whatever you put in the function to the JS command console.
 - `for (let i = 0; i <=10; i++) {...}` run the code inside the parens for eleven cycles.
   - `let i = 0; - this is defining the control variable
   - `i <= 10; - this is detting a while loop type restriction
   - `i++` - increments the control variable every time the code whithin the loop runs.
 - `function functionName(inputVariable) {contents of function}`
   - example: `function addTwo(number) { return number + 2; }
    - this creates a function called `addTwo` with the input of a number and the output of that number plus two increments. 
 - `objectName.length()` - This is a **method**, returning the length of the object or array that is listed. 
 - `arrayName.join("deliminating characters for example " , " or " | "` converts an **array** into a single text string.
 
 ## Santax Points likley to be useful
 - strings can include variable with the following 
   - `Hello ${variableOne} ${variableTwo}! How are you?`
     -This will create a string with the variables plugged into the exact location of the ${...}'s meaning that any spaces included are useful
 - `=` means *is assigned to*
 - `==` means something similar to tripple equals but different
 - `===` means *is this equal to that*
 - `!==` means *is this NOT equal to that*
 - greater than, greater than or equal to, or vice versa act as expected
   - `>=` or `<=`
 - call a nested function from inside an object `objectName.functionName`
 - `this` calls to the containing object. This is used in functions nested into the object. 
   - the **context** of the command is generated when **function** is **called**
### Incrementing shortcuts
  - All four of these lines are equivilant  
    - `friendsAtYourParty = friendsAtYourParty + 1;`
    - `friendsAtYourParty += 1;`
     - This can also be edited to include any number after the `+=`
     - also works with the other operators
      - `**=` is exponent
    - `friendsAtYourParty++;`
    - `++friendsAtYourParty;`
     - don't use this one, people thinkit's weird 
## Objects
- See definition above 
- To call a key, santax is `objectName.keyName`
  -this calls the object and then the specific value that you want 
- Objects can be nested 
- if a function is within an object, it can be called outside of the object, for example given object `dog` with the nested function `speak` you can call the nested function with `dog.speak`
 
 
   
 



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
