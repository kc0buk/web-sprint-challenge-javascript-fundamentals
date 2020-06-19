// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 

// nestedFunction is able to reach up to the internal variable because it is still within the lexical environment it has access to. Functions are able to look for variables by looking to a higher scope, but not a lower scope.

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

// let summation = (num) => {
//   let count = num;
//    for (let i = 0; i < num; i++) {
//       count += i;
//    }
//    return count;
// }

// console.log(summation(4));

let summation = (num) => {
  let count = num;
  return (num) => {
    return (num * (num + 1)) / 2;
  }
}

let counter = summation();

console.log(counter(4));