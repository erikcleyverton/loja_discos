const produtos = [
    // SECÇÃO 1: Pop & Dance (id_secao: 1)
    {
        id_produto: 1,
        descricao_produto: "CAROLINE POLACHEK– DESIRE, EVARASKING EDITION",
        caminho_da_imagem: "../../imagens/CAROLINE_VINIL.jpg",
        valor_unitario: 290.00,
        id_secao: 1,
        nome_secao: "Pop & Dance"
    },
    {
        id_produto: 2,
        descricao_produto: "MADONNA - CONFESSIONS 2",
        caminho_da_imagem: "../../imagens/Confessions2.jpg",
        valor_unitario: 360.00,
        id_secao: 1,
        nome_secao: "Pop & Dance"
    },
    {
        id_produto: 3,
        descricao_produto: "MADONNA - CONFESSIONS ON A DANCE FLOOR",
        caminho_da_imagem: "../../imagens/confessions.jpg",
        valor_unitario: 345.00,
        id_secao: 1,
        nome_secao: "Pop & Dance"
    },
    {
        id_produto: 4,
        descricao_produto: "KYLIE MINOGUE - BODY LANGUAGE",
        caminho_da_imagem: "../../imagens/KYLIE_MINOGUE_VINIL.jpg",
        valor_unitario: 280.00,
        id_secao: 1,
        nome_secao: "Pop & Dance"
    },

    // SECÇÃO 2: Rock & Alternativo (id_secao: 2)
    {
        id_produto: 5,
        descricao_produto: "COCTEAU TWINS -TREASURE",
        caminho_da_imagem: "../../imagens/COCTEAU_TWINS_VINIL.jpg",
        valor_unitario: 234.00,
        id_secao: 2,
        nome_secao: "Rock & Alternativo"
    },
    {
        id_produto: 6,
        descricao_produto: "ETHEL CAIN - WILLOUGHBY TUCKER, I LL ALWAYS LOVE YOU",
        caminho_da_imagem: "../../imagens/ETHEL_CAIN_VINIL.jpg",
        valor_unitario: 315.00,
        id_secao: 2,
        nome_secao: "Rock & Alternativo"
    },
    {
        id_produto: 7,
        descricao_produto: "DEFTONES - DIAMOND EYES",
        caminho_da_imagem: "../../imagens/VINIL_DEFTONES.jpg",
        valor_unitario: 295.00,
        id_secao: 2,
        nome_secao: "Rock & Alternativo"
    },
    {
        id_produto: 8,
        descricao_produto: "COCTEAU TWINS - HEAVEN OR LAS VEGAS",
        caminho_da_imagem: "../../imagens/HEAVEN_OR_LAS_VEGAS_VINIL.jpg",
        valor_unitario: 265.00,
        id_secao: 2,
        nome_secao: "Rock & Alternativo"
    },

    
    {
        id_produto: 9,
        descricao_produto: "GAL COSTA - GAL COSTA (1969)",
        caminho_da_imagem: "../../imagens/GAL_COSTA_VINIL.jpg",
        valor_unitario: 190.00,
        id_secao: 3,
        nome_secao: "MPB & Clássicos Nacionais"
    },
    {
        id_produto: 10,
        descricao_produto: "KATE BUSH - HOUNDS OF LOVE (1970)",
        caminho_da_imagem: "../../imagens/HOUNDSOFLOVE.JPG",
        valor_unitario: 210.00,
        id_secao: 2,
        nome_secao: "Rock & Alternativo"
    },
    {
        id_produto: 11,
        descricao_produto: "CARLY RAE JEPSEN - DAY AND NIGHT ",
        caminho_da_imagem: "../../imagens/dayandnight.jpg", 
        valor_unitario: 255.00,
        id_secao: 4,
        nome_secao: "Pop Clássico & Ícones"
    },
    {
        id_produto: 12,
        descricao_produto: "ELA SOARES - PEDEM PASSAGEM",
        caminho_da_imagem: "../../imagens/elsa_soares.jpg", 
        valor_unitario: 225.00,
        id_secao: 3,
        nome_secao: "MPB & Clássicos Nacionais"
    },

    // SECÇÃO 4: Pop Clássico &  Mpb Ícones (id_secao: 4)
    {
        id_produto: 13,
        descricao_produto: "MARIA BETHANIA - TALISMÃ",
        caminho_da_imagem: "../../imagens/maria_bethania.jpg",
        valor_unitario: 310.00,
        id_secao: 3,
        nome_secao: "MPB & Clássicos Nacionais"
    },
    {
        id_produto: 14,
        descricao_produto: "MADONNA - TRUE BLUE",
        caminho_da_imagem: "../../imagens/TRUE_BLUE_VINIL.jpg",
        valor_unitario: 280.00,
        id_secao: 4,
        nome_secao: "Pop Clássico & Ícones"
    },
    {
        id_produto: 15,
        descricao_produto: "MADONNA – RAY OF LIGHT",
        caminho_da_imagem: "../../imagens/RAY_OF_LIGHT_VINIL.jpg",
        valor_unitario: 320.00,
        id_secao: 4,
        nome_secao: "Pop Clássico & Ícones"
    },
    {
        id_produto: 16,
        descricao_produto: "CAROLINE POLACHEK – DESIRE, I WANT TO TURN INTO YOU",
        caminho_da_imagem: "../../imagens/Desire_vinil.jpg",
        valor_unitario: 275.00,
        id_secao: 4,
        nome_secao: "Pop Clássico & Ícones"
    },

    // SECÇÃO 5: Indie & Pop Internacional (id_secao: 5)
    {
        id_produto: 17,
        descricao_produto: "ROSALÍA - LUX",
        caminho_da_imagem: "../imagens/ROSALIA_VINIl.jpg",
        valor_unitario: 290.00,
        id_secao: 5,
        nome_secao: "Indie & Pop Internacional"
    },
    {
        id_produto: 18,
        descricao_produto: "CORTIS – COLORS OUTSIDE THE LINES",
        caminho_da_imagem: "../../imagens/CORTIS_VINIL.jpg",
        valor_unitario: 240.00,
        id_secao: 5,
        nome_secao: "Indie & Pop Internacional"
    },
    {
        id_produto: 19,
        descricao_produto: "CHICO BUARQUE  - CHICO BUARQUE",
        caminho_da_imagem: "../../imagens/chico_buarque.jpg",
        valor_unitario: 310.00,
        id_secao: 3,
        nome_secao:"MPB & Clássicos Nacionais"
    },
    

    {
        id_produto: 20,
        descricao_produto: "MICHAEL JACKSON - THRILLER",
        caminho_da_imagem: "../../imagens/DISCO_VINIL_MICHAEL_JACKSON.JPG", 
        valor_unitario: 260.00,
        id_secao: 5,
        nome_secao: "Indie & Pop Internacional"
    },

    {
        id_secao: 0,
        nome_secao: "TODOS"
    },


];

export{produtos}