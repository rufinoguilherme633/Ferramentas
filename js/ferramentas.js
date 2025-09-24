const container_ferramentas = document.getElementById("container-ferramentas");
const search_bar = document.getElementById("search-bar")
let todasFerramentas = []


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


function renderizarLista(lista){

    if(lista.length > 0){
        container_ferramentas.innerHTML = "";
        lista.forEach(ferramenta => {
                
                container_ferramentas.innerHTML += criarContainerFerramenta(ferramenta);
            });

        document.querySelectorAll(".container_ferramenta").forEach(card => {

            card.addEventListener("click", () =>{
                const id = card.getAttribute('data-id');
                window.location.href = `./detalhe.html?id=${id}`
            })
            card.addEventListener("mouseenter", () => {
                console.log("meu mouse passou aqui no " + card.getAttribute('data-id'));
                const ferramenta_mouse = todasFerramentas.filter(fr => fr.id == card.getAttribute('data-id'));
                console.log(ferramenta_mouse);
             });
});




        
    }else{
        container_ferramentas.innerHTML = "<span>Nenhuma ferramenta encontrada</span>"
    }
}

    fetch("../ferramentas.json")
        .then(response => response.json())
        .then(data => {

            todasFerramentas =  data
            renderizarLista(todasFerramentas)
        })
        .catch(error => console.log("erro " + error));



search_bar.addEventListener("input", () => {
    const ferramenta_pesquisa = search_bar.value.toLowerCase()

    const resultado = todasFerramentas.filter(fr => {
        return fr.nome.toLowerCase().includes(ferramenta_pesquisa)
    })

   
    renderizarLista(resultado)
    
})
