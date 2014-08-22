App.Router.map(function(){
//    2 ways
//    this.resource('thing');
//e.g this.resource('user');
//    this.route('action');
//e.g this.route('addUser');
    this.resource('user',{path: '/users/:login'}, function(){
        //Nested route
        this.resource('repositories',{path: 'repositories'})
    });
});


App.IndexRoute = Ember.Route.extend({
    model: function(){
        return devs;
    }
});

App.UserIndexRoute = Ember.Route.extend({
    model: function(){
        return this.modelFor('user');
    }
});

App.RepositoriesRoute = Ember.Route.extend({
    model: function(){
        var user = this.modelFor('user');
        return Ember.$.getJSON(user.repos_url);
    }
});

var devs = [
    {
        login: 'rilopez',
        name: 'Sensei'
    },
    {
        login: 'amunozdelvillar',
        name: 'Angel Munoz'
    },
    {
        login: 'wycats',
        name: 'Yehuda Katz'
    },
    {
        login: 'robconery',
        name: 'Rob Conery'
    },
    {
        login: 'tomdale',
        name: 'Tom Dale'
    },
    {
        login: 'ariellyrycs',
        name: 'Ariel Robles'
    },
    {
        login: 'jonathancastillo',
        name: 'Jonathan Castillo'
    },
    {
        login: 'jcastro3',
        name: 'Tony2'
    }

];

App.UserRoute = Ember.Route.extend({
    model: function(params){
        var url ="https://api.github.com/users/".concat(params.login);
        return Ember.$.getJSON(url);
    }
});