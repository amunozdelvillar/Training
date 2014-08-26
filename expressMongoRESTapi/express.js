/**
 * Created by angel on 25/08/14.
 */
var express = require('express'),
    mongoskin = require('mongoskin'),
    bodyParser = require('body-parser')

//server obj
var app = express()

//extract params from body requests
app.use(bodyParser())

var db = mongoskin.db('mongodb://@localhost:27017/test',{safe:true})

//do something every time there is this value in the URL pattern of the request handler
//select a particular collectionName prefixed with a colon, then save collection as a property oof the request object, which
//is available in the next request handlers

app.param('collectionName', function(req, res, next, collectionName){
    req.collection = db.collection(collectionName)
    return next()
})

//root route
app.get('/', function(req, res){
    res.send('please select a collection, e.g, /collections/messages')
})

//retrieve a list of any items(1st param is empty obj = any).
//The results will be capped to 10 and sorted by _id(2nd param).
//The find() returns a cursor, use toArray() -> JS/Node.js array
app.get('/collections/:collectionName', function(req, res, next){
    var any = {}
    req.collection.find(any, {limit:10, sort:[['_id',-1]]}).toArray(function(e, results){
        if(e){
            return next(e)
        }
    })
})