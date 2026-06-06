export class ProfileCard extends HTMLElement {

    // 1- array estático indicando os atributos sob vigilancia do navegador
    static get observedAttributes(){
        return ['none', 'bio', ]
    }
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        const template = document.getElementById('profile');

        // comentario mágico que restaura o syntax hightlighting do template
        template.innerHTML = /*html*/`
        <style>
            .card{ padding: 20px; border: 1px solid #ccc; border-radius: 8px; width: 250px; }
            .nome{ font-size: 1.5rem; color: #333; margin: 0; }
            .bio{ font-size: 1rem; color: #666; margin-bottom: 15px; }
            /* o botão interno possui uma estilização padrão de fallback */
            button{ background: #3498db; color: white; border: none; padding: 10px; border-radius: 4px; cursor: pointer;}
    </style>
    <div class="card">
        <h2 class="none"></h2>
        <p class="bio"></p>
        <button part="btn acao">Seguir Perfil</button>
        </div>
        `;

        
    }
    connectedCallback(){
        if(this.hasAttribute('img')){
            const img = this.shadowRoot.querySelector('img');
            img.src = this.getAttribute('img');
        }
    }
}

customElements.define('profile-card', ProfileCard);

//2- o hook da mutação reativa

attributeChangedCallback(name, oldValue, newValue){
    if(oldValue === newValue) return; //otimização de perfomance

    //Mutação pontual do Shadow DOM de acordo com o atributo alterado
    if(name === 'none'){
        this.shadowRoot.querySelector('.none').textContent = newValue;
    }
    if(name === 'bio'){
        this.shadowRoot.querySelector('.bio').textContent = newValue;
    }
}

//o registro de tag acontece aqui, incluido na biblioteca
customElements.define('profile-card', ProfileCard);
