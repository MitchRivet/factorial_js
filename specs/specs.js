describe('factorial', function() {
    it("is true if 0 returns 1", function() {
        expect(factorial(0)).to.equal(1);
    });

    it("is true if 5 returns 120", function(){
        expect(factorial(5)).to.equal(120);
    });
});
