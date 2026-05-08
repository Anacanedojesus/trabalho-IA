const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O que faz um fisioterapeuta?: [
            {
                texto: "Ajuda pessoas a recuperar movimentos, aliviar dores e melhorar a qualidade de vida.",
                afirmacao: "Você aprendeu a usar fisio como aliada para otimizar seu tempo e melhorar suas condições de vida. "
            },
            {
                texto: "A fisioterapia usa exercícios, técnicas e tratamentos para reabilitação do corpo.",
                afirmacao: "Quem pode fazer fisioterapia? Crianças, adultos, idosos, atletas e qualquer pessoa que precise de cuidados físicos.
            }
        ]
    },
    {
        enunciado: "A IA gerou os slides, mas as imagens e cores não combinam com o seu estilo. O que você faz?",
        alternativas: [
            {
                texto: "Muda de curso.",
                afirmacao: "Continuo tentando desenvolver algo personalizado."
            },
            {
                texto: "Edito manualmente cada slide no PowerPoint/Canva.",
                afirmacao: "Você desenvolveu habilidades de design manual, mas perdeu um pouco da agilidade que a IA poderia dar."
            }
        ]
    },
    {
        enunciado: "Durante a apresentação, um professor pergunta como a IA ajudou na criação dos slides. Como você responde?",
        alternativas: [
            {
                texto: "A IA foi uma ferramenta, mas eu escolhi as informações, organizei as ideias e revisei tudo.",
                afirmacao: "Você entende que a IA é uma assistente, mas o protagonismo e a autoria são humanos."
            },
            {
                texto: "Falo que a IA fez praticamente tudo, pois foi mais fácil.",
                afirmacao: "Você percebeu que dependência total da IA pode tirar sua criatividade e aprendizado."
            }
        ]
    },
    {
        enunciado: "Sua amora pede ajuda para criar uma apresentação impactante. Você sugere usar IA?",
        alternativas: [
            {
                texto: "Sim! Ensino ela a usar prompts criativos e revisar o conteúdo gerado.",
                afirmacao: "Você se tornou uma referência em usar IA de forma ética e criativa na escola."
            },
            {
                texto: "Não, acho que ela precisa aprender a fazer tudo sozinha primeiro.",
                afirmacao: "Você prefere métodos tradicionais, mas percebe que isso pode limitar o potencial dos colegas."
            }
        ]
    },
    {
        enunciado: "No final do ano, a escola premia a melhor apresentação com ajuda de IA. Você decide:",
        alternativas: [
            {
                texto: "Participar usando IA como apoio, mas destacando sua autoria e criatividade.",
                afirmacao: "Você aprendeu o equilíbrio perfeito: IA acelera, mas é você quem dá alma à apresentação."
            },
            {
                texto: "Não participar, pois acredita que IA tira o mérito humano.",
                afirmacao: "Você ficou de fora de uma grande oportunidade por resistir às novas tecnologias."
            }
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

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
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
    caixaPerguntas.textContent = "Sua jornada com autorIA em mídias digitais...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

// Relógio (mantido do original)
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (s < 10) s = '0' + s;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
});