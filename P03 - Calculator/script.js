
//connect to the CSS environment
  let outputField = document.querySelector('.output-field');            //Pulling the display number into the JS environment. 
  const buttonContainer = document.querySelector('.button-container');  //This pulls in the entire keypad, used to log entries 

//set up values for calculation
  
  //This is the continulously updated value that holds the calculation, starts with 0 
  let backgroundValue = [0];    

  //sets up a log of the buttons pressed for future reference, emptied with the clear button.
  let numberOfButtons = -1;
  let inputLog = [{
    buttonType: '',
    buttonValue: '',
  }]; 

  //sets up a log of the functions (this includes the clear and the arithmetics).
  let functionLog = [];
  let numberOfFunctions = -1;

  //sets up a log of display values
  let operandNumber = 0;
  let displayLog = [parseInt(outputField.innerText)];

//Operator functions (+,-,...)
  function multiplication(In1,In2) {
    return In1*In2;
  }

  function division(In1,In2) {
    if(In2=0){
      return 'error:div 0';
    }
    return In1/In2;
  }

  function addition(In1,In2) {
    return In1+In2;
  }

  function subtraction(In1,In2) {
    return In1-In2;
  }


//Operations that occur on button press

buttonContainer.addEventListener('click', function () {
  
  //what does the button say?

    numberOfButtons++;
    inputLog[numberOfButtons]={
      buttonType: '',
      buttonValue: '',
    };
    inputLog[numberOfButtons].buttonType=event.target.className;
    inputLog[numberOfButtons].buttonValue=event.target.innerText;
  

  //what to do withthe information from the button  
  
    if(inputLog[numberOfButtons].buttonType.includes('number')) { 
        //if a function had just been pressed, make a new input field. 
        if(displayLog.length-1<operandNumber){       
          displayLog[operandNumber]=parseInt(inputLog[numberOfButtons].buttonValue)
          outputField.innerText = displayLog[operandNumber];
        } 
        else {
        //add the number to the end for positive numbers
          if(displayLog[operandNumber]>=0){
          displayLog[operandNumber]=(displayLog[operandNumber])*10+parseInt(inputLog[numberOfButtons].buttonValue); 
          }
        //add the number to the end for negative values
          else {
            displayLog[operandNumber]=(displayLog[operandNumber])*10-parseInt(inputLog[numberOfButtons].buttonValue); 
          }
          outputField.innerText = displayLog[operandNumber];
        }
    } 
    
    else if(inputLog[numberOfButtons].buttonType.includes('function')) { //this pulls the fuction buttons
    
      //store this new button press value in the next function slot 
        numberOfFunctions++;
        functionLog[numberOfFunctions]=inputLog[numberOfButtons].buttonValue;
      //check to see if another function was pressed previously 
        if(inputLog[numberOfButtons-1].buttonType.includes('function')){
          //left empty to skip the function steps 
        }
      //if new button isn't a function, run the previous function to display it temporarily
        else{  
            if(functionLog[numberOfFunctions-1]==='x'){
              displayLog[operandNumber]=multiplication(displayLog[operandNumber-1],displayLog[operandNumber]);
            }
            else if(functionLog[numberOfFunctions-1]==='÷'){
              displayLog[operandNumber]=division(displayLog[operandNumber-1],displayLog[operandNumber]);
            }
            else if(functionLog[numberOfFunctions-1]==='+'){
              displayLog[operandNumber]=addition(displayLog[operandNumber-1],displayLog[operandNumber]);
            }
            else if(functionLog[numberOfFunctions-1]==='-'){
              displayLog[operandNumber]=subtraction(displayLog[operandNumber-1],displayLog[operandNumber]);
            } 
          outputField.innerText = displayLog[operandNumber];
          //point to the next bin for storing digits
          operandNumber++;
        } 
    }
    
    else if(inputLog[numberOfButtons].buttonType.includes('delete')) {   //this pulls the delete button
      
        if(displayLog[operandNumber].length===1){     //if there is only one character in the output field and the delete button is pressed, replace the outputField with a zero
          displayLog[operandNumber]=0;
        } else {
          displayLog[operandNumber]=displayLog[operandNumber].toString();
          displayLog[operandNumber]=parseInt(displayLog[operandNumber].slice(0,displayLog[operandNumber].length-1)); //"slice" off a number from the outputField 
        }
        outputField.textContent = displayLog[operandNumber];  //replace the outputField with the updated value.
    } 

    else if(inputLog[numberOfButtons].buttonType.includes('clear')) {    //This pulls the clear button
    //reset everything back to the initial parameters
      numberOfButtons = -1;
      inputLog = [{
        buttonType: '',
        buttonValue: '',
      }]; 
    
      //sets up a log of the functions (this includes the clear and the arithmetics).
      functionLog = [];
      numberOfFunctions = -1;
    
      //sets up a log of display values
      operandNumber = 0;
      displayLog = [0];
      outputField.innerText=displayLog;
      
      /*operandNumber++;
      numberOfFunctions++;
      displayLog[operandNumber]=0;
      functionLog[numberOfFunctions]=inputLog[numberOfButtons].buttonValue;
      console.log(numberOfFunctions);
      outputField.textContent = displayLog[operandNumber];*/
    } 
    
    else if(inputLog[numberOfButtons].buttonType.includes('equals')) {   //This pulls equal signs
      //check to see if another function was pressed previously 
      if(inputLog[numberOfButtons-1].buttonType.includes('equals')){
        //left empty to skip the function steps 
      }
    //if new button isn't a function, run the previous function
      else{    
        operandNumber++;
        //initilize where this next value is going to be dropped in
          displayLog[operandNumber]=0;
        if(functionLog[numberOfFunctions]==='x'){
          displayLog[operandNumber]=multiplication(displayLog[operandNumber-2],displayLog[operandNumber-1]);
        }
        else if(functionLog[numberOfFunctions]==='÷'){
          displayLog[operandNumber]=division(displayLog[operandNumber-2],displayLog[operandNumber-1]);
        }
        else if(functionLog[numberOfFunctions]==='+'){
          displayLog[operandNumber]=addition(displayLog[operandNumber-2],displayLog[operandNumber-1]);
        }
        else if(functionLog[numberOfFunctions]==='-'){
          displayLog[operandNumber]=subtraction(displayLog[operandNumber-2],displayLog[operandNumber-1]);
        }
        outputField.innerText = displayLog[operandNumber];
      }
    }
});
