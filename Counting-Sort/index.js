function gerarVetor(dimensao) {
  const vetor = [];
  for (let j = 0; j < dimensao; j++) {
    vetor.push(Math.floor(Math.random() * 100)); // Gerando um número aleatório entre 0 e 99
  }

  return vetor;
}



function vetorReferenciaFunc(arr) {
  let countingArray = new Array(100).fill(0); //crio um array e preencho tudo com 0 e limito a 100 posicoes

  for (let i = 0; i < arr.length; i++) {
       //pego o valor do array na posicao i e incremento o valor utilizando como indice no vetor de referencia
       countingArray[arr[i]]++;
  }

  return countingArray;
}


function main() {
  const vetor = gerarVetor(100); // Gera um vetor de tamanho 100 com valores aleatórios
  console.log(vetor);
  const vetorRef = vetorReferenciaFunc(vetor);
  console.log(vetorRef);
}

main(); // Executa a função principal
