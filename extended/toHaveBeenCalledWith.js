const toHaveBeenCalledWith = (received, ...expected) => {
  const options = {
    comment: 'Object.is equality',
    isNot: this.isNot,
    promise: this.promise,
  };
  let pass;
  let message;
  let calls = received.mock.calls[0];

  if (received.mock) {
    if (received.mock.calls[0].length == expected.length) {
      for (let i = 0; i < calls.length; i++) {
        if (calls[i] !== expected[i]) {
          pass = false;

          message = pass
            ? () => ``
            : () =>
                `\nExpected: ${expected}\n` +
                `Received: ${received.mock.calls[0]}`;
          console.log('🚀 ==> toHaveBeenCalledWith ==> message', message());
          return {
            actual: received,
            pass,
            message,
          };
        }
      }
      pass = true;

      message = pass
        ? () => ``
        : () =>
            `\nExpected: ${expected}\n` + `Received: ${received.mock.calls[0]}`;
      return {
        actual: received,
        pass,
        message,
      };
    }
    pass = false;

    message = pass
      ? () => ``
      : () =>
          `\nExpected: ${expected}\n` + `Received: ${received.mock.calls[0]}`;
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
module.exports = toHaveBeenCalledWith;
