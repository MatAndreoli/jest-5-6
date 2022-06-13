const toBeNaN= (received, n1, n2) => {
    const options = {
      comment: 'Object.is equality',
      isNot: this.isNot,
      promise: this.promise,
    };
    const division = n1 / n1;
    const receivedResult = Number.isNaN(received);
    const pass = receivedResult == Number.isNaN(division);

    const message = pass
      ? () => ``
      : () =>
          this.utils.matcherHint('toBeNaN', undefined, undefined, options) +
          '\n\n' +
          `Expected: ${this.utils.printExpected(n1 / n2)}\n` +
          `Received: ${this.utils.printReceived(received)}`;
    return {
      actual: received,
      pass,
      message,
    };
}
module.exports = toBeNaN;