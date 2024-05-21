//Condicionais if (se), else if, else (senão).


let idade = 16;

//if (idade >= 18) {
    //console.log("Você é obrigado a votar");
//} else {
    //console.log("Seu voto é opcional");
//}

if (idade > 15 && idade < 18 || idade > 70) {
    console.log("Seu voto é opcional");
} else if (idade < 16) {
    console.log("Você não pode votar");
} else {
    console.log("Você é obrigado a votar");
}
