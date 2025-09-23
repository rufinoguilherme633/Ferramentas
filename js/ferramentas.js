const container_ferramentas = document.getElementById("container-ferramentas");

function criarContainerFerramenta(ferramenta){
             
    return `
                <div class="container_ferramenta" id="${ferramenta.id}">
                    <img src="${ferramenta.foto}" alt="foto da ferramenta" class="img_ferramenta" onerror="this.onerror=null; this.src='../assets/sem_foto.svg';">
                    <div class="container-info-ferramente">
                        <span class="nome_ferramenta">${ferramenta.nome}</span>
                        <span class="quantidade_ferramenta">quantidade disponiveis ${ferramenta.quantidade}</span>
                    </div>
                </div>
           `
}

fetch("../ferramentas.json")
    .then(response => response.json())
    .then(data =>  data.forEach(ferramenta => {
        container_ferramentas.innerHTML += criarContainerFerramenta(ferramenta)
    }) )
    .catch(error => console.log("erro" + error))