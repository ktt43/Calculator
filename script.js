
const displayArea = document.querySelector("#output");
const displayHistory = document.querySelector("#history");
const clearButton = document.querySelector("#clear");
const history = document.querySelector("#history");

const numberButtons = document.querySelectorAll(".digit");
const operatorButtons = document.querySelectorAll(".operator");

let numOne=null;
let numTwo=null;
let result=null;
let currentOperator=null;

let onSecond=false;

// null == 0
function plus(x,y){
    if(x+y!=undefined){
        return x+y;
    }
    return 0;
}

function subtract(x,y){
    if(x-y!=undefined){
        return x-y;
    }

    return null;
}

function multiply(x,y){
    return x*y;
}

function divide(x,y){
    if(y!=0){
        return x/y;
    }
    return undefined;
}

function operate(operator,x,y){
    return operator(x,y);
}


function clearAll(e){
    numOne=null;
    numTwo=null;
    result=null
    currentOperator=null;
    displayHistory.textContent=0;
    displayArea.textContent=null;
    tempDisplay=""
    onSecond=false;
}

clearButton.addEventListener('click',clearAll);
let tempDisplay="";
// When Clicking ON Numbers; Updates the Display Area
function updateDisplay(e){
    displayArea.textContent=displayArea.textContent + e.target.value;    
    if(currentOperator != null && onSecond){
        displayArea.textContent=null;
        tempDisplay= tempDisplay +displayArea.textContent + e.target.value;
        console.log(tempDisplay);
        displayArea.textContent=tempDisplay;
        console.log("In update: " +numTwo);
    }
}

numberButtons.forEach(num=> num.addEventListener('click',updateDisplay));

let tempSymbol="";
function setOperands(e){
    
    if(e.target.id != "equal"){
        currentOperator = e.target.id;
        
        tempSymbol=e.target.value;
    }
    console.log("At Start: " +numTwo);
    if(currentOperator!=null){
        
        if(numOne==null){
            if(isNaN(parseInt(displayArea.textContent))){
                numOne=0;
            } else {
            numOne = parseInt(displayArea.textContent);
            }
            onSecond=true;
            return;
    } else if(onSecond ){    
        numTwo= parseInt(displayArea.textContent);
       
        console.log("At mid " +numTwo);
    } 

    if(!onSecond){
        onSecond=true;
        return;
    }
let tempHistory="";
console.log(numOne +":"+numTwo);

    if(!isNaN(numOne) && !isNaN(numTwo)){

        result = operate(window[currentOperator],numOne,numTwo);
        displayArea.textContent=result;
        displayHistory.textContent=null;
        tempHistory= result;
        displayHistory.textContent= tempHistory;
        numOne=parseInt(result);
        numTwo=null;
        result=null;
        currentOperator=null;
        onSecond=false;
        tempDisplay="";

    }
}

}
operatorButtons.forEach(operator => operator.addEventListener('click', setOperands));



