"use strict";

var wishlist = [{
  name: 'Czajnik',
  netto: 100
}, {
  name: 'Lodówka',
  netto: 1300
}, {
  name: 'Mikrofalówka',
  netto: 340
}, {
  name: 'Mikser',
  netto: 120
}, {
  name: 'Piekarnik',
  netto: 2100
}];

var calculateTotal = function calculateTotal(itemArr) {
  return itemArr.map(function (item) {
    return item.netto * 1.23;
  }).reduce(function (a, b) {
    return a + b;
  }, 0);
};

var priceArr = function priceArr(itemArr) {
  return itemArr.reduce(function (prev, item) {
    prev.push(item.netto);
    return prev;
  }, []);
};

var callback = function callback(x) {
  return x.name + ' ' + x.netto;
};

var newArray = function newArray(itemArr, fun) {
  var result = itemArr.reduce(function (prev, item) {
    prev.push(fun(item));
    return prev;
  }, []);
  return result;
};

var mapArray = function mapArray(itemArr, fun) {
  return itemArr.map(function (item) {
    return fun(item);
  });
};

var filterWithReduce = function filterWithReduce(itemArr, fun) {
  return itemArr.reduce(function (prev, item) {
    if (fun(item)) {
      prev.push(item);
    }

    return prev;
  }, []);
};

var findElement = function findElement(itemArr, fun) {
  var result = itemArr.reduce(function (prev, item) {
    if (fun(item)) {
      prev.push(item);
    }

    return prev;
  }, []);
  return result === [] ? undefined : result.join('');
};

console.log(calculateTotal(wishlist));
console.log(priceArr(wishlist));
console.log(newArray(wishlist, callback));
console.log(mapArray(wishlist, callback));
console.log(filterWithReduce(wishlist, function (x) {
  return x.netto < 500;
}));
console.log(findElement(['Ala', 'Kot', 'Pies'], function (y) {
  return y === 'Ala';
}));