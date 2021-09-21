const selectedNumber = document.querySelectorAll(".digit");
const displayArea = document.querySelector("#output");
const clear = document.querySelector("#clear");

let display="";
let currentNumOne;
let currentNumTwo;
let currentOperator;

function add(x,y){
    if(x+y!=undefined){
        return x+y;
    }

    return null;
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
    currentNumOne=null;
    currentNumTwo=null;
    currentOperator=null;
    display="";
    displayArea.value=display;
}


function updateDisplay(e){
    // console.log(e.target.value);
    display=display+""+e.target.value;
    // console.log(display);
    currentNumOne=display;
    displayArea.value=display;

}



selectedNumber.forEach(num => num.addEventListener('click', updateDisplay));
clear.addEventListener('click',clearAll);
// selectedNumber.addEventListener('click', perform);