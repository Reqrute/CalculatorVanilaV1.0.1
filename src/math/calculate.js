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
    return NaN;
  }
  return a / b;
}

export function percent(numStr) {
  const num = parseFloat(numStr);
  if (isNaN(num)) {
    return 'NaN';
  }
  return (num / 100).toString();
}

export function square(num) {
  return num * num;
}

export function cube(num) {
  return num * num * num;
}

export function power(base, exponent) {
  return base ** exponent;
}

export function tenPower(num) {
  return 10 ** num;
}

export function inverse(num) {
  if (num === 0) {
    return NaN;
  }
  return 1 / num;
}

export function sqrt(n) {
  const isBig = typeof n === 'bigint';

  if (!isBig) {
    if (!Number.isInteger(n)) throw new Error('Only exact integers allowed');
    n = BigInt(n);
  }

  if (n < 0n) throw new Error('Negative input');
  if (n === 0n || n === 1n) return isBig ? n : Number(n);

  let low = 0n;
  let high = n;
  let result = 0n;

  while (low <= high) {
    const mid = (low + high) >> 1n;
    const midSq = mid * mid;

    if (midSq === n) return isBig ? mid : Number(mid);
    if (midSq < n) {
      low = mid + 1n;
      result = mid;
    } else {
      high = mid - 1n;
    }
  }

  return isBig ? result : Number(result);
}

export function cbrt(n) {
  const isBig = typeof n === 'bigint';

  if (!isBig) {
    if (!Number.isInteger(n)) throw new Error('Only exact integers allowed');
    n = BigInt(n);
  }

  let neg = false;
  if (n < 0n) {
    neg = true;
    n = -n;
  }

  let low = 0n;
  let high = n;
  let result = 0n;

  while (low <= high) {
    const mid = (low + high) >> 1n;
    const midCube = mid * mid * mid;

    if (midCube === n) {
      const exact = neg ? -mid : mid;
      return isBig ? exact : Number(exact);
    }

    if (midCube < n) {
      low = mid + 1n;
      result = mid;
    } else {
      high = mid - 1n;
    }
  }

  const final = neg ? -result : result;
  return isBig ? final : Number(final);
}

export function root(base, index) {
  if (index === 0) {
    return NaN;
  }
  if (base < 0 && index % 2 === 0) {
    return NaN;
  }
  return base ** (1 / index);
}

export function factorial(n) {
  if (n < 0 || !Number.isInteger(n)) {
    return NaN;
  }
  if (n === 0) {
    return 1;
  }
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
