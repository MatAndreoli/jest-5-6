const toHaveReturned = (received, expected) => {
  const options = {
    comment: 'Object.is equality',
    isNot: this.isNot,
    promise: this.promise,
  };
  let pass;
  let message;

  if (received.mock) {
    pass = received.mock.results[0].value == expected;
    const receivedValue = received.mock.results[0].value;

    message = pass
      ? () => ``
      : () => `\nExpected: ${expected}\n` + `Received: ${receivedValue}`;
    return {
      actual: received,
      pass,
      message,
    };
  }
  pass = false;

  message = () => `Value expected must be an mock function`;
  return {
    actual: received,
    pass,
    message,
  };
};
module.exports = toHaveReturned;
