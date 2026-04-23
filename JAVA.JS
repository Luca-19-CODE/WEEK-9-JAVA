console.log("Hello, World!");
console.log(5);
console.log(5 + 10);
console.log("I am older than " + 18 + " years old.");

let text = "This is a string."; //making a variable called text that can change in value
console.log(text);

text = "This is a new string."; //redifining the pre existing variable text to a new value
console.log(text);

let num = 5; //making a variable called num that can change in value
console.log(num);
let num2 = 10;
console.log(num2);
console.log(num + num2 + " is the result of both numbers"); //adding the two variables together and printing the result
//or you can make it like: let total; and assign the value later on
let total = num + num2; //making a new variable called total that is the result of adding num and num2 together

let bool = true; //making a variable called bool that can change in value
console.log(bool);
bool = false;
console.log(bool);

//making  number array
let array = [1, 2, 3, 4, 5]; //making a variable called array that can change in value
console.log(array);
array.push(6); //adding a new value to the end of the array
console.log(array);
array.pop(); //removing the last value of the array
console.log(array);
console.log(array[1]); //printing the value at index 1 of the array

//making a string array
let array2 = ["String 1", "String 2", "String 3"]; //making a variable called array2 that can change in value
console.log(array2);
array2.push("Temp String"); //adding a new value to the end of the array
console.log(array2);
array2.pop(); //removing the last value of the array
console.log(array2);
console.log(array2[1]); //printing the value at index 1 of the array

let object = {
    name: "object",
    isUseful: true,
    parts: ["name" , "curly brackets", "key value pairs", "comma splits"],
    pairs: 4
}
console.log(object);
console.log(object.name);
console.log(object.parts[2]);

console.log(Object);
console.log(Object.isusefull);
console.log(Object.parts[1]);




// compairs the values to check if the values are the same ==

let age = 18;

if( age >=18){console.log("you are an adult");}else{console.log("go home, you are a child");}

let int = 10;
let notint = "10";


num3 = 12;
firstname = "John";

if (num3 >=14)