let counterValue = 0;
const decrementCount = document.querySelector('button[data-action = "decrement"]');
const incrementCount = document.querySelector('button[data-action = "increment"]');
const totalValue = document.querySelector('#value');

function onDecrementButtonClick() {
    counterValue -= 1;
    totalValue.textContent = counterValue;
};

function onIncrementButtonClick() {
    counterValue += 1;
    totalValue.textContent = counterValue;    
} 

decrementCount.addEventListener('click', onDecrementButtonClick);
incrementCount.addEventListener('click', onIncrementButtonClick);