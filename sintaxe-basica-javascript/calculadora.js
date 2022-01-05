function calculadora() {
  const operacao = Number(
    prompt(
      'Escolha uma operação:\n1 - Soma (+)\n2 - Subtração (-)\n3 - Multiplicação (*)\n4 - Divisão Real (/)5 - Divisão Inteira (%)\n6 - Potenciação (**)'
    )
  );

  if (!operacao || operacao < 1 || operacao > 6) {
    alert('Opção inválida.');
    calculadora();
  } else {
    let n1 = Number(prompt('Insira o primeiro valor:'));
    if (!n1) {
      alert('Parâmetro inválido');
      calculadora();
    }

    let n2 = Number(prompt('Insira o segundo valor:'));
    if (!n2) {
      alert('Parâmetro inválido');
      calculadora();
    }

    let resultado;

    function soma() {
      resultado = n1 + n2;
      alert(`${n1} + ${n2} = ${resultado}`);
      novaOperacao();
    }

    function subtracao() {
      resultado = n1 - n2;
      alert(`${n1} - ${n2} = ${resultado}`);
      novaOperacao();
    }

    function multiplicacao() {
      resultado = n1 * n2;
      alert(`${n1} * ${n2} = ${resultado}`);
      novaOperacao();
    }

    function divisaoReal() {
      resultado = n1 / n2;
      alert(`${n1} / ${n2} = ${resultado}`);
      novaOperacao();
    }

    function divisaoInteira() {
      resultado = n1 % n2;
      alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`);
      novaOperacao();
    }

    function potenciacao() {
      resultado = n1 ** n2;
      alert(`${n1} elevado a ${n2}ª é igual a ${resultado}`);
      novaOperacao();
    }

    function novaOperacao() {
      let opcao = Number(
        prompt('Deseja fazer outra operação?\n1 - Sim\n2 - Não')
      );

      switch (opcao) {
        case 1:
          calculadora();
          break;
        case 2:
          alert('Até mais!');
          break;
        default:
          alert('Digite uma opção valida.');
          novaOperacao();
          break;
      }
    }

    switch (operacao) {
      case 1:
        soma();
        break;
      case 2:
        subtracao();
        break;
      case 3:
        multiplicacao();
        break;
      case 4:
        divisaoReal();
        break;
      case 5:
        divisaoInteira();
        break;
      case 6:
        potenciacao();
        break;
    }
  }
}

calculadora();
