window.App = Ember.Application.create({
    rootElement:"main",
    LOG_TRANSITIONIS: true  //between url + routes will output to console
});

//Register other libraries into Ember + Handlebars
Ember.Handlebars.registerBoundHelper('fromDate', function(theDate){
    var today = moment();
    var target = moment(theDate);
    return target.from(today);
});

App.ApplicationAdapter = DS.LSAdapter.extend({
    namespace: 'todos-emberjs'
});
//App.ApplicationAdapter = DS.FixtureAdapter.extend();