const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como você se sente com a constante evoluçâo da IA?",
        alternativas: [
            {
               texto: "Animado.",
               afirmacao: "Ela pode me proporcionar muitas coisas boas!"
            },
            {
            texto: "Assustado.",
            afirmacao: "Ela pode fazer tudo mudar para pior na sociedade."
        }
        ]
    },
    {
        enunciado: "Como você se sentiu, quando descobriu que existe um chat que pode responder todas as suas dúvidas?",
        alternativas: [
            {
                texto: "Muito feliz!",
                afirmacao: "Conseguiu fazer as tarefas mais rápido."
        },
        {
                texto: "Preocupado!",
                afirmacao: "Pois muitas pessoas podem acabar utilizando de forma imprudente."
        }
        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial, uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre esta tecnologia. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de IA em sala de aula. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.",
                afirmacao: "Buscando aprender mais sobre o tema."
            },
           {
                texto: "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
                afirmacao: "Pois conseguiu dominar o assunto muito bem."
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz?",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Para não ter problemas."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Com o objetivo de tirar notas boas no trabalho"
            }
        ]
    },
    {
        enunciado: "Você aprova a utilização da IA?",
        alternativas: [
            {
                texto: "Sim, acho ótima.",
                afirmacao: "Pode me ajudar muito, aprendendo coisas novas."
            },
            {
                texto: "Não, me preocupo com a forma que a utilizão.",
                afirmacao: "Existem pessoas que a usam de forma incorreta, questionando a integridade do sistema."
        }
        ]
    }

];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
     for(const alternativa of perguntaAtual.alternativas){
         const botaoAlternativas = document.createElement("button");
         botaoAlternativas.textContent = alternativa.texto;
         botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
         caixaAlternativas.appendChild(botaoAlternativas);
     }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
