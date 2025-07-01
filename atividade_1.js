<<<<<<< HEAD
const produtos = [
  { nome: "Notebook", estoque: 4 },
  { nome: "Monitor", estoque: 0 },
  { nome: "Teclado", estoque: 2 },
  { nome: "Mouse", estoque: 0 }
];

const produtosFiltrados = produtos.filter(Number => Number.estoque >0);

=======
const produtos = [
  { nome: "Notebook", estoque: 4 },
  { nome: "Monitor", estoque: 0 },
  { nome: "Teclado", estoque: 2 },
  { nome: "Mouse", estoque: 0 }
];

const produtosFiltrados = produtos.filter(Number => Number.estoque >0);

>>>>>>> b68d7d8dce2e5b3490662459cd951c641e46f8fe
console.log(produtosFiltrados);