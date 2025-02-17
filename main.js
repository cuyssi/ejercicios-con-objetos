//EJERCICIOS PRACTICAS CON OBJETOS//

// Ejercicio 1:
// Crea un objeto llamado cancion con las siguientes propiedades:
// titulo: el nombre de una canción que te guste.
// artista: el nombre del cantante o grupo.
// duracion: la duración de la canción en minutos (puede ser un número).
// Accede a dos propiedades usando el punto (.) y una usando corchetes ([]).
// Muestra los valores en la consola con console.log().

// Ejercicio 2:
// Añade una nueva propiedad al objeto cancion después de crearlo. La propiedad debe llamarse genero y puede ser un tipo de música como "pop", "rock", etc.
// Modifica la duración de la canción y ponle un nuevo valor.
// Elimina la propiedad artista del objeto.
// Muestra el objeto completo en la consola para ver los cambios.
// Hasta ahora hemos usado solo propiedades con datos, pero los objetos también pueden tener métodos (funciones dentro de ellos).
// Ejercicio 3: Métodos en objetos
// Hasta ahora hemos usado solo propiedades con datos, pero los objetos también pueden tener métodos (funciones dentro de ellos).
// Agrega una propiedad reproducir al objeto cancion.
// En lugar de un valor normal, haz que reproducir sea una función que muestre en consola "Reproduciendo: [titulo] de [artista]".
// Llama a cancion.reproducir() y comprueba que funcione.

// Ejercicio 4: Métodos que reciben parámetros
// Agrega un nuevo método llamado avanzarTiempo(minutos).
// Este método debe sumar los minutos recibidos a la duración de la canción.
// Luego, imprime en consola el nuevo tiempo total con un mensaje como:
// "Nueva duración: X minutos".
// Prueba el método con distintos valores, como cancion.avanzarTiempo(1.2).

let cancion = {
    titulo: "Pisando fuerte",
    artista: "Alejandro Sanz",
    duracion: 2.54,

    reproduciendo() {
        console.log(`Reproduciendo: ${this.titulo} de ${this.artista}`)
    },

    avanzarTiempo(minutos) {
        this.duracion += minutos;
        console.log(`Nueva duración: ${this.duracion} minutos`)
    }
}

console.log(cancion.titulo);
console.log(cancion["duracion"]);
console.log(cancion.artista)

cancion.genero = "pop";
cancion.duracion = 3.5;
delete cancion.artista;
console.log(cancion)
cancion.artista = "Alejandro Sanz"
cancion.reproduciendo();
cancion.avanzarTiempo(3);




//--------------------------Siguiente Nivel: Objetos con Constructor------------------------------//

// Ejercicio 5: Creando Canciones con una Función Constructor
// Crea una función llamada Cancion que reciba título, artista y duración como parámetros.
// Dentro de la función, usa this para asignar los valores a las propiedades del objeto.
// Agrega un método reproducir() dentro del constructor que muestre un mensaje en consola con el título y el artista.
// Usa new Cancion(...) para crear dos canciones diferentes y prueba llamando a sus métodos.

//CON HERENCIA

// Ejercicio 6: Herencia con CancionPremium
// Crea una clase CancionPremium que herede de la clase Cancion.
// Añade una propiedad letra que sea una cadena de texto con la letra de la canción.
// Sobrescribe el método reproducir() para que, además de reproducir la canción, también imprima la letra de la canción (puedes mostrar solo una parte de la letra, no hace falta que sea toda).
// Crea una instancia de CancionPremium y prueba el nuevo método reproducir().


class Cancion  {
    constructor (titulo, artista, duracion) {
        this.titulo = titulo;
        this.artista = artista;
        this.duracion = duracion;
    }

    reproducir() {
        console.log(`Estas escuchando ${this.titulo} de ${this.artista}`);
    }
}

const cancion1 = new Cancion("She´s revel", "yellowcard");
const cancion2 =new Cancion("Compartiendo las miradas", "Alejandro Sanz");
cancion1.reproducir();
cancion2.reproducir()

class CancionPremiun extends Cancion {
    constructor (titulo, artista, duracion, letra) {
        super(titulo, artista, duracion);
        this.letra = letra;
    }

    reproducir() {
        super.reproducir();
        console.log(`Letra de la cancion: ${this.letra} ...`);
    }
}

// const cancion3 = new CancionPremiun("Truth in fiction", "Offspring", 2, "uhhhhh ohhhh uhhh ohhhhh");
// cancion3.reproducir()

//----------------------HERENCIA, ENCASULAMIENTO Y POLIFORMISMO------------------------------

// Ejercicio 7: Sistema de Biblioteca
// Imagina que estamos creando un sistema para gestionar una biblioteca. Tendremos diferentes tipos de Libro, como libros físicos y libros electrónicos.

// Requisitos:
// Clase base Libro:

// Debe tener propiedades privadas como #titulo, #autor y #anioPublicacion.
// Métodos getInfo() y setAnioPublicacion().
// Clase hija LibroFisico:

// Hereda de Libro.
// Añade una propiedad #ubicacionEstante para almacenar la ubicación en la biblioteca (por ejemplo, "Estante 3, Fila A").
// Sobrescribe el método getInfo(), mostrando también la ubicación.
// Clase hija LibroElectronico:

// Hereda de Libro.
// Añade una propiedad #formato (por ejemplo, "PDF", "EPUB", etc.).
// Sobrescribe el método getInfo(), mostrando también el formato del libro.
// Polimorfismo:

// A pesar de que getInfo() tiene el mismo nombre en todas las clases, cada clase debe imprimir algo diferente según el tipo de libro (físico o electrónico).
// Pasos a seguir:
// Crear las clases con los métodos y propiedades correspondientes.
// Usar los métodos de acceso (getters y setters) para manejar las propiedades privadas.
// Crear instancias de libros físicos y electrónicos y probar el método getInfo().



class Libro {
    #titulo;
    #autor;
    #añoPublicacion;

    constructor (titulo, autor, añoPublicacion) {
        this.#titulo = titulo;
        this.#autor = autor;
        this.#añoPublicacion = añoPublicacion;
    }

    getInfo() {
        return `El libro "${this.#titulo}" de ${this.#autor} del año ${this.#añoPublicacion}`
    }    
}



class LibroFisico extends Libro {
    
    #ubicacionEstante;

    constructor(titulo, autor, añoPublicacion, ubicacionEstante) {
        super (titulo, autor, añoPublicacion);
        this.#ubicacionEstante = ubicacionEstante;
    }

    getInfo() {
       return console.log(`${super.getInfo()}, se encuentra en el ${this.#ubicacionEstante}`)
    }    

}

class LibroElectronico extends Libro {
    
    #formato;


    constructor(titulo, autor, añoPublicacion, formato) {
        super (titulo, autor, añoPublicacion);
        this.#formato = formato;
    }

    getInfo() {
        return console.log(`${super.getInfo()}, se encuentra en ${this.#formato}`)
    }
}

const libro1 = new LibroFisico("la cazadora de sueños", "Monica Hugles", 1992, "Estante 3, fila A");
const libro2 = new LibroElectronico("El ocho", "Katherin Neville", 1988, "EPUB");
libro1.getInfo();
libro2.getInfo();


// Ejercicio 8:
// Vamos a modelar una clase base llamada Animal, y luego crearemos dos clases derivadas: Perro y Gato. Ambas
//  clases deben tener un método hablar() que imprima un mensaje diferente según el tipo de animal. Además, 
// vamos a asegurarnos de que los atributos como el nombre y la edad sean privados y solo se accedan mediante métodos de la clase.
// Requisitos:
// Crear una clase Animal con los atributos #nombre y #edad.
// Crear un método hablar() que solo imprima un mensaje genérico.
// Crear las clases Perro y Gato que hereden de Animal:
// Cada una de ellas debe sobrescribir el método hablar() para imprimir un mensaje único para cada animal.
// Asegúrate de que los atributos #nombre y #edad sean privados y accedidos solo mediante un método getInfo().
// Pistas:
// La clase Perro debe hacer que el perro diga "¡Guau!".
// La clase Gato debe hacer que el gato diga "¡Miau!".


class Animal {
    #nombre;
    #edad;
    constructor(nombre, edad) {
        this.#nombre = nombre;
        this.#edad = edad;
    }

    hablar() {
        return `${this.#nombre} dice`
    }

    getInfo() {
        return `${this.#nombre} tiene ${this.#edad}`
    }
}

class Perro extends Animal {
    constructor(nombre, edad) {
        super(nombre, edad);        
    }

    hablar() {
        return `${super.hablar()} guau`;
    }
}

class Gato extends Animal {
    constructor(nombre, edad) {
        super(nombre, edad);        
    }

    hablar() {
        return `${super.hablar()} miau`;
    }
}

const perro = new Perro("Toby", 4);
const gato = new Gato("Michi", 2);


console.log(perro.hablar())
console.log(perro.getInfo())
console.log(gato.hablar())
console.log(gato.getInfo())


// Ejercicio 9:
// Imagina que estamos creando un sistema de vehículos. Tendremos una clase base llamada Vehiculo, con dos clases derivadas: Coche y Bicicleta. Los vehículos tienen ciertas características (como el modelo y la velocidad máxima) y métodos (como moverse()), pero los coches y las bicicletas tienen comportamientos distintos al moverse.

// Requisitos:
// Crea una clase Vehiculo con los atributos privados #modelo y #velocidadMaxima, y un método moverse() que simplemente devuelva un mensaje genérico como "El vehículo se está moviendo".
// Crea una clase Coche que herede de Vehiculo. Los coches tienen una propiedad adicional llamada #tipoCarroceria (por ejemplo, "sedán" o "SUV"). Sobrescribe el método moverse() para que diga algo como "El coche se mueve a [velocidad máxima] km/h".
// Crea una clase Bicicleta que herede de Vehiculo. Las bicicletas tienen una propiedad adicional llamada #tipoFreno (por ejemplo, "freno de mano" o "freno de disco"). Sobrescribe el método moverse() para que diga algo como "La bicicleta se mueve a [velocidad máxima] km/h utilizando frenos de [tipo de freno]".
// Asegúrate de que todos los atributos sean privados y que se accedan mediante métodos.
// Pistas:
// En Coche, el método moverse() debería devolver el mensaje con la velocidad máxima del coche.
// En Bicicleta, el método moverse() debería devolver el mensaje con la velocidad máxima de la bicicleta y el tipo de freno.
// Usa el super() donde sea necesario para invocar métodos y constructores de la clase base.

class Vehiculo {
    #modelo;
    #velocidadMaxima;
    constructor(modelo, velocidadMaxima) {
        this.#modelo = modelo;
        this.#velocidadMaxima = velocidadMaxima;
    }

    getModelo() {
        return this.#modelo;
    }

    getVelocidad() {
        return this.#velocidadMaxima;
    }

    moverse() {
        return `El vehiculo se está moviendo`;
    }
}

class Coche extends Vehiculo {
    #tipoCarroceria;    
    constructor(modelo, velocidadMaxima, tipoCarroceria) {
        super(modelo, velocidadMaxima);
        this.#tipoCarroceria = tipoCarroceria;
    }

    getCarroceria() {
        return this.#tipoCarroceria;
    }

    moverse() {
        return `${super.moverse()} a ${this.getVelocidad()} km/h`;    
    }
}

class Bicicleta extends Vehiculo {
    #tipoFreno;    
    constructor(modelo, velocidadMaxima, tipoFreno) {
        super(modelo, velocidadMaxima);
        this.#tipoFreno = tipoFreno;
    }

    getFreno() {
        return this.#tipoFreno;
    }

    moverse() {
        return `${super.moverse()} a ${this.getVelocidad()} km/h utilizando frenos de ${this.getFreno()}`;    
    }
}

const coche = new Coche("Tesla Model S", 250, "Sedán");
const bici = new Bicicleta("Specialized S-Works Tarmac", 60, "disco hidráulicos");

console.log(coche.moverse());
console.log(bici.moverse());



// Ejercicio 10:
// Vamos a modelar un sistema de empleados en una empresa, con una clase base llamada Empleado y dos clases derivadas: Gerente y Desarrollador. Los empleados tienen un salario, un nombre y un puesto, y cada tipo de empleado tiene comportamientos específicos.

// Requisitos:
// Crea una clase Empleado con los atributos privados #nombre, #puesto y #salario. Agrega un método getInfo() que devuelva información sobre el empleado.
// Crea una clase Gerente que herede de Empleado y tenga un atributo adicional #departamento (por ejemplo, "Ventas" o "Marketing"). Sobrescribe el método getInfo() para que incluya también el departamento.
// Crea una clase Desarrollador que herede de Empleado y tenga un atributo adicional #lenguaje (por ejemplo, "JavaScript" o "Python"). Sobrescribe el método getInfo() para que incluya también el lenguaje de programación.
// Asegúrate de que todos los atributos sean privados y accedidos mediante métodos.
// Pistas:
// En Gerente, el método getInfo() debe devolver el nombre, el puesto, el salario y el departamento.
// En Desarrollador, el método getInfo() debe devolver el nombre, el puesto, el salario y el lenguaje de programación.
// Usa super() en los constructores y en el método getInfo() para invocar el comportamiento de la clase base Empleado.

class Empleado {
    #nombre;
    #puesto;
    #salario;
    constructor (nombre, puesto, salario) {
        this.#nombre = nombre;
        this.#puesto = puesto;
        this.#salario = salario;        
    }

    getInfo() {
        return `El empleado ${this.#nombre} que ocupa el puesto de ${this.#puesto} tiene un salario de ${this.#salario}€`;
    }
}

class Gerente extends Empleado {
    #departamento;
    constructor(nombre, puesto, salario, departamento) {
        super(nombre, puesto, salario);
        this.#departamento = departamento;
    }

    getInfo() {
        return `${super.getInfo()} en el departamento ${this.#departamento}`
    }
}

class Desarrollador extends Empleado {
    #lenguajeProgramacion;
    constructor(nombre, puesto, salario, lenguajeProgramacion) {
        super(nombre, puesto, salario);
        this.#lenguajeProgramacion = lenguajeProgramacion;
    }

    getInfo() {
        return `${super.getInfo()} usando el lenguaje ${this.#lenguajeProgramacion}`
    }
}


const gerente = new Gerente("Antonio", "gerente", 2300, "ventas");
const desarrollador = new Desarrollador("Jose", "programador", 1800, "Python");
console.log(gerente.getInfo())
console.log(desarrollador.getInfo())


// Ejercicio de Getters y Setters
// Vas a crear una clase CuentaBancaria con:

// Una propiedad privada #saldo.
// Un getter saldo que devuelva el saldo actual.
// Un setter saldo que solo permita asignar valores positivos.
// Un método depositar(monto) que aumente el saldo.
// Un método retirar(monto) que reduzca el saldo si hay suficiente dinero.
// Después, crea una instancia de CuentaBancaria, deposita dinero, intenta retirar más del saldo y verifica que todo funcione bien.

class CuentaBancaria {
    #saldo;
    constructor ( saldo) {
        this.#saldo = saldo;             
    }

    get saldo() {
        return this.#saldo;
    }

    set saldo(valor) {
        if(valor >= 0) {
            this.#saldo = valor;            
        } else {
            console.log("El saldo no puede ser negativo")
        }
    }

    depositar(monto) {
      if (monto >0) {
        this.#saldo += monto;
        return this.saldo
      } else {
        console.log("No puedes depositar una cantidad negativa o cero");
        return this.saldo;
      }
    }

    retirar(monto) {
        if (monto <= this.#saldo) {
            this.#saldo -= monto;
            return this.saldo;
        } else {
            console.log("Fondos insuficientes");
            return this.saldo;
        }
    }
    
}

const cuentaBancaria= new CuentaBancaria(500);
console.log(cuentaBancaria.depositar(200));
console.log(cuentaBancaria.retirar(500));
console.log(cuentaBancaria.retirar(800));


// Ejercicio de Getters y Setters:
// Imagina que estamos creando una clase Producto para una tienda online. Cada producto tiene un nombre, un precio y una cantidad disponible en stock. Queremos controlar lo siguiente:

// El precio nunca debe ser negativo.
// La cantidad en stock nunca debe ser menor que cero.
// Cuando un cliente compra un producto, el sistema debe restar la cantidad correspondiente del stock, pero no puede dejar que la cantidad sea negativa.
// Queremos permitir que se modifique el precio de un producto, pero que no se pueda cambiar si el precio es cero o negativo.
// Requisitos:
// Usa getters y setters para precio y stock.
// Crea un método comprar que permita restar la cantidad comprada del stock.
// Asegúrate de que no se pueda comprar más de lo que hay en stock.
//Tareas:
// Completa el código para que funcione correctamente con los getters y setters.
// Prueba los métodos para asegurarte de que el sistema de control de precios y stock funciona correctamente.


class Producto {
    #nombre;
    #precio;
    #stock;

    constructor(nombre, precio, stock) {
        this.#nombre = nombre;
        this.#precio = precio;
        this.#stock = stock;
    }

    get nombre() {
        return this.#nombre;
    }

    set nombre(nuevoNombre) {
        this.#nombre = nuevoNombre;
    }
 
    get precio() {        
        return this.#precio;        
    }

    set precio(nuevoPrecio) {
        if(nuevoPrecio > 0) {
            this.#precio = nuevoPrecio;
        } else {
            console.log("El precio debe ser un valor mayor que 0");
        }
    }

    get stock() {       
        return this.#stock;       
    }

    set stock(nuevoStock) {
        if(nuevoStock >= 0) {
            this.#stock = nuevoStock;
        } else {
            console.log("El stock no puede ser negativo");
        }
    }

    comprar(cantidad) {
        if(cantidad > 0 && cantidad <= this.stock) {
            this.stock -= cantidad;
            return this.stock;
        } else {
            console.log("La cantidad no puede ser negativa, o no hay suficiente stock")
        }
    }

    cambiarPrecio(nuevoPrecio) {        
        this.precio = nuevoPrecio;
        return this.precio;
    }
}


const legia= new Producto("legia", 1.20, 40);
console.log(legia.comprar(20));
console.log(legia.cambiarPrecio(0.90))
console.log(legia)