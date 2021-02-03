


  //let output = 'Grandma is listeneing...'
  let counter = 0;
  function deafGrandma(input){
      if (input === ''){
        output = 'WHAT?!';
      } else if (/[a-z]/.test(input)){
        output = 'SPEAK UP, KID!';
      } else if (input === 'GOODBYE!' && counter == 0){
          output = 'LEAVING SO SOON?';
          counter++;
      } else if (input === 'GOODBYE!' && counter == 1){
          output = 'LATER SKATER';
          counter++;   
      } else if (input === input.toUpperCase()){
        output = 'NO, NOT SINCE 1946!';
      }
      console.log(output);
      
    };
    
deafGrandma('HI GRANDMA');
deafGrandma('GOODBYE!');
deafGrandma('GOODBYE!');
