// Activity 01 : For Loop

for (let index = 1; index <= 10; index++) {
    const element = index;
    console.log(element);
}

// 5 Table 
let TableNumber = 5;
let tableLenght = 10;
for (let i = 1; i <= tableLenght; i++) {
    const element = TableNumber + ` * ` + i + ` = ` + TableNumber*i;
    console.log(element);   
};


// Activity 02 : While Loop


let i3 = 1;
let sum1 = 10
while ( i3 <= sum) {
    const element = ` Sum of ${i3} is ` + i3 + sum1; 
    console.log(element);
    i3 = i3 + 1;
}


let sum2 = 0;
let i2 = 1;
while (i2 <= 10) {
    sum2 =  sum2 + i2
    console.log(sum2);
    i2++;
}

/*
//result 
1 :1
3 :1+2 
6 :3 + (1+2)
10 :4 + (3 + (1+2))
15 :5 + (4 + (3 ( 1+ 2)))
21 :6 + (5 + 4 + 3 + 1 + 2)
28 :7 ( 6 + (5 + 4 + 3 + 1 + 2))
36 :8 ( 7 ( 6 + (5 + 4 + 3 + 1 + 2)))
45 :9 (8 ( 7 ( 6 + (5 + 4 + 3 + 1 + 2))))
55  :10 ( 9 (8 ( 7 ( 6 + (5 + 4 + 3 + 1 + 2)))) )
*/


// Print NUmber 10 to 1
let i1 = 10
while (i1 >= 1) {
    console.log(i);
    i1 = i1-1;
}


// Activity 3 : Do...While loop
let doWhile = 1;
do{
    console.log(doWhile);
    doWhile++;
}while(doWhile <= 5)


let FactorialNumber = 4;
let result = 1;
let  i = FactorialNumber;
do{
    result *= i;
    i--;
}while(i > 0)
    console.log(`factorial of ${FactorialNumber} is ${result}`);

// Activity 4 : Nested Loop

for (let i = 0; i <= 1; i++) {
    console.log(i, " i");
    if (i == 1) {
        break
    }
    for (let j = 0; j <= 1; j++) {
        console.log(j , "j");
        
    }
    for (let k = 0; k <= 2; k++) {
        console.log(k, "K");
        
    }
    for (let L = 0; L <= 3; L++) {
        console.log(L, "L");
        
    }
    for (let m = 0; m <= 4; m++) {
        console.log(m, "m");
        
    }
    break;
}

// Activity 5 : Loop Control Statements
for (let i = 1; i <= 10; i++) {
    if(i == 5){
        console.log("5 is Skip");
        continue;
    }
    console.log(i);
}

for (let i = 1; i <= 10; i++){
    if(i == 7){
        console.log("Stop loop");
        break;
    }
    console.log(i);
}