  function hasTargetSum(array, target) {
    //create object to keep track of numbers seen
    const seenNumbers = {}
    //iterate through each number in the array
    for (let i = 0; i < array.length; i++) {
      // for the current num, identify complement that adds to the target (comp = target - num)
      const complement = target - array[i]
      //check if any key on our obj is complement
      //if so, return true
      if (seenNumbers[complement]) return true
      //otherwise, add that number to obj
      seenNumbers[array[i]] = true
    }
    //if reach end of array, return false
    return false

  }


// function hasTargetSum(array, target) {
//   for (let i = 0; i < array.length; i++) {
//     const complement = target - array[i]
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[j] === complement) return true
//     }
//   }
//   return false
// }

/* 
  O(n)

  O(nˆ2)
*/

/* 
  hasTargetSum([1,2,3,4], 6)
  seenNumbers = {
    1: true,
    2: true,
    3: true
  }
  Create obj to keep track of numbers we've seen
  iterate through each num in array
    for the current num, identify complement that adds to the target (comp = target - num)
    check if any key on our obj is the complement
      if so, return true
      otherwise, add that number to the obj


///////////////////////////////////////////////////////////////////////
  Iterate through each number in array
    for the current num, identify complement that adds to the target (comp = target - num)
    iterate through the rest of the array
      check if any number is our complement
        if so, return true
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
