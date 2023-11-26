document.addEventListener("DOMContentLoaded", function() {
    verificarAutenticacao();
});


const verificarAutenticacao = () => {
    const autorizado = localStorage.getItem("autorizado");
    if(autorizado !== "true"){
        alert("Usuario não cadastrado, Efetue o login e tente novamente!");
        window.location = './index.html';
    }
}


const parametroId = new URLSearchParams(window.location.search);
const atletaId = parametroId.get('id');

const urlEndpoint = `https://botafogo-atletas.mange.li/${atletaId}`;

const body = document.body;
body.style.display = 'flex';
body.style.gap = '.5em';
body.style.flexWrap = 'wrap';

const fazerCartao = (atleta) => {
    const container = document.createElement('div');
    const titulo = document.createElement('h3');
    const imagem = document.createElement('img');
    const saibaMais = document.createElement('p');


    saibaMais.style.backgroundColor = 'black';
    saibaMais.style.color = 'white';
    saibaMais.style.margin = '2px';
    saibaMais.style.padding = '1em';




    container.style.width = 'min-content';
    container.style.backgroundColor = 'grey';
    container.style.textAlign = 'center';
    container.style.margin = '0';
    container.style.padding ='0.5em';
    container.style.cursor = 'pointer';

    container.dataset.id = atleta.id;
    container.dataset.altura = atleta.altura;
    container.dataset.nome_completo = atleta.nome_completo;
    container.dataset.nascimento = atleta.nascimento;
    container.dataset.posicao = atleta.posicao;
    container.dataset.elenco = atleta.elenco;
    container.dataset.descricao = atleta.descricao;


    titulo.innerHTML = atleta.nome;
    imagem.src = atleta.imagem;
    imagem.alt = `foto de ${atleta.nome}`;
    saibaMais.innerHTML = atleta.elenco;

    container.appendChild(titulo);
    container.appendChild(imagem);
    container.appendChild(saibaMais);

    document.body.appendChild(container)

    return container;
};

const pegar_coisas = async (caminho) => {
    const resposta = await fetch(caminho);
    const dados = await resposta.json();
    return dados;
}
const atualizarDivComElenco = async (urlEndpoint, containerDiv) => {
    const entrada = await pegar_coisas(urlEndpoint);
    const atletas = Array.isArray(entrada) ? entrada : [entrada];

    for (const atleta of atletas) {

        const cartao = fazerCartao(atleta);
        containerDiv.appendChild(cartao);
    }
}; 
atualizarDivComElenco(urlEndpoint, body);       

