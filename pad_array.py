def pad_array(array, length, filler):
  size = length - len(array)
  array_one = array
  while(size > 0):
    array_one.append(filler)
    size -= 1
  print(array_one)

pad_array([1,2,3], 7, 'apple')
