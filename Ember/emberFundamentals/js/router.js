App.Router.map(function(){
//    2 ways
//    this.resource('thing');
//e.g this.resource('user');
//    this.route('action');
//e.g this.route('addUser');
    this.resource('user', {path: '/users/:login'}, function(){
        //Nested route
        this.resource('repositories', {path: 'repositories'});
        this.resource('repository', {path: 'repository/:reponame'}, function(){
            this.resource('issues');
            this.resource('forks');
            this.resource('commits');
            this.route('newissue');
        });
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

App.UserRoute = Ember.Route.extend({
    model: function(params){
        var url ="https://api.github.com/users/".concat(params.login);
        return Ember.$.getJSON(url);
    }
});

App.RepositoriesRoute = Ember.Route.extend({
    model: function(){
        var user = this.modelFor('user');
        return Ember.$.getJSON(user.repos_url);
    }
});

App.RepositoryRoute = Ember.Route.extend({
    model: function(params){
        var user = this.modelFor('user');
        //build the URL for the repo call manually
        var url ="https://api.github.com/repos/".concat(user.login).concat('/').concat(params.reponame);
        return Ember.$.getJSON(url);
    }
});

App.IssuesRoute = Ember.Route.extend({
    model: function(){
        var repo = this.modelFor('repository'),
            url  = repo.issues_url.replace('{/number}','');
        return Ember.$.getJSON(url);
    }
});

App.ForksRoute = Ember.Route.extend({
    model: function(){
        var repo = this.modelFor('repository'),
            url  = repo.forks_url;
        return Ember.$.getJSON(url);
    }
});

App.CommitsRoute = Ember.Route.extend({
    model: function(){
        var repo = this.modelFor('repository'),
            url  = repo.commits_url.replace('{/sha}','');
        return Ember.$.getJSON(url);
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

