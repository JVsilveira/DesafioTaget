const SP = 67836.43
const RJ = 36678.66
const MG = 29229.88
const ES = 27165.48
const outros = 19849.53

total = SP + RJ + MG + ES + outros

psp = (SP / total) * 100
prj = (RJ / total) * 100
pmg = (MG / total) * 100
pes = (ES / total) * 100
pout = (outros / total) * 100

console.log("A porcentagem de São Paulo é " + psp.toFixed(2))
console.log("A porcentagem de Rio de Janeiro é " + prj.toFixed(2))
console.log("A porcentagem de Minas Gerais é " + pmg.toFixed(2))
console.log("A porcentagem de Espirito Santo é " + pes.toFixed(2))
console.log("A porcentagem dos outros é " + pout.toFixed(2))
