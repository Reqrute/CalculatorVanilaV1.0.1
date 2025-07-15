import {
  add,
  subtract,
  multiply,
  divide,
  percent,
  square,
  cube,
  power,
  tenPower,
  inverse,
  sqrt,
  cbrt,
  root,
  factorial,
} from '../math/calculate.js';

describe('Math Operations', () => {
  test('add', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('subtract', () => {
    expect(subtract(5, 2)).toBe(3);
  });

  test('multiply', () => {
    expect(multiply(2, 4)).toBe(8);
  });

  test('divide', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('divide by zero', () => {
    expect(divide(5, 0)).toBeNaN();
  });

  test('percent', () => {
    expect(percent('100')).toBe('1');
  });

  test('square', () => {
    expect(square(4)).toBe(16);
  });

  test('cube', () => {
    expect(cube(3)).toBe(27);
  });

  test('power', () => {
    expect(power(2, 3)).toBe(8);
  });

  test('tenPower', () => {
    expect(tenPower(2)).toBe(100);
  });

  test('inverse', () => {
    expect(inverse(2)).toBe(0.5);
  });

  test('inverse of zero', () => {
    expect(inverse(0)).toBeNaN();
  });

  test('sqrt', () => {
    expect(sqrt(16)).toBe(4);
  });

  test('cbrt', () => {
    expect(cbrt(27)).toBe(3);
  });

  test('root', () => {
    expect(root(8, 3)).toBeCloseTo(2);
  });

  test('factorial', () => {
    expect(factorial(5)).toBe(120);
  });

  test('factorial of zero', () => {
    expect(factorial(0)).toBe(1);
  });

  test('factorial of negative number', () => {
    expect(factorial(-1)).toBeNaN();
  });

  test('factorial of non-integer', () => {
    expect(factorial(2.5)).toBeNaN();
  });
});
