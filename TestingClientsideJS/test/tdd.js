/**
 * Created by angel on 27/08/14.
 */
var expect = chai.expect;
suite('my first suite', function(){

    setup(function(){
       console.log('setup');
    });

    teardown(function(){
       console.log('teardown');
    });

//    beforeEach(function(){
//        console.log('before');
//    });
//
//    afterEach(function(){
//        console.log('after');
//    });


   test('test 1', function(){
       expect(1).to.equal(1);
       console.log('test');
   });

    suite('inner suite');

    test('test 2', function(){
        expect(2).to.equal(2);
        console.log('test 2');
    });
});