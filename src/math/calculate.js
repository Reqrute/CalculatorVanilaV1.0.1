export function calculate(a, b, operator) {
  a = parseFloat(a);
  b = parseFloat(b);

  if (isNaN(a) || isNaN(b)) {
    return NaN;
  }

  switch (operator) {
    case 'add':
      return add(a, b);
    case 'subtract':
      return subtract(a, b);
    case 'multiply':
      return multiply(a, b);
    case 'divide':
      return divide(a, b);
    case 'power':
      return power(a, b);
    case 'root':
      return root(a, b);
    default:
      return b;
  }
}

function abs(x) {
  return x < 0 ? -x : x;
}

export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}

export function divide(a, b) {
  if (b === 0) {
    return 'Error: Division by zero';
  }
  return a / b;
}

export function percent(numStr) {
  const num = parseFloat(numStr);
  return isNaN(num) ? 'Error: Invalid number' : (num / 100).toString();
}

export function square(num) {
  if (isNaN(num)) return NaN;
  return num * num;
}

export function cube(num) {
  if (isNaN(num)) return NaN;
  return num * num * num;
}

export function power(base, exponent) {
  if (isNaN(base) || isNaN(exponent)) {
    return NaN;
  }
  if (typeof base !== 'number' || typeof exponent !== 'number') {
    return NaN;
  }

  const result = base ** exponent;

  if (!Number.isFinite(result)) {
    return 'Error: Overflow';
  }

  return result;
}

export function tenPower(num) {
  if (isNaN(num)) return NaN;

  const result = 10 ** num;
  return Number.isFinite(result) ? result : 'Error: Overflow';
}

export function inverse(num) {
  if (num === 0) {
    return 'Error: Division by zero';
  }
  return 1 / num;
}

export function sqrt(n) {
  if (typeof n !== 'number') return 'Error: Input must be a number';
  if (n < 0) return 'Error: Negative input';
  if (n === 0 || n === 1) return n;

  let guess = n / 2;
  const epsilon = 1e-15;
  let prev;
  do {
    prev = guess;
    guess = (guess + n / guess) / 2;
  } while (abs(guess - prev) > epsilon);

  return guess;
}

export function cbrt(n) {
  if (typeof n !== 'number') return 'Error: Input must be a number';

  const neg = n < 0;
  if (neg) n = -n;

  if (n === 0 || n === 1) return neg ? -n : n;

  let guess = n / 3;
  const epsilon = 1e-15;
  let prev;
  do {
    prev = guess;
    const guessSquared = guess * guess;
    guess = guess - (guess * guessSquared - n) / (3 * guessSquared);
  } while (abs(guess - prev) > epsilon);

  return neg ? -guess : guess;
}

export function root(base, index) {
  if (index === 0) {
    return 'Error: Zero root';
  }
  if (base < 0 && index % 2 === 0) {
    return 'Error: Even root of negative number';
  }
  const result = base ** (1 / index);
  return Number.isFinite(result) ? result : 'Error: Invalid root';
}

export function factorial(n) {
  if (!Number.isInteger(n)) return 'Error: Not an integer';
  if (n < 0) return 'Error: Negative factorial';
  if (n > 170) return 'Error: Result too large';

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
