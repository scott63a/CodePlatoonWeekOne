function anagrams(stringOne, stringTwo){
  string1 = stringOne.toLowerCase().split('').sort().join('')
  string2 = stringTwo.toLowerCase().split('').sort().join('')
  if(string1 === string2){
    return true
  } else {
    return false
  }
}

anagrams('abcde2', 'c2abed')
