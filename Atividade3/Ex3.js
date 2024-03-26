function transporMatriz(A) {

    console.log("Matriz Original:");
    imprimirMatriz(A);

    let transposta = [];

    const linhas = A.length;
    const colunas = A[0].length;

    for (let j = 0; j < colunas; j++) {
        transposta[j] = [];
        for (let i = 0; i < linhas; i++) {
            transposta[j][i] = A[i][j];
        }
    }

    console.log("Matriz Transposta:");
    imprimirMatriz(transposta);
}

function imprimirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join("\t"));
    }
    console.log("");
}

const matrizOriginal = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Other example:
// const matrizOriginal = [
//     [1, 2],
//     [3, 4],
//     [5, 6]
// ];

transporMatriz(matrizOriginal);
