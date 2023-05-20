import { describe, test, expect } from 'vitest';
import { generateResultText } from './output.js';

describe('generatedResultText()', () => {
    test('should return string, no matter which value is passed in', () => {
        const val1 = 1;
        const val2 = 'invalid';
        const val3 = false;

        const result1 = generateResultText(val1);
        const result2 = generateResultText(val2);
        const result3 = generateResultText(val3);

        expect(result1).toBeTypeOf('string');
        expect(result2).toBeTypeOf('string');
        expect(result3).toBeTypeOf('string');
    });
});