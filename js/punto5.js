/*
5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento.
 Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y 
cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:

esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.

*/

class Persona {
  constructor(nombre, edad, sexo, peso, altura, anioDeNac) {
    this.nombre = nombre;
    this.edad = edad;
    switch (sexo) {
      case `H`:
        this.sexo = sexo;
        break;
      case `M`:
        this.sexo = sexo;
        break;

      default:
        document.write(
          `no ingreso un sexo valido. Se le establecera como NB por defecto`
        );
        this.sexo = `NB`;
        break;
    }
    if (peso > 0) {
      this.peso = peso;
    } else {
      document.write(
        `no ingreso un peso valido. Se le agregara 70kg por defecto`
      );
      this.peso = 70;
    }

    if (altura > 0) {
      this.altura = altura;
    } else {
      document.write(
        `no ingreso un peso valido. Se le agregara 170cm por defecto`
      );
      this.altura = 170;
    }

    if (anioDeNac >= 1930 && anioDeNac <= 2010) {
      this.anioDeNac = anioDeNac;
    } else {
      document.write(
        `el año de nacimiento no es valido. Se le agragara que es del año 2000 por defecto`
      );
    }
  }
  generarDni() {
    this.dni = Math.floor(10000000 + Math.random() * 90000000);
  }
  mayorEdad() {
    if (this.edad >= 18) {
      document.write(`la edad ingresada corresponde a que es mayor de edad`);
    } else {
      document.write(`la edad ingresada corresponde a que es menor de edad`);
    }
  }
  mostrarGeneracion() {
    let generacion = '';
    let rasgo = '';
    
    if (this.anioDeNac >= 1994 && this.anioDeNac <= 2010) {
      generacion = 'Generación Z';
      rasgo = 'Irreverencia';
    } else if (this.anioDeNac >= 1981 && this.anioDeNac <= 1993) {
      generacion = 'Generación Y';
      rasgo = 'Frustración';
    } else if (this.anioDeNac >= 1969 && this.anioDeNac <= 1980) {
      generacion = 'Generación X';
      rasgo = 'Obsesión por el éxito';
    } else if (this.anioDeNac >= 1949 && this.anioDeNac <= 1968) {
      generacion = 'Baby Boom';
      rasgo = 'Ambición';
    } else if (this.anioDeNac >= 1930 && this.anioDeNac <= 1948) {
      generacion = 'Silent Generation';
      rasgo = 'Austeridad';
    } else {
      generacion = 'Generación desconocida';
      rasgo = 'desconocido';
    }

    document.write(`${this.nombre} pertenece a la ${generacion} y su rasgo característico es ${rasgo}`);
  }
  
  mostrarDatos() {
    document.write(
      `<p>Nombre: ${this.nombre}, Edad: ${this.edad}, Sexo: ${this.sexo}, Peso: ${this.peso}KG, Altura: ${this.altura}CM, año de nacimiento: ${this.anioDeNac}</p>`
    );
  }
}

const persona1 = new Persona(`Gabriel`, 20, `H`, 63, 190, 2004);

persona1.mayorEdad();
persona1.generarDni();
document.write(`<p>${persona1.dni} </p>`);
persona1.mostrarGeneracion();
persona1.mostrarDatos();

// class Persona {
//     constructor(nombre, edad, sexo, peso, altura, anioDeNac) {
//       this.nombre = nombre;
//       this.edad = edad;
//       this.sexo = this.validarSexo(sexo);
//       this.peso = this.validarPeso(peso);
//       this.altura = this.validarAltura(altura);
//     //   this.anioDeNac = this.validarAnioDeNac(anioDeNac);
//     this.anioDeNac = anioDeNac;
//       this.dni = this.generarDni();
//     }
  
//     validarSexo(sexo) {
//       if (sexo === 'H' || sexo === 'M') {
//         return sexo;
//       } else {
//         document.write('No ingresó un sexo válido. Se le establecerá como NB por defecto');
//         return 'NB';
//       }
//     }
  
//     validarPeso(peso) {
//       if (peso > 0) {
//         return peso;
//       } else {
//         document.write('No ingresó un peso válido. Se le agregará 70kg por defecto');
//         return 70;
//       }
//     }
  
//     validarAltura(altura) {
//       if (altura > 0) {
//         return altura;
//       } else {
//         document.write('No ingresó una altura válida. Se le agregará 170cm por defecto');
//         return 170;
//       }
//     }
  
//     // validarAnioDeNac(anioDeNac) {
//     //   if (anioDeNac >= 1930 && anioDeNac <= 2010) {
//     //     return anioDeNac;
//     //   } else {
//     //     document.write('El año de nacimiento no es válido. Se le agregará el año 2000 por defecto');
//     //     return 2000;
//     //   }
//     // }
  
//     generarDni() {
//       return Math.floor(10000000 + Math.random() * 90000000);
//     }
  
//     esMayorDeEdad() {
//       return this.edad >= 18 ? 'Es mayor de edad' : 'No es mayor de edad';
//     }
  
   
//     mostrarDatos() {
//       document.write(`Nombre: ${this.nombre}, Edad: ${this.edad}, Sexo: ${this.sexo}, Peso: ${this.peso}KG, Altura: ${this.altura}CM, Año de nacimiento: ${this.anioDeNac}, DNI: ${this.dni}`);
//     }
//   }
  
//   // Crear una instancia de Persona
//   const persona1 = new Persona('Gabriel', 20, 'H', 63, 190, 1930);
  
//   // Usar los métodos de la clase Persona
//   document.write(persona1.esMayorDeEdad());
//   persona1.mostrarGeneracion();
//   persona1.mostrarDatos();
  