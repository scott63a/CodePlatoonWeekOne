def calculate_mode(list):
  occurances = {}
  max_val = 0
  answer = []
  for i in list:
    if i not in occurances:
        occurances[i] = 1
        max_val = occurances[i]
    else:
        occurances[i] += 1
        max_val = occurances[i]
  for key in occurances:
    if(occurances[key] == max_val):
        answer.append(key)
    
  print(answer)
  
calculate_mode([1,2,3,3,3])
