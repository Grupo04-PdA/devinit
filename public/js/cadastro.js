var formCadastro = {
    username: false,
    emailC: false,
    senhaC: false
}

function userCadastroForm() {
    var user = document.getElementById('nome_form');
    user.addEventListener('keyup', () => {
        var valorUser = user.value
        var spanAlertaUser = user.nextElementSibling

        if (valorUser === '') {
            spanAlertaUser.style.display = 'flex';
        } else if (valorUser.length < 3) {
            spanAlertaUser.style.display = 'flex';
        } else {
            spanAlertaUser.style.display = 'none';
        }
    })
}

function emailCadastroForm() {
    var emailCadastro = document.getElementById('email_cadastro');
    emailCadastro.addEventListener('keyup', () => {
        var valorEmail = emailCadastro.value
        var regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+/
        var spanAlertaEmail = emailCadastro.nextElementSibling

        if (valorEmail === '') {
            spanAlertaEmail.style.display = 'flex';
        } else if (regexEmail.test(valorEmail) == false) {
            spanAlertaEmail.style.display = 'flex';
        } else {
            spanAlertaEmail.style.display = 'none';
        }
    })
}

function senhaCadastroForm() {
    senhaCadastro.addEventListener('keyup', () => {
        var valorSenha = senhaCadastro.value
        var spanAlertaSenha = eyeCadastro.nextElementSibling

        if (valorSenha.length > 5 && valorSenha.match(/[A-Z]+/) && valorSenha.match(/[a-z]+/ && valorSenha.match(/[0-9]+/))) {
            senhaCadastro.style.borderColor = 'green';
            spanAlertaSenha.style.display = 'none';
        } else {
            senhaCadastro.style.borderColor = 'red';
            spanAlertaSenha.style.display = 'flex';
        }
    })
}


function btnCadastro() {
    var btnCadastrar = document.getElementById('btn-cadastrar');

    if (formCadastro.username == true && formCadastro.emailC == true && formCadastro.senhaC == true) {
        btnCadastrar.removeAttribute('disabled');
    } else {
        btnCadastrar.setAttribute('disabled', true);
    }
}

var eyeCadastro = document.getElementById('eye-cadastro');
var senhaCadastro = document.getElementById('senha_cadastro');

function clickEyeCad() {
    let btnCadastro = senhaCadastro.type == 'password';

    if (btnCadastro) {
        mostrar()
    } else {
        ocultar()
    }
}

function mostrar() {
senhaCadastro.setAttribute('type', 'text');
eyeCadastro.setAttribute('src', '../img/eye-closed.svg')
}

function ocultar() {
senhaCadastro.setAttribute('type', 'password');
eyeCadastro.setAttribute('src', '../img/eye-open.svg')
}

document.addEventListener('DOMContentLoaded', () => {
    userCadastroForm()
    emailCadastroForm()
    senhaCadastroForm()
})