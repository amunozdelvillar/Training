/**
 * Created by angel on 26/08/14.
 */
App.Router.map(function() {
    // put your routes here
    this.resource('about', function(){
        this.resource('team');
    });
    this.resource('contact');
    this.resource('bookmarks');
    this.resource('bookmark', { path: '/bookmarks/:name'});
});

App.IndexRoute = Ember.Route.extend({
    model: function() {
        return ['red', 'yellow', 'blue'];
    }
});

App.BookmarksRoute = Ember.Route.extend({
    model: function(){
        return marks;
    }
});

App.BookmarkRoute = Ember.Route.extend({
    model: function(){
        return [];
    }
});

var marks = [
    {
        name: 'Google',
        url: 'http://google.com'
    },
    {
        name: 'Amazon',
        url: 'http://amazon.com'
    },
    {
        name: 'Microsoft',
        url: 'http://microsoft.com'
    }
];

//
var globalCounter = 0;
var Bookmark = Ember.Object.extend({
    to_link: function(){
        return 'a href="'.concat(this.get('url'), '">' , this.get('name') , '</a>');
    },
    formatted: function(){
        return this.get('name').concat(' - ' , this.get('url'));
    },
    link: function(){
        return this.to_link();
    }.property('name', 'url'), //link computed-property will change once name or url changes
    updateCounter: function(){
        globalCounter += 1;
        console.log('Global counter has increased to ' + globalCounter);
    }.observes('name') // if name changes calls updateCounter

});

var bookmark = Bookmark.create({ name: 'Tuts+ Premium', url: 'http://tutplus.com'});
//observer specific to 1 object
bookmark.addObserver('url', function(){
    console.log('Url changed!');
});