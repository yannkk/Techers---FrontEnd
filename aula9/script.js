// Seleciona os elementos do HTML pelos IDs
let tituloTarefa = document.getElementById("tituloTarefa")
let conteudoTarefa = document.getElementById("conteudoTarefa")
let buttonTarefa = document.getElementById("buttonTarefa")
let notesTarefa = document.getElementById("notesTarefa")

// Adiciona um evento de clique ao botão
buttonTarefa.addEventListener("click", function (event) {

    if (tituloTarefa.value != "" && conteudoTarefa.value != "") {
        const deleteButton = document.createElement("img")
        deleteButton.src = "assets/image.png"
        deleteButton.classList.add("deleteButton")


        // Evita o comportamento padrão (ex: recarregar a página se estiver dentro de um form)
        event.preventDefault()

        // Cria um objeto com os dados da tarefa
        const nota = {
            title: tituloTarefa.value, // valor digitado no campo de título
            context: conteudoTarefa.value, // valor digitado no campo de conteúdo
            data: new Date().toLocaleDateString('pt-BR'), // data atual formatada em português (Brasil)
        }
        if (nota.title == "LabubuGamer") {
            let titulooTarefa = document.createElement("h3") // título da tarefa
            titulooTarefa.textContent = "LABUBU GAMER AAAAAAAAAAAA rockin roll."
            let cartaTarefa = document.createElement("div") // container da tarefa
            nota.data = ""
            let labubuGamer = document.createElement("img")
            labubuGamer.classList.add("labubuGamer")
            labubuGamer.src = "assets/labubu-big-into-energy-labubu.gif"
            nota.context = labubuGamer
            cartaTarefa.appendChild(titulooTarefa)
            cartaTarefa.appendChild(labubuGamer)
            cartaTarefa.classList.add("labubu")
            notesTarefa.appendChild(cartaTarefa)
            tituloTarefa.value = ""
            conteudoTarefa.value = ""
            return
        }

        // Cria os elementos HTML que vão representar a tarefa
        let cartaTarefa = document.createElement("div") // container da tarefa
        let titulooTarefa = document.createElement("h3") // título da tarefa
        let conteudooTarefa = document.createElement("p") // conteúdo da tarefa
        let dataTarefa = document.createElement("p") // data da tarefa

        // Define o texto de cada elemento com os dados do objeto
        titulooTarefa.textContent = nota.title
        conteudooTarefa.textContent = nota.context
        dataTarefa.textContent = nota.data

        // Adiciona os elementos filhos dentro da div principal
        cartaTarefa.appendChild(titulooTarefa)
        cartaTarefa.appendChild(conteudooTarefa)
        cartaTarefa.appendChild(dataTarefa)
        cartaTarefa.appendChild(deleteButton)

        // Adiciona a tarefa completa dentro do container principal no HTML
        notesTarefa.appendChild(cartaTarefa)

        tituloTarefa.value = ""
        conteudoTarefa.value = ""

        cartaTarefa.classList.add("labubu")

        cartaTarefa.addEventListener("mouseover", () => {
            deleteButton.style.opacity = "1"
        })
        cartaTarefa.addEventListener("mouseout", () => {
            deleteButton.style.opacity = "0"
        })
        deleteButton.addEventListener("click", () => {
            cartaTarefa.remove()
        })
    }

})


