const addAndApply = (a, fun) => {
    return fun(a) + a
}

const addFive = (a) => {
    return a + 5
}

console.log(addAndApply(5, addFive))