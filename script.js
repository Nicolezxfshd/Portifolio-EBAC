function calcularIMC() {
  const pesoInput = document.getElementById('peso').value;
  const alturaInput = document.getElementById('altura').value;

  const peso = parseFloat(pesoInput);
  const altura = parseFloat(alturaInput);

  if (isNaN(peso) || isNaN(altura) || altura === 0) {
    alert('Por favor, insira valores válidos para peso e altura.');
    return;
  }

  const imc = peso / (altura * altura);
  const resultado = document.getElementById('resultado');

  resultado.textContent = `Seu IMC é ${imc.toFixed(2)}`;
  var paragraphs = document.getElementsByTagName("p");

 let categoria = '';

  if (imc < 18.5) {
    categoria = 'Baixo peso';
  } else if (imc < 25) {
    categoria = 'Peso normal';
  } else if (imc < 30) {
    categoria = 'Sobrepeso';
  } else if (imc < 35) {
    categoria = 'Obesidade grau I';
  } else if (imc < 40) {
    categoria = 'Obesidade grau II';
  } else {
    categoria = 'Obesidade grau III';
  }

  classificacao.textContent = `Classificação: ${categoria}`;
}

