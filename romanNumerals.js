//return roman numerals from arabic numeral
// create object key = arabic value = roman numeral
// 

function toRoman(num) {
  var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  var result = '';

  for (var i = 0; i <= decimal.length; i++) {//look up the array decimal for values
      //looping over every element of arrays
      while (num % decimal[i] < num) {
          //keep trying the same number until we need to move to a smaller one
          result =result+ roman[i];
          //add the matching roman number to our result 
          num =num-decimal[i];
          //subtract decimal value of the roman number from our number
      }//end while loop

  }//end for loop

  return result;
} //end function statement
//call function example 
toRoman(900)