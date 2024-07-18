// Problem 1: Three ways to sum to n

// Output: sum(5) -> 1 + 2 + 3 + 4 + 5

var sum_to_n_a = function (n) {
  // your code here
  let sum = 0
  for (i = 1; i <= n; i++) {
    sum += i
  }
  return sum
}

var sum_to_n_b = function (n) {
  // your code here
  let sum = 0
  let i = 1
  while (i <= n) {
    sum += i
    i++
  }
  return sum
}

var sum_to_n_c = function (n) {
  // your code here
  let sum = 0
  return (sum = (n * (n + 1)) / 2)
}

let n = 10

console.log(`Sum of ${n} - A:`, sum_to_n_a(n))
console.log(`Sum of ${n} - B:`, sum_to_n_b(n))
console.log(`Sum of ${n} - C:`, sum_to_n_c(n))
