console.log("----------------------")
console.log("EJERCICIO I");
console.log("----------------------")
let arrFactura = [
    {
    fNumber: "",
    clientName: "",
    fDate: "",
    items: 
        {
            pId: "",
            pxu: "",
            quan: "",
        }
    }
];

function Factura(fNumber, clientName, fDate, items) {
    this.fNumber = fNumber,
    this.clientName = clientName,
    this.fDate = fDate,
    this.items = items
}

//Función constructora simplificada para verificar funcionalidad
const newFactura =[];

for (let index = 1; index < 5; index++) {
    newFactura.push(new Factura(index, 'Mario', '10/02/2023', {pId: index , pxu: 55, quan: 5}))
}
console.log("----------------------")
console.log(newFactura);
console.log("----------------------")


console.log("----------------------")
console.log("EJERCICIO II");
console.log("----------------------")

let contador = 0;

const createContador = () => {
    return function () {
        return contador += 1;
    }
}

const contar = createContador()
console.log("Contador actual: " , contar())
console.log("Contador actual: " , contar())
console.log("Contador actual: " , contar())

console.log("----------------------")
console.log("EJERCICIO III");
console.log("----------------------")

let secretNumber =  Math.floor(Math.random() *10);
console.log("El número secreto es: ", secretNumber)

const createGame = () => {
    return function (guessNumber) {
        return guessNumber === secretNumber ? `Lo adivinaste, felicitaciones!` : guessNumber < secretNumber ? `${guessNumber} =>Muy bajo!` :`${guessNumber} => Muy alto!`;
    }
}
const guess = createGame()
let attempt = ""

while(attempt !== "Lo adivinaste, felicitaciones!"){
    attempt = guess(Math.floor(Math.random() *10));
    console.log(attempt)
};

