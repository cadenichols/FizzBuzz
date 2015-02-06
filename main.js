var fizzCount = 0;
var buzzCount = 0;
var fizzBuzzCount = 0;

for(i = 1; i <= 100; i++){
  if(!(i%3) && !(i%5))  { console.log(i, "FizzBuzz"); fizzBuzzCount++; continue; }
  if(!(i%3))            { console.log(i, "Fizz"); fizzCount++; continue; }
  if(!(i%5))            { console.log(i, "Buzz"); buzzCount++; continue; }
  console.log(i);
}

console.log("Fizz's:", fizzCount);
console.log("Buzz's:", buzzCount);
console.log("FizzBuzz's:", fizzBuzzCount);