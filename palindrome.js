function palindrome(str){
  let splitString = str.split(""); 
  let reverseArray = splitString.reverse()
  let joinArray = reverseArray.join("").toLowerCase(); 
    if(joinArray === str.toLowerCase()){
      return true;
    } else {
      return false
    }
}
palindrome('Kayak')
