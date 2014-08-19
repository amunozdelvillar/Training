/**
 * Created by angel on 18/08/14.
 */
App.Router.map(function(){
    this.resource('todos',{path: '/'});
});

App.TodosRoute = Ember.Route.extend({
    model: function(){
        return this.store.find('todo');
    }
});