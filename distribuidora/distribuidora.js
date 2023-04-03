const json = require("./dados.json")
const filtroJson = json.filter((valor) => valor.valor != 0)

function mediaMensal() {
  const valorTotal = filtroJson.reduce(
    (valor, valorAtual) => valor + valorAtual.valor,
    0
  )
  return valorTotal / filtroJson.length
}

const menorValor = (valores, valorAtual) => {
  return valores.valor < valorAtual.valor ? valores : valorAtual
}

const maiorValor = (valores, valorAtual) => {
  return valores.valor > valorAtual.valor ? valores : valorAtual
}

const diasMediaMaior = (valor) => {
  if (valor.valor > mediaMensal()) {
    return valor
  }
}

valorMaior = json.reduce(maiorValor)
valorMenor = json.filter((valor) => valor.valor != 0).reduce(menorValor)
diasMediaMensalMaior = json.filter(diasMediaMaior)

console.log(valorMenor)
console.log(valorMaior)
console.log(diasMediaMensalMaior)
