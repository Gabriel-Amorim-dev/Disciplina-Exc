console.log("Aluno: Gabriel Gonçalves Menezes de Amorim");
console.log("Curso: Ciência da Computação");
console.log("Disciplina: Tecnologia para Front-End 2");
console.log("Professor: Glaucio Rocha");
console.log("Data: 29/09/2024");

console.log("\nExercícios Array");

let nomes = ["Ana", "Bruno", "Carlos", "Diana", "Eduardo"];

nomes.push("Fernanda");
nomes.unshift("Zara");

console.log("Nomes no array:", nomes);

let Removido = nomes.pop();

console.log("Nome removido:", Removido);
console.log("Nomes após remover o último:", nomes);

let numeros = [2,4,6,8];

console.log("Números no array:", numeros);

let resultado = numeros.map(num => num * 2);
console.log("Números multiplicados por 2:", resultado);

let numeros2 = [1,3,5,7,9];

console.log("Números do array 2°:", numeros2);

function maiorQueCinco(num) {
    return num > 5;
}

let filtrados = numeros2.filter(maiorQueCinco);
console.log("Números maiores que 5:", filtrados);