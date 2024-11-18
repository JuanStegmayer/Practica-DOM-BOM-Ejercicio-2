class Persona {
  constructor(nombre, edad, dni, sexo, peso, altura, añoNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.añoNacimiento = añoNacimiento;
  }

  mostrarGeneracion() {
    // Aquí deberías implementar la lógica para determinar la generación
    // basándote en el año de nacimiento y la imagen proporcionada.
    // Por ejemplo, podrías usar un rango de años para cada generación.
    let generacion = "";
    let rasgo = "";

    // ... Lógica para determinar la generación y el rasgo ...

    alert(
      `La persona pertenece a la generación ${generacion} y su rasgo característico es ${rasgo}`
    );
  }

  esMayorDeEdad() {
    if (this.edad >= 18) {
      return "La persona es mayor de edad.";
    } else {
      return "La persona es menor de edad.";
    }
  }

  mostrarDatos() {
    alert(
      `Nombre: ${this.nombre}\nEdad: ${this.edad}\nDNI: ${this.dni}\nSexo: ${this.sexo}\nPeso: ${this.peso}\nAltura: ${this.altura}\nAño de nacimiento: ${this.añoNacimiento}`
    );
  }
}
