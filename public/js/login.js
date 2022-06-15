var formLogin = {
    email: false,
    senha: false
}

function emailLoginForm() {
    var emailLogin = document.getElementById('email_login');
    emailLogin.addEventListener('keyup', () => {
        var valorEmail = emailLogin.value.trim()
        var regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+/
        var spanAlertaEmail = emailLogin.nextElementSibling

        if (valorEmail === '') {
            spanAlertaEmail.style.display = 'flex';
        } else if (regexEmail.test(valorEmail) == false) {
            spanAlertaEmail.style.display = 'flex';
        } else {
            spanAlertaEmail.style.display = 'none';
        }
    })
}


function senhaLoginForm() {
    senhaLogin.addEventListener('keyup', () => {
        var valorSenha = senhaLogin.value
        var spanAlertaSenha = eyeLogin.nextElementSibling

        if (valorSenha.length > 5 && valorSenha.match(/[A-Z]+/) && valorSenha.match(/[a-z]+/ && valorSenha.match(/[0-9]+/))) {
            senhaLogin.style.borderColor = 'green';
            spanAlertaSenha.style.display = 'none';
        } else {
            senhaLogin.style.borderColor = 'red';
            spanAlertaSenha.style.display = 'flex';
        }
    })
}

function btnLogin() {
    var btnEntrar = document.getElementById('btn-entrar');

    if (formLogin.email == true && formLogin.senha == true) {
        btnCadastrar.removeAttribute('disabled');
    } else {
        btnCadastrar.setAttribute('disabled', true);
    }
} 

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


document.addEventListener('DOMContentLoaded', () => {
    emailLoginForm()
    senhaLoginForm()
})