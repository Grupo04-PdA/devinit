var eyeLogin = document.getElementById('eye-login');
var senhaLogin = document.getElementById('senha_login');

function clickEyeLog() {
    let btnLogin = senhaLogin.type == 'password';

    if (btnLogin) {
        mostrar()
    } else {
        ocultar()
    }
}

function mostrar() {
senhaLogin.setAttribute('type', 'text');
eyeLogin.setAttribute('src', '../img/eye-closed.svg')
}

function ocultar() {
senhaLogin.setAttribute('type', 'password');
eyeLogin.setAttribute('src', '../img/eye-open.svg')
}