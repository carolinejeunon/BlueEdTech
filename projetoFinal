const prompt = require ('prompt-sync')();

//ROTINA ESTRESSANTE DA CAROL


class Pessoa{
    constructor(atividade){
      this.atividade = atividade
      this.contador = 0
    }
  
    Acordar (malhar){
      if (malhar == 1){
        this.humor = this.humor + 10
      } else if (malhar == 2){
        this.humor = this.humor - 20
        this.contador++
        if (this.humor<0){
            console.log(`Demoramos ${this.contador} ações para acabar com a paciência da Carol`)
        }
      }
      console.log(`Humor: ${this.humor}`)
      
    }

    Trabalhar (cliente){
        if (cliente == 1){
        this.humor = this.humor - 50
        this.contador++
        if (this.humor<0){
            console.log(`Demoramos ${this.contador} ações para acabar com a paciência da Carol`)
        }
      }
      console.log(`Humor: ${this.humor}`)
    }
  
    Aula (aula){
      if (aula == "18"){
        this.humor = this.humor - 25
      } else if (aula == 19){
          this.humor = this.humor - 10
      }
      console.log(`Humor: ${this.humor}`)
      this.contador++
      if (this.humor<0){
        console.log(`Demoramos ${this.contador} ações para acabar com a paciência da Carol`)
    }
    }
  
    AulaBlue (colegas){
      if (colegas == 1){
        this.humor = this.humor - 30
      }
      console.log(`Humor: ${this.humor}`)
      this.contador++
      if (this.humor<0){
        console.log(`Demoramos ${this.contador} ações para acabar com a paciência da Carol`)
    }
    }
  
}
  
class Carol extends Pessoa{
constructor(atividade){
    super(atividade)
    this.humor = 100
}
}

let malhar;
let cliente;
let aula;
let colegas;

console.log("Seja bem vindo(a) à vida da Carol\nVamos descobrir se demora muito para a paciência dela acabar. 🤗");
console.log()

let carol =  new Carol(malhar);

do{
malhar = prompt("Você acha que a Carol deve malhar? 💪 Digite 1 para SIM e 2 para NÃO: ");
carol.Acordar(malhar);

cliente = prompt("Cliente liga para Carol? 🥵 Digite 1 para SIM e 2 para NÃO: ");
carol.Trabalhar(cliente);

aula = prompt ("A aula da Carol de hoje começa às 18 ou às 19? Digite usando apenas números: ");
carol.Aula(aula);

colegas = prompt("Os colegas da Carol vão passar 2 horas da aula reclamando? Digite 1 para SIM e 2 para NÃO: ");
carol.AulaBlue(colegas);

} while (carol.humor>0)

