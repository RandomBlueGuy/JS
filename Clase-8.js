///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

console.log("/*----------------------------------------------------------*/");
console.log("EJERCICIO 1");
console.log("/*----------------------------------------------------------*/");
console.log(getVoteCount({upvotes:13, downvotes:0}));//RESULTADO ESPERADO:      13
console.log(getVoteCount({upvotes:2, downvotes:33}));//RESULTADO ESPERADO:      -31
console.log(getVoteCount({upvotes:132, downvotes:132}));//RESULTADO ESPERADO:   0
console.log(getVoteCount({upvotes1:132, downvotes:132}))          

function getVoteCount(obj) {
    return typeof(obj.upvotes) === 'number' && typeof(obj.downvotes) === 'number' ? obj.upvotes - obj.downvotes : "una de las propiedades del objeto corresponde a .upvotes o .downvotes";
    //return obj.upvotes -git obj.downvotes;
}



