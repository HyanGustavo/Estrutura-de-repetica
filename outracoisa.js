let numero = 2;
let opcao = 0;

do{
numero = parseInt(prompt("Digite um numero"))


numero = numero * 2;
console.log("O dobro deste numero é", numero);

console.log(" ");
console.log("----Deseja Sair?");
opcao = prompt("----Digite 'S' para sim e 'N' para Não")
}while(!(opcao == "S" || opcao == "s"))

console.log(" ")
console.log("----Até Logo!----")

//https://nokemon.eloie.tech/sharing?nokemon=54UE0BPhHLhzLJi-X4F_uA