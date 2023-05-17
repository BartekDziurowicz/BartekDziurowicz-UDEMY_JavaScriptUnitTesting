import { test, expect } from 'vitest';
import { validateStringNotEmpty, validateNumber } from './validation.js'

test('should not throw exception while input string length is more than zero', () => {
    // arrange
    const string1 = 'valid';
    const string2 = '1';

    // act
    const resultFn1 = () => {
        validateStringNotEmpty(string1);
    }

    const resultFn2 = () => {
        validateStringNotEmpty(string2);
    }

    // assert
    expect(resultFn1).not.toThrow();
    expect(resultFn2).not.toThrow();
});

test('should throw exception with proper message while input string length is zero', () => {
    // arrange
    const string1 = '';
    const string2 = ' ';

    // act
    const resultFn1 = () => validateStringNotEmpty(string1);
    const resultFn2 = () => validateStringNotEmpty(string2);

    // assert
    expect(resultFn1).toThrow(/Invalid input - must not be empty./);
    expect(resultFn2).toThrow(/Invalid input - must not be empty./);
});

test('should throw exception while input string length is zero', () => {
    // arrange
    const input1 = 1;
    const input2 = {};

    // act
    const resultFn1 = () => validateStringNotEmpty(input1);
    const resultFn2 = () => validateStringNotEmpty(input2);

    // assert
    expect(resultFn1).toThrow();
    expect(resultFn2).toThrow();
});

test('should not throw exception while input is number', () => {
    // arrange
    const number = 1;

    // act
    const resultFn = () => {
        validateNumber(number);
    }

    // assert
    expect(resultFn).not.toThrow();
});

test('should throw exception while input is NaN', () => {
    // arrange
    const input1 = 'invalid';
    const input2 = {};
    const input3 = '1';
    const input4 = [];
    const input5 = NaN;

    // act
    const resultFn1 = () => {
        validateNumber(input1);
    }

    const resultFn2 = () => {
        validateNumber(input2);
    }

    const resultFn3 = () => {
        validateNumber(input3);
    }

    const resultFn4 = () => {
        validateNumber(input4);
    }

    const resultFn5 = () => {
        validateNumber(input5);
    }

    const resultFn6 = () => {
        validateNumber(input5);
    }
    
    // assert
    expect(resultFn1).toThrow(/Invalid number input./);
    expect(resultFn2).toThrow(/Invalid number input./);
    expect(resultFn3).toThrow(/Invalid number input./);
    expect(resultFn4).toThrow(/Invalid number input./);
    expect(resultFn5).toThrow(/Invalid number input./);
    expect(resultFn6).toThrow(/Invalid number input./);
});
