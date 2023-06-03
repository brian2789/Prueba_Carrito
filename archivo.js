function calcTotal(productos) {
  let nuevoTotal = 0;
  for (let i = 0; i < productos; i++) {
    const id = "item_" + i;
    const precio = document.getElementById(id);
    if (precio.checked) {
      nuevoTotal += Number(precio.value);
    }
  }
  const total = document.getElementById("total-carrito")
  total.textContent = "$" + nuevoTotal
}
