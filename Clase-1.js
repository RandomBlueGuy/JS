console.log(myFunction({a:1,b:2,c:3},'b'));
console.log(myFunction({x:'a',y:'b',z:'c'},'a'));
console.log(myFunction({x:'a',y:'b',z:undefined},'z'));

function myFunction(a, b) {
  const res = Object.entries(a).find(i => i[0] == b && i[1] != undefined);
  if(res != undefined) {return true} else {return false}
}