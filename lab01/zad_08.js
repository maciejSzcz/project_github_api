const mostFreq = (arr) => {
    return arr
        .sort((a, b) =>
            arr.filter(v => v === a).length - arr.filter(v => v === b).length
        )
        .pop();
}

console.log(mostFreq([1,1, 1, 1,2,3,4,5,6,6,6,8]))