function padArray(array, length, filler){
  let size = length - array.length
  let arrayOne = array
  while(size > 0){
    arrayOne.push(filler)
    size --;
  }
  return arrayOne
  }
  
  padArray([1,2,3], 7, 'apple')
