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

    it('`flip` flips the arguments of a function', function (){
        var argsAsArr = (...args) => args;

        expect(argsAsArr(1, 2, 3)).to.be.eql([1, 2, 3]);

        var reverseArgsAsArr = flip(argsAsArr);
        expect(reverseArgsAsArr(1, 2, 3)).to.be.eql([3, 2, 1]);
    });

    it('`complement` complements a predicate', function (){
        var isEven = (x) => x % 2 === 0;

        expect(isEven(2)).to.be.true;
        expect(isEven(3)).to.be.false;

        var isOdd = complement(isEven);
        expect(isOdd(2)).to.be.false;
        expect(isOdd(3)).to.be.true;
    });
});
