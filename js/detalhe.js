
// lê o id da URL
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

fetch("../ferramentas.json")
    .then(response => response.json())
    .then(data => {
        const ferramenta = data.find(item => item.id == id)
        console.log(ferramenta)
        if(ferramenta){
            document.getElementById("ferramenta-nome").textContent = ferramenta.nome;
            document.getElementById("ferramenta-quantidade").textContent = "Quantidade disponiveis:" + ferramenta.quantidade;
            document.getElementById("ferramenta-qrcode").src = "../" + ferramenta.qrcode;
            const imgFoto = document.getElementById("ferramenta-foto");
            
            imgFoto.onerror = function() {
                this.onerror = null;
                this.src = "../assets/sem_foto.svg";
            };
            imgFoto.src ="../"+ ferramenta.foto
        }
    }).catch(error => console.log("Erro ao carregar dados: " + error))

