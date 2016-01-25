// angular.module('movies', [
//   'ui.router',
//   'movies.main',
//   'movies.theater'
// ])

// .config(function($stateProvider, $urlRouteProvider) {
//   $urlRouterProvider.otherwise('/theater');

//   $stateProvider
//     .state('theater', {
//       url: '/theater',
//       templateUrl: 'app/theater/theater.html',
//       controller: 'theaterController',
//       data: {
//         requireLogin: false
//       }
//     })
// })

angular.module('movies', [
  'movies.theater',
  'movies.movie',
  'ui.router'
])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('theater', {
      url: '/theater',
      templateUrl: 'app/theater/theater.html',
      controller: 'theaterController',
      data: {
        requireLogin: false
      }
    })
    .state('movie', {
      url: '/movie',
      templateUrl: 'app/movie/movie.html',
      controller: 'movieController',
      data: {
        requireLogin: false
      }
    })
  $urlRouterProvider.otherwise('/theater');
})

.run(function () {
  console.log('Running app');
});
