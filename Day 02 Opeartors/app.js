// Activity 1 : Arthemetic Operators

let num1 = 34;
let num2 = 46;
console.log(num1 + num2);

let num3 = 45;
let num4 = 50;
console.log(num3 - num4);

let num5 = 6;
let num6 = 9;
console.log(num5 * num6);

let num7 = 5;
let num8 = 2;
console.log(num7 % num8);


// Activity 2 : Assigment Operators
let num9 = 20;
num9 += 5;
console.log(num9);


let num10 = 67;
num10 -= 7;
console.log(num10);


// Activity 3 : Comparison Operators

console.log(10 > 9); // true
console.log(9 > 8); // true
console.log(89 > 105); // false
console.log(9 < 10); // true
console.log(111 < 112); // true
console.log(75 < 74); // false 
console.log(0 > 1); // false
console.log(0 > -1); // true
console.log(1 > -1); // true
console.log(-21 < 1); // true
console.log( 0 < -0); // false
console.log( 0 > -0); // false


// Activity 4 : Logical Operators

let stdMarks = 40;
if(stdMarks >= 60 && stdMarks <= 79){
    console.log("A-Grade");
}else if(stdMarks >= 80 && stdMarks <= 100){
    console.log("A-one");
}else{
    console.log("Failed");
}


let Score = 100;
if (Score == 100 || Score == 120){
    console.log("Good");
}else{
    console.log("Need WOrk");
}


let Gendar = "female";
if( Gendar != "male" ){
    console.log("Gender No-Match");
}else{
    console.log("Gendar is mtach");
}

// Activity 5: Ternary Opeartor:

let num11 = 12;
let TernaryOPerators = num11 >= 10 && num11 <= 15 ? console.log("Number Positive") : console.log("Number is Negative");

let gendar2 = "custome";
let GendarCondition = gendar2 == "male" || gendar2 == "female" ? console.log("Welcom")  : console.log("Gendar no match");

// Feature Request :
/* 01) Arthmetic Operations Script :    
Arthmetic operators used to Multiple Mathamatic Expression Like Additions, Subtractions, Multiplication, Divison, Modulas and others Expressions.


02) Assigmnet Operators :
Assigment operator used to assig value and +, - add with assigning Operator add with previous value.

03) Comparison Operators: 
Comparison Operator used to Compare two different value .



04) Logical Operators:
 3 Types of Logical Operators 1) End Operator && 2) OR Operators ||  3)  Logical NOT !
 End Operator Both value must be true (true && true ) => true
 OR  OPerator One value must be true  (false || true) => true
 NOT Logical Operator used to NOt equal value.


 05) Ternary Operators:
Ternary Operator allow to code short term like conditions.
*/





  