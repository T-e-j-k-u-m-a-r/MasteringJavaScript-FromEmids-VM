const expect = require('chai').expect
describe('AAA Pattern Best Practise Implementation', () => {

    it('TC02-1', () => {
        expect(10).to.be.eq(10)

    });

    it('TC02-2', () => {
        expect(10).to.be.eq(11)
    });

    it('TC02-3', () => {
        expect(10).to.be.eq(1)
    });

});