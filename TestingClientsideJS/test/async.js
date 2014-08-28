/**
 * Created by angel on 27/08/14.
 */

describe('Outer Describe', function(){

    it('should be async', function(done){
        setTimeout(function(){
            expect(1).to.equal(1);
            done();
        }, 10);
    });

    //mocha timeout feature
    it('should be async and demo timeout feature', function(done){

        //this.timeout(2000);// customized timeout to 2 secs, while test takes 2.5
        this.timeout(3000);//passes
        setTimeout(function(){
            expect(1).to.equal(1);
            done();
        }, 2500)
    });
});