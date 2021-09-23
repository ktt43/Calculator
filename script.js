// const numOne = document.querySelectorAll(".digit");
const displayArea = document.querySelector("#output");
const displayHistory = document.querySelector("#history");
const clear = document.querySelector("#clear");
const history = document.querySelector("#history");
const addButton = document.querySelector("#plus");
const subtractButton = document.querySelector("#substract");

let numOne=null;
let numTwo=null;
let result=null;
let currentOperator=null;


// null == 0
function add(x,y){
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
}


// function updateDisplay(){
//     numOne = displayArea.textContent;
//     console.log(numOne);
// }

function updateHistory(){
    displayHistory.textContent= result +currentOperator+numOne;
}

function addOperation(e){
    currentOperator="add";
    updateHistory();
}

function getSelected(e){
    // console.log(e.target);
    if(e.target.className == "digit"){
        displayArea.textContent = displayArea.textContent+""+e.target.value;
    }

    if(e.target.id == "plus"){
        
    }

    numOne=displayArea.textContent;
    console.log(numOne);
    
}

window.addEventListener('click',getSelected);
clear.addEventListener('click',clearAll);
addButton.addEventListener('click',addOperation);