class PopupInfo extends HTMLElement {
    constructor(){
        //Sempre chamar o super() primeiro dentro do constructor
        //Isso permite que a classe HERDE os "poderes" do HTMLElement
        super();
    }
    //método de ciclo de vida: roda quando a tag é inserida no HTML
    connectedCallBack(){
        //1-criar os elementos internos via JS
        const wrapper = document.createElement("span");
        wrapper.setAttribute("class", "wrapper");

        const icon = document.createElement("span");
        icon.setAttribute("class", "icon");
        icon.setAttribute("tabindex", "0");

        const info = document.createElement("span");
        info.setAttribute("class", "info");

        //2-LERRRRR informações dos atributos da nossa tag
        const text = this.getAttribute("data-text");
        info.textContent = text;

        //3-lógica condicional de imagem
        let imgUrl;
        if(this.hasAttribute("img")){
        imgUrl = this.getAttribute("img");
        } else {
            imgUrl = "default.png"; //Imagem padrão caso o usuário não envie uma
        }

        const img = document.createElement("img");
        img.src = imgUrl;
        img.setAttribute("alt", "Icone de informação");
        img.setAttribute("width", "100px");


        //4- criando a hierarquia
        icon.appendChild(img);
        wrapper.appendChild(icon);
        wrapper.appendChild(info);

        //5-anexando tudo dentro do NOOOOOOSSSOOOOOOO componente (o famoso this)
        this.appendChild(wrapper);

    }
}
//Registrando o componente no navegador para que a tag <popup-info> passe a existir
customElements.define("popup-info", PopupInfo);
