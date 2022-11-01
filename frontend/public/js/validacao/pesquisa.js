document.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        const btn = document.querySelector("#send");
        btn.click();
        console.log("está pegando")
    }
})
