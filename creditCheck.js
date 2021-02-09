function creditCheck(number){
let reversedArray = number.toString().split('').reverse()
let multipliedArray = []
let summedDigits = []

for(let i = 0; i < reversedArray.length; i++){
  if([i] % 2 === 0){
  multipliedArray.push(parseInt(reversedArray[i]))
  } else {
    multipliedArray.push(reversedArray[i] *= 2)
  }
}
for(let i = 0; i < multipliedArray.length; i++){
    if(multipliedArray[i] > 9){
    summedDigits.push(multipliedArray[i] - 9)
  } else {
    summedDigits.push(multipliedArray[i])
  }
}
let summedArray = summedDigits.reduce((a, b) => a + b, 0)
if(summedArray % 10 === 0){
    console.log(`${number} is a valid credit card number`)
  } else {
    console.log(`${number} is not a valid credit card number`)
  }
}
creditCheck(5541808923795240)
