let numberOfOccurrences = (input) => {
  let str = input.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s/g, '').toLowerCase();
    let characters = {}
   
  for(let i = 0; i < str.length; i++){
    if(characters[str[i]]){
    characters[str[i]] += 1;
  } else {
    characters[str[i]] = 1;
  }
  }
  const sortCharacters = Object.fromEntries(
    Object.entries(characters).sort(([,b],[,a]) => a-b)
);

console.log(sortCharacters);
 
  //console.log(characters)
  }
  numberOfOccurrences('an apple a day will keep the doctor away')
