def fizzbuzz():
  answer = []
  for i in range(1,101):
    if i % 3 == 0 and i % 5 == 0:
        answer.append("Fizzbuzz")
    elif i % 3 == 0:
        answer.append("Fizz")
    elif i % 5 == 0:
        answer.append("Buzz")
    else:
        answer.append(i)
        
  return answer
  

fizzbuzz()
