const container_ferramentas = document.getElementById("container-ferramentas");

function criarContainerFerramenta(ferramenta){
    return `
        <div class="container_ferramenta" data-id="${ferramenta.id}">
            <img src="../${ferramenta.foto}" 
                 alt="foto da ferramenta" 
                 class="img_ferramenta" 
                 onerror="this.onerror=null; this.src='../assets/sem_foto.svg';">
            <div class="container-info-ferramente">
                <span class="nome_ferramenta">${ferramenta.nome}</span>
                <span class="quantidade_ferramenta">quantidade disponíveis ${ferramenta.quantidade}</span>
            </div>  
        </div>
    `;
}

// busca os dados
fetch("../ferramentas.json")
    .then(response => response.json())
    .then(data => {
        data.forEach(ferramenta => {
            container_ferramentas.insertAdjacentHTML("beforeend", criarContainerFerramenta(ferramenta));
        });
    })
    .catch(error => console.log("erro " + error));

// event delegation para redirecionamento ao clicar no card
container_ferramentas.addEventListener("click", e => {
    const card = e.target.closest(".container_ferramenta");
    if(card){
        const id = card.dataset.id;
        window.location.href = `./detalhe.html?id=${id}`;
    }
});
