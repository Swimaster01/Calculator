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

/*Operator*/
let previousOperand = '';
let selectedOperator = null;

opButtons.forEach(function(button){
    button.addEventListener('click', function(){
        
        previousOperand = currentOperand.textContent;

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
})

signButton.addEventListener('click', function(){
    if(currentOperand.textContent.startsWith('-')){
        currentOperand.textContent.slice(1);
    } else {
        currentOperand.textContent = '-' + currentOperand.textContent;
    }
});

clearButton.addEventListener('click', function(){
    currentOperand.textContent = '0';
})

deleteButton.addEventListener('click', function() {
    currentOperand.textContent = currentOperand.textContent.slice(0, -1);

    if (currentOperand.textContent === ''){
        currentOperand.textContent = '0';
    }
});
