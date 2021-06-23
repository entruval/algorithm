// first
function swap(array, i, j) {
  let temp = array[i]
  array[i] = array[j]
  array[j] = temp
}

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let min = i
    for (let j = 0; j < array.length; j++) {
      if (array[j] < array[min]) { min = j }
    }

    if (i !== min) {
      swap(array, i, min)
    }
  }

  return array
}


// second
function nToThePowerOfM(n, m) {
  if (m == 0) { return 1 }
  let sum = 0
  
  for (let i = 0; i < n; i++) {
    sum += nToThePowerOfM(n, m - 1)
  }

  return sum
}

