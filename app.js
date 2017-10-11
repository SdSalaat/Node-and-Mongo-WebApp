/**
 * Created by asamad on 10/3/17.
 */

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


app.use(bodyParser.json());
app.use(express.static(__dirname+'/client'));

var Genre = require('./models/genres.model');
var Book = require('./models/book.model');

// Connect to Mongoose...
mongoose.connect("mongodb://admin:admin@ds113785.mlab.com:13785/bookstore");
var db = mongoose.connection;

app.get('/', function (req, res) {
    res.send('Please Get Away From Here');
});

/* POST or GET For Genres */

app.get('/api/genres', function (req, res) {
    Genre.getGenres(function (err, genres) {
        if(err){
            throw(err);
        }
        else{
            res.json(genres);
        }
    });
});

app.post('/api/genres', function (req, res) {
    var genre = req.body;
    Genre.addGenre(genre, function (err, genre) {
        if(err){
            throw(err);
        }
        else{
            res.json(genre);
        }
    });
});

app.put('/api/genres/:_id', function (req, res) {
    var id = req.params._id;
    var genre = req.body;
    Genre.updateGenre(id, genre, {}, function (err, genre) {
        if(err){
            throw(err);
        }
        else{
            res.json(genre);
        }
    });
});

app.delete('/api/genres/:_id', function (req, res) {
    var id = req.params._id;
    Genre.deleteGenre(id, function (err, genre) {
        if(err){
            throw(err);
        }
        else{
            res.json(genre);
        }
    });
});

/* POST or GET For Books */

app.post('/api/books', function (req, res) {
    Book.getBooks(function (err, books) {
        if(err){
            throw(err);
        }
        else{
            res.json(books);
        }
    });
});

app.get('/api/books', function (req, res) {
    var book = req.body;
    Book.addBook(book, function (err, book) {
        if(err){
            throw(err);
        }
        else{
            res.json(book);
        }
    });
});

app.get('/api/books/:_id', function (req, res) {
    Book.getBookById(req.params._id, function (err, book) {
        if(err){
            throw(err);
        }
        else{
            res.json(book);
        }
    });
});

app.put('/api/books/:_id', function (req, res) {
    var id = req.params._id;
    var book = req.body;
    Book.updateBook(id, book, {}, function (err, book) {
        if(err){
            throw(err);
        }
        else{
            res.json(book);
        }
    });
});

app.delete('/api/books/:_id', function (req, res) {
    var id = req.params._id;
    Book.deleteBook(id, function (err, book) {
        if(err){
            throw(err);
        }
        else{
            res.json(book);
        }
    });
});

/*
 app.listen(3000);
 console.log("Listening on port 3000...");*/

app.listen(process.env.PORT || 3000, function(){});