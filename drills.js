/* 1 */

function argSum(){
  var sum = 0;
  for(var i = 0; i < arguments.length; i++){
    sum += arguments[i];
  }
  return sum;
}

console.log('2 + 3 + 4 = ', argSum(2,3,4));


/* 2 */

function splitSum(arg, del){
  return arg.split(del).map(Number).reduce(function(a, b){ return a + b });
}

console.log('3 + 4 + 5 + 1 =', splitSum("3&4&5&1", "&"));

/* 3 */

function createArrayFromAtoB(arg1, arg2){
  var start = Math.min(arg1, arg2);
  var end = Math.max(arg1, arg2);
  var arr = [];
  for(var i = start; i <= end; i++){
    arr.push(i);
  }
  return arr;
}

console.log('4 to 9 should be', createArrayFromAtoB(9, 4));

/* 4 */

function isTodayaFunction(){
  return new Date().toString().split(' ')[0] === 'Sun' || new Date().toString().split(' ')[0] === 'Sat';
}
console.log('Weekend?', isTodayaFunction());

/* 5 */

function cipher(str, arr){
  str.split('').map(function(e){ return e.toUpperCase(); }).forEach(function(e){
    arr.push(key.indexOf(e) * 2);
  });
  return arr;
}

var key = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
result = cipher('coding', new Array()).map(function(e) { return key[e/2]; }).join('');
console.log('CODING =', result);

function objCompare(obj1, obj2){
  var obj1Keys = Object.keys(obj1);
  var obj2Keys = Object.keys(obj2);
  var isSame = false;

  if(obj1Keys.length === obj2Keys.length){
    obj1Keys.forEach(function(k){
      isSame = obj1[k] !== obj2[k] ? false : true
    });
  }
  return isSame;
}

var a = {'a' : 7, 'b' : 8, 'q': 9};
var b = {'q' : 9, 'b' : 8, 'a': 7};

console.log('should be true:', objCompare(b, a));

function absAndRound(n){
  var obj = {};
  n = n.toString().split('');

  obj.abs = n[0] === '-' ? parseFloat(n.slice(1, n.length).join('')) : parseFloat(n.slice(0, n.length).join(''));

  if(Boolean(parseInt(n.join('').split('.')[1]) >= 5)){
    obj.rounded = n[0] === '-' ? parseInt(n.join('').split('.')[0]) - 1 : parseInt(n.join('').split('.')[0]) + 1
  }
  else{
    obj.rounded = parseInt(n.join('').split('.')[0])
  }

  return obj;
}



console.log(absAndRound(-9.6));
console.log(absAndRound(9.6));
console.log(absAndRound(2));
console.log(absAndRound(-2));
console.log(absAndRound(1.3));
console.log(absAndRound(-1.3));
console.log(absAndRound(0));
