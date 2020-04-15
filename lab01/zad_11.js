const filterEmptyVals = (arr) => {
    return arr.filter(Boolean)
}

console.log(filterEmptyVals([1,2,3,undefined, false, NaN, null, 0, "", 2]))