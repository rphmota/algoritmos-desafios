# Comparação Classificação
Quicksort geralmente tem um tempo de execução de n x log(n), mas existe um algoritmo que pode classificar ainda mais rápido? Em geral, isso não é possível. A maioria dos algoritmos de classificação são classificações de comparação, ou seja, eles classificam uma lista apenas comparando os elementos entre si. Um algoritmo de classificação de comparação não pode ser superado  n x log(n) (pior caso) tempo de execução, uma vez que  n x log(n)  representa o número mínimo de comparações necessárias para saber onde colocar cada elemento. Para obter mais detalhes, você pode ver estas notas (PDF).

# Classificação alternativa
Outro método de classificação, o de contagem, não requer comparação. Em vez disso, você cria uma matriz inteira cujo intervalo de índice abrange todo o intervalo de valores na matriz para classificar. Cada vez que um valor ocorre na matriz original, você incrementa o contador nesse índice. No final, percorra sua matriz de contagem, imprimindo o valor de cada índice de valor diferente de zero esse número de vezes.



