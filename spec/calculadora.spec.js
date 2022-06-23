const matchers = require('../testSetup');
expect.extend(matchers);
const calculadora = require('../src/calculadora');
const Core = require('../src/core');

jest.spyOn(Core, 'soma');
jest.spyOn(Core, 'dividir');

describe('Given calculadora is started', () => {
  describe('When method calculadora is called', () => {
    describe('And op is 1', () => {
      beforeEach(() => {
        calculadora(1, 2, 1);
      });

      it('Then it should call Core.soma', () => {
        expect(Core.soma).toHaveBeenCalledWith(1, 2);
      });

      it('Then return 3', () => {
        expect(Core.soma).toHaveReturned(3);
      });
    });

    describe('And op is 2', () => {
      beforeEach(() => {
        result = calculadora(4, 2, 2);
      });

      it('Then it should call Core.dividir', () => {
        expect(Core.dividir).toHaveBeenCalledWith(4, 2);
      });

      it('Then return 2', () => {
        expect(Core.dividir).toHaveReturned(2);
      });
    });

    describe('And op is invalid', () => {
      it('Then throw an Error', () => {
        expect(() => calculadora(2, 3, 4)).toThrowError(Error);
      });
    });

    describe('And op is 0', () => {
      it('Then throw an Error', () => {
        expect(() => calculadora(2, 3, 0)).toThrow(Error('OP INVALID'));
      });
    });

    describe('And number1, number2 and op are not given', () => {
      beforeEach(() => {
        result = calculadora();
      });

      it('Then return 0', () => {
        expect(result).toBe(0);
      });
    });
  });
});
