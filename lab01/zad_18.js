const cur = () => {
    const wartosc = 8

    return (val) => val + wartosc
}

const adding = cur()
console.log(adding(7))