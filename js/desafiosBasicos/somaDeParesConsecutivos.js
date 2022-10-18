// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades: 
// - "gets" : lê UMA linha com dados de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;
// Abaixo segue o template de código para este desafio, o qual pode ou não utilizar tais funções


let x = parseInt(gets());
while (x != 0)
{
//Condição para caso o número informado for PAR, ele irá somar os 5 pares consecutivos até o seu número.
    if  (x % 2 != 0)
    {
        x = x + 1      ;
    }
//Imprima a soma:
    x = x = (x + (x+2) + (x+4) + (x+6) + (x+8)) 
    print(x);
    x = parseInt(gets());
}