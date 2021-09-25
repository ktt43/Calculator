
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
    temp=""
}

clearButton.addEventListener('click',clearAll);
let temp="";
// When Clicking ON Numbers; Updates the Display Area
function updateDisplay(e){
    displayArea.textContent=displayArea.textContent + e.target.value;    
    if(numOne != null && currentOperator != null && numTwo==null){
        displayArea.textContent=null;
        temp= temp +displayArea.textContent + e.target.value;
        console.log(temp);
        displayArea.textContent=temp;
    }
}

numberButtons.forEach(num=> num.addEventListener('click',updateDisplay));


function setOperands(e){
    if(e.target.id != "equal"){
        currentOperator = e.target.id;
    }
    if(numOne==null){
        if(isNaN(parseInt(displayArea.textContent))){
            numOne=0;
        } else {
        numOne = parseInt(displayArea.textContent);
        }
        // displayArea.textContent=null;
        return;
    }
    if(numTwo==null){     

        numTwo= parseInt(displayArea.textContent);
        displayArea.textContent=null;
    }

    // console.log(!isNaN(numTwo));

    if(!isNaN(numOne) && !isNaN(numTwo)){
       console.log(numOne+ ":" + numTwo);
        //console.log(e.target.id);
        console.log(currentOperator);
        result = operate(window[currentOperator],numOne,numTwo);
        displayArea.textContent=result;

        numOne=parseInt(result);
        numTwo=null;
        result=null;
        // console.log(result);
    }
}
operatorButtons.forEach(operator => operator.addEventListener('click', setOperands));



