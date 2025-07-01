const dadosPessoais = { nome: "Lucas", idade: 30 };
const endereco = { cidade: "São Paulo", estado: "SP" };

const mesclando = {...dadosPessoais, ...endereco};

console.log(mesclando);