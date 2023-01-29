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
   2. How to declear an array ?
   3. What is the purpose of array ?
   4. Number of element in an array ?
   5. What is index ?
   6. Find the value of an element using index ?
   7. change an element value using index ?
   8. Get the index of an element by value ?
   9. What does it mean when you get undefined while gettig the value of an element ?
   10. How can you add an element in an array at the last position?
   11. How can you remove the last element from an array ?
   12. Remove the first element from an array ?
*/

/*
================================================
   Conditional questions for interview. (javascript)
================================================

1. Meaning of > , < , >= , <= , == , === , != , !==
2. Meaning of && , ||
3. let's say you have X amount of money, If you have more than 80,000 then you will buy a MacBook. If more than 60,000 then you will buy Lenovo Yoga. If you ave more than 20,000 then you will buy used laptop. otherwise you will use your phone.  

*/

/*

================================================
   Loop questions for interview. (javascript)
================================================

1. What is loop ?
2. What is for loop ?
3. What is while loop ?
4. What is the difference between for loop and while loop ?
5. What is the purpose of loop ?
6. How to use for loop ?
7. Display "Ajke amar mon valo nei" for 39 times. (loop)
8. Display numbers between 58 to 98.  (loop)
9. Show all even numbers from 412 to 456 
10. Show all odd numbers from 581 to 623
11. Declear an array for all the topics that you have learned last few days. Then display all the topics using loop. 
12. Create an array for all the mobile phones you have used before. Then display all the mobile phones using while loop.
13. Run a loop from 30 to 86. This loop will stop if the value get higer than 44.
14. Write the price of the books that you have. Display the prices if the prices is lowe than 200.
  
*/
