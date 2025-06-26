document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = form.querySelector("input[type='text']").value;
    const password = form.querySelector("input[type='password']").value;

    // Simulación de login
    if (username === "BitLegion" && password === "123456") {
      alert("Login exitoso. Hola, " + username + "!");
    } else {
      alert("Usuario o contraseña incorrectos.");
    }
  });
});