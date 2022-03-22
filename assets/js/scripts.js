
//var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;


function updateDisplay() {
    var currentNumberWrapper = document.getElementById("currentNumber");
    currentNumberWrapper.innerHTML = currentNumber;
}


const button = document.getElementById('add');
    button.addEventListener('click', () => {
        currentNumber++;
        updateDisplay();
        if (currentNumber >= 10) {
            currentNumber--;
        } 
});

const buttonsub = document.getElementById('sub');
    buttonsub.addEventListener('click', () => {
        updateDisplay();
        currentNumber--;
        if (currentNumber <= 0) {
            currentNumber++;
        } 
    });


function resetCounter() {
    currentNumber = 0;
    updateDisplay();
}