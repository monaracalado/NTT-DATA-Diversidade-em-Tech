// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:  
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário; 
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

// let lines = gets().split("\n"); 

// var subtractProductAndSum = parseInt(lines.shift); 

// let n = parseInt(lines.shift()); 

//TODO:  retorne a diferença entre o produto de seus dígitos e a soma de seus dígitoslet lines = gets().split("");

let lines = gets().split("");

let subtractProductAndSum = 0;
let n = 0;
let product = 1;
let sum = 0;

while( lines.length > 0) {
  n = parseInt(lines.shift());
  sum += n;
  product *= n;
}

subtractProductAndSum = product - sum;

print(subtractProductAndSum);