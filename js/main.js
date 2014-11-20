var app = angular.module('movies',[]);

app.controller('MovieController', function($scope, $http){
    $scope.movies = [];

    $scope.search = function(){
        var searchTerm = $scope.searchTerm;
        var url = 'http://api.rottentomatoes.com/api/public/v1.0/movies.json?q=' + searchTerm + '&page_limit=40&page=1&apikey=tk3kx6afmfngf3zwf4z4k5qh&callback=JSON_CALLBACK';
        $http.jsonp(url).then(function(info){
            $scope.movies = info.data.movies;
        })
    };
});