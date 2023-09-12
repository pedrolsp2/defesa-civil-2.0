class Login extends HTMLElement {
    constructor(){
        super()
        this.shadow = this.attachShadow({mode:'open'});
       this.render()
        this.CreateCustomEvents()
        this.listenerEventsfromWindow()
    }
     static get observedAttributes() {
        return [];
     }
    /*get propriedade(){
        return this.getAttribute('atributo');
    }*/
    /*set propriedade(valor){
            this.setAttribute('atributo',valor);
    }*/
    static get observedAttributes(){
        return []
    }
    connectedCallback(){
    }
    adoptedCallback() {
        console.log('o componente foi adotado por outro componenten parent')
     }
    disconnectedCallback() {
        console.log('o componente foi removido DOM');
     }
    attributeChangedCallback(name, oldVal, newVal) {
        /* if (oldVal !== newVal) {
        console.log('name changed from oldVal to newVal')
     } */
        this.render()
    }
     CreateCustomEvents(){
      let formLogin = this.shadowRoot.querySelector('#formLogin')
      let submitFormLogin = new CustomEvent('submitFormLogin', { 
        detail: {
          formulario: formLogin
      } });
      formLogin.addEventListener('submit', function (event) {
        event.preventDefault(); 
        window.dispatchEvent(submitFormLogin);
      });
    };
    listenerEventsfromWindow(){
        //window.addEventListener('nomeDoEventoCustomizadoEscutado', function (e) {});
    }
    createAllinstances(){
        //let elementIdElement = this.shadow.querySelector('#idelement')
        //this.instanceIdElement = M.componenteMaterialize.init(elementIdElement, {});
    }
    listenerEventsfromEscope() {
      const inputUser = this.shadow.querySelector('#user');
      const inputPassword = this.shadow.querySelector('#password');
      const labelUser = this.shadow.querySelector('#label-user');
      const labelPassword = this.shadow.querySelector('#label-password');
      
      const toggleColorActive = (element) => {
          element.classList.toggle('color-active');
      };
  
      inputUser.addEventListener('focus', () => toggleColorActive(labelUser));
      inputUser.addEventListener('blur', () => toggleColorActive(labelUser));
  
      inputPassword.addEventListener('focus', () => toggleColorActive(labelPassword));
      inputPassword.addEventListener('blur', () => toggleColorActive(labelPassword));

      const eye = this.shadow.querySelector("#visi-psw");
        eye.addEventListener('click',()=>{
          if(eye.textContent == "visibility"){
            eye.innerHTML = "visibility_off";
            inputPassword.type = "text";
          }
          else{
            eye.innerHTML = "visibility";
            inputPassword.type = "password";
          }
        })
  }

    render(){
        this.shadow.innerHTML = /*HTML*/`
        <head>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
        </head>
        <style>
          @import "./src/css/main.css";

          .container{
            background: url(./src/img/background.webp) center no-repeat;  
            width: 100vw;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 1rem;
          }

          section#login {
            display: grid;
            grid-template-columns: 1fr 1fr;
            height: 25rem;
            max-width: 800px;
            width: 100%;
            background: #fff;
            border-radius: 8px;            
            box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.40);
          }

          article{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 2rem;
            border-right: 1px solid #eaeaea;
          }

          article h1, form h1{
            color: var(--color02);
            font-size: 1.8rem;
            text-align: center;
            line-height: 2;
          }

          form{
            padding: 2rem 1rem 0rem 1rem;
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            height: 100%;
          }

          form h1{
            color: var(--color01) !important;
            line-height: 1 !important;
          }

          .inputs {
              display: grid;
              flex-direction: column;
          }     

          input {
            background-color: #f0f0f0;
            border: 1px solid #dadada;
            border-radius: 12px;
            font-size: 1.1rem;
            margin-bottom: 0.7rem;
            padding: 0.8rem;
            transition: all 300ms;
            width: 100%;
            margin-bottom: 1.2rem;
          }    

          .inputs input:focus{
            border: 0.5px solid #a9a9a9;
            outline: none;
            transition: all 300ms;
          }

          #input-senha{
            position: relative;
          }

          .material-symbols-outlined{
            cursor: pointer;
            position: absolute;
            right: 0.5rem;
            top: 0.8rem;
            color: #a9a9a9;
          }

          input[type="submit"]{
            background: var(--color02);
            color: #fff;
            cursor: pointer;
            font-weight: 600;
          }

          .color-active{
            color: var(--color01);
            transition: all 300ms;
          }

          @media screen and (max-width: 650px) {
            section#login {
              grid-template-columns: 1fr;
              grid-template-rows: .5fr 1fr !important;
              height: auto;
            }
            article{
              border: 0; 
            }
            article h1 {
              display: none;
            } 
            .logo-section{
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 1rem;
            }
            .logo-section img{
              width: 80% !important;
              margin: 0 auto;
            }
          }

          </style>

          <div class="container">
            <section id="login">
                <article>
                    <div class="logo-section">
                        <img src="./src/img/logo.svg" alt="Logo" id="logo">
                        <h1>Defesa Civil</h1>
                    </div>
                </article>
                <form action method="POST" id="formLogin">
                    <h1>Login</h1>
                    <div class="inputs">
                        <label for="user" id="label-user">Usuário</label>
                        <input type="text" id="user" name="user"
                            placeholder="Digite seu usuário" />
                        <label for="password" id="label-password">Senha</label>
                        <span id="input-senha">
                        <input type="password" id="password" name="password"
                            placeholder="Digite sua senha" />
                           <span class="material-symbols-outlined" id="visi-psw">visibility</span>
                        </span>
                        <span id="alert" class></span>
                    </div>
                    <input type="submit" id="button" value="Entrar" />
                </form>
            </section>
          <div>
          `
        this.createAllinstances()
        this.listenerEventsfromEscope()
    }
}

window.customElements.define('page-login', Login);