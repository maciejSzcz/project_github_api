"use strict";

var _toplist = _interopRequireDefault(require("./toplist.js"));

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var queenSongs = _lodash["default"].filter(_toplist["default"], {
  'author': 'Queen'
});

var PFSongs = _lodash["default"].filter(_toplist["default"], {
  'author': 'Pink Floyd'
});

var mostVolatilePF = _lodash["default"].filter(PFSongs, function (o) {
  return o.change > 10;
});

console.log(queenSongs);
console.log(mostVolatilePF);