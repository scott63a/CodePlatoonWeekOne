function factorial(num) {
  for (var i = num - 1; i >= 1; i--) {
    num = num * i;
  }
  console.log(num);
}
factorial(4);