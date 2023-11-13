


const logarBtn = () => {
    const iSenha = document.getElementById("inputSenha").value;
    const senha = '85ee0fe4f155a9af2657d85054ad63ca';

    if (hex_md5(iSenha) === senha){
        window.location = './index2.html'

    }else{
        alert('Senha errada!')
    }
}