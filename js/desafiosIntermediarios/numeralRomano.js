// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.
// TODO: crie um conversor que altere o Numeral Romano para um Inteiro e imprima esse inteiro

s = gets();

let valor = 0;

s = s.toUpperCase();

const map = {
    "I": 1, 
    "V": 5, 
    "X": 10, 
    "L": 50, 
    "C": 100, 
    "D": 500, 
    "M": 1000
}

for(let i = 0; i < s.length; i++){
    if((i+1) < s.length ){
        if(map[s[i]] >= map[s[i+1]]){
            valor += map[s[i]];
        } else {
            valor -= map[s[i]];
        }
    } else {        
        valor += map[s[i]];
    }
}

print(valor);