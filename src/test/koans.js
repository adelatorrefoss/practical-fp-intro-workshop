describe('Function composition', function(){
    it('Fails', function(){
        expect(42).to.be.equal(identity(42));
    });
});
