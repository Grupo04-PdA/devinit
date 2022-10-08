async function logout(){
    const id = localStorage.getItem("user_id")
    console.log(id)
    const url = `http://localhost:3020/logout/${id}`
    
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
    localStorage.removeItem("user_nome")
    localStorage.removeItem("user_email")
    })
    .catch(res => console.log(res))
}
