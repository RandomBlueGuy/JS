///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

console.log("/*----------------------------------------------------------*/");
console.log("EJERCICIO 1");
console.log("/*----------------------------------------------------------*/");
console.log(hasValidPrice({ "product": "Milk", price: 1.50 }));     //true
console.log(hasValidPrice({ "product": "Cheese", price: -1 }));     //false
console.log(hasValidPrice({ "product": "Eggs", price: 0 }));        //true
console.log(hasValidPrice({ "product": "Cereals", price: "3.0" })); //false
console.log(hasValidPrice({ "product": "Cereals", price: "3.0" })); //false

function hasValidPrice(product) {
  return (product !== undefined && typeof(product.price) === 'number' && product.price >= 0 ? true : false); //Triple condicional 
}

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

console.log("/*----------------------------------------------------------*/");
console.log("EJERCICIO 2");
console.log("/*----------------------------------------------------------*/");
console.log(flatten([[1, 2], [3, 4]]));                 //[1, 2, 3, 4]
console.log(flatten([[1], [2], [3], [4]]));             //[1, 2, 3, 4]
console.log(flatten([["a", "b"], ["c", "d"]]) );        //["a", "b", "c", "d"]
console.log(flatten([[true, false], [false, false]]));  //[true, false, false, false]
console.log(flatten([[true, false], [false, false], [[true]]])); //[true, false, false, false, true]
console.log(flatten([[true, [[[false]]]], [[[[false]]], false], [[true, [false, true, [false]]]]])); //[true, false, false, false, true, false, true, false]

function flatten(arr) {
  while (arr.map(item => Array.isArray(item)).includes(true) == true) {
    arr = arr.reduce((element1, element2) => element1.concat(element2), []);
  }
  return arr;
}

console.log("/*----------------------------------------------------------*/");
console.log("EJERCICIO 3");
console.log("/*----------------------------------------------------------*/");
console.log (clone([1, 1]));                //[1, 1, [1, 1]]
console.log (clone([1, 2, 3]));             //[1, 2, 3, [1, 2, 3]]
console.log (clone(["x", "y"]));            //["x", "y", ["x", "y"]]
console.log (clone([true, false, true]));   //[true, false, true, [true, false, true]]

function clone(arr) {
  arr.push(arr.map(a => a));   //Me gustaría poder reducirlo a una sola linea, sin embargo, cuando lo intento, retorna el length del array
  return arr;
}

