//You decrease the amount of work you have to do with each step

function thisOld(num, array) {
  var midPoint = Math.floor(array.length / 2);
  if (array[midPoint] === num) return true;
  if (array[midPoint] < num) // only look at second half of the array
  if (array[midpoint] > num) // only look at first half of the array
  //recursively repeat until you arrive at your solution

}

thisOld(29, sortedAges) // returns true 

//Notes
//There are a bunch of other checks that should go into this example for it to be truly functional, but not necessary for this explanation.
//This solution works because our Array is sorted
//Recursive solutions are often logarithmic



// first = 0, last = 100
// first = 0, last = 50
// first = 0, last = 25

function binarySearch(value, list) {
  let first = 0,
      last = list.length - 1,
      position = -1,
      found = false,
      middle

  // O(n)
  while (found === false && first <= last) {
    // O(log n)
    middle = Math.floor((first + last) / 2)
    if (list[middle] === value) {
      found = true
      position = middle
    }
    else if (list[middle] > value)
      last = middle - 1
    else
      first = middle + 1
  }

  return position
}




let sortedArray = [11, 24, 30, 43, 51, 61, 73, 86]
function isExists(number, array) {
  let midPoint = Math.floor(array.length / 2)
  if (array[midPoint] === number) return true

  let isFirstHalf = false
  if (array[midPoint] < number) isFirstHalf = true
  else if (array[midpoint] > number) isFirstHalf = false

  if (array.length == 1) return false
  else {
    if (isFirstHalf)
      return isExists(number, getFirstHalf(array))
    else
      return isExists(number, getSecondHalf(array))
  }
}

function getFirstHalf(array) {
  let midPoint = Math.floor(array.length / 2)

  return array.slice(0, midPoint)
}

function getSecondHalf(array) {
  let midPoint = Math.floor(array.length / 2),
      leftOver = - (midPoint + (array.length % midPoint))

  return array.slice(leftOver)
}

isExists(24, sortedArray) // return true
isExists(27, sortedArray) // return false

