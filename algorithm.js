[notes]
  // [Big O]
  //   - Execution time required or the memory space used (time complexity / space complexity)


[list]
  O(1) - constant
  O(n) - linear
  O(n ** 2) - quadratic
  O(2 ** n) - exponential
  O(n ** n) - exponential
  O(n!) - factorial
  O(log n) - logarithmic
  O(n log n) - logarithmic


[examples]
  O(1)
    const s = 0


  O(n)
    for (let i = 0; i < n; i++) {}


  O(n ** 2)

    O(n)
      O(n)
    for (let i = 0; i < x; i++) {
      for (let j = 0; j < y; j++) {}
    }


  O(log n)
    while (n > 0) {
      n /= 2
    }

    // - the number of steps it takes to accomplish the task are decreased by some factor with each step
    // [cases]
    //   - Binary search
    //   - Finding largest / smallest number


  O(n log n)

    O(n)
      O(log n)
    for (let i = 0; i < n; i++) {
      while (n > 0) {
        n /= 2
      }
    }

    // - divides the input in half using recursion, sort, and merge
    // [cases]
    //   - Merge sort
    //   - Quick sort


  O(n!)
    function filter(n) {
      for (i = 0; i < n; i++) {
        filter(n-1)
      }
    }



https://www.freecodecamp.org/news/time-is-complex-but-priceless-f0abd015063c/
https://www.bigocheatsheet.com/

