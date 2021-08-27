const prompt = require ('prompt-sync')();
function  verificaVencedor (jogador1, jogador2) {
    return jogador1 == 0 && jogador2 == 2 || jogador1 == 1 && jogador2 == 0 || jogador1 == 2 && jogador2 == 1
}
let jogarnovamente = 1;
while (jogarnovamente == 1) {

  let rodadas = prompt ("Quantas rodadas você deseja jogar?");

  console.log (`Serão realizadas ${rodadas} rodadas`);

  const pedra = 0;
  const papel = 1;
  const tesoura = 2;

  let empate = 0;
  let derrota = 0;
  let vitoria = 0;

  for (i = 0; i < rodadas; i++) {
    let jogada = prompt ("Você quer escolher pedra, papel ou tesoura? Responda com 0 para pedra, 1 para papel e 2 para tesoura");

    while (jogada != 2 && jogada != 1 && jogada != 0) {
      jogada = prompt ("Jogue um número válido (0 para pedra, 1 para papel ou 2 para tesoura)")
      };
      
      if (jogada == 0) {
        console.log ("Você jogou: Pedra")
        }
        if (jogada == 1) {
        console.log ("Você jogou: Papel")
        }
        if (jogada == 2) {
        console.log ("Você jogou: Tesoura")
        }

    let jogadapc = (Math.floor(Math.random() * 2));
    if (jogadapc == 0) {
      console.log ("Jogada pc: Pedra")
    } else if (jogadapc == 1) {
      console.log ("Jogada pc: Papel")
    } else if (jogadapc == 2) {
      console.log ("Jogada pc: Tesoura")
    };

    if (jogadapc == jogada) {
      empate = empate + 1
      console.log ("Empate")
    }; 

    if (verificaVencedor(jogadapc, jogada)) {
      derrota = derrota + 1
      console.log ("Você perdeu!")
    };

    if (verificaVencedor(jogada, jogadapc)) {
      vitoria = vitoria + 1
      console.log ("Você ganhou!")
    }
  };

  console.log (`Tivemos ${empate} empates`);

  console.log (`Você perdeu ${derrota} rodadas`);

  console.log (`Você venceu ${vitoria} rodadas`);


  if (vitoria > derrota) {
    console.log ("Parabéns, você ganhou o jogo!")
  } else if (derrota > vitoria) {
    console.log ("Vixi! Você perdeu o jogo :/")
  } else if (vitoria == derrota) {
    console.log ("O jogo ficou EMPATADO!")
  };

  jogarnovamente = prompt ("Deseja jogar novamente? Utilize 1 para sim e 2 para não.");

  while (jogarnovamente != 2 && jogarnovamente != 1) {
      jogarnovamente = prompt ("Digite 1 para jogar novamente ou 2 para encerrar o jogo.")
    }
      if (jogarnovamente == 2) {
        console.log ("Fim de jogo!")}
}
