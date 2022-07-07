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

        btnLogin()
        formLogin.email = false;

        if (valorEmail === '') {
            spanAlertaEmail.style.display = 'flex';
        } else if (!regexEmail.test(valorEmail)) {
            spanAlertaEmail.style.display = 'flex';
        } else {
            spanAlertaEmail.style.display = 'none';
            formLogin.email = true;
        }
    })
}


function senhaLoginForm() {
    senhaLogin.addEventListener('keyup', () => {
        var valorSenha = senhaLogin.value.trim()
        var regexSenha = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,}$/
        var spanAlertaSenha = eyeLogin.nextElementSibling

        btnLogin()

        if (valorSenha === ''){
            spanAlertaSenha.style.display = 'flex';
            formLogin.senha = false;
        } else if  (!regexSenha.test(valorSenha)) {
            spanAlertaSenha.style.display = 'flex';
            formLogin.senha = false;
        } else {
            spanAlertaSenha.style.display = 'none';
            formLogin.senha = true;
        }
    })
}

function btnLogin() {
    var btnEntrar = document.getElementById('btn-entrar');

    if (formLogin.email && formLogin.senha) {
        btnEntrar.removeAttribute('disabled');
    } else {
        btnEntrar.setAttribute('disabled', true);
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