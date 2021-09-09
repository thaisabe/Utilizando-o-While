let contagemDeDobra = 0
let escolhaOpção = ""

let nave = prompt("Digite o nome da nave")

escolhaOpção = prompt("Deseja entrar em dobra espacial?\nDigite o número da opção desejada:\n1- Sim\n2- Não")

while(escolhaOpção == "1") {
  contagemDeDobra += 1
  escolhaOpção = prompt("Deseja realizar a próxima dobra?\nDigite o número da opção desejada:\n1- Sim\n2- Não")
}

alert("Nave: " + nave + "\nQuantidade de dobras: " + contagemDeDobra)