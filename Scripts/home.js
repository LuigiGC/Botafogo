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




const elencoT = () =>{
    window.location = './elenco.html'
}
const elencoM = () =>{
    window.location = './elenco.html'
}
const elencoF = () =>{
    window.location = './elenco.html'
}   
const bSair = () => {
    localStorage.removeItem("autorizado");
    console.log("Login retirado");
    window.location = './index.html'
}