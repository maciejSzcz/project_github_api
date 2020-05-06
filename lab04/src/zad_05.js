const func = (x, ...args) => {

    if(typeof x === 'string') {
        return {
            [x]: args[0]
        }
    } else {
        return {
            [x[0]]: x[1]
        }
    }
 
}

const val = func("klucz", "wartość");
console.log(val);
// { klucz: 'wartość' }

const val2 = func(["klucz", "wartość"]);
console.log(val2);
// { klucz: 'wartość' }