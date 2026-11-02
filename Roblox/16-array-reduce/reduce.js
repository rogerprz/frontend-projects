/* Original: /Users/roger/Sites/coding-algorithms/JsPrototype/reduce.js | https://github.com/rogerprz/coding-algorithms/blob/main/JsPrototype/reduce.js */
/* eslint-disable no-extend-native */
Array.prototype.myReduce = function (callbackFn, initialValue) {
  // Check if array is empty and no initialValue is provided
  if (this.length === 0 && arguments.length < 2) {
    throw new TypeError('Reduce of empty array with no initial value');
  }

  let index = 0;
  let accumulator;

  // If initialValue is provided, use it
  // Otherwise, find the first non-empty element
  if (arguments.length > 1) {
    accumulator = initialValue;
  } else {
    // Find first non-empty element
    while (index < this.length && !(index in this)) {
      index++;
    }

    // If all elements are empty and no initialValue, throw error
    if (index >= this.length) {
      throw new TypeError('Reduce of empty array with no initial value');
    }

    accumulator = this[index++];
  }

  // Iterate through the array
  for (; index < this.length; index++) {
    // Only call callback if this index exists (not a sparse hole)
    if (index in this) {
      accumulator = callbackFn(accumulator, this[index], index, this);
    }
  }

  return accumulator;
};
const sumOfSquares = (prev, curr, index, array) => prev + curr * array[index];
[-1, -3, 4, undefined, undefined].myReduce(sumOfSquares, 0);
/**
const add = (prev: any, curr: any) => prev + curr;
const multiplyByIndex = (prev: number, curr: number, index: number) =>
  prev + curr * index;
const subtract = (prev: number, curr: number) => prev - curr;
const sumOfSquares = (prev: any, curr: any, index: number, array: Array<any>) =>
  prev + curr * array[index];
const combineObj = (prev: Object, curr: Object) => ({ ...prev, ...curr });
const combineArr = (prev: Array<any>, curr: any) => [...prev, curr];

describe('Array.prototype.myReduce', () => {
  test('empty array equals initial value', () => {
    expect([].myReduce(add, 0)).toEqual(0);
    expect([].myReduce(subtract, 0)).toEqual(0);
  });

  test('one value', () => {
    expect([1].myReduce(add, 0)).toEqual(1);
    expect(['a'].myReduce(add, '')).toEqual('a');
  });

  test('two values', () => {
    expect([-4, 10].myReduce(add, 0)).toEqual(6);
    expect(['b', 'c', 'd'].myReduce(add, '')).toEqual('bcd');
  });

  test('multiple values', () => {
    expect([1, 2, 3].myReduce(add, 0)).toEqual(6);
    expect(['a', 'b', 'c', 'd'].myReduce(add, '')).toEqual('abcd');
  });

  test('object values', () => {
    expect([{ foo: 1 }, { bar: 2 }].myReduce(combineObj)).toEqual({
      foo: 1,
      bar: 2,
    });
    expect([{ foo: 1 }, { bar: 2 }].myReduce(combineObj, {})).toEqual({
      foo: 1,
      bar: 2,
    });
  });

  test('array values', () => {
    expect([1, 2, 3].myReduce(combineArr, [])).toEqual([1, 2, 3]);
  });

  test('reducer uses index argument when provided', () => {
    expect([1, 2, 3].myReduce(multiplyByIndex, 0)).toEqual(8);
    expect([-1, -3, 4].myReduce(multiplyByIndex, 0)).toEqual(5);
  });

  test('reducer uses array argument when provided', () => {
    expect([1, 2, 3, 4].myReduce(sumOfSquares, 0)).toEqual(30);
    expect([-1, -3, 4].myReduce(sumOfSquares, 0)).toEqual(26);
  });

  test('no initial value provided and array is empty', () => {
    expect(() => {
      [].myReduce(add);
    }).toThrow();
  });

  test('no initial value provided and array is non-empty', () => {
    expect([1, 2, 3].myReduce(add)).toEqual(6);
    expect([-1, -3, 4].myReduce(sumOfSquares, 0)).toEqual(26);
  });

  test('sparse arrays', () => {
    // eslint-disable-next-line no-sparse-arrays
    expect([1, 2, , 3].myReduce(add)).toEqual(6);
    // eslint-disable-next-line no-sparse-arrays
    expect([-1, -3, 4, , ,].myReduce(sumOfSquares, 0)).toEqual(26);
  });
});
 */
