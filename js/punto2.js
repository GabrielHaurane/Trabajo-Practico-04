/*
2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
- Una propiedad titular con el valor "Alex".
- Una propiedad saldo, teniendo como valor inicial 0.
- Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
- Un método extraer() que permita retirar la cantidad pasada como parámetro.
- Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.

*/
const cuenta = {
  titular: "Alex",
  saldo: 0,

  ingresar: function (monto) {
    if (monto > 0 && !isNaN(monto)) {
      this.saldo += monto;
    } else {
      document.write(
        "<p>El monto a ingresar no puede ser negativo o no es un número válido</p>");
    }
  },

  extraer: function (monto) {
    if (monto > 0 && !isNaN(monto) && monto <= this.saldo) {
      this.saldo -= monto;
    } else if (monto > this.saldo) {
      document.write("<p>No se puede extraer más del saldo disponible</p>");
    } else {
      document.write(
        "<p>El monto a extraer no puede ser negativo o no es un número válido</p>"
      );
    }
  },

  informar: function () {
    document.write(`<p>El titular de la cuenta es: ${this.titular}</p>`);
    document.write(`<p>El saldo de la cuenta es: ${this.saldo}</p>`);
  },
};

cuenta.informar();
cuenta.ingresar(500);
cuenta.extraer(150);
cuenta.informar();
