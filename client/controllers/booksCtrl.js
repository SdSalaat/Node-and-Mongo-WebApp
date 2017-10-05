/**
 * Created by asamad on 10/5/17.
 */

app.controller('booksCtrl', function ($http, $location, $routeParams) {

    var vm = this;

    vm.getBooks = getBooks;
    vm.getBookSingle = getBookSingle;
    vm.addBook = addBook;
    vm.updateBook = updateBook;
    vm.removeBook = removeBook;
    vm.option = [
        {type: "suspense"},
        {type: "biography"},
        {type: "romance"},
        {type: "action"},
        {type: "adventure"}
    ];
    function getBooks() {
        $http.get('/api/books/').then(function (res) {
            vm.books = res.data;
        });
    }

    function getBookSingle() {
        var id = $routeParams.id;
        $http.get('/api/books/' + id).then(function (res) {
            vm.book  = res.data;
            console.log(vm.book);
        });

    }

    function addBook() {
        $http.post('/api/books/', vm.data).then(function () {
            window.location.href = '#/books'
        });
    }

    function updateBook() {
        var id= $routeParams.id;
        $http.put('/api/books/'+ id, vm.book).then(function () {
            window.location.href = '#/books'
        });
    }

    function removeBook(id) {
        $http.delete('/api/books/'+ id).then(function () {
            window.location.href = '#/books'
        });
    }
});