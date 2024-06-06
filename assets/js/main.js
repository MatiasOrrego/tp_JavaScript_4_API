
const url = "https://cataas.com/cat/gif"
const elContainer = document.getElementById("contenedor")
const cambiarGatoBtn = document.getElementById("cambiarGatoBtn");

const cargarGif = async (url) => {
    try {
        const img = document.createElement('img');
        img.src = url;
        elContainer.appendChild(img);
    } catch (error) {
        console.log("Hubo un error", error)
    }
}

cargarGif(url);
