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
      formulario.reset();

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

window.addEventListener('submitFormLogin', async function (event) {
  event.preventDefault();
  const formulario = event.detail.formulario;
  const dadosForm = new FormData(formulario);

  try {
    const res = await handleLogin(dadosForm);
    console.log(res.user_info);
    if (res.status === true) { 
      Toastify({
        text: res.msg,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #83D643, #53E353)",
        },
        onClick: function(){} // Callback after click
      }).showToast();

      localStorage.setItem("id",JSON.stringify(res.user_info));

      setTimeout(()=>{
        window.location.href = "/"
      },2000)

    } else {
      Toastify({
        text: res.msg,
        duration: 3000,
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
    formulario.reset();
  } catch (error) {
    console.error("Erro na solicitação:", error);
  }
});