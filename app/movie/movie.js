angular.module('movies.movie', [])

.controller('movieController', function($scope) {
  console.log('Initialized Movie Controller');

  $scope.toggleHeart = function($event) {
    $event.stopPropagation();
    console.log('heart');
  }
});
