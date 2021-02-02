let list = ['b','a','n','a','n','a','s']
let answer = [];
function something(array, letter){
  for(let i = 0; i < array.length; i++){
    if(array[i] === letter)
      answer.push(i);  
  }
console.log(answer);
}

something(list, 'a')