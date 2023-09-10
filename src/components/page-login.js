class Login extends HTMLElement {
  constructor(){
    super();
    this.attachShadow({ mode: 'open' });
    this.build();
  }

  build(){ 
    this.shadowRoot.innerHTML= "<h1>Login</h1>"
  }

}

customElements.define("page-login", Login);