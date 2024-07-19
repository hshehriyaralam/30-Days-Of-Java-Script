// Activity 01 : IF-Else Statements
// Task 01 :

let num1 = 5;
if (num1 > 0 ){
    console.log( num1, "Number is positive");
}else if (num1 < 0){
    console.log(num1 ,"Number is Negative ");
}else{
    console.log( num1, "Number is 0");
};

// Task 02:
let personeAge = 19;
if(personeAge >= 18){
    console.log( personeAge, "Your AGE is Eligible");
}else{
    console.log(personeAge, "Persone AGE isn't Eligible")
};


// Activity 2 : Nested If-else Statements
let a = 30;
let b = 40;
let c  = 10;
 if(a >= b){
    if(a >= c){
        console.log(a, "a is Largest number");
    }else{
        console.log(c , "c is largest number");
    }
 } else{
    if (b >= c){
        console.log(b , "B is largest number");
    }else{
        console.log(c, "c is largest number");
    }
 }


// Activity 3 : Switch Case
let dayNumber = 3;
switch(dayNumber){
    case 1:
        console.log(dayNumber, "Sunday");
        break;
     case 2:
           console.log(dayNumber, "Monday");
        break;
    case 3 : 
        console.log(dayNumber, "Tuesday");   
        break;    
    case 4 :
        console.log(dayNumber , "Wednesday");
        break;
    case 5 :
        console.log(dayNumber, "Thursday");
        break;
    case 6 :
        console.log(dayNumber, "friday");            
        break;
    case 7 :
        console.log(dayNumber, "Saturday");    
}


let stdScore = 43
switch (true){
    case (stdScore >= 79 && stdScore <= 100):
    console.log(stdScore, "Grade A-One");
    break;
    case (stdScore >= 70 && stdScore <= 78) :
    console.log(stdScore, "Grade A");
    break;
    case (stdScore >= 60 && stdScore <= 69)  :
    console.log(stdScore , "Grade B");
    break;
    case (stdScore <= 59):
        console.log(stdScore , "Fail");
}


// Activity 4 : Conditional (Ternary) Operator
let number10 = 7
number10 % 2 == 0 ? console.log(number10 , "Even") : console.log(number10, "Odd");


// Activity 5 : Combining Condition

const year = 2021
if (year % 4 === 0){
    if(year % 100 === 0){
        if(year % 4000 === 0){
            console.log(`${year} is a leap year`);
        }else{
            console.log(`${year} is not a leap year`);
        }
    }else{
        console.log(`${year} is a leap year`);
    }
}else{
    console.log(`${year} is not a leap year`);

}

/*
// Feature Request :

1) Number Check Script : 
IF we check Positive and negative value , assign value > 0 to output positive and value < 0 output negative and assign 0 , o output 0

2) Voting Eligibilty Script : 
If we check Voting Eligibilty assign if Statment If Voter age is equal Or Greater than 18 then Eligible to Voting 

3) Day of Week Script :
If check day of Week Use Switch case Statement assign multiple cases and start number with 1 in Sunday and True Condition break statement 

4) Grade Assigment Script : 
If we make result in If Condition is very eassy but make result in switch case statement difficult , switch case parenthesis declare "true" and make multiple cases as Day of week.

5) Leap Year Check Script :
Leap year Check multiple conditions and nested condition .. and assign very deep logic
*/