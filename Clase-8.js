///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

console.log("/*----------------------------------------------------------*/");
console.log("EJERCICIO 1");
console.log("/*----------------------------------------------------------*/");
console.log(getVoteCount({upvotes:13, downvotes:0}));//RESULTADO ESPERADO:      13
console.log(getVoteCount({upvotes:2, downvotes:33}));//RESULTADO ESPERADO:      -31
console.log(getVoteCount({upvotes:132, downvotes:132}));//RESULTADO ESPERADO:   0
console.log(getVoteCount({upvotes1:132, downvotes6:132}))//RESULTADO ESPERADO:   "Una de las propiedades del objeto corresponde a .upvotes o .downvotes"  

function getVoteCount({upvotes = 0 , downvotes = 0}) {
    //Solución comentada revisa si los datos ingresados están presentes en el objeto y son números, la solución no comentada usa parametros predefinidos y retorna 0 para cada parametro incorrectamente diligenciado
    //return typeof(obj.upvotes) === 'number' && typeof(obj.downvotes) === 'number' ? obj.upvotes - obj.downvotes : "Una de las propiedades del objeto corresponde a .upvotes o .downvotes";
    //console.log(upvotes + " UPVOTES - " + downvotes + " DOWNVOTES = ")
    return upvotes - downvotes;
}



