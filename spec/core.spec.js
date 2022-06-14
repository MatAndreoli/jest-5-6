const matchers = require('../testSetup');
expect.extend(matchers);
const Core = require('../src/core');

let numbers = {
  n1: 2,
  n2: 2,
};
let result;
const core = new Core();
describe('Given Core is started', () => {
  describe('When method soma is called', () => {
    describe('And there are params', () => {
      beforeEach(() => {
        result = Core.soma(numbers.n1, numbers.n2);
      });

      it('Then return the sum', () => {
        expect(result).toBeSumOf(numbers.n1, numbers.n2);
      });
    });

    describe('And there are undefined params', () => {
      beforeEach(() => {
        result = Core.soma();
      });

      it('Then return the 0', () => {
        expect(result).toBeSumOf(0, 0);
      });
    });
  });

  describe('When method dividir is called', () => {
    describe('And there are params', () => {
      beforeEach(() => {
        result = Core.dividir(numbers.n1, numbers.n2);
      });

      it('Then return the sum', () => {
        expect(result).toBeDivisionOf(numbers.n1, numbers.n2);
      });
    });

    describe('And there are undefined params', () => {
      beforeEach(() => {
        result = Core.dividir();
      });

      it('Then return NaN', () => {
        expect(result).toBeNaN(0, 0);
      });
    });
  });
});
