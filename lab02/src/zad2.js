"use strict";

const wishlist = [
    {
        name: 'Czajnik',
        netto: 100
    },
    {
        name: 'Lodówka',
        netto: 1300
    },
    {
        name: 'Mikrofalówka',
        netto: 340
    },
    {
        name: 'Mikser',
        netto: 120
    },
    {
        name: 'Piekarnik',
        netto: 2100
    }
];

const calculateTotal = (itemArr) => {
    return itemArr
        .map(item => item.netto * 1.23)
        .reduce((a, b) => a + b, 0);
};

const priceArr = (itemArr) => {
    return itemArr.reduce((prev, item) => {
        prev.push(item.netto);
        return prev;
    }, []);
}

const callback = x => x.name + ' ' + x.netto;

const newArray = (itemArr, fun) => {
    const result = itemArr.reduce((prev, item) => {
        prev.push(fun(item));
        return prev;
    }, []);
    return result;
};

const mapArray = (itemArr, fun) => {
    return itemArr.map(item => {
        return fun(item);
    });
};

const filterWithReduce = (itemArr, fun) => {
    return itemArr.reduce((prev, item) => {
        if(fun(item)) {
            prev.push(item);
        }

        return prev;
    }, []);
};

const findElement = (itemArr, fun) => {
    const result = itemArr.reduce((prev, item) => {
        if(fun(item)) {
            prev.push(item);
        }
        return prev;
    }, []);

    return result === [] ? undefined : result.join('');
}

console.log(calculateTotal(wishlist));
console.log(priceArr(wishlist));
console.log(newArray(wishlist, callback));
console.log(mapArray(wishlist, callback));
console.log(filterWithReduce(wishlist, x => x.netto < 500));
console.log(findElement(['Ala', 'Kot', 'Pies'], y => y === 'Ala'));
