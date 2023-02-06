///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

/*
| Test Case                      | Expected   |
|--------------------------------|------------|
| myFunction({a:1,b:2,c:3})      | 6          |
| myFunction({j:9,i:2,x:3,z:4})  | 18         |
| myFunction({w:15,x:22,y:13})   | 50         |
*/
console.log("/*----------------------------------------------------------*/");
console.log("EJERCICIO 1");
console.log("/*----------------------------------------------------------*/");
console.log(myFunction({a:1,b:2,c:3}));      
console.log(myFunction({j:9,i:2,x:3,z:4}));                                            
console.log(myFunction({w:15,x:22,y:13}));                           
                                        
function myFunction(obj) {
    return Object.values(obj).reduce((a, b) =>  a + b);
}

console.log("/*----------------------------------------------------------*/");
console.log("EJERCICIO 2");
console.log("/*----------------------------------------------------------*/");
console.log(fibonacci(0));   //1
console.log(fibonacci(1));   //1
console.log(fibonacci(4));   //5
console.log(fibonacci(5));   //8
console.log(fibonacci(9));   //55 - ejercicio extra de prueba

function fibonacci(n) {
    /* METODO ITERATIVO SIMPLE
    let res = [1 , 1];
    for (let i = 2; i <= n; i++) {
        res.push(res[i-2] + res[i-1]);
    }
    return res[res.length - 1];*/

   // return n <= 1 ? 1 : (fibonacci(n-1) + fibonacci(n-2)); // Aún no comprendo muy bien la iteratividad, pero entiendo que esta función se ejecuta de forma iterativa como un for

   //return n <= 1 ? 1 : recursion (n, [1,1]);// ESTE MODELO LO ENTIENDO MÁS PUESTO QUE HAY UN ARRAY QUE GUARDA LA SECUENCIA FIBONACCI CON CADA ITERACIÓN
}

function recursion (n, res){
    if (n >= res.length) { 
        res.push(res[res.length-2] + res[res.length-1]);
        return recursion(n , res);
    } else {
        return res[res.length - 1];
    }
}
