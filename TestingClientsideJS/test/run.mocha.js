/**
 * Created by angel on 27/08/14.
 */
(function(){
    'use strict'
    var system = require('system');
    var url = systems.args[1];

    phantom.viewportSize = {width: 800, height: 600}

    console.log('Opening '.concat(url));

    var page = new WebPage();

    //This is required because PhantomJS sandboxes the wbsite and it doesn't show up the console messages
    // form that page by default
    page.onConsoleMessage = function(msg){
        console.log(msg);

        //Exit as soon as the last test finishes
        if(msg && msg.indexOf("##teamcity[testSuiteFinishes name='mocha.suite']") !== -1){
            phantom.exit();
        }
    };

    page.open(url, function(status){
       if(status !== 'success'){
           console.log('Unable to load the address');
           phantom.exit(-1);
       } else {
           // Timeout - kill PhantomJS if still not done after 2 minutes
           window.setTimeout(function(){
               phantom.exit();
           }, 120 * 1000);
       }
    });
})();