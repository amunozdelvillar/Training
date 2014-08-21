App = Ember.Application.create();

App.Router.map(function() {
    this.resource('about');
});

App.IndexRoute = Ember.Route.extend({
    model: function(){
        return App.RedditLink.findAll('leagueoflegends');
    }
});

App.IndexController = Ember.ObjectController.extend({
    subreddit_header: 'leagueoflegends',
    loadList: function(){
        //grab value from input field
        var value = this.get('subreddit');
        if(value){
            this.set('subreddit_header', value);
            this.set('model', App.RedditLink.findAll(value));

            //clear out the input field
            this.set('subreddit_header','');
        }
    }
});

//model obj
App.RedditLink = Ember.Object.extend({
    thumbnailUrl: function(){
        var thumbnail =  this.get('thumbnail');
        return (thumbnail === 'default') ? null:thumbnail;
    }.property('thumbnail')
});

App.RedditLink.reopenClass({
    findAll: function(subreddit){
        console.log('findall');
        var links = [],
            url = 'http://www.reddit.com/r/'.concat(subreddit).concat('/.json?jsonp=?');
        $.getJSON(url).then(function(response){
            response.data.children.forEach(function (child){
                links.pushObject(App.RedditLink.create(child.data));
            });
        });
        return links;
    }
});