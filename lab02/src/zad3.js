"use strict";

import lp3 from './toplist.js';
import _ from 'lodash';

const queenSongs = _.filter(lp3, { 'author': 'Queen' });
const PFSongs = _.filter(lp3, { 'author': 'Pink Floyd' });
const mostVolatilePF = _.filter(PFSongs, (o) => { return o.change > 10; });
const sortedByVolatility = _.sortBy(lp3, 'change');
const dropN = (arr, n) => {
    return _.dropRight(arr, n);
};
const first = _.first(lp3);
const fmtString = (arr) => `${arr['author']}: ${arr['song']}`;


console.log(queenSongs);
console.log(mostVolatilePF);
console.log(dropN(sortedByVolatility, 10));
console.log(fmtString(first))