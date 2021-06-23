[notes]
  [Big O]
    - Execution time required / time complexity or the memory space used / space complexity


[list]
  O(1) - constant
  O(n) - linear
  O(n ** 2) - quadratic
  O(2 ** n) - exponential
  O(n ** n) - exponential
  O(n!) - factorial
  O(log n) - logarithmic


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

  O(n log n)

    O(n)
      O(log n)
    for (let i = 0; i < n; i++) {
      while (n > 0) {
        n /= 2
      }
    }

  O(n!)
    function filter(n) {
      for (i = 0; i < n; i++) {
        filter(n-1)
      }
    }

