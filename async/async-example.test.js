import { expect, test } from 'vitest';
import { generateToken } from './async-example';

test('should generate a token value', (done) => {
    const testUserEmail = 'test@test.com';

    generateToken(testUserEmail, (err, token) => {
        expect(token).toBeDefined();
        done();
    })
})