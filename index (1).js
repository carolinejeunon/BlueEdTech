/*Faça um programa que faça 5 perguntas para uma pessoa sobre um crime. As
perguntas são:
1. &quot;Telefonou para a vítima?&quot;
2. &quot;Esteve no local do crime?&quot;
3. &quot;Mora perto da vítima?&quot;
4. &quot;Devia para a vítima?&quot;
5. &quot;Já trabalhou com a vítima?&quot;

O programa deve no final emitir uma classificação sobre a participação da
pessoa no crime.
Se a pessoa responder positivamente a 2 questões ela deve ser classificada
como Suspeita, entre 3 e 4 como ;Cúmplice; e 5 como ;Assassino;. Caso contrário, ele será classificado como &quot;Inocente.*/


let p1 = prompt ("Você telefonou para a vítima? [S/N]");
let p2 = prompt ("Você esteve no local do crime? [S/N]");
let p3 = prompt ("Você você mora perto da vítima? [S/N]");
let p4 = prompt ("Você devia para a vítima? [S/N]");
let p5 = prompt ("Você já trabalhou com a vítima? [S/N]");

let x = 0;
function resposta (p) {
if (p=="S") x++
}


resposta (p1);
resposta (p2);
resposta (p3);
resposta (p4);
resposta (p5);

console.log ("CLASSIFICAÇÃO:");

if (x==2) {
  console.log ("Suspeito (a)");
} else if ((x==3) || (x==4)) {
  console.log ("Cúmplice")
} else if (x==5) {
  console.log("Assassino (a)")
} else {
  console.log ("Inocente")
}