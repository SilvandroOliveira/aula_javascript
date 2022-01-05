function comparaNumeros(num1, num2) {
  const igual = num1 === num2 ? 'são' : 'não são';
  const soma = num1 + num2;
  const maior10 = soma > 10 ? 'maior' : 'menor';
  const maior20 = soma > 20 ? 'maior' : 'menor';
  alert(
    `Os números ${num1} e ${num2} ${igual} iguais. Sua soma é ${soma}, que é ${maior10} que 10 e ${maior20} que 20.`
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
