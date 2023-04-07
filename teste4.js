let sp = 67836.43
let rj = 36678.66
let mg = 29229.88
let es = 27165.48
let outros = 19849.53
let total = sp + rj + mg + es + outros
console.log(`O valor total de todos estados foi: R$ ${total}`)
console.log("")
console.log("-------------- Vamos verificar qual a porcentagem de cada estado --------------")
console.log("")
let porcentagemSp = (100 * sp)/total
console.log(`O percentual de participação de SP é de: ${porcentagemSp.toFixed(2)}%`)

let porcentagemRj = (100 * rj)/total
console.log(`O percentual de participação de RJ é de: ${porcentagemRj.toFixed(2)}%`)

let porcentagemMg = (100 * mg)/total
console.log(`O percentual de participação de MG é de: ${porcentagemMg.toFixed(2)}%`)

let porcentagemEs = (100 * es)/total
console.log(`O percentual de participação de ES é de: ${porcentagemEs.toFixed(2)}%`)

let porcentagemOutros = (100 * outros)/total
console.log(`O percentual de participação de OUTROS estados é de: ${porcentagemOutros.toFixed(2)}%`)

let somaPercentual = porcentagemSp + porcentagemRj + porcentagemMg + porcentagemEs + porcentagemOutros
console.log(`Prova real do percentual correto ${somaPercentual}%`)
