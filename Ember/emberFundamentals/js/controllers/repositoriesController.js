/**
 * Created by angel on 24/08/14.
 */
App.RepositoriesController = Ember.ArrayController.extend({
    needs : ['user'], //this controller needs data from user ctrl
    user: Ember.computed.alias('controllers.user')
    //
});

App.RepositoryController = Ember.ObjectController.extend({
    needs  : ['user'],
    user: Ember.computed.alias('controllers.user')
});