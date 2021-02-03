def bottleSong(bottles):

  if bottles == 1:
    print(str(bottles) + " bottle of beer on the wall, " + str(bottles) + " bottle of beer.");
    print("take one down and pass it around, ");
    bottles = bottles - 1;
    print("No more bottles of beer on the wall.")

  elif bottles == 2:
    print(str(bottles) + " bottles of beer on the wall, " + str(bottles) + " bottles of beer. Take one down and pass it around, ")
    bottles = bottles - 1
    print(str(bottles) + " bottle of beer on the wall.")

  elif bottles > 2:
    print(str(bottles) + " bottles of beer on the wall, " + str(bottles) + " bottles of beer. Take one down and pass it around, ")
    bottles = bottles - 1
    print(str(bottles) + " bottles of beer on the wall.")
  else:
    print("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.")

bottles = 15;

while bottles >= 0:
  bottleSong(bottles)
  bottles -=1