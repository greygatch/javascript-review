function argSum(args){
    var sum = 0;
    for(var i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}

console.log('argSum: ', argSum(2,3,4));

function splitSum(arg1, key){
    var numArg1 = arg1.split(key).map(function(e){ return e * 1}).reduce(function(a,b){ return a + b });
    return numArg1;
}

console.log(splitSum("3&4&5&1", "&"));

function createArrayFromAtoB(arg1, arg2){
    var length = arg2 - arg1;
    var arr = [];
    for(var i = arg1; i <= arg2; i++){
        arr.push(i);
    }
    return arr;
}

console.log(createArrayFromAtoB(4, 9));

function isTodayaFunction(){
    var date = new Date();
    return date.toString().split(' ')[0] === 'Sun' || date.toString().split(' ')[0] === 'Sat';
}

console.log(isTodayaFunction());



function cipher(str, arr){
    var key = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    str.split('').map(function(e){ return e.toUpperCase(); }).forEach(function(e){
        arr.push(key.indexOf(e) * 2);
    });
    return arr;
}

result = cipher('coding', new Array()).map(function(e) { return key[e/2]; }).join('');
console.log(result);
