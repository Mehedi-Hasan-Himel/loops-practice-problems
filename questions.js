/* 
==============================================
 Variables
==============================================

// JavaScript questions for interview .
   1. What is JavaScript ? 
   Ans: JavaScript is a high-level, dynamic, and interpreted programming language that is widely used for building interactive and dynamic web content. It is a client-side language, meaning it runs on the user's browser, and it is one of the three core technologies of the World Wide Web (HTML, CSS, and JavaScript). With its versatility, flexibility, and support for object-oriented, functional, and imperative programming paradigms, JavaScript has become a staple of modern web development, and it is widely considered a must-have skill for web developers.


   2. How does JavaScript work ?
   Ans: JavaScript is a client-side language, meaning it runs on the user's browser. When a user visits a website, the browser loads the HTML, CSS, and JavaScript files that make up the website. The browser then executes the JavaScript code, which can dynamically update the content of the page, change the style of the page, and much more. JavaScript is a scripting language, meaning it is not compiled. Instead, it is interpreted by the browser. This means that the browser reads the JavaScript code line by line and executes it immediately. This is in contrast to compiled languages, such as C++, which are compiled into machine code before they are executed. This means that JavaScript is slower than compiled languages, but it is also more flexible and easier to use. 


   3. What is variable ?
   Ans: A variable in JavaScript is a named storage location for values that can be changed and re-assigned during the execution of a script. It is a crucial concept in programming and allows for efficient and dynamic manipulation of data within a program. Variables are declared using keywords such as "var", "let", or "const", and their values can be changed as needed throughout the code. For example, var x = 5; declares a variable named x and assigns it the value 5. The value of a variable can be changed at any time. For example, x = 10; changes the value of x to 10. The value of a variable can also be changed by using the variable in an expression. For example, x = x + 5; adds 5 to the value of x and assigns the result to x.


   4. How to declear a variable ?
   Ans:  You can declare a variable in JavaScript using the "var", "let", or "const" keywords, followed by the variable name, and an equal sign (=) followed by the value you want to assign to the variable. For example:

   var x = 10; // declares a variable named "x" with value 10
   let y = 20; // declares a variable named "y" with value 20
   const z = 30; // declares a constant named "z" with value 30

   Note: "var" is the original keyword for declaring variables in JavaScript, but "let" and "const" were introduced in later versions and are considered better practice in most cases. "const" is used to declare a constant that can't be re-assigned, while "let" is used to declare a variable that can be re-assigned.


   5. Types of variable ? How can you find type of variable ?
   Ans: There are two types of variables in JavaScript: primitive and non-primitive. Primitive variables are immutable, meaning they can't be changed once they are declared. Non-primitive variables are mutable, meaning they can be changed once they are declared. The primitive data types in JavaScript are: number, string, boolean, null, undefined, and symbol. The non-primitive data types in JavaScript are: object and function, Array. You can find the type of a variable using the typeof operator. For example, typeof x; returns the type of the variable x.


   6. What is data type ?
   Ans: A data type is a classification that defines the type of data that can be stored in a variable. JavaScript has two types of data types: primitive and non-primitive. Primitive data types are immutable, meaning they can't be changed once they are declared. Non-primitive data types are mutable, meaning they can be changed once they are declared. The primitive data types in JavaScript are: number, string, boolean, null, undefined, and symbol. The non-primitive data types in JavaScript are: object and function, Array.


   7. primitive vs non-primitive data type ?
   Ans: There are two types of data types in JavaScript: primitive and non-primitive. Primitive data types are immutable, meaning they can't be changed once they are declared. Non-primitive data types are mutable, meaning they can be changed once they are declared. The primitive data types in JavaScript are: number, string, boolean, null, undefined, and symbol. The non-primitive data types in JavaScript are: object and function, Array.


   8. What is primitive data type ?
   Ans: Primitive data types are immutable, meaning they can't be changed once they are declared. The primitive data types in JavaScript are: number, string, boolean, null, undefined, and symbol.


   9. What is non-primitive data type ?
   Ans: Non-primitive data types are mutable, meaning they can be changed once they are declared. The non-primitive data types in JavaScript are: object and function, Array.


   10. Naming convention for variable ?
   Ans: Variable names can only contain letters, numbers, underscores, and dollar signs. Variable names must begin with a letter, underscore, or dollar sign. Variable names are case sensitive (y and Y are different variables). Reserved words (like JavaScript keywords) cannot be used as variable names.

   In JavaScript, there are some naming conventions that are generally followed to make code more readable and maintainable:

   1. Follow with letters, digits, underscores, or dollar signs.
   2. Start with a letter, underscore (_), or dollar sign ($).
   3. Avoid using keywords, reserved words, and special characters.
   4. Use camelCase for multiple word names (e.g. "firstName").
   5. Use PascalCase for constructor functions (e.g. "Person").
   6. Use snake_case for constants (e.g. "MAX_HEIGHT").
   7. It's important to have a consistent naming convention in your code to make it more readable and easier for others (or yourself) to understand in the future.


   11. Math operation in JavaScript ?
   Ans: JavaScript has the following mathematical operators:   +, -, *, /, %, ++, --, **.
    The + operator can be used to add numbers, concatenate strings, or add variables and strings together.
     The - operator can be used to subtract numbers.
      The * operator can be used to multiply numbers.
       The / operator can be used to divide numbers.
        The % operator can be used to find the remainder of a division operation.
         The ++ operator can be used to increment a number by 1. 
         The -- operator can be used to decrement a number by 1.
          The ** operator can be used to find the power of a number. 
          

   12. shorthand math operation ?
   Ans: The shorthand math operators +=, -=, *=, /=, %=, **=, ++, -- can be used to perform math operations on a variable and assign the result to the same variable. For example, x += 5; is the same as x = x + 5;.


   13. --, ++
   Ans:  The ++ operator can be used to increment a number by 1. The -- operator can be used to decrement a number by 1. For example, x++; is the same as x = x + 1;


   14. ParseInt, ParseFloat ?
   Ans: The parseInt() function parses a string and returns an integer. The parseFloat() function parses a string and returns a floating point number. For example, parseInt("10"); will return 10, and parseFloat("10.33"); will return 10.33.


   15. toFixed ?
   Ans: The toFixed() method converts a number into a string, rounding to a specified number of decimals. For example, (10.333).toFixed(2); will return "10.33".


*/

/* 
================================================
   Array questions for interview. (javascript)
================================================
   1. What is array ?
   Ans: An array in JavaScript is a type of data structure that holds a collection of values. It is considered a non-primitive data type and can be used to store multiple values of any data type (primitive or non-primitive). Arrays are ordered and can be accessed and manipulated using their index, which is a zero-based integer that represents the position of each element in the array.

   Arrays are declared using square brackets [], and values are separated by commas. For example:

   let numbers = [1, 2, 3, 4, 5]; // creates an array of numbers
   let names = ['John', 'Jane', 'Jim']; // creates an array of strings

   Arrays provide a convenient way to store and manipulate collections of data, and there are many built-in methods and properties available for working with arrays in JavaScript.


   2. How to declear an array ?
   Ans: let numbers = [1, 2, 3, 4, 5]; // creates an array of numbers


   3. What is the purpose of array ?
   Ans: Arrays provide a convenient way to store and manipulate collections of data, and there are many built-in methods and properties available for working with arrays in JavaScript.


   4. Number of element in an array ?
   Ans:  In JavaScript, you can use the `.length` property to get the number of elements in an array. For example:

   let arr = [1, 2, 3, 4, 5];
   let length = arr.length;
   console.log(length); // 5


   5. What is index ?
   Ans: An index is a position or location of an item in an array or list-like data structure. It is usually represented by a numerical value that starts from 0 for the first item, 1 for the second item, and so on. Indices are used to access and retrieve specific items from an array. For example:

   let arr = [1, 2, 3, 4, 5];
   console.log(arr[2]); // 3 (accessing the 3rd item, whose index is 2)


   6. Find the value of an element using index ?
   Ans:  In JavaScript, you can use the square bracket notation  `[]` with the index of an element to access its value in an array. The index starts from 0 for the first element, 1 for the second element, and so on.

   Here is an example:
   let arr = [1, 2, 3, 4, 5];
   console.log(arr[2]); // Output: 3 (accessing the 3rd element, whose index is 2)


   7. change an element value using index ?
   Ans: You can change the value of an element in an array by using the index and assigning a new value to it:
   let arr = [1, 2, 3, 4, 5];
   arr[2] = 6;
   console.log(arr); // Output: [1, 2, 6, 4, 5]


   8. Get the index of an element by value ?
   Ans: In JavaScript, you can use the `.indexOf()` method to get the index of an element in an array. The method returns the index of the first occurrence of the element in the array. If the element is not found, it returns -1.

   Here is an example:  
   let arr = [1, 2, 3, 4, 5];
   let index = arr.indexOf(3);
   console.log(index); // Output: 2 (the index of the first occurrence of 3)


   9. What does it mean when you get undefined while gettig the value of an element ?
   Ans:  Getting undefined while getting the value of an element in JavaScript means that the variable or property you are trying to access has not been assigned a value. This can happen in the following scenarios:

   1.Accessing an array element that doesn't exist:
   let arr = [1, 2, 3];
   console.log(arr[3]); // Output: undefined

   2. Accessing an object property that doesn't exist:
   let obj = { name: 'John', age: 30 };
   console.log(obj.email); // Output: undefined

   3. Using a variable that has not been declared:
   console.log(x); // Output: Uncaught ReferenceError: x is not defined

   4. Calling a function that has not been declared:
   myFunction(); // Output: Uncaught ReferenceError: myFunction is not a function


   10. How can you add an element in an array at the last position?
   Ans: In JavaScript, you can use the `.push()` method to add an element at the end of an array. The method returns the new length of the array.  
   Example: 
   let arr = [1, 2, 3];
   arr.push(4);
   console.log(arr); // Output: [1, 2, 3, 4]

   You can also use the length property to add an element at the end of an array:

   let arr = [1, 2, 3];
   arr[arr.length] = 4;
   console.log(arr); // Output: [1, 2, 3, 4]


   11. How can you remove the last element from an array ?
   Ans: You can remove the last element from an array in JavaScript using the pop() method:
   
   let arr = [1, 2, 3, 4];
   arr.pop();
   console.log(arr); // Output: [1, 2, 3]

   You can also use the length property to remove the last element:

   let arr = [1, 2, 3, 4];
   delete arr[arr.length-1];
   console.log(arr); // Output: [1, 2, 3, undefined]


   12. Remove the first element from an array ?
   Ans: You can remove the first element from an array in JavaScript using the shift() method:
   let arr = [1, 2, 3, 4];
   arr.shift();
   console.log(arr); // Output: [2, 3, 4]

   You can also use the splice() method to remove the first element:
   let arr = [1, 2, 3, 4];
   arr.splice(0, 1);
   console.log(arr); // Output: [2, 3, 4]


*/

/*
================================================
   Conditional questions for interview. (javascript)
================================================

1. Meaning of > , < , >= , <= , == , === , != , !==
Ans: These are comparison operators in JavaScript used to compare values and return a boolean value of true or false based on the comparison:

1- `>` (Greater Than) returns true if the value on the left is greater than the value on the right.

2- `<` (Less Than) returns true if the value on the left is less than the value on the right.

3- `>=` (Greater Than or Equal To) returns true if the value on the left is greater than or equal to the value on the right.

4- `<=` (Less Than or Equal To) returns true if the value on the left is less than or equal to the value on the right.

5- `==` (Equal To) returns true if the value on the left is equal to the value on the right, after type coercion.

6- `===` (Strict Equal To) returns true if the value on the left is equal to the value on the right, without type coercion.

7- `!=` (Not Equal To) returns true if the value on the left is not equal to the value on the right, after type coercion.

8- `!==` (Strict Not Equal To) returns true if the value on the left is not equal to the value on the right, without type coercion.
It's recommended to use === and !== over == and != to avoid unexpected results due to type coercion.


2. Meaning of `&&` , `||`
Ans: `&&` and `|| `are logical operators in JavaScript, used for evaluating conditions in if statements and other control structures.

1- `&&` represents logical AND and returns the first falsy value or the last value if all are truthy.

2 - `||` represents logical OR and returns the first truthy value or the last value if all are falsy.


3. let's say you have X amount of money, If you have more than 80,000 then you will buy a MacBook. If more than 60,000 then you will buy Lenovo Yoga. If you have more than 20,000 then you will buy used laptop. otherwise you will use your phone.  
Ans:  
   let money = 80000;
   if (money > 80000) {
      console.log('I will buy a MacBook');
   } else if (money > 60000) {
      console.log('I will buy Lenovo Yoga');
   } else if (money > 20000) {
      console.log('I will buy used laptop');
   } else { 
      console.log('I will use my phone');    
   }     
*/

/*

================================================
   Loop questions for interview. (javascript)
================================================

1. What is loop ?
Ans:  In JavaScript, a loop is a control structure that allows you to repeatedly execute a block of code as long as a specified condition is true. There are several types of loops in JavaScript, including for, while, and do-while loops.


2. What is for loop ?
Ans:  A for loop in JavaScript is a type of loop that allows you to repeat a block of code a specific number of times. It consists of three parts: the initial value, the condition to be tested, and the increment or decrement operation. The loop begins with the initial value, continues to run as long as the condition is true, and stops once the condition is false. The increment or decrement operation is used to modify the initial value each time the loop runs, so that the condition can eventually become false. Syntax for for loop:

for (initial value; condition; increment/decrement) {
    // code block to be executed
}

here's an example of using a for loop in JavaScript:
for (let i = 0; i < 5; i++) {
    console.log(i);
}

In this example, the loop initializes the i variable to 0. The loop will continue to run as long as i is less than 5, and i will be incremented by 1 each time the loop runs. As a result, the output will be:

0
1
2
3
4


3. What is while loop ?
Ans:  A while loop in JavaScript is a control flow statement that allows you to execute a block of code repeatedly while a certain condition is met. Here is an example:

let counter = 1;

while (counter <= 5) {
  console.log(counter);
  counter++;
}

// Output:
// 1
// 2
// 3
// 4
// 5

In this example, the counter variable is initialized to 1. The while loop checks if the value of counter is less than or equal to 5. If it is, the code inside the loop block is executed, which logs the value of counter to the console. The value of counter is then incremented by 1 using the counter++ operator. The loop continues to execute until the condition counter <= 5 is no longer met.


4. What is the difference between for loop and while loop ?
The main difference between a for loop and a while loop in JavaScript is the way they control the number of iterations in a code block.

A for loop is best used when you know the exact number of times you want to iterate. It has three parts: an initialization expression, a condition expression, and an increment/decrement expression.

Example:
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// Output:
// 0
// 1
// 2
// 3
// 4

A while loop, on the other hand, is best used when you want to repeatedly execute a code block as long as a certain condition is met. It only has one part, a condition expression.

Example:
let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}

// Output:
// 0
// 1
// 2
// 3
// 4

In general, use a for loop when you know how many iterations you want to execute, and use a while loop when you want to continue iterating until a specific condition is met.


5. What is the purpose of loop ?
The purpose of loops in programming is to repeat a specific block of code multiple times, often with different inputs or conditions. Loops are an essential tool for automating repetitive tasks and making the code more efficient and less prone to errors.

Loops are used to:

Perform an action a specific number of times
Iterate over arrays, strings, or other data structures
Repeat a task until a certain condition is met
Traverse a tree or other complex data structure
With loops, you can avoid having to write the same code multiple times, saving time and improving the readability of your code. Loops can also simplify complex logic by breaking it down into smaller, manageable pieces.

6. How to use for loop ?
A for loop in JavaScript allows you to execute a block of code a specified number of times. The basic structure of a for loop is as follows:

for (initialization; condition; increment/decrement) {
  // code block to be executed
}

Here's an example that uses a for loop to print the numbers 0 through 4 to the console:

for (let i = 0; i < 5; i++) {
  console.log(i);
}

// Output:
// 0
// 1
// 2
// 3
// 4

In this example:

The initialization part declares and initializes a variable i with a value of 0.
The condition part specifies that the loop should continue as long as i is less than 5.
The increment/decrement part increments i by 1 after each iteration of the loop.
The code block inside the for loop is executed repeatedly until the condition i < 5 is no longer met. Each time the loop runs, the value of i is logged to the console.

7. Display "Ajke amar mon valo nei" for 39 times. (loop)
You can use a for loop to repeat the message "Ajke amar mon valo nei" 39 times in JavaScript. Here's an example:

for (let i = 0; i < 39; i++) {
  console.log("Ajke amar mon valo nei");
}

In this example, the for loop initializes the variable i with a value of 0, and continues executing the code block as long as i is less than 39. After each iteration, the value of i is incremented by 1. The message "Ajke amar mon valo nei" is logged to the console 39 times.


8. Display numbers between 58 to 98.  (loop)
You can use a for loop to display the numbers between 58 and 98 in JavaScript. Here's an example:

for (let i = 58; i <= 98; i++) {
  console.log(i);
}

In this example, the for loop initializes the variable i with a value of 58, and continues executing the code block as long as i is less than or equal to 98. After each iteration, the value of i is incremented by 1. The numbers between 58 and 98 are logged to the console.


9. Show all even numbers from 412 to 456 
for (let i = 412; i <= 456; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

In this example, the for loop initializes the variable i with a value of 412, and continues executing the code block as long as i is less than or equal to 456. After each iteration, the value of i is incremented by 1.

The if statement inside the loop checks if the current value of i is divisible by 2 using the modulus operator (%). If i is an even number, it is logged to the console.

10. Sfor (let i = 581; i <= 623; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

In this example, the for loop initializes the variable i with a value of 581, and continues executing the code block as long as i is less than or equal to 623. After each iteration, the value of i is incremented by 1.

The if statement inside the loop checks if the current value of i is not divisible by 2 using the modulus operator (%). If i is an odd number, it is logged to the console.


11. Declear an array for all the topics that you have learned last few days. Then display all the topics using loop. 
Ans:  let topics = [ "HTML", "CSS","BootStrap", "TailwindCSS", "JavaScript",];

12. Create an array for all the mobile phones you have used before. Then display all the mobile phones using while loop.
Ans:
// Create an array of mobile phones
const mobilePhones = ["Symphony L30", "Symphony P6", "Symphony P11", "Walton", "Oppo F1s"];

// Use a while loop to display each mobile phone
let i = 0;
while (i < mobilePhones.length) {
  console.log(mobilePhones[i]);
  i++;
}

13. Run a loop from 30 to 86. This loop will stop if the value get higer than 44.
Ans:  
for (let i = 30; i <= 86; i++) { 
   if (i > 44) {
       break;
   }
   console.log(i);
}

14. Write the price of the books that you have. Display the prices if the prices is lowe than 200.
Ans: 
// Create an array of book prices
const bookPrices = [250, 150, 99, 175, 120, 180];

// Use a for loop to display book prices that are less than 200
for (let i = 0; i < bookPrices.length; i++) {
  if (bookPrices[i] < 200) {
    console.log(bookPrices[i]);
  }
}

*/
