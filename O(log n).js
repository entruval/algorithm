function binarySearch(value, list) {
  let first = 0,
    last = list.length - 1,
    position = -1,
    found = false,
    middle

  // sequence
  // first = 0, last = 100
  // first = 0, last = 50
  // first = 0, last = 25
  // O(n)
  while (found === false && first <= last) {
    // O(log n)
    middle = Math.floor((first + last) / 2)
    if (list[middle] === value) {
      found = true
      position = middle
    }
    else if (list[middle] > value) {
      last = middle - 1
    }
    else {
      first = middle + 1
    }
  }

  return position
}

