//define variable
let apple = "apple";

let uppercaseApple = "APPLE";

let ten = 10;
let twenty = 20; 

let fruits =["Apple","Mango","Banana"];

//test for equality and inequality with strings
console.log("Is apple is equal to apple?");
console.log(apple == "apple");

console.log("\nIs apple is not equal to apple?");
console.log(apple != "apple");

//test using lowercase function
console.log("\nIs APPLE is equal to apple after converting to lowercase ?");
console.log(uppercaseApple.toLowerCase() == "apple");

console.log("\nIs APPLE is not equal to apple after converting to lowercase ?");
console.log(uppercaseApple.toLowerCase() != "apple");

//numerical test
//equals to(==)
console.log("\nIs ten is equals to twenty?");
console.log(ten == twenty);

//not equals to(!=)
console.log("\nIs ten is not equals to twenty?");
console.log(ten != 20);

//greater than(>)
console.log("\nIs ten is greater to zero?");
console.log(10 > 0 );

//less than(<)
console.log("\nIs twenty is less than 10?");
console.log(20 < 10);

//equals to or greater than (>=)
console.log("\n Is ten is greater than or equals to 5?");
console.log(10 >= 5);

//less than or equals to(<=)
console.log("\nIs twenty is less than or equals to 10?");
console.log(20 <= 10);

//test using "and" & "or" operators
//&& uses for "and"
console.log("\ntwenty is not equals to 10 and twenty is greater than 10");
console.log(twenty !=10 && twenty > 10);

console.log("\ntwenty is not equals to 10 and twenty is greater than 30");
console.log(twenty !=10 && twenty > 30);

//using || for "or"
console.log("\n20 is greater than 50 or 20 is equal to 20");
console.log(20 > 50 || 20 ==  20);

console.log("\n20 is greater than 50 or 20 is not equal to 20");
console.log(20 > 50 || 20 !=  20);

//test whether and itemes included in array
console.log("\n Is Banana is included in my fruits array");
console.log(fruits.includes("Banana"));

//not included
console.log("\n Is Banana is not included in my fruits array");
console.log(!fruits.includes("Banana"));
