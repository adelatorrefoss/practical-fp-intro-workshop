describe('Tutorial examples', function(){
    it('Identity function returns its argument untouched', function(){
        expect(42).to.be.equal(identity(42));
    });

    it('`compose` composes two functions together', function(){
        expect(add1(1)).to.be.equal(2);
        expect(mul2(3)).to.be.equal(6);
        var mul2add1 = compose(add1, mul2);
        expect(mul2add1(3)).to.be.equal(7);
    });
});
