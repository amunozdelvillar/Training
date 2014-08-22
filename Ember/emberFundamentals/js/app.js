window.App = Ember.Application.create({
    rootElement:"main"
});

App.ApplicationAdapter = DS.LSAdapter.extend({
    namespace: 'todos-emberjs'
});
//App.ApplicationAdapter = DS.FixtureAdapter.extend();