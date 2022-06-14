const toBeDivisionOf = require('./extended/toBeDivisionOf');
const toBeNaN = require('./extended/toBeNaN');
const toBeSumOf = require('./extended/toBeSumOf');
const toHaveBeenCalledWith = require('./extended/toHaveBeenCalledWith')
const toHaveReturned = require('./extended/toHaveReturned');

expect.extend({
  toBeSumOf,
  toBeDivisionOf,
  toBeNaN,
  toHaveBeenCalledWith,
  toHaveReturned
});
