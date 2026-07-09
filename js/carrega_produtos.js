import {produtos} from"./produtos.js"; 

const section_cards = document.querySelector('#cards');

const listarProdutos = () => {
    section_cards.innerHTML = '';

    produtos.forEach((elem, i) => {
        const divCard = document.createElement('div');
        divCard.setAttribute('class', 'card');

        const imgProduto = document.createElement('img');
        imgProduto.setAttribute('src', elem.caminho_da_imagem);
        imgProduto.setAttribute('alt', elem.descricao_produto);
        imgProduto.setAttribute('class', 'img_card');

        const h2Titulo = document.createElement('h2');
        h2Titulo.innerHTML = elem.descricao_produto;

        const h3Valor = document.createElement('h3');
        divValor.setAttribute('class', 'valor_card');
        divValor.innerHTML = `R$ ${parseFloat(elem.valor_unitario).toFixed(2).replace('.', ',')}`;

        const btnCard = document.createElement('button');
        btnCard.setAttribute('class', 'btn_card');
        btnCard.innerHTML = 'Adicionar';

        divCard.appendChild(imgProduto);
        divCard.appendChild(h2Titulo);
        divCard.appendChild(divValor);
        divCard.appendChild(btnCard);

        section_cards.appendChild(divCard);
    });
}

listarProdutos()

//FILTRANDO AS SEÇOES COM A COLECAO map
const listarSecoes = () => {
    //CRIANDO A COLECAO MAP
   const secoesFiltrada = new map()
    
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
        aSecao.addEventListener('click', () => {
            //PARA TESTE
            console.log(elem.id_secao)
        })
     //ADICIONANDO ELEMENTO FILHO a NO ELEMENTO li
        liSecao.appendChild(aSecao)

        //ADICIONANDO O ELEMENTO FILHO li NO ELEMENTO DOM ul
        ulMenu.appendChild(liSecao)
    })
}

montarSecoes()