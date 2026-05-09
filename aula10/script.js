class PopupInfo extends HTMLElement {
    constructor() {
        super();
    }
}

connectedCallback() {
    const wrapper = document.createElement('span');
    wrapper.setAttribute('class', 'wrapper');

    const icon = document.createElement('span');
    icon.setAttribute('class', 'icon');
    icon.setAttribute('tabindex', '0');

    const info = document.createElement('span');
    info.setAttribute('class', 'info');

    //2

    const text = this.getAttribute('text');
    info.textContent = text;

    //3

    let imgUrl;
    if (this.hasAttribute('img')) {
        imgUrl = this.getAttribute('img');
    } else {
        imgUrl = 'default.png'; // imagem padrao a ser utilizado com o usuario nao fornecer uma
    }

    const img = document.createElement('img');
    img.src = imgUrl;
    img.setAttribute('alt', 'Icon');
    img.setAttribute('width', '100px');

    //4
    icon.appendChild(img);
    wrapper.appendChild(icon);
    wrapper.appendChild(info);
    this.appendChild(wrapper);

    //anexar tudo dentro do NOSSO componente personalizado
    this.appendChild(wrapper);

}


// API CustomElementRegistry >> cria uma tag HTML personalizada
    customElements.define('popup-info', PopupInfo);
// Registro do componente no navegador, associando a tag 'popup-info' à classe PopupInfo
// Agora, sempre que a tag <popup-info> for usada no HTML, o navegador criará uma instância da classe PopupInfo e executará o código definido nela.
