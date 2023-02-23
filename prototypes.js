console.log("EJERCICIO 1");

function persona (nombre, peso, altura) {
    this.nombre = nombre,
    this.peso = peso,
    this.altura = altura
}

persona.prototype = {

    saludar (nombre) {
        return `Hola ${nombre}, mi nombre es ${this.nombre}`
    },

    bmi (){
        return `El bmi de ${this.nombre} es: ${(this.peso / (this.altura*this.altura)).toFixed(2)}`;
    }
}

const pedro = new persona("Pedro", 72, 1.5);
console.log(pedro.saludar("Maria")); // "Hola Maria, me llamo Pedro"
console.log(pedro.bmi()); // 32
//////////////////////////////////////////////////////
console.log("EJERCICIO 2");

function Auto () {
    this.velocidad = 0;
}

Auto.prototype = {
    acelerar(speed) {
        return this.velocidad += speed;
    },

    frenar(speed) {
        return (this.velocidad -= speed ) > 0 ? this.velocidad : this.velocidad = 0;
    }
}

const a1 = new Auto();

console.log("la velocidad actual es " , a1.velocidad); // 0
a1.acelerar(1);
a1.acelerar(2);
console.log("la velocidad actual es " , a1.velocidad); // 3
a1.frenar(2);
console.log("la velocidad actual es " , a1.velocidad); // 1
a1.frenar(3);
console.log("la velocidad actual es " , a1.velocidad); // la velocidad quedaría en -1, así que se deja en 0


console.log("EJERCICIO 3"); 
String.prototype.palindrome = function () {
    return this.valueOf().split(' ').join('').toLocaleLowerCase() === this.valueOf().split(' ').join('').split('').reverse().join('').toLocaleLowerCase() ;
}

console.log("anita lava la tina".palindrome()); // true
console.log("prueba".palindrome()); // false
console.log("radar".palindrome());
console.log("AniLIna".palindrome());
console.log("Lana Sube, lana baja".palindrome());

// No es la forma más agradable visualmente ni la mejor, solo era una prueba de abstracción por mi cuenta (añadida la habilidad para ignorar caps lock)