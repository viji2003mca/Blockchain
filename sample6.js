const _ = require("underscore");
const list = [[5, 1, 7],[3, 2, 1]];
_.invoke(list, 'sort');

console.log(list);
