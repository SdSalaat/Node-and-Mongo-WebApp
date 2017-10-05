/**
 * Created by asamad on 10/3/17.
 */

var mongoose = require('mongoose');

// Genre Schema...

var genreSchema = mongoose.Schema({
    name: {type: String, required: true},
    create_date: {type: Date, default: Date.now}
});

var Genre = module.exports = mongoose.model('Genre', genreSchema);


// Get Genres...

module.exports.getGenres = function (next, limit) {
    Genre.find(next);
};


// Add Genre

module.exports.addGenre = function (genre, next) {
    Genre.create(genre, next);
};

// Update Genre

module.exports.updateGenre = function (id, genre, options, next) {
    var query = {_id : id};
    var update = {
        name: genre.name
    };
    Genre.findOneAndUpdate(query, update, options, next);
};


// Delete Genre

module.exports.deleteGenre = function (id, next) {
    var query = {_id : id};
    Genre.remove(query, next);
};