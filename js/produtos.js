const produtosVinis = [
    // SECÇÃO 1: Pop & Dance (id_secao: 1)
    {
        id_produto: 1,
        descricao_produto: "Caroline Polachek – Desire, Everasking Edition",
        caminho_da_imagem: "imagens/CAROLINE_VINIL.jpg",
        valor_unitario: 290.00,
        id_secao: 1,
        nome_secao: "Pop & Dance"
    },
    {
        id_produto: 2,
        descricao_produto: "Madonna – Confessions 2",
        caminho_da_imagem: "imagens/Confessions2.jpg",
        valor_unitario: 360.00,
        id_secao: 1,
        nome_secao: "Pop & Dance"
    },
    {
        id_produto: 3,
        descricao_produto: "Madonna – Confessions on a Dance Floor",
        caminho_da_imagem: "imagens/CONFESSIONS-.jpg",
        valor_unitario: 345.00,
        id_secao: 1,
        nome_secao: "Pop & Dance"
    },
    {
        id_produto: 4,
        descricao_produto: "Kylie Minogue – Tension",
        caminho_da_imagem: "imagens/KYLIE_MINOGUE_VINIL.jpg",
        valor_unitario: 280.00,
        id_secao: 1,
        nome_secao: "Pop & Dance"
    },

    // SECÇÃO 2: Rock & Alternativo (id_secao: 2)
    {
        id_produto: 5,
        descricao_produto: "Cocteau Twins – Treasure Edition",
        caminho_da_imagem: "imagens/COCTEAU_TWIN_S_VINIL.jpg",
        valor_unitario: 234.00,
        id_secao: 2,
        nome_secao: "Rock & Alternativo"
    },
    {
        id_produto: 6,
        descricao_produto: "Ethel Cain – Preacher's Daughter",
        caminho_da_imagem: "imagens/ETHEL_CAIN_VINIL.jpg",
        valor_unitario: 315.00,
        id_secao: 2,
        nome_secao: "Rock & Alternativo"
    },
    {
        id_produto: 7,
        descricao_produto: "Deftones – Diamond Eyes",
        caminho_da_imagem: "imagens/VINIL_DEFTONES.jpg",
        valor_unitario: 295.00,
        id_secao: 2,
        nome_secao: "Rock & Alternativo"
    },
    {
        id_produto: 8,
        descricao_produto: "Cocteau Twins – Heaven or Las Vegas",
        caminho_da_imagem: "imagens/HEAVEN_OR_LAS_VEGAS_VINIL.jpg",
        valor_unitario: 265.00,
        id_secao: 2,
        nome_secao: "Rock & Alternativo"
    },

    // SECÇÃO 3: MPB & Clássicos Nacionais (id_secao: 3)
    {
        id_produto: 9,
        descricao_produto: "Gal Costa – Gal Costa (1969)",
        caminho_da_imagem: "imagens/GAL_COSTA_VINIL.jpg",
        valor_unitario: 190.00,
        id_secao: 3,
        nome_secao: "MPB & Clássicos Nacionais"
    },
    {
        id_produto: 10,
        descricao_produto: "Tim Maia – Tim Maia (1970)",
        caminho_da_imagem: "imagens/TIM_MAIA_VINIL.jpg",
        valor_unitario: 210.00,
        id_secao: 3,
        nome_secao: "MPB & Clássicos Nacionais"
    },
    {
        id_produto: 11,
        descricao_produto: "Vanusa - Manhas de Setembro",
        caminho_da_imagem: "imagens/GAL_COSTA_VINIL.jpg", // Reutilizando imagem existente como pedido
        valor_unitario: 185.00,
        id_secao: 3,
        nome_secao: "MPB & Clássicos Nacionais"
    },
    {
        id_produto: 12,
        descricao_produto: "Jorge Ben Jor – A Tábua de Esmeralda",
        caminho_da_imagem: "imagens/TIM_MAIA_VINIL.jpg", // Reutilizando imagem existente como pedido
        valor_unitario: 225.00,
        id_secao: 3,
        nome_secao: "MPB & Clássicos Nacionais"
    },

    // SECÇÃO 4: Pop Clássico & Ícones (id_secao: 4)
    {
        id_produto: 13,
        descricao_produto: "Michael Jackson - Thriller",
        caminho_da_imagem: "imagens/DISCO_VINIL_MICHAEL_JACKSON.jpg",
        valor_unitario: 310.00,
        id_secao: 4,
        nome_secao: "Pop Clássico & Ícones"
    },
    {
        id_produto: 14,
        descricao_produto: "Madonna – True Blue",
        caminho_da_imagem: "imagens/TRUE_BLUE_VINIL.jpg",
        valor_unitario: 280.00,
        id_secao: 4,
        nome_secao: "Pop Clássico & Ícones"
    },
    {
        id_produto: 15,
        descricao_produto: "Madonna – Ray of Light",
        caminho_da_imagem: "imagens/RAY_OF_LIGHT_VINIL.jpg",
        valor_unitario: 320.00,
        id_secao: 4,
        nome_secao: "Pop Clássico & Ícones"
    },
    {
        id_produto: 16,
        descricao_produto: "Caroline Polachek – Desire Solo Vinyl",
        caminho_da_imagem: "imagens/Desire_vinil.jpg",
        valor_unitario: 275.00,
        id_secao: 4,
        nome_secao: "Pop Clássico & Ícones"
    },

    // SECÇÃO 5: Indie & Pop Internacional (id_secao: 5)
    {
        id_produto: 17,
        descricao_produto: "Rosalía –Lux",
        caminho_da_imagem: "imagens/ROSALIA_VINIl.jpg",
        valor_unitario: 290.00,
        id_secao: 5,
        nome_secao: "Indie & Pop Internacional"
    },
    {
        id_produto: 18,
        descricao_produto: "Cortis – Cortis Vinyl Special",
        caminho_da_imagem: "imagens/CORTIS_VINIL.jpg",
        valor_unitario: 240.00,
        id_secao: 5,
        nome_secao: "Indie & Pop Internacional"
    },
    {
        id_produto: 19,
        descricao_produto: "Lana Del Rey – Ultraviolence",
        caminho_da_imagem: "imagens/CORTIS_VINIL.jpg", // Reutilizando imagem existente como pedido
        valor_unitario: 310.00,
        id_secao: 5,
        nome_secao: "Indie & Pop Internacional"
    },
    {
        id_produto: 20,
        descricao_produto: "Marina – Ancient Dreams In A Modern Land",
        caminho_da_imagem: "imagens/ROSALIA_VINIL.jpg", // Reutilizando imagem existente como pedido
        valor_unitario: 260.00,
        id_secao: 5,
        nome_secao: "Indie & Pop Internacional"
    }
];

export{produtos}