// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:  
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário; 
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente. 


let lines = gets().split("\n"); 
let n = parseInt(lines.shift()); 


// TODO: Calcule o valor do fatorial de "n", atribuindo o retorno a "r".
let i = n;
let arr = [];
let total = 0;


while (i >= 1) {
    arr[i] = i
    i--
}
arr.shift()
let array = arr.reverse()
let a = array.length


while (array.length > 0) {
    if (array.length >= 4) {
        total += parseInt((array[0] * array[1]) / (array[2])) + array[3]
        array.splice(0, 4)        
        while (array.length >= 4) {
            total = total - parseInt((array[0] * array[1]) / array[2]) + array[3]
            array.splice(0, 4)
        }
        if (array.lengh == 3) {
            total = total - parseInt((array[0] * array[1]) / array[2])
            array.splice(0, 3)
        }
        if (array.length == 2) {
            total = total - (array[0] * array[1])
            array.splice(0, 2)
        }
        if (array.length == 1) {
            total = total - array[0]
            array.splice(0, 1)
        }
    }
    if (array.lengh == 3) {
        total = total + parseInt((array[0] * array[1]) / array[2])
        array.splice(0, 3)
        if (array.length == 2) {
            total = total - (array[0] * array[1])
            array.splice(0, 2)
        }
        if (array.length == 1) {
            total = total - array[0]
            array.splice(0, 1)
        }
    }
    if (array.length == 2) {
        total = total - (array[0] * array[1])
        array.splice(0, 2)
    }
}
print(parseInt(total));