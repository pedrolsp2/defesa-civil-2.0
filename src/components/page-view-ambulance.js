class ViewAmbulance extends HTMLElement {
  constructor(){
    super();
    this.attachShadow({ mode: 'open' });
    this.build();
  }

  build(){ 
    this.shadowRoot.innerHTML= "Consulta Ambulancia"
  }

}

customElements.define("page-view-ambulance", ViewAmbulance);