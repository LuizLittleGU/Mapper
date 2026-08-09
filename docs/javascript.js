// BANCO DE DADOS COMPLETO COM TODOS OS PAÍSES E CATEGORIAS
const bancoDeDados = [
    {
        continente: "América",
        tipo: "pais",
        paises: [
            { nome: "Antígua e Barbuda", url: "Mapas/antigua e barbuda.png" },
            { nome: "Argentina", url: "Mapas/argentina.png" },
            { nome: "Bahamas", url: "Mapas/bahamas.png" },
            { nome: "Barbados", url: "Mapas/barbados.png" },
            { nome: "Belize", url: "Mapas/belize.png" },
            { nome: "Bolívia", url: "Mapas/bolivia.png" },
            { nome: "Brasil", url: "Mapas/brasil.png" },
            { nome: "Canadá", url: "Mapas/canada.png" },
            { nome: "Chile", url: "Mapas/chile.png" },
            { nome: "Colômbia", url: "Mapas/colombia.png" },
            { nome: "Costa Rica", url: "Mapas/costa rica.png" },
            { nome: "Cuba", url: "Mapas/cuba.png" },
            { nome: "Dominica", url: "Mapas/dominica.png" },
            { nome: "Equador", url: "Mapas/equador.png" },
            { nome: "El Salvador", url: "Mapas/el salvador.png" },
            { nome: "Estados Unidos", url: "Mapas/estados unidos.png" },
            { nome: "Granada", url: "Mapas/granada.png" },
            { nome: "Guatemala", url: "Mapas/guatemala.png" },
            { nome: "Guiana", url: "Mapas/guiana.png" },
            { nome: "Haiti", url: "Mapas/haiti.png" },
            { nome: "Honduras", url: "Mapas/honduras.png" },
            { nome: "Jamaica", url: "Mapas/jamaica.png" },
            { nome: "México", url: "Mapas/mexico.png" },
            { nome: "Nicarágua", url: "Mapas/nicaragua.png" },
            { nome: "Panamá", url: "Mapas/panama.png" },
            { nome: "Paraguai", url: "Mapas/paraguai.png" },
            { nome: "Peru", url: "Mapas/peru.png" },
            { nome: "República Dominicana", url: "Mapas/republica dominicana.png" },
            { nome: "Santa Lúcia", url: "Mapas/santa lucia.png" },
            { nome: "São Cristóvão e Neves", url: "Mapas/sao cristovao e neves.png" },
            { nome: "São Vicente e Granadinas", url: "Mapas/sao vicente e granadinas.png" },
            { nome: "Suriname", url: "Mapas/suriname.png" },
            { nome: "Trinidad e Tobago", url: "Mapas/trinidad e tobago.png" },
            { nome: "Uruguai", url: "Mapas/uruguai.png" },
            { nome: "Venezuela", url: "Mapas/venezuela.png" }
        ]
    },
    {
        continente: "Europa",
        tipo: "pais",
        paises: [
            { nome: "Albânia", url: "Mapas/albania.png" },
            { nome: "Alemanha", url: "Mapas/alemanha.png" },
            { nome: "Andorra", url: "Mapas/andorra.png" },
            { nome: "Áustria", url: "Mapas/austria.png" },
            { nome: "Bélgica", url: "Mapas/belgica.png" },
            { nome: "Bielorrússia", url: "Mapas/bielorrusia.png" },
            { nome: "Bósnia e Herzegovina", url: "Mapas/bosnia e herzegovina.png" },
            { nome: "Bulgária", url: "Mapas/bulgaria.png" },
            { nome: "Chipre", url: "Mapas/chipre.png" },
            { nome: "Croácia", url: "Mapas/croacia.png" },
            { nome: "Dinamarca", url: "Mapas/dinamarca.png" },
            { nome: "Eslováquia", url: "Mapas/eslovaquia.png" },
            { nome: "Eslovênia", url: "Mapas/eslovenia.png" },
            { nome: "Espanha", url: "Mapas/espanha.png" },
            { nome: "Estônia", url: "Mapas/estonia.png" },
            { nome: "Finlândia", url: "Mapas/finlandia.png" },
            { nome: "França", url: "Mapas/frança.png" },
            { nome: "Grécia", url: "Mapas/grecia.png" },
            { nome: "Hungria", url: "Mapas/hungria.png" },
            { nome: "Irlanda", url: "Mapas/irlanda.png" },
            { nome: "Islândia", url: "Mapas/islandia.png" },
            { nome: "Itália", url: "Mapas/italia.png" },
            { nome: "Letônia", url: "Mapas/letonia.png" },
            { nome: "Liechtenstein", url: "Mapas/liechtenstein.png" },
            { nome: "Lituânia", url: "Mapas/lituania.png" },
            { nome: "Luxemburgo", url: "Mapas/luxemburgo.png" },
            { nome: "Macedônia do Norte", url: "Mapas/macedonia do norte.png" },
            { nome: "Malta", url: "Mapas/malta.png" },
            { nome: "Moldávia", url: "Mapas/moldavia.png" },
            { nome: "Mônaco", url: "Mapas/monaco.png" },
            { nome: "Montenegro", url: "Mapas/montenegro.png" },
            { nome: "Noruega", url: "Mapas/noruega.png" },
            { nome: "Países Baixos", url: "Mapas/paises baixos.png" },
            { nome: "Polônia", url: "Mapas/polonia.png" },
            { nome: "Portugal", url: "Mapas/portugal.png" },
            { nome: "Reino Unido", url: "Mapas/reino unido.png" },
            { nome: "República Tcheca", url: "Mapas/republica tcheca.png" },
            { nome: "Romênia", url: "Mapas/romenia.png" },
            { nome: "San Marino", url: "Mapas/san marino.png" },
            { nome: "Sérvia", url: "Mapas/servia.png" },
            { nome: "Suécia", url: "Mapas/suecia.png" },
            { nome: "Suiça", url: "Mapas/suiça.png" },
            { nome: "Ucrânia", url: "Mapas/ucrania.png" },
            { nome: "Vaticano", url: "Mapas/vaticano.png" }
        ]
    },
    {
        continente: "Ásia",
        tipo: "pais",
        paises: [
            { nome: "Afeganistão", url: "Mapas/afeganistao.png" },
            { nome: "Arábia Saudita", url: "Mapas/arabia saudita.png" },
            { nome: "Armênia", url: "Mapas/armenia.png" },
            { nome: "Azerbaijão", url: "Mapas/azerbaijao.png" },
            { nome: "Bangladesh", url: "Mapas/bangladesh.png" },
            { nome: "Bahrein", url: "Mapas/bahrein.png" },
            { nome: "Brunei", url: "Mapas/brunei.png" },
            { nome: "Butão", url: "Mapas/butao.png" },
            { nome: "Camboja", url: "Mapas/camboja.png" },
            { nome: "Catar", url: "Mapas/catar.png" },
            { nome: "Cazaquistão", url: "Mapas/cazaquistao.png" },
            { nome: "China", url: "Mapas/china.png" },
            { nome: "Coreia do Norte", url: "Mapas/coreia do norte.png" },
            { nome: "Coreia do Sul", url: "Mapas/coreia do sul.png" },
            { nome: "Emirados Árabes Unidos", url: "Mapas/emirados arabes unidos.png" },
            { nome: "Filipinas", url: "Mapas/filipinas.png" },
            { nome: "Geórgia", url: "Mapas/georgia.png" },
            { nome: "Hong Kong", url: "Mapas/hong kong.png" },
            { nome: "Iêmen", url: "Mapas/iemen.png" },
            { nome: "Índia", url: "Mapas/india.png" },
            { nome: "Indonésia", url: "Mapas/indonesia.png" },
            { nome: "Irã", url: "Mapas/ira.png" },
            { nome: "Iraque", url: "Mapas/iraque.png" },
            { nome: "Israel", url: "Mapas/israel.png" },
            { nome: "Japão", url: "Mapas/japao.png" },
            { nome: "Jordânia", url: "Mapas/jordania.png" },
            { nome: "Kwait", url: "Mapas/kwait.png" },
            { nome: "Laos", url: "Mapas/laos.png" },
            { nome: "Líbano", url: "Mapas/libano.png" },
            { nome: "Malásia", url: "Mapas/malasia.png" },
            { nome: "Maldivas", url: "Mapas/maldivas.png" },
            { nome: "Mianmar", url: "Mapas/mianmar.png" },
            { nome: "Mongólia", url: "Mapas/mongolia.png" },
            { nome: "Nepal", url: "Mapas/nepal.png" },
            { nome: "Omã", url: "Mapas/oma.png" },
            { nome: "Paquistão", url: "Mapas/paquistao.png" },
            { nome: "Quirguistão", url: "Mapas/quirguistao.png" },
            { nome: "Rússia", url: "Mapas/russia.png" },
            { nome: "Cingapura", url: "Mapas/cingapura.png" },
            { nome: "Síria", url: "Mapas/siria.png" },
            { nome: "Sri Lanka", url: "Mapas/sri lanka.png" },
            { nome: "Tadjiquistão", url: "Mapas/tadjiquistao.png" },
            { nome: "Tailândia", url: "Mapas/tailandia.png" },
            { nome: "Timor-Leste", url: "Mapas/timor leste.png" },
            { nome: "Turcomenistão", url: "Mapas/turcomenistao.png" },
            { nome: "Turquia", url: "Mapas/turquia.png" },
            { nome: "Uzbequistão", url: "Mapas/uzbequistao.png" },
            { nome: "Vietnã", url: "Mapas/vietna.png" }
        ]
    },
    {
        continente: "África",
        tipo: "pais",
        paises: [
            { nome: "África do Sul", url: "Mapas/africa do sul.png" },
            { nome: "Angola", url: "Mapas/angola.png" },
            { nome: "Argélia", url: "Mapas/argelia.png" },
            { nome: "Benin", url: "Mapas/benin.png" },
            { nome: "Botsuana", url: "Mapas/botsuana.png" },
            { nome: "Burquina Faso", url: "Mapas/burquina faso.png" },
            { nome: "Burundi", url: "Mapas/burundi.png" },
            { nome: "Cabo Verde", url: "Mapas/cabo verde.png" },
            { nome: "Camarões", url: "Mapas/camaroes.png" },
            { nome: "Chade", url: "Mapas/chade.png" },
            { nome: "Comores", url: "Mapas/comores.png" },
            { nome: "Congo", url: "Mapas/congo.png" },
            { nome: "Costa do Marfim", url: "Mapas/costa do marfim.png" },
            { nome: "Djibuti", url: "Mapas/djibuti.png" },
            { nome: "Egito", url: "Mapas/egito.png" },
            { nome: "Eritreia", url: "Mapas/eritreia.png" },
            { nome: "Ewatini", url: "Mapas/eswatini.png" },
            { nome: "Etiópia", url: "Mapas/etiopia.png" },
            { nome: "Gabão", url: "Mapas/gabao.png" },
            { nome: "Gâmbia", url: "Mapas/gambia.png" },
            { nome: "Gana", url: "Mapas/gana.png" },
            { nome: "Guiné", url: "Mapas/guine.png" },
            { nome: "Guiné-Bissau", url: "Mapas/guine bissau.png" },
            { nome: "Guiné Equatorial", url: "Mapas/guine equatorial.png" },
            { nome: "Insulíndia / Madagascar", url: "Mapas/madagascar.png" },
            { nome: "Lésoto", url: "Mapas/lesoto.png" },
            { nome: "Libéria", url: "Mapas/liberia.png" },
            { nome: "Líbia", url: "Mapas/libia.png" },
            { nome: "Malaui", url: "Mapas/malaui.png" },
            { nome: "Mali", url: "Mapas/mali.png" },
            { nome: "Marrocos", url: "Mapas/marrocos.png" },
            { nome: "Maurício", url: "Mapas/mauricio.png" },
            { nome: "Mauritânia", url: "Mapas/mauritania.png" },
            { nome: "Moçambique", url: "Mapas/mocambique.png" },
            { nome: "Namíbia", url: "Mapas/namibia.png" },
            { nome: "Níger", url: "Mapas/niger.png" },
            { nome: "Nigéria", url: "Mapas/nigeria.png" },
            { nome: "Quênia", url: "Mapas/quenia.png" },
            { nome: "República Centro-Africana", url: "Mapas/republica centro africana.png" },
            { nome: "República Democrática do Congo", url: "Mapas/republica democratica do congo.png" },
            { nome: "Ruanda", url: "Mapas/ruanda.png" },
            { nome: "São Tomé e Príncipe", url: "Mapas/sao tome e principe.png" },
            { nome: "Senegal", url: "Mapas/senegal.png" },
            { nome: "Serra Leoa", url: "Mapas/serra leoa.png" },
            { nome: "Seicheles", url: "Mapas/seicheles.png" },
            { nome: "Somália", url: "Mapas/somalia.png" },
            { nome: "Sudão", url: "Mapas/sudao.png" },
            { nome: "Sudão do Sul", url: "Mapas/sudao do sul.png" },
            { nome: "Tanzânia", url: "Mapas/tanzania.png" },
            { nome: "Togo", url: "Mapas/togo.png" },
            { nome: "Tunísia", url: "Mapas/tunisia.png" },
            { nome: "Uganda", url: "Mapas/uganda.png" },
            { nome: "Zâmbia", url: "Mapas/zambia.png" },
            { nome: "Zimbábue", url: "Mapas/zimbabue.png" }
        ]
    },
    {
        continente: "Oceania",
        tipo: "pais",
        paises: [
            { nome: "Austrália", url: "Mapas/australia.png" },
            { nome: "Fiji", url: "Mapas/fiji.png" },
            { nome: "Ilhas Marshall", url: "Mapas/ilhas marshall.png" },
            { nome: "Ilhas Salomão", url: "Mapas/ilhas salomao.png" },
            { nome: "Kiribati", url: "Mapas/kiribati.png" },
            { nome: "Micronésia", url: "Mapas/micronesia.png" },
            { nome: "Nauru", url: "Mapas/nauru.png" },
            { nome: "Nova Zelândia", url: "Mapas/nova zelandia.png" },
            { nome: "Palau", url: "Mapas/palau.png" },
            { nome: "Papua Nova Guiné", url: "Mapas/papua nova guine.png" },
            { nome: "Samoa", url: "Mapas/samoa.png" },
            { nome: "Tonga", url: "Mapas/tonga.png" },
            { nome: "Tuvalu", url: "Mapas/tuvalu.png" },
            { nome: "Vanuatu", url: "Mapas/vanuatu.png" }
        ]
    },
    {
        continente: "Emojis",
        tipo: "emoji",
        paises: [
            { nome: "Bravo", url: "Emojis/bravo.png" },
            { nome: "Feliz", url: "Emojis/feliz.png" },
            { nome: "Irritado", url: "Emojis/irritado.png" },
            { nome: "Mais ou Menos", url: "Emojis/mais ou menos.png" },
            { nome: "Muito de Boa", url: "Emojis/muito de boa.png" },
            { nome: "Neutral", url: "Emojis/neutral.png" },
            { nome: "Sem Dados", url: "Emojis/sem dados.png" },
            { nome: "Sorrindo", url: "Emojis/sorrindo.png" },
            { nome: "Super Bravo", url: "Emojis/super bravo.png" },
            { nome: "Super Feliz", url: "Emojis/super feliz.png" }
        ]
    },
    {
        continente: "Mapas Estilo",
        tipo: "mapa_estilo",
        paises: [
            { nome: "Mapa do Bing", url: "Maps/bing maps.jpg" },
            { nome: "Mapa do Google", url: "Maps/google maps.jpg" }
        ]
    }
];

const folderGrid = document.getElementById('folderGrid');
const gallery = document.getElementById('gallery');
const searchInput = document.getElementById('searchInput');
const title = document.getElementById('currentCategory');

function renderFolders() {
    folderGrid.innerHTML = "";

    // Botão para mostrar todos os Países
    const btnTodosPaises = document.createElement('div');
    btnTodosPaises.className = 'folder';
    btnTodosPaises.innerText = "📁 Todos os Países";
    btnTodosPaises.onclick = () => mostrarTodosPaises();
    folderGrid.appendChild(btnTodosPaises);

    // Botões dos Continentes
    bancoDeDados.filter(item => item.tipo === "pais").forEach(item => {
        const div = document.createElement('div');
        div.className = 'folder';
        div.innerText = `📁 ${item.continente}`;
        div.onclick = () => filterByCategory(item.continente);
        folderGrid.appendChild(div);
    });

    // Botão especial para Emojis
    const btnEmojis = document.createElement('div');
    btnEmojis.className = 'folder folder-emoji';
    btnEmojis.innerText = "😀 Emojis";
    btnEmojis.onclick = () => filterByCategory("Emojis");
    folderGrid.appendChild(btnEmojis);

    // Botão especial para Mapas
    const btnMapas = document.createElement('div');
    btnMapas.className = 'folder folder-mapas';
    btnMapas.innerText = "🗺️ Mapas";
    btnMapas.onclick = () => filterByCategory("Mapas Estilo");
    folderGrid.appendChild(btnMapas);
}

function displayImages(listaItens) {
    gallery.innerHTML = "";
    if (listaItens.length === 0) {
        gallery.innerHTML = "<p class='no-results'>Nenhum item encontrado.</p>";
        return;
    }

    listaItens.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${item.url}" alt="${item.nome}" loading="lazy" oncontextmenu="return false;">
            <h3>${item.nome}</h3>
            <a href="${item.url}" download class="btn-download">⬇️ Download</a>
        `;
        gallery.appendChild(card);
    });
}

function filterByCategory(categoria) {
    if (categoria === "Emojis") {
        title.innerText = "Categoria: Emojis";
    } else if (categoria === "Mapas Estilo") {
        title.innerText = "Categoria: Mapas";
    } else {
        title.innerText = `Continente: ${categoria}`;
    }
    const categoriaEncontrada = bancoDeDados.find(c => c.continente === categoria);
    if (categoriaEncontrada) {
        displayImages(categoriaEncontrada.paises);
    }
}

function mostrarTodosPaises() {
    title.innerText = "Todos os Países";
    let todosPaises = [];
    bancoDeDados
        .filter(c => c.tipo === "pais")
        .forEach(c => todosPaises = todosPaises.concat(c.paises));
    displayImages(todosPaises);
}

// Pesquisa global
searchInput.addEventListener('input', (e) => {
    const termo = e.target.value.toLowerCase().trim();
    if (termo === "") {
        mostrarTodosPaises();
        return;
    }

    let resultados = [];
    bancoDeDados.forEach(c => {
        c.paises.forEach(p => {
            if (p.nome.toLowerCase().includes(termo)) {
                resultados.push(p);
            }
        });
    });
    title.innerText = `Resultados para: "${termo}"`;
    displayImages(resultados);
});

// Inicialização
renderFolders();
mostrarTodosPaises();