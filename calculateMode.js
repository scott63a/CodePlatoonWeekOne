function calculateMode(array){
let occurances = {};
let answer = [];
let maxVal = 0;
for(let i = 0; i < array.length; i++){
let element = array[i];
  if(occurances[element]){
    occurances[element] += 1;
    maxVal = occurances[element];
  } else {
    occurances[element] = 1;
    maxVal = occurances[element]
  } 
}
  for (key in occurances) {
    if(occurances[key] === maxVal){
      answer.push(key);
    } 
  }
  return answer
}
console.log(calculateMode(["who", "what", "where",'who']))
console.log(calculateMode([1,1,2,2]))
