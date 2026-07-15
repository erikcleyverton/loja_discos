// CRIANDO ARRAY DE ITENS CARRINHO
const itensCarrinho = JSON.parse(localStorage.getItem('itensSessao')) || []

//FUNÇAÕ PARA ADICIONAR O ITEM NO ARRAY
const addItem = (objItem) => {
    itensCarrinho.push(objItem)

    localStorage.setItem('itensSessao', JSON.stringify(itensCarrinho))
}

//LISTAR ITENS DO CARRINHO
const listItens = () => {
    const itensSelecionado = JSON.parse(localStorage.getItem('itensSessao')) || []

    return itensSelecionado

}
//REMOVER ELEMENTO
const removeItem = (pos)=>{
    itensCarrinho.splice(pos, 1)

    localStorage.setItem('itensSessao', JSON.stringify(itensCarrinho))
    //sessionStorage.setItem('itensSessao', JSON.stringify(itensCarrinho))
}



export { addItem, listItens, removeItem };