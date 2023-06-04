function isNumber(numero) {
  if (typeof numero === "string") {
      return !isNaN(numero);
  }
}

function calcularTotal(cantidadDeItems, papa, cebolla, mandarina, banana) {
  let nuevoTotal = 0;
  for (let i = 0; i < cantidadDeItems; i++) {
    switch (i) {
      case 0:
        if (isNumber(papa)) {
          nuevoTotal += papa * 250;
        }
        break;
      case 1:
        if (isNumber(cebolla)) {
          nuevoTotal += cebolla * 175;
        }
        break;
      case 2:
        if (isNumber(mandarina)) {
          nuevoTotal += mandarina * 75;
        }
        break;
      case 3:
        if (isNumber(banana)) {
          nuevoTotal += banana * 50;
        }
        break;
    }
  }
  const stringTotal = "Usted paga un total de: " + nuevoTotal;
  alert(stringTotal);
}

const papa = prompt("Cuantas papas desea comprar?\n 250 cada papa", 0);
const cebolla = prompt("Cuantas cebollas desea comprar?\n 175 cada cebolla", 0);
const mandarina = prompt(
  "Cuantas mandarinas desea comprar?\n 75 cada mandarina",
  0
);
const banana = prompt("Cuantas bananas desea comprar?\n 50 cada banana", 0);

calcularTotal(4, papa, cebolla, mandarina, banana);