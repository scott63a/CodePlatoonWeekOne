function anagramsTwo(value, array){
  let valueOne = value.toLowerCase().split('').sort().join('')
  let arrayOne = []
  for (let i = 0; i < array.length; i++){
    if(valueOne  === array[i].toLowerCase().split('').sort().join('')){
    arrayOne.push(array[i])
    }
  }
  return arrayOne
}

anagramsTwo("saltier", ["cognac", "saltier", "realist", "retails"])
