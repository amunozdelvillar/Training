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
app.get('/collections/:collectionName', function(req, res, next) {
    req.collection.find({} ,{limit:10, sort: [['_id',-1]]}).toArray(function(e, results){
        if (e) return next(e)
        res.send(results)
    })
})

//object creating endpoint
//free JSON REST API = server + DB accept any data structure, we use req.body
app.post('/collections/:collectionName', function(req, res, next){
    req.collection.insert(req.body, {}, function(e, results){
        if(e) return next(e)
        res.send(results)
    })
})

//single obj retrieval
app.get('/collections/:collectionName/:id', function(req, res, next){
    req.collection.findById(req.params.id, function(e, result){
        if(e) return next(e)
        res.send(result)
    })
})

//update() returns a count of affected objs
//$set = MongoDB operator to set values
//{safe:true, multi:false} = tells mongo to wait for the executioin before running callback funciton and process one one(first)item
app.put('/collections/:collectionName/:id', function(req, res, next){
    req.collection.updateById(req.params.id, {$set: req.body}, {safe:true, multi:false}, function(e, result){
        if(e) return next(e)
    res.send((result ===1)?{msg:'success'}:{msg:'error'})
    })
})

//removes by id
app.del('/collections/:collectionName/:id', function(req, res, next){
    req.collection.remove({_id: req.collection.id(req.params.id)}, function(e, result){
        if(e) return next(e)
        rest.send((result ===1)?{msg: 'success'}: {msg: 'error'})
    })
})


app.listen(3000)

