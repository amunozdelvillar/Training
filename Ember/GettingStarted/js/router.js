/**
 * Created by angel on 18/08/14.
 */
App.Router.map(function(){
    this.resource('todos',{path: '/'}, function(){
        // add aditional child routes
        this.route('active');
    });
});

App.TodosRoute = Ember.Route.extend({
    model: function(){
        return this.store.find('todo');
    }
});

App.TodosActiveRoute = Ember.Route.extend({
    model: function(){
        return this.store.filter('todo', function(todo){
            return !todo.get('isCompleted');
        });
    },
    renderTemplate: function(controller){
        this.render('todos/index', {controller: controller});
    }
});