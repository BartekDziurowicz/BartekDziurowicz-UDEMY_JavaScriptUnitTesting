import { describe, it, test, expect } from 'vitest';
import { cleanNumbers, transformToNumber } from './numbers.js'

describe('transformToNumber()', () => {
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


    describe('cleanNumbers()', () => {
        it('should return an array of number values if an array of string number values is provided', () => {
            const numberValues = ['1', '2'];

            const cleanedNumbers = cleanNumbers(numberValues);

            expect(cleanedNumbers[0]).toBeTypeOf('number');
        });

        it('should throw an error if an array with at least one empty string is provided', () => {
            const numberValues = ['', '1'];

            const cleanFn = () => cleanNumbers(numberValues);

            expect(cleanFn).toThrow();
        });
    });

});
