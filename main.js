var fizzCount = 0, buzzCount = 0, fizzBuzzCount = 0;

for(i = 1; i <= 100; i++){
  if(!(i%3) && !(i%5)) {
    console.log(i, "FizzBuzz"); fizzBuzzCount++;
  }else if(!(i%3)) {
    console.log(i, "Fizz"); fizzCount++;
  }else if(!(i%5)) {
    console.log(i, "Buzz"); buzzCount++;
  }else{
    console.log(i);
  }
}

console.log("Fizz's:", fizzCount);
console.log("Buzz's:", buzzCount);
console.log("FizzBuzz's:", fizzBuzzCount);