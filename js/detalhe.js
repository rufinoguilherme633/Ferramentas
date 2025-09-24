// lê o id da URL
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

function trazerDetalhes(ferramenta){
    return `
        <div>
            <span>${ferramenta.nome}</span>
            <img src="../${ferramenta.foto}" alt="">
            <span>quantidade ${ferramenta.quantidade}</span>
        </div>
        <div>
            <img src="../${ferramenta.qrcode}" alt="">
        </div>
    `;
}

fetch("../ferramentas.json")
    .then(response => response.json())
    .then(ferramentas => {
        const ferramenta = ferramentas.find(f => f.id === id);
        const containerFerramenta = document.getElementById("container-ferramenta");
        if(ferramenta){
            containerFerramenta.innerHTML = trazerDetalhes(ferramenta);
        } else {
            containerFerramenta.innerHTML = "<span>Nada encontrado</span>";
        }
    })
    .catch(error => console.log("erro " + error));
