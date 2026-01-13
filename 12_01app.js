/* 
TOPICS:
1. variables in js
2. Datatypes in js
3. Objects, Array in js
4. Arithemetic Operators in js 

*/

var num=30;
console.log(num); //output will be stored in console
document.write(num); //will be shown in html page

//variable in js

let apple = "fruit";
console.log(apple);
let apple="red";
console.log(apple);

let gives error as we cannot define apple again

var apple="fruit";
console.log(apple);
var apple="red";
console.log(apple); 

this will give output as fruit and then red as var enable the variable to be redefined.

const apple="fruit";
console.log(apple)
apple="red";
console.log(apple); // will give error as const doesn't allow to redefine variable 



// DATATYPES IN JS


document.write("we are learning datatypes <br><br>"); //string
document.write(1234); //number

Boolean= true,false
test=10>20; //boolean
document.write(test);



// Object / array in JS 

let apple=["red","green","blue",50,{name:"fruit"}] // array declaration
console.log(apple);

const games = {
    cricket: "sachine",
    tennis: "sania"
} //object declaration
console.log(games); 

console.log(typeof apple); // output: object
console.log(typeof games);

// ARITHEMETIC OPERATIOR IN JS

var a=60;
var b=30;
//document.write("result:",a+b); //addition
console.log("result:", a+b);
console.log("difference",a-b); //substraction
console.log("product", a*b); //multiplication
console.log("modulus:",a%b) 
console.log("division",a/b)// division(modulus)

console.log("result",++a); //increment
console.log("result:",--b); //decrement

