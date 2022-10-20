// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:  
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário; 
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente. 


let A = parseInt(gets()), B= parseInt(gets()); 
 
// TODO: Calcule a porcentagem de diferença entre os dois valores
let  percentual = (B-A)/A*100; 

print(Math.trunc(percentual) + "%")