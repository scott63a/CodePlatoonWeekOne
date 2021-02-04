list = ['b','a','n','a','n','a','s']
answer = [];
def linearSearch(array, elem):
  for letter in range (len(array)):
    if array[letter] == elem:
        answer.append(letter)
  return answer
    


linearSearch(list, 'a')
