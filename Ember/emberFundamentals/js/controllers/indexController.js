App.IndexController = Ember.ArrayController.extend({

    renderedOn: function(){
        return new Date();
    }.property(),
    actions: {
        clickMe: function(){
            console.log('ok');
        }
    }
});

//App.UserController = Ember.ArrayController.extend({
//    followers: function(){
//
//    }.property()
//});

