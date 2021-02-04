pairs = []
def sum_pairs(array, sum):
  for i in range(len(array)-1):
        for k in range(i+1, len(array)):
            if array[i] + array[k] == sum:
                pairs.append([array[i], array[k]])
            else:
                print('unable to find pairs')
  print(pairs)


sum_pairs([1,2,3,4,5], 7)
