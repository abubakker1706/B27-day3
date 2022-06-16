// For the given JSON iterate over all for loops (for, for in, for of, forEach)

//1. Using an array for loop

var numbers = [ 10, 20, 30, 40, 50];
for (var i=0; i < numbers.length; i++) {
   console.log(numbers[i])
}

//2. Looping through an Object Property using for in.

var person = [ 10, 20, 30, 40, 50]; 
 for (let x in person) {
    console.log(x + ": "+ person[x])
 }

//3. The ForEach() Loop

var names = [ 10, 20, 30, 40, 50];;
names.forEach(function1);
function function1(currentValue, index) {
   console.log("Index in array is: "+index + " ::  Value is: "+currentValue);
}

//4. The for of loop.

const iterable = [ 10, 20, 30, 40, 50];

for (const value of iterable) {
  console.log(value);
}