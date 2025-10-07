function main() {
    console.log("Exercício 1: Cálculo de preço com desconto");
    let preco_unitario = parseFloat(prompt("Digite o preço unitário do produto: "));
    let quantidade = parseInt(prompt("Digite a quantidade comprada: "));
    let total = calcularTotal(preco_unitario, quantidade);
    let totalcomdesc = aplicarDesconto(total, 0, total);
    exibirResumo(preco_unitario, quantidade, total, totalcomdesc);

}

function calcularTotal(preco_unitario, quantidade) {
    return preco_unitario * quantidade;
}
function aplicarDesconto(valor) {
    let totalcomdesc; 

    if (valor > 100) {
        totalcomdesc = valor - (valor * 0.10);
    } else {
        totalcomdesc = valor;
    }
    return totalcomdesc;
}
function exibirResumo(preco_unitario, quantidade, total, totalcomdesc) {
    console.log(`Preço unitário: R$ ${preco_unitario.toFixed(2)}`);
    console.log(`Quantidade: ${quantidade}`);
    console.log(`Total sem desconto: R$ ${total.toFixed(2)}`);
    console.log(`Total com desconto: R$ ${totalcomdesc.toFixed(2)}`);
}
main();