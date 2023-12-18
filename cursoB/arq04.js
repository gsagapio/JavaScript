const notaUm = parseInt(prompt("Digite a primeira nota: "))
const notaDois = parseInt(prompt("Digite a segunda nota: "))
const notaTres = parseInt(prompt("Digite a terceira nota: "))

const media = (notaUm + notaDois + notaTres) / 3

console.log(`A sua media é`, media.toFixed(2))
