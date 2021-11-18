function fib() {
  let a = 0;
  let b = 1;
  let result = b;
  for (let i = 1; i < 10; i++) {
    console.log(result);
    result = a + b;
    a = b;
    b = result;
  }
}

console.log(fib());
