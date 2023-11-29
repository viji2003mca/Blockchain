const _ =require("lodash");
const nums = _.range(1, 9);

const chunks = _.chunk(nums, 3);

const right = _.takeRight(nums, 2);

console.log(nums);
console.log(chunks);
console.log(right);

