"use strict";

import lp3 from './toplist.js';
import _ from 'lodash';

const queenSongs = _.filter(lp3, { 'author': 'Queen' });
const PFSongs = _.filter(lp3, { 'author': 'Pink Floyd' })
const mostVolatilePF = _.filter(PFSongs, (o) => { return o.change > 10; });

console.log(queenSongs)
console.log(mostVolatilePF)
