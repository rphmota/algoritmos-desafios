
   
   function inteiroUnico(a) {
    let vetor = [];

    // Itera sobre cada elemento do array 'a'
    a.forEach(element => {
        let count = 0; // Variável para contar as ocorrências do elemento
        a.filter(element2 => {
            if (element2 === element) {
                count++; // Incrementa o contador se o elemento2 for igual ao elemento atual
            }
        });

        // Se o contador for menor que 2 (ou seja, ocorre apenas uma vez)
        if (count < 2) {
            vetor.push(element); // Adiciona o elemento ao vetor
        }
    });

    return vetor[0]; // Retorna o primeiro elemento do vetor (inteiro único)
}


    /**
     * Geracao simples de numeros inteiros aleatorios com valor parametrizado de minimo e maximo
     */
    function gerarNumeroInteiro(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    /**
     * Aqui gero numeros para um vetor onde so pode existir apenas um numero unico
     */

    function vetorElementoUnico(n) {
        const vetor = [];
        const elementos = Array.from({ length: n - 1 }, () => Math.floor(Math.random() * n) + 1);
        const elementoUnico = Math.floor(Math.random() * n) + 1;
        vetor.push(...elementos, elementoUnico, elementoUnico);
    
        return vetor;
    }
    


    function main() {
        const vetor = vetorElementoUnico(gerarNumeroInteiro(1,1000))
        const number = inteiroUnico(vetor)
        console.log('Vetor original \n'+ vetor + '\n')
        console.log('Numero Único do vetor: '+number)
        
       
    }
     main() //chamo a funcao main