/*---------------------------------------------------------------------------------------------------*/
// Bad function

function login(token, usuario, senha) {
   
    if(token === "Token válido") {
        if(usuario === 'dudu.sqa' && senha === 'dale123') {
            console.log("Logado com sucesso pode passar!");
        } 
    } else {
        console.log("Usuario ou senha não informados corretamente!");
    }
}

/*---------------------------------------------------------------------------------------------------*/
// Good

function loginGood(token, usuario, senha) {

    if(validarToken(token) && logarUsuario(usuario, senha)) {
        mensagem(true);
    } else {
        mensagem(false);
    }
}


function validarToken(token) {
    return token == "Token válido";
}


function logarUsuario(usuario, senha) {
    return usuario === 'dudu.sqa' && senha === 'dale123';
}


function mensagem(sucesso) {
    if(sucesso) {
        console.log("Logado com sucesso pode passar!");
    } else {
        console.log("Usuario ou senha não informados corretamente!");
    }
}
