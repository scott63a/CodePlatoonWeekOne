function armstrongNumbers(input){
  let number = input.toString()
  let multiplyArray = []
  
for(let i = 0; i < number.length; i++){
  multiplyArray.push(number[i] ** 3)
}
let answer = multiplyArray.reduce(function(a, b){
  return a + b;
}, 0);
if(answer === input){
  console.log(`${input} is an armstrong number`)
} else {
  console.log(`${input} is not an armstrong number`)
}
}

armstrongNumbers(153)
