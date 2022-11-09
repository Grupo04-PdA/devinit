function verificaLoginMidleware(req, resp, next) {
    console.log(req.params)
    const { nomeDeUsuario }  = req.params;

    if (nomeDeUsuario == nomeDeUsuario) {
        next();
    } else {
        resp.status(401).send({ error: 'Não autorizado' })
    }
}

// async function blockPage(req, res, next) {
//     const idUsuario = localStorage.getItem("user_id");
//     const url = `http://localhost:3020/usuario/${idUsuario}`;

//     await fetch(url)
//     .then(res => res.json())
//     .then(res => {
//       const usuario = res.Usuario;
//       console.log(usuario);  
//     })
//     next()
// }

module.exports = verificaLoginMidleware;