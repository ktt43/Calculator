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
