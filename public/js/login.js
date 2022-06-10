/* VALIDAÇÃO CADASTRO */

var formCadastro = {
    username: false,
    emailC: false,
    senhaC: false
}

function userCadastroForm() {
    var user = document.getElementById('nome_login');
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
    var email = document.getElementById('input_email');
    email.addEventListener('keyup', () => {
        var valorEmail = email.value
        var spanAlertaEmail = email.nextElementSibling

        if (valorEmail === '') {
            spanAlertaEmail.style.display = 'flex';
        } else if (valorEmail.length < 7) {
            spanAlertaEmail.style.display = 'flex';
        } else {
            spanAlertaEmail.style.display = 'none';
        }
    })
}

function senhaCadastroForm() {
    var senha = document.getElementById('input_password');
    senha.addEventListener('keyup', () => {
        var valorSenha = senha.value
        var spanAlertaSenha = senha.nextElementSibling

        if (valorSenha === '') {
            spanAlertaSenha.style.display = 'flex';
        } else if (valorSenha.length < 6) {
            spanAlertaSenha.style.display = 'flex';
        } else {
            spanAlertaSenha.style.display = 'none';
        }
    })
}

/* VALIDAÇÀO LOGIN */

var formLogin = {
    email: false,
    senha: false
}

function emailLoginForm() {
    var email = document.getElementById('email_login');
    email.addEventListener('keyup', () => {
        var valorEmail = email.value
        var spanAlertaEmail = email.nextElementSibling

        if (valorEmail === '') {
            spanAlertaEmail.style.display = 'flex';
        } else if (valorEmail.length < 7) {
            spanAlertaEmail.style.display = 'flex';
        } else {
            spanAlertaEmail.style.display = 'none';
        }
    })
}


function senhaLoginForm() {
    var senha = document.getElementById('senha_login');
    senha.addEventListener('keyup', () => {
        var valorSenha = senha.value
        var spanAlertaSenha = senha.nextElementSibling

        if (valorSenha === '') {
            spanAlertaSenha.style.display = 'flex';
        } else if (valorSenha.length < 6) {
            spanAlertaSenha.style.display = 'flex';
        } else {
            spanAlertaSenha.style.display = 'none';
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

function btnLogin() {
    var btnEntrar = document.getElementById('btn-entrar');

    if (formLogin.email == true && formLogin.senha == true) {
        btnCadastrar.removeAttribute('disabled');
    } else {
        btnCadastrar.setAttribute('disabled', true);
    }
} 

document.addEventListener('DOMContentLoaded', () => {
    userCadastroForm()
    emailCadastroForm()
    senhaCadastroForm()
    emailLoginForm()
    senhaLoginForm()
})