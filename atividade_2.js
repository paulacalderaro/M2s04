<<<<<<< HEAD

const vendas = [
  { produto: "Notebook", valor: 2500 },
  { produto: "Monitor", valor: 1200 },
  { produto: "Teclado", valor: 250 }
];
let totalVendas = 0;


vendas.forEach(produto => {
console.log(produto)
    
});


vendas.forEach(produto =>{
totalVendas += produto.valor;

});

console.log(`Total de vendas: R$ ${totalVendas.toFixed(2)}`);


=======

const vendas = [
  { produto: "Notebook", valor: 2500 },
  { produto: "Monitor", valor: 1200 },
  { produto: "Teclado", valor: 250 }
];
let totalVendas = 0;


vendas.forEach(produto => {
console.log(produto)
    
});


vendas.forEach(produto =>{
totalVendas += produto.valor;

});

console.log(`Total de vendas: R$ ${totalVendas.toFixed(2)}`);


>>>>>>> b68d7d8dce2e5b3490662459cd951c641e46f8fe
