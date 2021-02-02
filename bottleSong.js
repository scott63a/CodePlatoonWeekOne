function bottleSong(bottles){
  var bottles;
  
  while (bottles > 1){
    console.log(bottles + " bottles of beer on the wall, " + bottles + " bottles of beer.");
    console.log("take one down and pass it around, ");
    bottles = bottles - 1;
    console.log(bottles + " bottles of beer on the wall.");
  } if(bottles === 1){
    console.log(bottles + " bottle of beer on the wall, " + bottles + " bottle of beer.");
    console.log("take one down and pass it around, ");
    bottles = bottles - 1;
    console.log("No more bottles of beer on the wall.")
  } if (bottles === 0) {
    console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
  }
  };
  
  bottleSong(5);