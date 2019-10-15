// ==== Challenge 1: Write your own closure ====
// Write a closure of your own creation.
// Keep it simple! Remember a closure is just a function
// that manipulates variables defined in the outer scope.
// The outer scope can be a parent function, or the top level of the script.

const whatISaidBefore = 'I can\'t believe I ate the whole thing';

function repeatingMyself() {
  return (`What I said before is "${whatISaidBefore}."`);
}
console.log(repeatingMyself());

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 2: Implement a "counter maker" function ====
let count = 0;

function counterMaker() {
  
  function counter() {
    count++;
    return count;
  }
  return counter();
};

console.log(counterMaker());
console.log(counterMaker());
console.log(counterMaker());

// ==== Challenge 3: Make `counterMaker` more sophisticated ====
// It should have a `limit` parameter. Any counters we make with `counterMaker`
// will refuse to go over the limit, and start back at 1.
count = 0;

function counterMaker2() {
  
  if ( count >= 10 ) {
    count = 0;
  }
  function counter() {
    count++;
    return count;
  }
  return counter();
};

console.log(counterMaker2(), counterMaker2(), counterMaker2(), counterMaker2(), counterMaker2(), counterMaker2(), counterMaker2(), counterMaker2(), counterMaker2(), counterMaker2(), counterMaker2(), counterMaker2(), counterMaker2(), counterMaker2(), counterMaker2());

// ==== Challenge 4: Create a counter function with an object that can increment and decrement ====


function counterFactory() {

  let newcount = 0;

  return {
    increment: function () {
      newcount++;
      return newcount;
    },
    decrement: function () {
      newcount--;
      return newcount;
    },
  };
};

const newCounter = counterFactory();

console.log(newCounter.increment(), newCounter.increment(), newCounter.increment(), newCounter.increment(), newCounter.increment(), newCounter.increment(), newCounter.decrement(), newCounter.decrement(), newCounter.decrement(), newCounter.decrement(), newCounter.decrement(), newCounter.decrement(), newCounter.decrement(), newCounter.decrement(), newCounter.decrement(), newCounter.decrement(), newCounter.decrement(), newCounter.decrement(), newCounter.decrement(), newCounter.decrement(), newCounter.decrement(), newCounter.decrement()) ;
