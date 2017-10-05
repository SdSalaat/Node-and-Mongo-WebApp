/**
 * Created by asamad on 10/3/17.
 */

var mongoose = require('mongoose');

// Book Schema...

var bookSchema = mongoose.Schema({
    title: {type: String, required: true},
    genre: {type: String, required: true},
    description: {type: String},
    author: {type: String, required: true},
    publisher: {type: String},
    pages: {type: String},
    image_url: {type: String},
    buy_url: {type: String},
    create_date: {type: Date, default: Date.now}
});

var Book = module.exports = mongoose.model('Book', bookSchema);


// Get Book...

module.exports.getBooks = function (next) {
    Book.find(next);
};

// Get One Book...

module.exports.getBookById = function (id, next) {
    Book.findById(id, next);
};

// Add Book

module.exports.addBook = function (book, next) {
    Book.create(book, next);
};

// Update Book

module.exports.updateBook = function (id, book, options, next) {
    var query = {_id : id};
    var update = {
        title: book.title,
        genre: book.genre,
        description: book.description,
        author: book.author,
        publisher: book.publisher,
        pages: book.pages,
        image_url: book.image_url,
        buy_url: book.buy_url


    };
    Book.findOneAndUpdate(query, update, options, next);
};

// Delete Book

module.exports.deleteBook = function (id, next) {
    var query = {_id : id};
    Book.remove(query, next);
};