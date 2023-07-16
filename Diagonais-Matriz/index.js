function gerarMatrizQuadratica(dimensao) {
    const matriz = [];
  
    for (let i = 0; i < dimensao; i++) {
      const linha = [];
  
      for (let j = 0; j < dimensao; j++) {
        linha.push(Math.floor(Math.random() * 100)); // Gerando um número aleatório entre 0 e 99
      }
  
      matriz.push(linha);
    }
  
    return matriz;
  }
  
  function diagonalDifference(arr) {
    let diagonal1 = 0; // Variável para armazenar a soma dos elementos da diagonal principal
    let diagonal2 = 0; // Variável para armazenar a soma dos elementos da diagonal secundária
    
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if (i === j) { // Verifica se o índice atual representa um elemento da diagonal principal
          diagonal1 = diagonal1 + arr[i][j]; // Soma o elemento da diagonal principal
        }
        if (i + j === arr.length - 1) { // Verifica se o índice atual representa um elemento da diagonal secundária
          diagonal2 = diagonal2 + arr[i][j]; // Soma o elemento da diagonal secundária
        }
      }
    }
    
    return Math.abs(diagonal1 - diagonal2); // Retorna a diferença absoluta entre as somas das diagonais
  }
  
  
  function main() {
    const matriz = gerarMatrizQuadratica(10); // Gera uma matriz quadrática de dimensão parametrizada
    const diference = diagonalDifference(matriz); // Calcula a diferença absoluta entre as diagonais da matriz
    console.log(diference)
  }
  
  main(); // Executa a função principal
  