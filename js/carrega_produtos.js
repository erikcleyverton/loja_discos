import {produtos} from"./produtos.js"; 

const section_cards = document.querySelector('#cards');

const listarProdutos = () => {
    section_cards.innerHTML = '';

    produtos.forEach((elem, i) => {
    
    });
}

listarProdutos()

//FILTRANDO AS SEÇOES COM A COLECAO map
const listarSecoes = () => {
    //CRIANDO A COLECAO MAP
   const secoesFiltrada = new Map()
    
   //PERCORRENDO O ARRAY PRODUTOS E CRIANDO SECOES
    produtos.forEach((elem, i) => {
        secoesFiltrada.set(elem. id_secao, elem)
    })
        
  const secoesMenu = Array.from(secoesFiltrada.values())       

  //RETORNADO O ARRAY CONVERTIDO
  return secoesMenu

}

//MONTANDO OS LINKS SEÇÕES
const montarSecoes = () => {
    //PEGANDO O ELEMENTO DO DOM
    const ulMenu = document.querySelector('#menu-secoes')
  //LIMPAMDO O ELEMENTO Ulmenu
    ulMenu.innerHTML = ''

    //PERCORRENDO O ARRAY DAS SECOES FILTRADA
    listarSecoes().forEach((elem, i) => {
      //CRIANDO O ELEMENTO LI
        const liSecao = document.createElement('li')

        //CRIANDO ELEMENTO A
        const aSecao = document.createElement('a')
        aSecao.setAttribute('href', '#')
        aSecao.setAttribute('class', 'lnk-secao')
        aSecao.innerHTML = elem.nome_secao
     //CAPTURANDO CLICK DOS LINKS 
        aSecao.addEventListener('click', (evento) => {
            evento.preventDefault(); // Impede o comportamento padrão do '#'
            
            // CHAMANDO A FUNCAO PRODUTOS FILTRADOS QUE VOCÊ CRIOU
            const resultadoFiltro = produtosFiltrados(elem.id_secao);
            
            // CHAMANDO A FUNÇÃO DE MONTAR CARDS COM O RESULTADO DO FILTRO
            montandoCards(resultadoFiltro);
        })
     //ADICIONANDO ELEMENTO FILHO a NO ELEMENTO li
        liSecao.appendChild(aSecao)

        //ADICIONANDO O ELEMENTO FILHO li NO ELEMENTO DOM ul
        ulMenu.appendChild(liSecao)
    })
}

montarSecoes()
//FILTRANDO PRODUTOS
const produtosFiltrados = (idSecao) => {

    return idSecao === 0 ? produtos : produtos.filter(elem => elem.id_secao === idSecao) 


}

//MONTANDO CARDS
const montandoCards = (objProdutos) => {
section_cards.innerHTML = ''

objProdutos.forEach((elem, i) => {

    const divCard = document.createElement('div');
        divCard.setAttribute('class', 'card');

        const imgProduto = document.createElement('img');
        imgProduto.setAttribute('src', elem.caminho_da_imagem);
        imgProduto.setAttribute('alt', elem.descricao_produto);
        imgProduto.setAttribute('class', 'img_card');

        const h2Titulo = document.createElement('h2');
        h2Titulo.innerHTML = elem.descricao_produto;

        const h3Valor = document.createElement('h3');
        h3Valor.setAttribute('class', 'valor_card'); 
        h3Valor.innerHTML = `R$ ${parseFloat(elem.valor_unitario).toFixed(2).replace('.', ',')}`; // Corrigido de divValor para h3Valor

        const btnCard = document.createElement('button');
        btnCard.setAttribute('class', 'btn_card');
        btnCard.innerHTML = 'Adicionar';

        divCard.appendChild(imgProduto);
        divCard.appendChild(h2Titulo);
        divCard.appendChild(h3Valor); 
        divCard.appendChild(btnCard);

        section_cards.appendChild(divCard)

})

}
montandoCards(produtos)

// Captura o input de pesquisa do HTML
const inputPesquisa = document.querySelector('#pesquisa');

// Ouve o que o usuário digita
inputPesquisa.addEventListener('input', (evento) => {
    // Pega o texto digitado e transforma em minúsculo para não diferenciar maiúsculas/minúsculas
    const termoPesquisa = evento.target.value.toLowerCase();

    // Filtra a lista de produtos baseada no termo pesquisado
    const produtosFiltradosPorNome = produtos.filter(elem => {
        // Ignora o objeto de seção "TODOS" da busca
        if (elem.id_secao === 0 && !elem.descricao_produto) {
            return false;
        }
        
        // Verifica se o produto tem uma descrição e se ela contém o termo pesquisado
        return elem.descricao_produto && elem.descricao_produto.toLowerCase().includes(termoPesquisa);
    });

    // Atualiza a tela chamando a sua função existente com os produtos filtrados
    montandoCards(produtosFiltradosPorNome);
});