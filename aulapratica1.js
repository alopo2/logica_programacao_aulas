//Variáveis - Let e Const
//Padrão camelCase = a primeira palavra é minuscula, da segunda em diante, a primeira letra é maiúscula.
//Concatenar duas informações eu utilizo o sinal de +.
//Para fazer com que a minha operação apareça no terminal, eu utilizo o console.log
//clear é um comando para limpar o terminal

const nomeCompleto = "Ângela"; //constante que recebe o tipo string
let idade = 28; //variável que recebe o tipo number (inteiro/int)
const paisDeOrigem = 'Brasil'; //constante que recebe o tipo string
let bairro = "Rio Vermelho"; //variável que recebe o tipo string

//console.log(nomeCompleto+idade+paisDeOrigem+bairro); 
//mostrar no meu terminal, as informações que estão dentro das variáveis que eu chamei.


//Operadores Lógicos - AND, OR AND NOT. 
//&& = AND/E - Só retorna verdadeiro (true) quando ambos os operandos é true
//|| = OR/OU - Só retorna falso (false) quando ambos os operandos é false
// ! = NOT/NÃO - Inverte o valor de true para false e vice-versa

//Valor booleano ou boolean é true ou false. verdadeiro ou falso

//Operador && = AND/E

let estaChovendo = false; //variável estaChovendo recebe o valor false (falso)
let estaCalor = false; //variável estaCalor receber o valor true (verdadeiro)

//console.log(estaChovendo && estaCalor); //Resultado = False


let estaChovendo1 = false; //variável estaChovendo recebe o valor false (falso)
let estaCalor1 = true; //variável estaCalor receber o valor true (verdadeiro)

//console.log(estaChovendo && estaCalor); //Resultado = False

//Operador || = OR/OU

let fazCalor = false;
let ligoArCondicionado = false;

//console.log(fazCalor || ligoArCondicionado); //Resultado = False

// ! = NOT/NÃO

let estaEnsolarado = true;

console.log(!estaEnsolarado); //Resultado = False