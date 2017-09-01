const fs = require('fs');

console.log(fs.realpathSync('./'))

const _ = require('lodash')
const test = [ 1, 2, 3 ]
console.log(_.values(test));