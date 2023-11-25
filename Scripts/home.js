document.addEventListener("DOMContentLoaded", function() {
    verificarAutenticacao();
});


const verificarAutenticacao = () => {
    const autorizado = localStorage.getItem("autorizado");
    if(autorizado !== "true"){
        alert("Usuario não cadastrado, Efetue o login e tente novamente!");
        window.location = '/index.html';
    }
}


const selectOp = () => {
    const select = document.getElementById("selecionarElenco");
    const opcaoSelecionada = select.options[select.selectedIndex].value;

    if(opcaoSelecionada === "nulo"){
        window.location = "./home.html"
    }

    if (opcaoSelecionada === "elencoCompleto"){
        elencoT();
    }
    if (opcaoSelecionada === "masculino"){
        elencoM();
    }
    if (opcaoSelecionada === "feminino"){
        elencoF();
    }

}



const elencoT = () =>{
    const urlEndpoint = "https://botafogo-atletas.mange.li/all"

    const fazerCartao = (atleta) =>{
        const container = document.createElement('article');
        const titulo = document.createElement('h3');
        const imagem = document.createElement('img');
        const descricao = document.createElement('p');
        
        container.style.width = '15rem';
        container.style.backgroundColor = 'grey';
        container.style.textAlign = 'center';
        container.style.margin = '10px';
        
        container.dataset.id = atleta.id;
        container.dataset.altura = atleta.altura;
        container.dataset.nome_completo = atleta.nome_completo;
        container.dataset.nascimento = atleta.nascimento;
        
        
        titulo.innerHTML = atleta.nome;
        imagem.src = atleta.imagem;
        imagem.alt = `foto de ${atleta.nome}`;
        descricao.innerHTML = atleta.descricao;

        container.appendChild(titulo);
        container.appendChild(imagem);
        container.appendChild(descricao);

        //container.onclick = handleClick;

        document.body.appendChild(container);
    }
    const pegar_coisas = async (caminho) => {
        const resposta = await fetch(caminho);
        const dados = await resposta.json();
        return dados;
    }
    pegar_coisas(urlEndpoint).then( (entrada) => console.log(entrada));
    pegar_coisas(urlEndpoint)
        .then((entrada) =>{
            for (atleta of entrada){
                fazerCartao(atleta)
            }
        });
}


/*const elencoT = () =>{
    const urlEndpoint = "https://botafogo-atletas.mange.li/all"

    const fetchDados = () =>{
        fetch(urlEndpoint).then(response => response.json())
        .then(data => displayData(data))
        .catch(error => console.error('Erro ao buscar dados:', error));
    
    }
    const displayData = (data) =>{
        const cardsContainer = document.getElementById("containerCartoes");

        cardsContainer.innerHTML = "";

        data.forEach(item =>{
            const card = document.createElement('article');
            card.className = 'card';

            cardsContainer.appendChild(card);
        });
    }
    fetchDados();
    //window.location = './elenco.html'
}*/

const elencoM = () =>{
    const urlEndpoint = "https://botafogo-atletas.mange.li/masculino"

    const fetchDados = () =>{
        fetch(urlEndpoint).then(response => response.json())
        .then(data => displayData(data))
        .catch(error => console.error('Erro ao buscar dados:', error));
    
    }
    const displayData = (data) =>{
        const cardsContainer = document.getElementById("containerCartoes");

        cardsContainer.innerHTML = "";

        data.forEach(item =>{
            const card = document.createElement('div');
            card.className = 'card';

            cardsContainer.appendChild(card);
        });
    }
    fetchDados();
    //window.location = './elenco.html'

}
const elencoF = () =>{
    const urlEndpoint = "https://botafogo-atletas.mange.li/feminino"

    const fetchDados = () =>{
        fetch(urlEndpoint).then(response => response.json())
        .then(data => displayData(data))
        .catch(error => console.error('Erro ao buscar dados:', error));
    
    }
    const displayData = (data) =>{
        const cardsContainer = document.getElementById("containerCartoes");

        cardsContainer.innerHTML = "";

        data.forEach(item =>{
            const card = document.createElement('div');
            card.className = 'card';

            cardsContainer.appendChild(card);
        });
    }
    fetchDados();
    //window.location = './elenco.html'

}   
const bSair = () => {
    localStorage.removeItem("autorizado");
    console.log("Login retirado");
    window.location = './index.html'
}