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
    user: Ember.computed.alias('controllers.user'),
    forked: Ember.computed.alias('fork')
});

App.RepositoryNewissueController = Ember.Controller.extend({
    needs : ['repository'],
    repo: Ember.computed.alias('controllers.repository'),
    actions: {
        submitIssue: function(){
            var vals = this.getProperties('title','body');
            //POST issues_url
            console.log(this);
            //var url = this.get('issues_url');
            //TODO: probable not the cleaneast way to get url
            var url = this.content.issues_url.replace('{/number}','');
//            Ember.$.post(url, {title: title, body: body}, function(result){
//                //success
//                this.transitionToRoute('issues');
//                console.log('Issue Submited!');
//            });
            console.log('Submited '.concat(this.get('title')).concat(' to ').concat(url));
        }
    }
});