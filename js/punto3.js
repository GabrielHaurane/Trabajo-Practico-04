/*
3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, 
mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área
*/
class Rectangulo {
    constructor(alto, ancho) {
      this.alto = alto;
      this.ancho = ancho;
    }
  
    // Métodos para modificar las propiedades
    setAlto(nuevoAlto) {
      if (nuevoAlto > 0 && !isNaN(nuevoAlto)) {
        this.alto = nuevoAlto;
      } else {
        document.write("<p>El valor de alto debe ser un número positivo.</p>");
      }
    }
  
    setAncho(nuevoAncho) {
      if (nuevoAncho > 0 && !isNaN(nuevoAncho)) {
        this.ancho = nuevoAncho;
      } else {
        document.write("<p>El valor de ancho debe ser un número positivo.</p>");
      }
    }
  
    // Métodos para mostrar las propiedades
    getAlto() {
      return this.alto;
    }
  
    getAncho() {
      return this.ancho;
    }
  
    // Método para calcular el perímetro
    calcularPerimetro() {
      return 2 * (this.alto + this.ancho);
    }
  
    // Método para calcular el área
    calcularArea() {
      return this.alto * this.ancho;
    }
  
    // Método para mostrar las propiedades
    mostrarPropiedades() {
      document.write(`<p>Alto: ${this.alto}, Ancho: ${this.ancho}</p>`);
    }
  }
  
  // Ejemplo de uso
  const miRectangulo = new Rectangulo(10, 20);
  
  // Mostrar las propiedades iniciales
  miRectangulo.mostrarPropiedades();
  
  // Modificar las propiedades
  miRectangulo.setAlto(15);
  miRectangulo.setAncho(25);
  
  // Mostrar las propiedades modificadas
  miRectangulo.mostrarPropiedades();
  
  // Calcular y mostrar el perímetro
  document.write(`<p>Perímetro: ${miRectangulo.calcularPerimetro()}</p>`);
  
  // Calcular y mostrar el área
  document.write(`<p>Área: ${miRectangulo.calcularArea()}</p>`);