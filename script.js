var num = document.getElementById('num')
var lista = document.getElementById('lista')
var res = document.getElementById('res')
var valores = []

function number(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function list(n, l) {
    if(l.indexOf(Number(n)) != -1 ) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (number(num.value) && !list(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `valor ${num.value} adicionado`
        lista.appendChild(item)
    } else {
        alert('valor inválido ou já encontrado')
    }
    num.value = ''
    num.focus()
}   

function finalizar () {
    if (valores.length == 0) {
        alert('adicione um valor antes de finalizar')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
            maior = valores[pos]
            if (valores [pos] < menor)
            menor = valores[pos]
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>ao todo temos ${total} números cadastrados</p>`
        res.innerHTML += `<p>o maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>o menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p>a média dos valores é ${media}</p>`

    }
}
