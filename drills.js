/* 1 */

function argSum(args){
  var sum = 0;
  for(var i = 0; i < arguments.length; i++){
    sum += arguments[i];
  }
  return sum;
}

console.log('2 + 3 + 4 = ', argSum(2,3,4));


/* 2 */

function splitSum(arg, key){
  return arg.split(key).map(Number).reduce(function(a,b){ return a + b });
}

console.log('3 + 4 +', splitSum("3&4&5&1", "&"));


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
console.log(isTodayaFunction());


/* 5 */

function cipher(str, arr){
  str.split('').map(function(e){ return e.toUpperCase(); }).forEach(function(e){
    arr.push(key.indexOf(e) * 2);
  });
  return arr;
}

var key = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
result = cipher('coding', new Array()).map(function(e) { return key[e/2]; }).join('');
console.log(result);
