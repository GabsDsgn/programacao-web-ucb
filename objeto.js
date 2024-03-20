let calculadora = {
    numeroA: 0,
    numeroB: 0,
    somar: (numeroA, numeroB) => {
        return numeroA + numeroB;
    },
    subtrair: function () {
        return this.numeroA - this.numeroB;
    }

};

calculadora.numeroA = 2;
calculadora.numeroB = 3;

console.log(calculadora.somar(calculadora.numeroA, calculadora.numeroB)); 
console.log(calculadora.subtrair());

const pessoa = {
    nome: "Nome da pessoa",
    cpf: "000.000.000-00",
    telefone: "00 0000-0000"
}

for(const prop in pessoa) {
    console.log(prop + ": " + pessoa[prop]);
}

let arr = [false, 1, "DOIS", 11, pessoa, 60];

for (const key in arr) {
    console.log(key + ": " + arr[key]);
}

for (let i = 0; i < arr.length; i++) {
    console.log(i + ": " + arr[i]);
}

let matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];