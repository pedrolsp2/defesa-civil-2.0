async function handleLogin(data) {
  try {
    const response = await fetch("./api/db/get/login.php", {
      method: "POST",
      body: data
    });

    if (!response.ok) {
      throw new Error("Erro na solicitação");
    }

    const res = await response.json();
    return res;
  } catch (error) {
    throw error;
  }
}