/**
 * Created by angel on 27/08/14.
 */
var expect = chai.expect;
describe('Calculator', function(){
    it('should be able to compare 3 and 3', function(){
        expect(3).to.equal(3);
        expect(3).to.be.a('number');
    });

    it('should be able to remove an element', function(){
        expect([3].length).to.equal([3,3].slice(1).length);
        expect([3]).to.be.a('array');
    })



});