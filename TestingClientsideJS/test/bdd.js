/**
 * Created by angel on 27/08/14.
 */
var expect = chai.expect;
describe('my first suite', function(){

    mocha.setup({
        globals: ['i'] //ignore these variables from global leak warning
    });

    beforeEach(function(){
        console.log('before');
    });

    afterEach(function(){
        console.log('after');
    });


    it(' should test 1', function(){
        expect(1).to.equal(1);
        console.log('test');
    });

    describe('inner suite',function(){
        i = 3; //mocha detects global leaks
        it(' shoudl test 2', function(){
      //it.only(); runs the one function, ignoring the rest
      //it.skip(); skips the one function ,running the rest
            expect(2).to.equal(2);
            console.log('test 2');
        });

        it('should do something else later'); // pending
    });

});

