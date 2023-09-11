window.addEventListener('submitFormAmbulance', async function (event) {
  event.preventDefault();
  const formulario = event.detail.formulario;
  const dadosForm = new FormData(formulario);

  try {
    const res = await handleNewAmbulance(dadosForm);
    if (res) { 
      Toastify({
        text: res.msg,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #E9961B, #E4661B)",
        },
        onClick: function(){} // Callback after click
      }).showToast();

    } else {
      Toastify({
        text: res.msg,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #f9161B, #f9461B)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
    }
  } catch (error) {
    console.error("Erro na solicitação:", error);
  }
});