var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

var adicionar = document.getElementById('adicionar');
var subtrair = document.getElementById('subtrair');
subtrair.disabled = true;

function increment() {
  subtrair.disabled = false;
  currentNumber = currentNumber + 1;
  currentNumberWrapper.innerHTML = currentNumber;
  if (currentNumber == 10) {
    adicionar.disabled = true;
  }
}

function decrement() {
  adicionar.disabled = false;
  currentNumber = currentNumber - 1;
  currentNumberWrapper.innerHTML = currentNumber;
  if (currentNumber == 0) {
    subtrair.disabled = true;
  }
}

adicionar.addEventListener('click', increment);
subtrair.addEventListener('click', decrement);
