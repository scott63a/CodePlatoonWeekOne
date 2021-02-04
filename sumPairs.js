pairs = []
function sumPairs(array, sum){
  for(let i = 0; i < array.length - 1; i++){
    for(let k = i+1; k < array.length; k++){
    if(array[i] + array[k] === sum){
        pairs.push([array[i], array[k]])
    } else {
        return 'unable to find pairs'
}
  }
}
return pairs

}

sumPairs([1,2,3,4,5], 7)
