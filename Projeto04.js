const prompt = require ('prompt-sync')();

class Urna {
    constructor(){
        this.listaVotos = [
            {opcao: "candidato 1", numeroVotos: 0},
            {opcao: "candidato 2", numeroVotos: 0},
            {opcao: "candidato 3", numeroVotos: 0},
            {opcao: "voto nulo", numeroVotos: 0},
            {opcao: "voto em branco", numeroVotos: 0},
        ]
    }
    // Verifica se o eleitor pode votar de acordo com o ano do nascimento
    autorizaVoto(anoNascimento){
        if (anoNascimento > 2005){
            console.log("Negado");
            return "Negado";
        } else if (anoNascimento >= 2005 && anoNascimento < 2003){
            console.log("Opcional");
            return "Opcional";
        } else if (anoNascimento <= 2003){
            console.log("Obrigatório");
            return "Obrigatório";
        }
    }
    // Realiza o voto a partir da data de nascimento e da opção escolhida
    votacaoEleitor(anoNascimento, voto){
        let autorizacao = this.autorizaVoto(anoNascimento);
        this.votacao(autorizacao, voto)
    }
    //Realiza o voto a partir da autorização e da opção
    votacao(autorizacao, voto){
        if (autorizacao == "Opcional" || autorizacao == "Obrigatório"){
            this.listaVotos[voto-1].numeroVotos++;
        } else {
            console.log("Você não pode votar!")
        }
    }
    // Printa o resultado na tela
    exibirResultados (){
        for (let i of this.listaVotos){
            console.log("Total de votos do "+ i.opcao + ": "+ i.numeroVotos);
        }
        this.listaVotos.sort(function (a, b) {
            if (a.numeroVotos > b.numeroVotos) {
            return 1;
            }
            if (a.numeroVotos < b.numeroVotos) {
            return -1;
            }
            return 0;
        }); 

        if (this.listaVotos[this.listaVotos.length-1].opcao == "voto nulo" || this.listaVotos[this.listaVotos.length-1].opcao == "voto em branco"){
            delete this.listaVotos.opcao
        } else if (this.listaVotos[this.listaVotos.length-1].numeroVotos !== this.listaVotos[this.listaVotos.length-2]?.numeroVotos){
            console.log("O vencedor da votação é o " + this.listaVotos[this.listaVotos.length-1].opcao + "!");
        } else {
            console.log("EMPATE GERAL!")
        };
    
    }


}

let votoPessoa = new Urna()
let votarNovamente;
do {
    let nascimento = prompt("Digite o ano de nascimento: ");
    let opcao = prompt("Digite a opção de voto dessa pessoa: ");
    while (opcao != 1 && opcao != 2 && opcao != 3 && opcao != 4 && opcao != 5){
        opcao = prompt("Digite uma opção de 1 a 5: ")
    }
    votoPessoa.votacaoEleitor(nascimento, opcao)

    votarNovamente = prompt("Ainda tem algum voto para computar? Utilize 1 para sim e 2 para não. ");

    while (votarNovamente != 2 && votarNovamente != 1) {
        votarnovamente = prompt("Digite 1 para registrar um novo voto ou 2 para encerrar a votação. ");
        }
        if (votarNovamente == 2) {
            console.log("Fim da votação!")
        }
} while (votarNovamente == 1)

votoPessoa.exibirResultados()