var user = false;
var username = false;
var userEmail = false;
var userSenha = false;
var userSenhaConfirm = false;

function userCadastroForm() {
    var userC = document.getElementById('nome_form');
    userC.addEventListener('keyup', () => {
        var valorUser = userC.value.trim();
        var spanAlertaUser = userC.nextElementSibling

        btnCadastro()

        if (valorUser === '') {
            spanAlertaUser.style.display = 'flex';
            user = false;
        } else if (valorUser.length < 3) {
            spanAlertaUser.style.display = 'flex';
            user = false;
        } else {
            spanAlertaUser.style.display = 'none';
            user = true;
        }
    })
}

function usernameCadastroForm() {
    var usernameC = document.getElementById('nome_Usuario');
    usernameC.addEventListener('keyup', () => {
        var valorUsername = usernameC.value.trim();
        var spanAlertaUsername = usernameC.nextElementSibling

        btnCadastro()

        if (valorUsername === '') {
            spanAlertaUsername.style.display = 'flex';
            username = false;
        } else if (valorUsername.length < 3) {
            spanAlertaUsername.style.display = 'flex';
            username = false;
        } else {
            spanAlertaUsername.style.display = 'none';
            username = true;
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
            userEmail = false;
        } else if (!regexEmail.test(valorEmail)) {
            spanAlertaEmail.style.display = 'flex';
            userEmail = false;
        } else {
            spanAlertaEmail.style.display = 'none';
            userEmail = true;
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
            userSenha = false;
        } else if  (!regexSenha.test(valorSenha)) {
            spanAlertaSenha.style.display = 'flex';
            userSenha = false;
        } else {
            spanAlertaSenha.style.display = 'none';
            userSenha = true;
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
            userSenhaConfirm = false;
        } else if  (valorSenhaConfirm !== valorSenhaC) {
            spanAlertaSenhaC.style.display = 'flex';
            userSenhaConfirm = false;
        } else {
            spanAlertaSenhaC.style.display = 'none';
            userSenhaConfirm = true;
        }

    })
}


function btnCadastro() {
    var btnCadastrar = document.getElementById('btn-cadastrar');

    if (user && username && userEmail && userSenha && userSenhaConfirm) {
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
