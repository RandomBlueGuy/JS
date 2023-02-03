///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

console.log("/*----------------------------------------------------------*/");
console.log("EJERCICIO 1");
console.log("/*----------------------------------------------------------*/");

console.log(myFunction({a:1}));                                                 //undefined
console.log(myFunction({a:{b:{c:3}}}));                                         //{c:3}
console.log(myFunction({b:{a:1}}));                                             //undefined 
console.log(myFunction({a:{b:2}}));                                             //2
console.log(myFunction({w:{q:{t:{s:{f:{c:{z:{s:{a:{b:"Pls staph"}}}}}}}}}}));   //{b:"Pls staph"}
console.log(myFunction({w:{q:{t:{s:{f:{c:{z:{s:{a:{s:5}}}}}}}}}}));             //undefined

function myFunction(obj) {
  return obj.hasOwnProperty("a") === true ? obj?.a?.b : typeof obj === 'object' ? myFunction(Object.values(obj)[0]) : undefined;
}

console.log("");
console.log("/*----------------------------------------------------------*/");
console.log("EJERCICIO 2");
console.log("/*----------------------------------------------------------*/");

console.log(incrementItems([0, 1, 2, 3]));      //[1, 2, 3, 4]
console.log(incrementItems([2, 4, 6, 8]));      //[3, 5, 7, 9]
console.log(incrementItems([-1, -2, -3, -4]));  //[0, -1, -2, -3]

function incrementItems(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] += 1;
  }
  return arr;
}

console.log("");
console.log("/*----------------------------------------------------------*/");
console.log("EJERCICIO 3");
console.log("/*----------------------------------------------------------*/");

console.log(checkEquals([1, 2], [1, 3]));         //false
console.log(checkEquals([1, 2], [1, 2]));         //true
console.log(checkEquals([4, 5, 6], [4, 5, 6]));   //true
console.log(checkEquals([4, 7, 6], [4, 5, 6]));   //false
console.log(checkEquals([4, 7, 6], [4, 6, 7]));   //false

function checkEquals(arr1, arr2) {
   for (let i = 0 ; i < arr1.length ; i++){
      if (arr1[i] != arr2[i]) {
        return false;
      }  
   }
   return true;
  }

console.log("/*----------------------------------------------------------*/");
console.log("                         THE END!");
console.log("/*----------------------------------------------------------*/");