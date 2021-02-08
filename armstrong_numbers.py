def armstrong_numbers(input):
  number = str(input)
  multiply_array = []

  for i in map(int, number):
    multiply_array.append(i ** 3)
    
  answer = sum(multiply_array)
  if(answer == input):
    print(f"{input} is an armstrong number")
  else:
    print(f"{input} is not an armstrong number")

armstrong_numbers(153)
