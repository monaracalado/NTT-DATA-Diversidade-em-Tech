// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:  
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário; 
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente. 

let N = parseInt(gets()); 

let arr = new Array(N); 

for (let i = 0; i < N; i++){ 

    arr[i] = parseInt(gets()); 
    
    if(arr[i] === 0){
      if((i+1) < N){
        arr[i+1] = 0;
        i++;  
      }  
      
    }

}    
 
print(arr);  
 
// TODO: Retorne uma saída com os zeros devidamente duplicados