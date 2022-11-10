let numero = 0

const getUserId = async (id) => {
    console.log(id);
    const url = `http://localhost:3020/usuario/${id}`
    try {
        await fetch(url, {
            method: "GET"
        })
            .then(res => res.json())
            .then(res => {
                const usuario = res.Usuario;
                console.log(res);
                console.log(usuario);

                if (usuario.idUsuario == id) {
                    console.log(usuario.idUsuario)
                    numero += 1
                    console.log("condição verdadeira ", numero)
                } else {
                    numero
                    console.log("condição falsa ", numero)
                }
            })
    } catch {
        return "Não autorizado";
    }
}

console.log("Fora da funcao ", numero)

function verificaLoginMidleware(req, res, next) {
    // const idStorage = localStorage.getItem("user_id");
    // console.log(idStorage);
    const { idUsuario } = req.params;
    getUserId(idUsuario);
    if (numero == 1) {
        next();
    } else {
        res.json({error: "Não autorizado!"});
    }
};

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