const form = document.getElementById("formulario_aluno");
const nome = document.getElementById("nome_aluno");
const nota1 = document.getElementById("nota1");
const nota2 = document.getElementById("nota2");
const recuperacao = document.getElementById("Recuperacao");
const frequencia = document.getElementById("Frequencia");
const totalAulas = document.getElementById("Aulas");
const tabela = document.getElementById("tabela_corpo");


form.onsubmit = function(event) {
    event.preventDefault();

    let n1 = Number(nota1.value);
    let n2 = Number(nota2.value);
    let rec = recuperacao.value ? Number(recuperacao.value) : null; 
    let freq = Number(frequencia.value);
    let aulas = Number(totalAulas.value);

    let soma = n1 + n2;
    let repfalta = (aulas / freq) * 10;
    let resultado = soma / 2;

    let apfreq = false;
    let situacao = '';

    if (repfalta >= 75) {
        situacao = `Aprovado em Presença com ${repfalta.toFixed(2)}% de frequência.`;
        apfreq = true;
    } else {
        situacao = `Reprovado por Falta com ${repfalta.toFixed(2)}% de frequência.`;
    }

    if (apfreq) {
        if (resultado >= 7) {
            situacao += `<br>Aprovado com média ${resultado.toFixed(2)}.`;
        } else if (resultado >= 5 && rec != null) {
            let mediaFinal = (resultado + rec) / 2;
            situacao += `<br>Recuperação com média ${resultado.toFixed(2)}. Nota de recuperação: ${rec}. Média final: ${mediaFinal.toFixed(2)}.`;

            if (mediaFinal >= 7) {
                situacao += ` Aprovado na recuperação.`;
            } else {
                situacao += ` Reprovado na recuperação.`;
            }
        } else {
            situacao += `<br>Reprovado com média ${resultado.toFixed(2)}.`;
        }
    }
    const tr = document.createElement("tr");

    const tdNome = document.createElement("td");
    tdNome.innerText = nome.value;

    const tdNota1 = document.createElement("td");
    tdNota1.innerText = n1.toFixed(2);

    const tdNota2 = document.createElement("td");
    tdNota2.innerText = n2.toFixed(2);

    const tdRec = document.createElement("td");
    tdRec.innerText = rec !== null ? rec.toFixed(2) : "N/A";

    const tdMedia = document.createElement("td");
    tdMedia.innerText = resultado.toFixed(2);

    const tdFreq = document.createElement("td");
    tdFreq.innerText = repfalta.toFixed(2);

    const tdSituacao = document.createElement("td");
    tdSituacao.innerHTML = situacao;

    tr.appendChild(tdNome);
    tr.appendChild(tdNota1);
    tr.appendChild(tdNota2);
    tr.appendChild(tdRec);
    tr.appendChild(tdMedia);
    tr.appendChild(tdFreq);
    tr.appendChild(tdSituacao);

    tabela.appendChild(tr);

    form.reset();
};
