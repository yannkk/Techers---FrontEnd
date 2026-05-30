class PopupInfo extends HTMLElement {
    constructor() {
        super();
        // Estabelece a raiz fantasma (Shadow Root) acoplada ao elemento
        this.attachShadow({ mode: 'open' });
        
        // 1. Busca a referência do template inerte no DOM principal
        const template = document.getElementById('popup-template');
        
        // 2. Executa o deep clone e anexa diretamente à raiz encapsulada
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        // Interatividade pontual imperativa (se atributos persistirem na tag original)
        if (this.hasAttribute('img')) {
            const img = this.shadowRoot.querySelector('img');
            img.src = this.getAttribute('img');
        }
    }
}  

customElements.define("popup-info", PopupInfo);