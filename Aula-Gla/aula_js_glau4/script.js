console.log("Aluno: Gabriel Gonçalves Menezes de Amorim");
console.log("Curso: Ciência da Computação");
console.log("Disciplina: Tecnologia para Front-End 2");
console.log("Professor: Glaucio Rocha");
console.log("Data: 27/09/2025");

console.log("\nExercício 1: População dos países A e B");

let populacaoA = 80000;
let populacaoB = 200000;
let taxaA = 0.03;
let taxaB = 0.015;
let anos = 0;

while (populacaoA < populacaoB) {
    populacaoA += populacaoA * taxaA;
    populacaoB += populacaoB * taxaB;
    anos++;
}

console.log(`Serão necessários ${anos} anos para que a população do país A ultrapasse ou iguale a população do país B.`);

console.log("\nExercício 2: Contagem de números pares e ímpares");

var numerosPares = 0;
var numerosImpares = 0;

let numero;

do {
    numero = parseInt(prompt("Digite um número (ou -1 para sair): "));
    if (numero !== -1) {
        if (numero % 2 === 0) {
            numerosPares++;
        } else {
            numerosImpares++;
        }
    }
} while (numero !== -1);

console.log(`Números pares: ${numerosPares}`);
console.log(`Números ímpares: ${numerosImpares}`);

console.log("\nExercício 3: Maior e menor número");
let maiorNumero = null;
let menorNumero = null;
let numeros = [1,2,3,4,5,6,7,8,9,10];
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
    let num = numeros[i];
    if (maiorNumero === null || num > maiorNumero) {
        maiorNumero = num;
    }
    if (menorNumero === null || num < menorNumero) {
        menorNumero = num;
    }
    soma += num;
}

console.log(`Maior número: ${maiorNumero}`);
console.log(`Menor número: ${menorNumero}`);

console.log("\nExercício 4: Alteração de salário do funcionário");
let anoinicio = 1995;
let sal1995 = parseFloat(prompt(`Digite o salário do funcionário em ${anoinicio}: `));
let sal1996 = sal1995 * 1.015;
let salarios = [];

salarios.push({ ano: 1995, salario: sal1995.toFixed(2) });
salarios.push({ ano: 1996, salario: sal1996.toFixed(2) });

for (let ano = 1997; ano <= 2024; ano++) {
    let aumento = sal1996 * 0.015 * 2;
    sal1996 += aumento;
    salarios.push({ ano: ano, salario: sal1996.toFixed(2) });
}

console.log("Ano\tSalário");
salarios.forEach(s => {
    console.log(`${s.ano}\tR$ ${s.salario}`);
});
console.log("\nExercício 5: Calcúlo do Perimetro e da Área de um Círculo");

var raio = parseFloat(prompt("Digite o raio do círculo: "));
var perimetro = 2 * Math.PI * raio;
var area = Math.PI * Math.pow(raio, 2);

console.log(`Perímetro: ${perimetro.toFixed(2)}`);
console.log(`Área: ${area.toFixed(2)}`);

console.log("\nExercício 6: Investimento(Montante)");
let capital = parseFloat(prompt("Digite o valor do capital investido: "));
let taxaJuros = parseFloat(prompt("Digite a taxa de juros (em %): ")) / 100;
let tempo = parseInt(prompt("Digite o tempo de investimento (em meses): "));
let montante = capital * Math.pow((1 + taxaJuros), tempo);

console.log(`Montante após ${tempo} meses: R$ ${montante.toFixed(2)}`);

