var formCadastro = {
    username: false,
    emailC: false,
    senhaC: false
}

function userCadastroForm() {
    var user = document.getElementById('nome_form');
    user.addEventListener('keyup', () => {
        var valorUser = user.value.trim()
        var spanAlertaUser = user.nextElementSibling

        btnCadastro()

        if (valorUser === '') {
            spanAlertaUser.style.display = 'flex';
            formCadastro.username = false;
        } else if (valorUser.length < 3) {
            spanAlertaUser.style.display = 'flex';
            formCadastro.username = false;
        } else {
            spanAlertaUser.style.display = 'none';
            formCadastro.username = true;
        }
    })
}

function emailCadastroForm() {
    var emailCadastro = document.getElementById('email_cadastro');
    emailCadastro.addEventListener('keyup', () => {
        var valorEmail = emailCadastro.value.trim()
        var regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+/
        var spanAlertaEmail = emailCadastro.nextElementSibling

        btnCadastro()

        if (valorEmail === '') {
            spanAlertaEmail.style.display = 'flex';
            formCadastro.emailC = false;
        } else if (!regexEmail.test(valorEmail)) {
            spanAlertaEmail.style.display = 'flex';
            formCadastro.emailC = false;
        } else {
            spanAlertaEmail.style.display = 'none';
            formCadastro.emailC = true;
        }
    })
}

function senhaCadastroForm() {
    senhaCadastro.addEventListener('keyup', () => {
        var valorSenha = senhaCadastro.value.trim()
        var regexSenha = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,}$/
        var spanAlertaSenha = eyeCadastro.nextElementSibling

        btnCadastro()

        if (valorSenha === ''){
            spanAlertaSenha.style.display = 'flex';
            formCadastro.senhaC = false;
        } else if  (!regexSenha.test(valorSenha)) {
            spanAlertaSenha.style.display = 'flex';
            formCadastro.senhaC = false;
        } else {
            spanAlertaSenha.style.display = 'none';
            formCadastro.senhaC = true;
        }
    })
}

function senhaConfirmForm(){
    var senhaCForm = document.getElementById('confirm_senha');
    senhaCForm.addEventListener('keyup', ()=>{
        var valorSenhaConfirm = senhaCForm.value.trim();
        var valorSenhaC = senhaCadastro.value.trim();
        var spanAlertaSenhaC = eyeCadastroConfirm.nextElementSibling

        btnCadastro()

        if (valorSenhaConfirm === ''){
            spanAlertaSenhaC.style.display = 'flex';
            formCadastro.senhaC = false;
        } else if  (valorSenhaConfirm !== valorSenhaC) {
            spanAlertaSenhaC.style.display = 'flex';
            formCadastro.senhaC = false;
        } else {
            spanAlertaSenhaC.style.display = 'none';
            formCadastro.senhaC = true;
        }

    })
}


function btnCadastro() {
    var btnCadastrar = document.getElementById('btn-cadastrar');

    if (formCadastro.username && formCadastro.emailC && formCadastro.senhaC) {
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
        senhaCadastro.setAttribute('type', 'text');
        eyeCadastro.setAttribute('src', '../img/eye-closed.svg');
    } else {
        senhaCadastro.setAttribute('type', 'password');
        eyeCadastro.setAttribute('src', '../img/eye-open.svg');
    }
}

var eyeCadastroConfirm = document.getElementById('eye-cadastro-confirm');
var senhaConfirmCadastro = document.getElementById('confirm_senha');

function clickEyeConfirm() {
    let btnConfirm = senhaConfirmCadastro.type == 'password';

    if (btnConfirm) {
        senhaConfirmCadastro.setAttribute('type', 'text');
        eyeCadastroConfirm.setAttribute('src', '../img/eye-closed.svg');
    } else {
        senhaConfirmCadastro.setAttribute('type', 'password');
        eyeCadastroConfirm.setAttribute('src', '../img/eye-open.svg');
    }
}



document.addEventListener('DOMContentLoaded', () => {
    userCadastroForm()
    emailCadastroForm()
    senhaCadastroForm()
    senhaConfirmForm()
})
