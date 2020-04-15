const unequal = (a,b,c) => {
    return a != b && b != c && a != c ? true : false
}

console.log(unequal(1,1,3))