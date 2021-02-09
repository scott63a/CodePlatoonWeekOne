def credit_check(number):
  reversed_list = str(number)[::-1]
  multiplied_list = []
  summed_digits = []
   
  for index, item in enumerate(reversed_list):
    if(index % 2 == 0):
        multiplied_list.append(int(item))
    else:
        multiplied_list.append(int(item) * 2)
  for i in multiplied_list:
    if(i > 9):
        summed_digits.append(i - 9)
    else:
        summed_digits.append(i)
    summed_list = sum(summed_digits) 
  if(summed_list % 10 == 0):
    print(f"{number} is a valid credit card number")
  else:
    print(f"{number} is not a valid credit card number")
    
credit_check(5541808923795240)
