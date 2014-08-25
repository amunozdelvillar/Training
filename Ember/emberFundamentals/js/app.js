window.App = Ember.Application.create({
    rootElement:"main",
    LOG_TRANSITIONIS: true  //between url + routes will output to console
});

App.ApplicationAdapter = DS.LSAdapter.extend({
    namespace: 'todos-emberjs'
});
//App.ApplicationAdapter = DS.FixtureAdapter.extend();