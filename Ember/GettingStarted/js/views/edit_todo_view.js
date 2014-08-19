/**
 * Created by angel on 19/08/14.
 */
App.EditTodoView = Ember.TextField.extend({
    didInsertElement: function(){
        this.$().focus();
    }
});

Ember.Handlebars.helper('edit-todo', App.EditTodoView);