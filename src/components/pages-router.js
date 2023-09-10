class Router extends HTMLElement {
  constructor(){
    super();
    this.attachShadow({ mode: 'open' });
    this.build();
  }

  build(){ 
    this.shadowRoot.innerHTML = "<slot></slot>"
  }

}

customElements.define("pages-router", Router);
