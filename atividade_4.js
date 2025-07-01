const dados = {  nome: "João",  idade: null,  cidade: "São Paulo",  email: undefined};

delete dados.idade; 
delete dados.email;

//const {idade, email, ...resto} = dados;

console.log(dados);