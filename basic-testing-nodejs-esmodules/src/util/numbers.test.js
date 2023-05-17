import { test, expect } from 'vitest';
import { transformToNumber } from './numbers.js'

test('should return number fron number value', () => {
    // arrange
    const number = 1;

    // act
    const result = transformToNumber(number);

    // assert
    expect(result).toBe(1);
});

test('should return NaN from string value', () => {
    // arrange
    const input = 'invalid';
    const input2 = {};

    // act
    const result = transformToNumber(input);
    const result2 = transformToNumber(input2);

    // assert
    expect(result).toBeNaN();
    expect(result2).toBeNaN();
});

test('should return number from string number', () => {
    // arrange
    const input = '1';

    // act
    const result = transformToNumber(input);

    // assert
    expect(result).toBe(1);
    expect(result).toBeTypeOf('number');
});

test('should throw an error becouse of no arg', () => {
    // arrange

    // act
    const result = transformToNumber()

    // assert
    expect(result).toBeNaN();
});