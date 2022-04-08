// TESTE 1: Dado dois arrays de inteiros não vazios, determine se os valores do segundo array estão na mesma ordem no primeiro array.

function verificarArray (primeiroArray, segundoArray){
    const arrayFiltrado = primeiroArray.filter( item => segundoArray.includes(item))
    
    console.log(JSON.stringify(arrayFiltrado) === JSON.stringify(segundoArray));
}

const primeiro = [5, 1, 22, 25, 6, -1, 8, 10]
const segundo = [1, 6, -1, 10]

verificarArray(primeiro, segundo);


// TESTE 2: Dado um array de strings não vazio, remova os dados duplicados em sequência.

var arr = ["g", "g", "y", "c", "c", "c", "q", "c", "y", "y"]

function verificarArray(array){
    let novoArray = []
    for(i=0; i < array.length; i++){
        if(!(array[i] === array[i+1])){
            novoArray.push(array[i])
        }
    }
    console.log(novoArray)
}

verificarArray(arr)

// TESTE 3: Dado um array de strings não vazio, retorne um array de booleans indicando se a string é ou não um palíndromo.

let palavras = ["arara", "jabuticaba", "asa", "caminhao", "1001"]

function palindromos(palavras){
    let palavrasInvertidas = palavras.map(palavra => palavra.split('').reverse().join(''))

    let palindromos = palavrasInvertidas.map(palavra => palavras.includes(palavra) )

    console.log(palindromos)
}

palindromos(palavras)
