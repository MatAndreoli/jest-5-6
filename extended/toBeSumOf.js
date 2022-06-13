const toBeSumOf = (received, n1, n2) => {
  const options = {
    comment: 'Object.is equality',
    isNot: this.isNot,
    promise: this.promise,
  };

  const pass = received == n1 + n2;

  const message = pass
    ? () => ``
    : () =>
        this.utils.matcherHint('toBeSumOf', undefined, undefined, options) +
        '\n\n' +
        `Expected: ${this.utils.printExpected(n1 + n2)}\n` +
        `Received: ${this.utils.printReceived(received)}`;
  return {
    actual: received,
    pass,
    message,
  };
};
module.exports = toBeSumOf;
