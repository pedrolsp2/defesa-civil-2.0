class Home extends HTMLElement {
  constructor(){
    super();
    this.attachShadow({ mode: 'open' });
    this.build();
  }

  connectedCallback() {}

  build(){ 
    this.shadowRoot.innerHTML= "<h1>Home</h1>"
  }

}

customElements.define("page-home", Home);