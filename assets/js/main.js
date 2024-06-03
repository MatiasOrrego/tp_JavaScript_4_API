const link = "https://geek-jokes.sameerkumar.website/api?format=json"
const elContainer = document.getElementById("container")

const procesarFetch = async (link) => {
    try {
        const respuesta = await fetch(link) 
        const sameerkumar = await respuesta.json()
        return sameerkumar
    } catch (error) {
        console.log("Hubo un error")
    }
}
/*procesarFetch(link)
    .then((info) => {
        info.result.forEach((element) => {
            elContainer.innerHTML += `
            <div class = "personajes" <img src="${element.image}"/>
            <h2>${element.name}</h2>
            <div/>`
            
        });
    })*/
