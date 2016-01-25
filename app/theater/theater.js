angular.module('movies.theater', [])

.controller('theaterController', function($scope) {
  console.log('Initialized Theater Controller');

  $scope.toggleHeart = function($event) {
    $event.stopPropagation();
    console.log('heart');
  }
});
