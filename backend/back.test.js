const assert = require('assert');
describe('Simple Math Test', () => {
 it('operacion de suma y multiplicacion', () => {
        assert.equal(5*5 + 5*5, 50);
    });
    it('operacion de division', () => {
        assert.equal(5/5 - 5/5, 0);
    });
});