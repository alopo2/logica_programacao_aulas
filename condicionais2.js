//Condicionais
// // realiza um comentário de linha
// /* */ realiza um comentário de bloco
//&& = E
//|| = OU
// ! = Não

//Aluna Beatriz (Bia) precisa de média 6 para ser aprovada na disciplina de Lógica.

let notaProva1 = 6;
let notaProva2 = 7;
let notaTrabalho = 6;

let media = (notaProva1 + notaProva2 + notaTrabalho)/3;

/*if (media >= 6) {
    console.log(`Parabéns, você foi aprovada com média, ${media}`);
} else {
    console.log(`Você foi reprovada com média, ${media}`);
}*/

if (media >= 6) {
    console.log(`Parabéns, você foi aprovada com média, ${media}`);
} else if (media < 6 && media > 5) {
    console.log(`Não desista, falta pouco para a média, 
    realize um trabalho, e me entregue na próxima aula. 
    Sua média atual é ${media}`)
} else {
    console.log(`Você foi reprovada com média, ${media}`);
}