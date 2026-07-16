// CRIANDO O ARRAY DE ITENS DO CARRINHO
const itensCarrinho = JSON.parse(localStorage.getItem('itensSessao')) || []

// CRIANDO ARROW ITEM (Igual ao do professor)
const fObjItem = (objProduto) => {
    const item = {
        id_produto: objProduto.id_produto,
        descricao_produto: objProduto.descricao_produto,
        caminho_da_imagem: objProduto.caminho_da_imagem,
        valor_unitario: objProduto.valor_unitario,
        quantidade: 1
    }
    return item
}

// PEGANDO O INDICE DO ARRAY
console.log("índice do array ->>> ", itensCarrinho.findIndex(elem => elem && elem.id_produto == 12))

// FUNÇÃO PARA ADICIONAR O ITEM NO ARRAY (Estrutura do professor com controle de quantidade)
const addItem = (objItem) => {
    // 1 Verificamos se o produto já existe no carrinho
    const index = itensCarrinho.findIndex(elem => elem && elem.id_produto == objItem.id_produto)

    if (index > -1) {
        // 2 Se já existe, olhamos ele no array e somamos +1 na quantidade 📈
        itensCarrinho[index].quantidade += 1
    } else {
        // 3. Se não existe, criamos o item usando fObjItem e adicionamos normalmente 🆕
        itensCarrinho.push(fObjItem(objItem))
    }

    localStorage.setItem('itensSessao', JSON.stringify(itensCarrinho))
}

// LISTAR ITENS DO CARRINHO
const listItens = () => {
    const itensSelecionados = JSON.parse(localStorage.getItem('itensSessao')) || []
    return itensSelecionados
}

// REMOVER ELEMENTO
const removeItem = (pos) => {
    itensCarrinho.splice(pos, 1)
    localStorage.setItem('itensSessao', JSON.stringify(itensCarrinho))
}

export { addItem, listItens, removeItem };