async function logout(){
    const idUsuario = localStorage.getItem("user_id")
    console.log(idUsuario)
    const url = `http://localhost:3020/logout/${idUsuario}`
    
    await fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({})
    })
    .then(res => res.json())
    .then(res => {
    console.log(res)
    window.location.href="http://localhost:4020/"
    localStorage.removeItem("user_id")
    })
    .catch(res => console.log(res))
}
