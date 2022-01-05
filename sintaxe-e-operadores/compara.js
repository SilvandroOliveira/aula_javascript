function comparaNumeros(num1, num2) {
  const IGUAL = num1 == num2 ? 'são' : 'não são';
  const SOMA = num1 + num2;
  const MAIOR10 = SOMA > 10 ? 'maior' : 'menor';
  const MAIOR20 = SOMA > 20 ? 'maior' : 'menor';
  alert(
    `Os números ${num1} e ${num2} ${IGUAL} iguais. Sua soma é ${SOMA}, que é ${MAIOR10} que 10 e ${MAIOR20} que 20.`
  );
}

var num1 = Number(prompt('Insira o primeiro número:'));
if (!num1) {
  alert('Número inválido');
}

if (num1) {
  var num2 = Number(prompt('Insira o segundo número:'));
  if (!num2) {
    alert('Número inválido');
  }
}

if (num1 && num2) {
  comparaNumeros(num1, num2);
}
