let precio = 45000;
let cantidad = document.querySelector("#userCantidad");
let color = document.querySelector("#userColor");
let total = document.querySelector("#Total");

total.addEventListener("click", () => {
  document.querySelector("#valorTotal").innerHTML = cantidad.value * precio;
  document.querySelector("#cantidadBalones").innerHTML = cantidad.value;
  document.querySelector("#colorUsuario").style.backgroundColor = color.value;
});
