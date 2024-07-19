/*
1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado.
Crea los métodos necesarios para permitir encender y apagar el auto.

Output:



objeto.encender();
objeto.apadar();

auto encendido
El auto se apagó

*/
const auto = {
  color: `morado`,
  marca: `ferrari`,
  modelo: `vulcan`,
  encender: function () {
    document.write(`<p>El auto esta encendido</p>`);
  },
  apagar: function () {
    document.write(`<p>El auto esta apagado</p>`);
  },
};
console.log(auto);
document.write(`<p>Color: ${auto.color} </p>`);
document.write(`<p>Marca: ${auto.marca} </p>`);
document.write(`<p>Modelo: ${auto.modelo} </p>`);
auto.encender();
auto.apagar();
