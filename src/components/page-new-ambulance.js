class NewAmbulance extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.build();
    this.customEvents()
  }

  connectedCallback() {
    this.script();
  }

  customEvents() {
    let submitFormAmbulance = new CustomEvent('submitFormAmbulance', { detail: {} });
    let formAmbualance = this.shadowRoot.querySelector('#formAmbualance')
    formAmbualance.addEventListener('submit', function (event) {
      event.preventDefault(); // evita que a página recarregue
      window.dispatchEvent(submitFormAmbulance);
    });
  }

  script() {
    // Cria um loop para preencher as options com os anos
    const selectAno = this.shadowRoot.getElementById('ano');
    for (let i = 1970; i <= new Date().getFullYear() + 1; i++) {
      const option = document.createElement('option');
      option.text = i;
      option.value = i;
      selectAno.add(option);
    }
    //Fim do loop

    //Habilitar o form para novo cadastro
    var btnNovo = this.shadowRoot.getElementById('btn-novo');
    var btnCad = this.shadowRoot.getElementById('btn-cadastrar');
    var txtModelo = this.shadowRoot.getElementById('modelo');
    var txtAno = this.shadowRoot.getElementById('ano');
    var txtPlaca = this.shadowRoot.getElementById('placa');
    var txtSituacao = this.shadowRoot.getElementById('situacao');

    btnNovo.addEventListener("click",(e)=>{
        e.preventDefault();
        formDisabled();
    })

    function formDisabled(){
      if(txtModelo.disabled == true){
        txtModelo.disabled = false;
        txtAno.disabled = false;
        txtPlaca.disabled = false;
        txtSituacao.disabled = false;
        btnCad.style.visibility = 'visible';
        btnNovo.value = "Cancelar";
      }
      else{
          txtModelo.disabled = true;
          txtAno.disabled = true;
          txtPlaca.disabled = true;
          txtSituacao.disabled = true;
          btnCad.style.visibility = 'hidden';
          btnNovo.value = "Nova ambulancia";
      }
    }

    txtPlaca.addEventListener("blur",()=>{
      const spanAlerta = this.shadowRoot.getElementById('alertPlaca');
      const placaValor = txtPlaca.value;
      const padraoAntigo = /^[A-Za-z]{3}[0-9]{4}$/;
      const padraoMercosul = /^[A-Za-z]{3}[0-9][A-Za-z][0-9]{2}$/;
    
      if (padraoAntigo.test(placaValor)) {
        spanAlerta.innerHTML = "";
      } else if (padraoMercosul.test(placaValor)) {
        spanAlerta.innerHTML = "";
      } else {
        spanAlerta.innerHTML = "Placa Inválida.";
      } 
    })

  } 

  build() {
    this.shadowRoot.innerHTML = /*HTML*/ `
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      </head>
      <style>
        @import "./src/css/main.css";

        main{
          display: flex;
          align-items: center;
          flex-direction: column;

          max-width: 900px;
          width: 100%;
          margin: 0 auto;
        }

        #user-icon{
          font-size: 3rem;
          padding: 10px;
          background: var(--color01);
          color: #fff;
          border-radius: 99999px;
          transition: all 250ms;
          cursor: default;
          margin-top: 1.5rem;
        }

        #user-icon:hover{
          scale: 1.05;
          transition: all 250ms;
        }

        form {
          width: 100%;
          padding: 1rem;
          position: relative;
          display: inline;
        }

        form input, select{
          width: 100%;
          padding: .5rem 10px;
          margin: .7rem 0rem;
          border: .5px solid #dadada;
          background-color: #dadada3d;
          border-radius: 5px;
          font-size: 1rem;
        }

        #alertPlaca{
          color: #ff0000; 
        }

        input[type="submit"] {
          background-color: var(--color02);
          color: #fff;
          width: auto;
          padding: 0 0.5rem;
          height: 40px;
          font-weight: bold;
          cursor: pointer;
        }

        #btn-cadastrar{
            visibility: hidden;
            background-color: #E4661B !important;
        }

        .loader {
          width: 28px;
          height: 28px;
          border: 3px solid #E4661B;
          border-bottom-color: transparent;
          border-radius: 50%;
          display: none;
          box-sizing: border-box;
          animation: rotation 1s linear infinite;
          margin-bottom: 2rem; 
          }

          @keyframes rotation {
          0% {
              transform: rotate(0deg);
          }
          100% {
              transform: rotate(360deg);
          }
          } 

      </style>

      <main>
          <span class="material-symbols-outlined" id="user-icon">ambulance</span>
          <form method="POST" id='formAmbualance'>
              <input type="text" name="modelo" id="modelo" placeholder="Modelo" disabled required>
              <select name="ano" id="ano" disabled required>
                  <option value disabled required selected>Ano do veículo</option>
              </select>
              <input type="text" name="placa" id="placa" placeholder="Placa"
                  maxlength="7" minlength="7" disabled
                  required>
              <span id="alertPlaca"></span>
              <select name="situacao" id="situacao" disabled required>
                  <option value disabled selected>Situação do veiculo</option>
                  <option value="Ativo" id="Ativo">Ativo</option>
                  <option value="Inativo" id="Inativo">Inativo</option>
                  <option value="Em Manutenção" id="Em Manutenção">Em Manutenção</option>
              </select>
              <input type="submit" value="Nova ambulancia" id="btn-novo">
              <input type="submit" value="Cadastrar" id="btn-cadastrar">
          </form>
          <span class="loader"></span>
      </main>
    `
  }

}

window.customElements.define("page-new-ambulance", NewAmbulance);