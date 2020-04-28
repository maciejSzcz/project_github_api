"use strict";

import lp3 from './toplist.js';
import _ from 'lodash';

// 1
const queenSongs = _.filter(lp3, { 'author': 'Queen' });
// 2
const PFSongs = _.filter(lp3, { 'author': 'Pink Floyd' });
const mostVolatilePF = _.filter(PFSongs, (o) => { return o.change > 10; });
// 3
const sortedByVolatility = _.sortBy(lp3, 'change');
const dropN = (arr, n) => {
    return _.dropRight(arr, n);
};
// 4
const first = _.first(lp3);
const fmtString = (arr) => `${arr['author']}: ${arr['song']}`;
// 5
const takeElementsWithIndexes = (arr) => {
    return arr.filter(el => !_.isNumber(el)).length === 0
        ? arr.map(el => _.filter(lp3, { 'place': el})) 
        : "złe dane"
}
// 6
const randomElementsInRange = (n, min, max) => {
    return _.times(n, () => {
        return _.filter(lp3, { 'place': _.random(min, max) })
    })
}
// 7
const nElementsWithDelayOf = (n, delay) => {
    [...Array(n)]
        .map((value, index) => index + 1)
        .forEach(n => {
            setTimeout(() => console.log(_.filter(lp3, { 'place': n })), n * delay * 1000)
        })
}
// 8
const songsNegativeChange = _.filter(lp3, (o) => o.change < 0);
// 9
const keyedBy = _.keyBy(lp3, (o) => o.song)
// 10
const groupedByBand = _.groupBy(lp3, (o) => o.author);
// 11
const bandFrequency = _.map(groupedByBand, (o) => ({author: o[0].author, ilosc: o.length}))
// 12
const maxIncrease = _.maxBy(lp3, (o) => o.change);
const maxDecrease = _.minBy(lp3, (o) => o.change);

console.log(queenSongs);
console.log(mostVolatilePF);
console.log(dropN(sortedByVolatility, 10));
console.log(fmtString(first));
console.log(takeElementsWithIndexes([1, 24, 4, 5, 6]))
console.log(randomElementsInRange(5, 20, 31))
console.log(songsNegativeChange)
console.log(keyedBy)
console.log(groupedByBand)
console.log(bandFrequency)
console.log(maxIncrease, "max")
console.log(maxDecrease, "min")
nElementsWithDelayOf(10, 5)