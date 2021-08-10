/* 
function inschToFeet(insch){
    toFeet = insch / 12;
    return toFeet
}

 let feet = parseFloat(inschToFeet(244).toFixed(2))
 console.log(feet)

 function evenOrOdd(num){
     if (num % 2==0){
         return num + ' is even number'
     }
     return num + ' is not even number'
 }
 let myNumber = evenOrOdd(501)
 console.log(myNumber)



 function isLeapOrNot(yrs){
     if (yrs%4 ==0 && yrs %100 != 0 ||yrs%400 ==0){
         return yrs + ' is leap year'
     }
     return yrs + ' is not leap year'
 }

 let myYear =isLeapOrNot(2200)
 console.log(myYear)
 */

 // Factorial
/* 
factorial = 1;
for (let i=1;i<=7;i++){
    factorial = factorial*i
}

console.log(factorial)

factorial = 1;
let i=1;
while (i<=8){
    factorial = factorial*i
    i++
}

console.log(factorial)
*/

// Function Factorial

/*
function factorial(num){
    factorial = 1;
    for(let i=1;i<=num;i++){
        factorial = factorial*i;
    }
    return factorial
}
let my =factorial(7);
console.log(factorial)

function factorials(num){
    factorial = 1;
    let i=1;
    while(i<=num){
        factorial = factorial*i;
        i++;
    }
    return factorial
}
let myFactorials =factorials(8);
console.log(myFactorials)
*/


/*
function factorial(num){
    factorial = 1;
    for(let i=num;i>=1;i--){
        factorial = factorial*i;
    }
    return factorial
}
let my =factorial(7);
console.log(factorial)

function factorials(num){
    factorial = 1;
    let i=num;
    while(i>=1){
        factorial = factorial*i;
        i--;
    }
    return factorial
}
let myFactorials =factorials(8);
console.log(myFactorials)
*/

// Factorial recurtion

function factorial(n){
    if (n==1){
        return 1
    }
    return n * factorial(n-1);
}
let myFactorial =factorial(8);
console.log(myFactorial)

co