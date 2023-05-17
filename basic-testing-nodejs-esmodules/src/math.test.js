import { test, expect } from 'vitest';
import { add } from './math.js'

test('should summarize all number values in an array', () => {
    // arrange
    const numbers = [1, 2];

    // act
    const result = add(numbers);

    // assert
    const expectedValue = numbers.reduce(
        (prevValue, currentValue) => prevValue + currentValue, 0
    );
    expect(result).toBe(expectedValue);
});

test('should yield NaN if a least one invalid number is provided', () => {
    // arrange
    const inputs = ['invalid', 1];

    // act
    const result = add(inputs);

    // assert
    expect(result).toBeNaN();
});

test('should yield a correct sum if an array of numberic string values is provided', () => {
    // arrange
    const numbers = ['1', '2'];

    // act
    const result = add(numbers);

    // assert
    const expectedValue = numbers.reduce(
        (prevValue, currentValue) => +prevValue + +currentValue, 0
    );
    expect(result).toBe(expectedValue);
});

test('should yield 0 if an empty array is provided', () => {
    // arrange
    const numbers = [];

    // act
    const result = add(numbers);

    // assert
    expect(result).toBe(0);
});

test('should throw an error if no value is passed into the function', () => {
    // arrange
    // act
    const resultFn = () => {
        add();
    }

    // assert
    expect(resultFn).toThrow();
});

test('should throw an error if provided with multiple arguments instead of aa array', () => {
    // arrange
    const num1 = 1;
    const num2 = 2;

    // act
    const resultFn = () => {
        add(num1, num2);
    };

    // assert
    expect(resultFn).toThrow(/is not iterable/);
});