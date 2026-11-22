import './style.css'

const numButtons = document.querySelectorAll('[data-number]');
const opButtons = document.querySelectorAll('[data-operator]');
const actionButtons = document.querySelectorAll('[data-action]');

const currentOperand = document.querySelector('#current-operand');
const clearButton = document.querySelector('[data-action = "clear"]');
const deleteButton = document.querySelector('[data-action = "delete"]');

console.log(numButtons);
console.log(opButtons);
console.log(actionButtons);

numButtons.forEach(function(button) {
    button.addEventListener('click', function(){
        
        if(currentOperand.textContent === '0') {
            currentOperand.textContent = button.dataset.number;
        } else {
            currentOperand.textContent += button.dataset.number;
        }
    });
});

clearButton.addEventListener('click', function(){
    currentOperand.textContent = '0';
})

deleteButton.addEventListener('click', function() {
    currentOperand.textContent = currentOperand.textContent.slice(0, -1);
});

opButtons.forEach(function(button){
    button.addEventListener('click', function(){
        console.log(button.dataset.number);
    });
});