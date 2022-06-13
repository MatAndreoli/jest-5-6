const toBeDivisionOf = require('./extended/toBeDivisionOf');
const toBeNaN = require('./extended/toBeNaN');
const toBeSumOf = require('./extended/toBeSumOf');

expect.extend({
  toBeSumOf,
  toBeDivisionOf,
  toBeNaN,
});
