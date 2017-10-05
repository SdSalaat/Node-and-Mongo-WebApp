/**
 * Created by asamad on 10/5/17.
 */

var app = angular.module('BookStoreApp', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider.when('/', {
        controller: 'booksCtrl as vm',
        templateUrl: 'views/books.html'
    })

        .when('/books', {
            controller: 'booksCtrl as vm',
            templateUrl: 'views/books.html'
        })

        .when('/books/details/:id', {
            controller: 'booksCtrl as vm',
            templateUrl: 'views/booksDetail.html'
        })

        .when('/books/add', {
            controller: 'booksCtrl as vm',
            templateUrl: 'views/addBook.html'
        })

        .when('/books/edit/:id', {
            controller: 'booksCtrl as vm',
            templateUrl: 'views/editBook.html'
        })

        .otherwise({
            redirectTo: '/'
        })
});