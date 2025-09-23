
console.log("\nExercício 5: Calcúlo do Perimetro e da Área de um Círculo");

var raio = parseFloat(prompt("Digite o raio do círculo: "));
var perimetro = 2 * Math.PI * raio;
var area = Math.PI * Math.pow(raio, 2);

console.log(`Perímetro: ${perimetro.toFixed(2)}`);
console.log(`Área: ${area.toFixed(2)}`);
