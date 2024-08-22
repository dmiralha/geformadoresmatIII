
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
    enunciado: "Você gostaria de saber  mais sobre a importância do uso de plantas na cultura indígena na medicina ou alimentação?",
    alternativas: [
            {
            texto: "Medicina",
            afirmacao: "São importantes para tratamentos de saúde como medicamentos naturais"
            },
            {
            texto:"Alimentação",
            afirmacao:"Conhecimentos sobre plantas consideradas PANCs para alimentação segura, sem risco de saúde"
            },
        ]
    },
    {
    enunciado: "Você gostaria de saber nome de cidades com influência indígena Kaingang ou Guarani?",
    alternativas: [
        {
            texto: "Kaingang",
            afirmacao: "Goioerê, Candói e Xambrê"
            },
            {
            texto:"Guarani",
            afirmacao:"Curitiba, Arapongas, Guarapuava, Jaguariaíva"
            },
         ]
    }
    ];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Resultado";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
