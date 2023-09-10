class SideBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.build();
  }

  build() {
    this.shadowRoot.innerHTML = /*HTML*/`
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      </head>
      <style>
        @import "./src/css/main.css";
    aside {
      width: 250px;
      height: 100vh;
      z-index: 2;
      position: sticky;
      top: 0;
      background-color: rgb(255, 255, 255);
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 25px 0px;
      transition: all 300ms;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    #logo {
      width: 70%;
      margin: 1rem auto;
      cursor: pointer;
    }
    
    article:first-child {
      display: grid;
      place-items: center;
      padding-top: 0.5rem;
      border-bottom: 1px solid #f1f1f1;
    }

    article:first-child span{
      cursor: pointer;
    }

    section {
      padding: 10px;
    }
    
    section h2 {
      color: var(--color021);
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
    
    section a {
      display: block;
      color: var(--color01);
      text-decoration: none;
      position: relative;
      overflow: hidden;
      padding: 0 10px;
      transition: color 0.3s cubic-bezier(0.11, 0.7, 0, 1);
      line-height: 1.8;
      cursor: pointer;
    }
    
    section a:after {
      position: absolute;
      bottom: 0;
      left: 0;
      display: block;
      width: 60%;
      height: 2px;
      background-color: var(--color02);
      content: "";
      border-bottom: 1px solid var(--color02);
      transform: translate3d(-101%, 0, 0);
      transition: transform 0.3s cubic-bezier(0.11, 0.7, 0, 1);
    }
    
    section a:hover:after {
      transform: translate3d(0, 0, 0);
    }
    
    .menu li {
      float: left;
      position: relative;
      list-style: none;
      width: 100%;
    }
    
    ul#items li > a {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5px;
      transition: all 300s;
    }
    
    #items ul { 
      list-style: none;
      display: none;
      padding: 5px;
    }
    
    #sub-item li {
      padding: 3px;
    }
    
    #sub-item a {
      color: var(--color02) !important;
      font-size: 0.85rem;
    }
    
    .open{
      width: 70px !important;
    }

    .open-text{
      display: none !important;
    }

    .apps-menu{
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
    }

    .apps-menu span{
      display: block !important; 
      font-size: 2.2rem;
      padding: 8px 0;
      color: var(--color02);
      margin-bottom: 1rem;
    }

    .apps-menu h2{
      display: none;
    }

    .apps-menu h2:last-child{
      display: none;
    }

    .items{
      display: flex;
      flex-direction: column;
      gap: 0.7rem;
    }

    #menu-button{
      color: var(--color02);
      margin-left: auto;
      padding-right: 8px;
    }

    .menu-btn{
      margin: 0 !important;
      padding-right:0 !important;
    }

    #user-settings{
      display: flex;
      align-items: center;      
      gap: 8px;
      margin: 1rem;
    }

    #settins{
      display: flex;
      flex-direction: column;
    }

    #user-settings .material-symbols-outlined{
      font-size: 2.7rem;
      background: var(--color01);
      color: #fff;
      border-radius: 99999px;
      cursor: pointer;
    }

    #name-user{
      color: var(--color02);
      font-weight: 600;
      cursor: pointer;
    }

    #settins small{
      line-height: 1.8;
      cursor: pointer;
    }

      </style>
      
      <aside class="menu" id="aside">
      <section>  
        <article>
          <span class="material-symbols-outlined" id="menu-button">close</span>
          <img src="./src/img/logo.svg" alt="Logo" id="logo">
        </article>

        <section>    
        <span id="apps">
          <h2>Menu</h2>
          <span class="material-symbols-outlined" style="display: none">apps</span>
        </span>  
          <ul id="items">
            <li><a>
            <p id="text-menu">Ambulância</p>
            <span class="material-symbols-outlined">ambulance</span></a>
              <ul id="sub-item">
                <li><a id="link">Cadastrar ambulância</a></li>
                <li><a id="link">Consultar ambulância</a></li>
              </ul>
            </li>
      
            <li><a>
            <p id="text-menu">Motorista</p>
            <span class="material-symbols-outlined">contact_emergency</span></a>
              <ul id="sub-item">
                <li><a id="link">Cadastrar motorista</a></li>
                <li><a id="link">Consultar motorista</a></li>
              </ul>
            </li>
      
            <li><a>
            <p id="text-menu">Ocorrências</p>
            <span class="material-symbols-outlined">emergency_home</span></a>
              <ul id="sub-item">
                <li><a id="link">Cadastrar ocorrências</a></li>
                <li><a id="link">Consultar ocorrências</a></li>
              </ul>
            </li>

            <li style="  visibility: hidden;"><a>
            <p id="text-menu"></p>
            <span class="material-symbols-outlined">emergency_home</span></a>
              <ul id="sub-item">
                <li><a id="link">Cadastrar ocorrências</a></li>
                <li><a id="link">Consultar ocorrências</a></li>
              </ul>
            </li>

            <span id="apps">
              <h2 style="padding-top: 1rem;">Dashboard</h2>
              <span class="material-symbols-outlined" style="display: none">insert_chart</span>
            </span>
            <li><a>
              <p id="text-menu">Visualizar</p>
              <span class="material-symbols-outlined">query_stats</span></a>
            </li>
          </ul>

        </section>
      </section>
        <article id="user-settings">     
          <span class="material-symbols-outlined">account_circle</span>
          <span id="settins">
            <span id="name-user"></span>
            <small>Sair</small>
          </span>
        </article>
      </aside>
    `
  }

  connectedCallback() {
    const main = document.getElementById("main")
    if (!localStorage.getItem("id")) {
      main.innerHTML = "<page-login></page-login>";
    }
    this.script();
  }
  
  script() {
    const idName = this.shadowRoot.getElementById('name-user');
    const localStorageInfo = localStorage.getItem('id')
    const userInfo = JSON.parse(localStorageInfo)

    const nameUser = userInfo.nome;
    const idUser = userInfo.id

    idName.innerHTML = nameUser;

    const sidebar = this.shadowRoot.getElementById('aside');
    const menuButton = this.shadowRoot.getElementById('menu-button');
    const items = this.shadowRoot.getElementById('items');
    const settinsUser = this.shadowRoot.getElementById('settins');

    const textMenu = this.shadowRoot.querySelectorAll('#text-menu');
    const links = this.shadowRoot.querySelectorAll('a[id="link"]');
    const apps = this.shadowRoot.querySelectorAll('#apps');
    const itemsSub = this.shadowRoot.querySelectorAll("#items > li");

    itemsSub.forEach(item => {
      item.addEventListener("click", () => {
        const subItem = item.querySelector("#sub-item");

        if (subItem) {
          if (subItem.style.display === "block") {
            subItem.style.display = "none";
          } else {
            subItem.style.display = "block";
          }
        }
      });
    });

    menuButton.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      textMenu.forEach(item => {
        item.classList.toggle('open-text');
      })

      settinsUser.classList.toggle('open-text');
      
      apps.forEach(item => {
        item.classList.toggle('apps-menu')
      })

      menuButton.classList.toggle('menu-btn')
      items.classList.toggle('items')
      if (menuButton.textContent == "close") {
        menuButton.innerHTML = "menu"
      }
      else {
        menuButton.innerHTML = "close"
      }
    });

    links.forEach(item => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        console.log(item.textContent)
        const content = document.getElementById('children')
        switch (item.textContent) {
          case "Cadastrar ambulância":
            content.innerHTML = "";
            content.innerHTML = "<page-new-ambulance></page-new-ambulance>";
            break;

          case "Consultar ambulância":
            content.innerHTML = "";
            content.innerHTML = "<page-view-ambulance></page-view-ambulance>";
            break;

          case "Cadastrar motorista":
            content.innerHTML = "";
            content.innerHTML = "<page-new-ambulance></page-new-ambulance>";
            break;

          case "Consultar motorista":
            content.innerHTML = "";
            content.innerHTML = "<page-new-ambulance></page-new-ambulance>";
            break;

          case "Cadastrar ocorrências":
            content.innerHTML = "";
            content.innerHTML = "<page-new-ambulance></page-new-ambulance>";
            break;

          case "Consultar ocorrências":
            content.innerHTML = "";
            content.innerHTML = "<page-new-ambulance></page-new-ambulance>";
            break;
        }
      });

    })

  }

}

customElements.define("sidebar-menu", SideBar);
