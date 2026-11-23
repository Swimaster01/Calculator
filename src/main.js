import './style.css'

/*Dataset*/
const numButtons = document.querySelectorAll('[data-number]');
const opButtons = document.querySelectorAll('[data-operator]');
const actionButtons = document.querySelectorAll('[data-action]');

/*Current, clear and delete*/
const currentOperand = document.querySelector('#current-operand');
const clearButton = document.querySelector('[data-action = "clear"]');
const deleteButton = document.querySelector('[data-action = "delete"]');

/*Action*/
const decimalButton = document.querySelector('[data-action="decimal"]');
const signButton = document.querySelector('[data-action = "sign"]');
const equalsButton = document.querySelector('[data-action = "equals"]');
const percentageButton = document.querySelector('[data-action="percentage"]');

/*Operator*/
let previousOperand = '';
let selectedOperator = null;

opButtons.forEach(function(button) {
    button.addEventListener('click', function() {

        if (selectedOperator !== null) {
            let firstNum = Number(previousOperand);
            let secondNum = Number(currentOperand.textContent);

            let result = calculate(firstNum, secondNum, selectedOperator);

            currentOperand.textContent = result;
            previousOperand = result;

        } else {
            previousOperand = currentOperand.textContent;
        }

        selectedOperator = button.dataset.operator;

        currentOperand.textContent = '0';
    });
});

numButtons.forEach(function(button) {
    button.addEventListener('click', function(){


        if(currentOperand.textContent === '0') {
            currentOperand.textContent = button.dataset.number;
        } else {
            currentOperand.textContent += button.dataset.number;
        }
    });
});

decimalButton.addEventListener('click', function(){
    if(currentOperand.textContent.includes('.')){ 
        
        return;
    }

    if(currentOperand.textContent === '0') {
        currentOperand.textContent = '0.';
        return;
    }

    currentOperand.textContent += '.';
});

signButton.addEventListener('click', function(){
    if(currentOperand.textContent.startsWith('-')){
        currentOperand.textContent = currentOperand.textContent.slice(1);
    } else {
        currentOperand.textContent = '-' + currentOperand.textContent;
    }
});

percentageButton.addEventListener('click', function(){
    currentOperand.textContent = String(Number(currentOperand.textContent) / 100);
});

equalsButton.addEventListener('click', function(){

    let firstNum = Number(previousOperand);
    let secondNum = Number(currentOperand.textContent);

    let result = calculate(firstNum, secondNum, selectedOperator);

    currentOperand.textContent = result;
    selectedOperator = null;
    previousOperand = '';

});

function calculate(firstNum, secondNum, operator) {

    let result;

    switch (operator) {
        case 'add':
            result = firstNum + secondNum;
            break;
        case 'subtract':
            result = firstNum - secondNum;
            break;
        case 'multiply':
            result = firstNum * secondNum;
            break;
        case 'divide':
            result = firstNum / secondNum;
            break;
    }
    return result;
};

clearButton.addEventListener('click', function(){
    currentOperand.textContent = '0';
});

deleteButton.addEventListener('click', function() {
    currentOperand.textContent = currentOperand.textContent.slice(0, -1);

    if (currentOperand.textContent === ''){
        currentOperand.textContent = '0';
    }
});

