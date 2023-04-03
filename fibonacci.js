let num1 = 0
let num2 = 1
let verificador = 0
const TAMANHO_SEQUENCIA = 10
const readline = require("readline")

function mostrarFiboguigs(numParaVerificar) {
  if (!numParaVerificar) {
    console.log(num1)
  }

  num1 = 0
  num2 = 1
  verificador = 0

  for (let i = 0; i <= TAMANHO_SEQUENCIA; i++) {
    if (numParaVerificar == num1) {
      verificador = 1
    }
    num1 += num2
    num2 = num1 - num2

    if (numParaVerificar == num1) {
      verificador = 1
    }
    if (!numParaVerificar) {
      console.log(num1)
    }
  }
  if (numParaVerificar) {
    console.log(
      verificador == 0
        ? `${numParaVerificar} não está na sequência de Fibonacci`
        : `${numParaVerificar} está na sequência de Fibonacci`
    )
  }
}

mostrarFiboguigs()

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question(
  "Digite um número para verificar se está na sequência de Fibonacci: ",
  (num) => {
    mostrarFiboguigs(num)
    rl.close()
  }
)
