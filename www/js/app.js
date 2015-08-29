// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })
  .state('app.email', {
      url: '/email',
      views: {
        'menuContent': {
          templateUrl: 'templates/email.html/{{ec_risk}}/{{ed_risk}}'
        }
      }
    })

  .state('app.legal', {
      url: '/legal',
      views: {
        'menuContent': {
          templateUrl: 'templates/legal.html'
        }
      }
    })

  .state('app.myinventories', {
      url: '/myinventories',
      views: {
        'menuContent': {
          templateUrl: 'templates/myinventories.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })
    .state('app.single1', {
      url: '/playlists/{playlistTitle}',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlist1.html',
          controller: 'InventoryCtrl'
        }
      }
    })
    .state('app.single2', {
      url: '/playlists/{playlistTitle}/{inventoryScore}/end',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlist2.html',
          controller: 'InventoryCtrl'
        }
      }
    })
  .state('app.single', {
    url: '/playlists/:playlistTitle/:go',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'InventoryCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/playlists');
});
