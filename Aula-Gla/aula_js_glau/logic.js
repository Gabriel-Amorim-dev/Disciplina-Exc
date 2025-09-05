const form = document.getElementById("formulario_aluno");
const nome = document.getElementById("nome_aluno");
const nota1 = document.getElementById("nota1");
const nota2 = document.getElementById("nota2");
const recuperacao = document.getElementById("Recuperacao");
const frequencia = document.getElementById("Frequencia");
const totalAulas = document.getElementById("Aulas");

form.onsubmit = function(event) {
    event.preventDefault();

    let n1 = Number(nota1.value);
    let n2 = Number(nota2.value);
    let rec = recuperacao.value ? Number(recuperacao.value) : null; 
    let freq = Number(frequencia.value);
    let aulas = Number(totalAulas.value);
    let situacao = '';
    let soma = n1 + n2;
    let repfalta = (freq / aulas) * 10;
    let resultado = soma / 2;

    let apfreq = false;
    if (repfalta >= 7.5) {
        situacao = (`Aprovado em Presença com ${repfalta.toFixed(2)}% de frequência.`);
        apfreq = true;
    } else {
        situacao = (`Reprovado por Falta com ${repfalta.toFixed(2)}% de frequência.`);
    }
    if (apfreq) {
        if (resultado >= 7) {
            situacao += `Aprovado com média ${resultado.toFixed(2)}.`;
        } else if (resultado >= 5 && rec != null) {
            let mediaFinal = (resultado + rec) / 2;
            situacao += `Recuperação com média ${resultado.toFixed(2)}. Nota de recuperação: ${rec}. Média final: ${mediaFinal.toFixed(2)}.`;

            if (mediaFinal >= 5) {
                situacao += ` Aprovado na recuperação.`;
            } else {
                situacao += ` Reprovado na recuperação.`;
            }
        } else {
            situacao += `Reprovado com média ${resultado.toFixed(2)}.`;
        }
    }
    let mensagem = `Aluno: ${nome.value}\nNota 1: ${n1.toFixed(2)}\nNota 2: ${n2.toFixed(2)}\nMédia: ${resultado.toFixed(2)}\nFrequência: ${repfalta.toFixed(2)}%\nSituação: ${situacao}`;
    alert(mensagem);
};