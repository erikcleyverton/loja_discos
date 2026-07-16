// CRIANDO ARRAY DE ITENS CARRINHO 
const itensCarrinho = (JSON.parse(localStorage.getItem('itensSessao')) || []).filter(elem => elem !== null)


// CRIANDO ARROW ITEM 
const objItem = (objProduto) => {
 const Item = {
    id_produto: 2,
    descricao_produto: "Madonna – Confessions 2",
    caminho_da_imagem: "../../imagens/Confessions2.jpg",
    valor_unitario: 360.00,
    quantidade: 1
 }

 return Item
}


// PEGANDO O INDICE DO ARRAY 
console.log("indice do array ->>> ", itensCarrinho.findIndex(elem => elem?.id_produto == 12))


// FUNÇÃO PARA ADICIONAR O ITEM NO ARRAY
const addItem = (itemAdicionado) => {
    itensCarrinho.push(itemAdicionado)

    localStorage.setItem('itensSessao', JSON.stringify(itensCarrinho))
}


// LISTAR ITENS DO CARRINHO
const listItens = () => {
    const itensSelecionado = JSON.parse(localStorage.getItem('itensSessao')) || []

    return itensSelecionado.filter(elem => elem !== null)
}


// REMOVER ELEMENTO
const removeItem = (pos) => {
    itensCarrinho.splice(pos, 1)

    localStorage.setItem('itensSessao', JSON.stringify(itensCarrinho))
}


export { addItem, listItens, removeItem };