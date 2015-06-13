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

  obj.abs = n[0] === '-' ? Number(n.slice(1, n.length).join('')) : Number(n.slice(0, n.length).join(''));

  if(!n.join('').split('.')[1]){
    obj.round = Number(n.join(''))
  }else if(Number(n.join('').split('.')[1][0]) >= 5){
    obj.round = n[0] === '-' ? Number(n.join('').split('.')[0]) - 1 : Number(n.join('').split('.')[0]) + 1
  }else{
    obj.round = Number(n.join('').split('.')[0])
  }
  return obj;
}



console.log(JSON.stringify(absAndRound(-10.1957)) === JSON.stringify({abs: 10.1957, round: -10}));
console.log(JSON.stringify(absAndRound(10.6957)) === JSON.stringify({abs: 10.6957, round: 11}));
console.log(JSON.stringify(absAndRound(0)) === JSON.stringify({abs: 0, round: -0}));
console.log(JSON.stringify(absAndRound(-1)) === JSON.stringify({abs: 1, round: -1}));
console.log(JSON.stringify(absAndRound(1)) === JSON.stringify({abs: 1, round: 1}));
