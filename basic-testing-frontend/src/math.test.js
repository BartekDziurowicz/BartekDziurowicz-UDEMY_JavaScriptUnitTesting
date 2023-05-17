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