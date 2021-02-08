def anagrams_two(value, list):
  answer = []
  for x in list:
    if(sorted(value.lower()) == sorted(x.lower())):
        answer.append(x)
  print(answer)
    

anagrams_two("saltier", ["cognac", "saltier", "realist", "retails"])
