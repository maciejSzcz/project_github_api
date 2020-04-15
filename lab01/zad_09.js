let a = [[1,2,1,24], [8,11,9,4], [7,0,7,27]]

const printRows = (arr) => {
    arr.forEach((subArr, index) => {
        console.log(`rząd ${index + 1}`)
        subArr.forEach(item => {
            console.log(`${item}`)
        })
    })
}

printRows(a)