// Var -> Respeita escopo de função
// let -> Respeita os escopos de bloco, function
// const -> Não permite a alteração dos seus valores por 'tipos primitivos', 
// mas permite que seja alterado por objetos

/*

__Escopo global__

{

    __Escopo de bloco__

}

function test(){

    __Escopo de função__

}

*/

//Exemplo do let

/* var mensagem = "valor da var";

console.log(`o texto apresentado é o ${mensagem}`);

if(true){

    let mensagem = "valor do if";
    console.log(`o texto apresentado é o ${mensagem}`);

}

console.log(`o texto apresentado é o ${mensagem}`);

if(true){

    var mensagem = "valor do if";
    console.log(`o texto apresentado é o ${mensagem}`);

}

console.log(`o texto apresentado é o ${mensagem}`);

*/

//Exemplo de const

/* const name = "Lucas";

//name = "Jailson"; - Da um error lascado

console.log(`Seu nome é: ${name}`);

const user = {

    nome : "Lucas"

}

user.nome = "Mario Games";

console.log(`O nome do objeto é: ${user.nome}`);

const galerinha = ["Ricardo", "Jailson", "Clóvis"]

galerinha.push("Mario Games");

galerinha.shift();

galerinha[1] = "Ricardo Milos";

console.log(`Array após alterações: ${galerinha.join(" uwu ")}`);

*/