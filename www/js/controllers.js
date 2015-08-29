angular.module('starter.controllers', [])

.controller('EmailCtrl', function($scope){
  $scope.sendFeedback= function(body, email) {
       if(window.plugins && window.plugins.emailComposer) {
           window.plugins.emailComposer.showEmailComposerWithCallback(function(result) {
               console.log("Response -> " + result);
           },
           "Mental Health Inventory Results", // Subject
           body,                      // Body
           [email],    // To
           null,                    // CC
           null,                    // BCC
           false,                   // isHTML
           null,                    // Attachments
           null);                   // Attachment Data
       }
   }
})

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Autism Spectrum Disorder', id: 1 },
    { title: 'Severity of Posttraumatic Stress Symptoms', id: 2 },
    { title: 'Level 1 Cross-Cutting Symptom Measure', id: 3 },
    { title: 'Level 2 - Substance Use', id: 4 },
    // { title: 'so', id: 5 },
    // { title: 'yeah', id: 6 }
  ];

  // $scope.callToPlaylistService = function(playlist) {
  //   playlistService.addData(playlist);
  // };

})

.controller('InventoriesCtrl', function($scope) {
  $scope.inventories = [
    { title: 'Autism Spectrum Disorder', id: 1 },
    // { title: 'some', id: 2 },
    // { title: 'other', id: 3 },
    // { title: 'inventories', id: 4 },
    // { title: 'so', id: 5 },
    // { title: 'yeah', id: 6 }
  ];

  // $scope.callToPlaylistService = function(playlist) {
  //   playlistService.addData(playlist);
  // };

})

.controller('PlaylistCtrl', function($scope, $stateParams) {
  $scope.id = $stateParams.playlistTitle;
  $scope.questions = [
    {"id" : 1, "prompt": 'sometext1', "type" : 'graduated', 'answers' : [{'text':'no', 'selected':false},{'text':'not at all', 'selected':false},{'text':'somewhat', 'selected':false},{'text':'yes', 'selected':false}]},
    {"id" : 2, "prompt": 'sometext2', "type" : 'graduated', 'answers' : [{'text':'no', 'selected':false},{'text':'not at all', 'selected':false},{'text':'somewhat', 'selected':false},{'text':'yes', 'selected':false}]},
    {"id" : 3, "prompt": 'sometext3', "type" : 'graduated', 'answers' : [{'text':'no', 'selected':false},{'text':'not at all', 'selected':false},{'text':'somewhat', 'selected':false},{'text':'yes', 'selected':false}]},
  ];

})

.controller('InventoryCtrl', function($scope, $stateParams) {
  $scope.title = $stateParams.playlistTitle;
  $scope.questions = {'qs':[
    {"Category": "Early Development", "id" : 1, "prompt": 'Was he/she born before he/she was due (premature)?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
    {"Category": "Early Development", "id" : 2, "prompt": 'Were the doctors worried about his/her medical condition immediately after he/she was born?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
    {"Category": "Early Development", "id" : 3, "prompt": 'Did he/she have to spend any time in a neonatal intensive care unit (NICU)?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
    // {"Category": "Early Development", "id" : 4, "prompt": 'Could he/she walk on his/her own by the age of 18 months?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
    // {"Category": "Early Development", "id" : 5, "prompt": 'Has he/she ever had a seizure?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
    // {"Category": "Early Development", "id" : 6, "prompt": 'Did he/she ever lose consciousness for more than a few minutes after an accident?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
    // {"Category": "Early Communication", "id" : 7, "prompt": 'By the time he/she was age 2; could he/she put several words together when speaking?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
    // {"Category": "Early Communication", "id" : 8, "prompt": 'ould people who didnt know him/her understand his/her speech by the time he/she reached age 4?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
    // {"Category": "Early Communication", "id" : 9, "prompt": 'Have you ever been concerned about his/her hearing or eyesight?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
    // {"Category": "Early Communication", "id" : 10, "prompt": 'By the time he/she was age 4; was he/she interested in playing with or being with other children?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},

  ]};
  if ($scope.title === "Autism Spectrum Disorder"){
    $scope.questions = {'qs':[
      {"Category": "Early Development", "id" : 1, "prompt": 'Was he/she born before he/she was due (premature)?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
      {"Category": "Early Development", "id" : 2, "prompt": 'Were the doctors worried about his/her medical condition immediately after he/she was born?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
      {"Category": "Early Development", "id" : 3, "prompt": 'Did he/she have to spend any time in a neonatal intensive care unit (NICU)?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
      {"Category": "Early Development", "id" : 4, "prompt": 'Could he/she walk on his/her own by the age of 18 months?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
      {"Category": "Early Development", "id" : 5, "prompt": 'Has he/she ever had a seizure?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
      {"Category": "Early Development", "id" : 6, "prompt": 'Did he/she ever lose consciousness for more than a few minutes after an accident?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
      {"Category": "Early Communication", "id" : 7, "prompt": 'By the time he/she was age 2; could he/she put several words together when speaking?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
      {"Category": "Early Communication", "id" : 8, "prompt": 'ould people who didnt know him/her understand his/her speech by the time he/she reached age 4?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
      {"Category": "Early Communication", "id" : 9, "prompt": 'Have you ever been concerned about his/her hearing or eyesight?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
      {"Category": "Early Communication", "id" : 10, "prompt": 'By the time he/she was age 4; was he/she interested in playing with or being with other children?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},

    ]};
  }
  else if ($scope.title ==="Severity of Posttraumatic Stress Symptoms"){
    $scope.questions = {'qs':[
      {"Category": "Early Development", "id" : 1, "prompt": 'Have you ever been concerned about his/her hearing or eyesight?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
      {"Category": "Early Development", "id" : 2, "prompt": 'Were the doctors worried about his/her medical condition immediately after he/she was born?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
      {"Category": "Early Development", "id" : 3, "prompt": 'Did he/she have to spend any time in a neonatal intensive care unit (NICU)?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
      {"Category": "Early Development", "id" : 4, "prompt": 'Could he/she walk on his/her own by the age of 18 months?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
      {"Category": "Early Development", "id" : 5, "prompt": 'Has he/she ever had a seizure?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
      {"Category": "Early Development", "id" : 6, "prompt": 'Did he/she ever lose consciousness for more than a few minutes after an accident?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
      {"Category": "Early Communication", "id" : 7, "prompt": 'By the time he/she was age 2; could he/she put several words together when speaking?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
      {"Category": "Early Communication", "id" : 8, "prompt": 'ould people who didnt know him/her understand his/her speech by the time he/she reached age 4?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
      {"Category": "Early Communication", "id" : 9, "prompt": 'Have you ever been concerned about his/her hearing or eyesight?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
      {"Category": "Early Communication", "id" : 10, "prompt": 'By the time he/she was age 4; was he/she interested in playing with or being with other children?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
      {"Category": "Early Development", "id" : 11, "prompt": 'Was he/she born before he/she was due (premature)?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
      {"Category": "Early Development", "id" : 12, "prompt": 'Were the doctors worried about his/her medical condition immediately after he/she was born?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
      {"Category": "Early Development", "id" : 13, "prompt": 'Did he/she have to spend any time in a neonatal intensive care unit (NICU)?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
      {"Category": "Early Development", "id" : 14, "prompt": 'Could he/she walk on his/her own by the age of 18 months?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
      {"Category": "Early Development", "id" : 15, "prompt": 'Has he/she ever had a seizure?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
      {"Category": "Early Development", "id" : 16, "prompt": 'Did he/she ever lose consciousness for more than a few minutes after an accident?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
      {"Category": "Early Communication", "id" : 17, "prompt": 'By the time he/she was age 2; could he/she put several words together when speaking?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
      {"Category": "Early Communication", "id" : 18, "prompt": 'ould people who didnt know him/her understand his/her speech by the time he/she reached age 4?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
      {"Category": "Early Communication", "id" : 19, "prompt": 'Have you ever been concerned about his/her hearing or eyesight?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
      {"Category": "Early Communication", "id" : 20, "prompt": 'By the time he/she was age 4; was he/she interested in playing with or being with other children?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},

    ]};
  }

  else if ($scope.title ==="Level 1 Cross-Cutting Symptom Measure"){
    $scope.questions = {'qs':[
      {"Category": "Early Development", "id" : 1, "prompt": 'By the time he/she was age 4; was he/she interested in playing with or being with other children?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
      {"Category": "Early Development", "id" : 2, "prompt": 'Has he/she ever had a seizure?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
      {"Category": "Early Development", "id" : 3, "prompt": 'Did he/she have to spend any time in a neonatal intensive care unit (NICU)?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
      {"Category": "Early Development", "id" : 4, "prompt": 'Could he/she walk on his/her own by the age of 18 months?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
      {"Category": "Early Development", "id" : 5, "prompt": 'Has he/she ever had a seizure?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
      {"Category": "Early Development", "id" : 6, "prompt": 'Did he/she ever lose consciousness for more than a few minutes after an accident?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
      {"Category": "Early Communication", "id" : 7, "prompt": 'By the time he/she was age 2; could he/she put several words together when speaking?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
      {"Category": "Early Communication", "id" : 8, "prompt": 'ould people who didnt know him/her understand his/her speech by the time he/she reached age 4?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
      {"Category": "Early Communication", "id" : 9, "prompt": 'Have you ever been concerned about his/her hearing or eyesight?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
      {"Category": "Early Communication", "id" : 10, "prompt": 'By the time he/she was age 4; was he/she interested in playing with or being with other children?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
      {"Category": "Early Development", "id" : 11, "prompt": 'Was he/she born before he/she was due (premature)?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
      {"Category": "Early Development", "id" : 12, "prompt": 'Were the doctors worried about his/her medical condition immediately after he/she was born?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
      {"Category": "Early Development", "id" : 13, "prompt": 'Did he/she have to spend any time in a neonatal intensive care unit (NICU)?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
      {"Category": "Early Development", "id" : 14, "prompt": 'Could he/she walk on his/her own by the age of 18 months?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
      {"Category": "Early Communication", "id" : 17, "prompt": 'By the time he/she was age 2; could he/she put several words together when speaking?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
      {"Category": "Early Communication", "id" : 18, "prompt": 'ould people who didnt know him/her understand his/her speech by the time he/she reached age 4?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
      {"Category": "Early Communication", "id" : 19, "prompt": 'Have you ever been concerned about his/her hearing or eyesight?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
      {"Category": "Early Communication", "id" : 20, "prompt": 'By the time he/she was age 4; was he/she interested in playing with or being with other children?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},

    ]};
  }


    else if ($scope.title ==="Level 2 - Substance Use"){
      $scope.questions = {'qs':[
        {"Category": "Early Development", "id" : 1, "prompt": 'By the time he/she was age 4; was he/she interested in playing with or being with other children?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
        {"Category": "Early Development", "id" : 2, "prompt": 'Has he/she ever had a seizure?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
        {"Category": "Early Development", "id" : 3, "prompt": 'Did he/she have to spend any time in a neonatal intensive care unit (NICU)?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
        {"Category": "Early Development", "id" : 4, "prompt": 'Could he/she walk on his/her own by the age of 18 months?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
        {"Category": "Early Development", "id" : 5, "prompt": 'Has he/she ever had a seizure?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
        {"Category": "Early Development", "id" : 6, "prompt": 'Did he/she ever lose consciousness for more than a few minutes after an accident?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
        {"Category": "Early Communication", "id" : 7, "prompt": 'By the time he/she was age 2; could he/she put several words together when speaking?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
        {"Category": "Early Communication", "id" : 8, "prompt": 'ould people who didnt know him/her understand his/her speech by the time he/she reached age 4?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
        {"Category": "Early Communication", "id" : 9, "prompt": 'Have you ever been concerned about his/her hearing or eyesight?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
        {"Category": "Early Communication", "id" : 10, "prompt": 'By the time he/she was age 4; was he/she interested in playing with or being with other children?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
        {"Category": "Early Development", "id" : 11, "prompt": 'Was he/she born before he/she was due (premature)?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
        {"Category": "Early Development", "id" : 12, "prompt": 'Were the doctors worried about his/her medical condition immediately after he/she was born?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
        {"Category": "Early Development", "id" : 13, "prompt": 'Did he/she have to spend any time in a neonatal intensive care unit (NICU)?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
        {"Category": "Early Development", "id" : 14, "prompt": 'Could he/she walk on his/her own by the age of 18 months?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
        {"Category": "Early Communication", "id" : 17, "prompt": 'By the time he/she was age 2; could he/she put several words together when speaking?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
        {"Category": "Early Communication", "id" : 18, "prompt": 'ould people who didnt know him/her understand his/her speech by the time he/she reached age 4?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
        {"Category": "Early Communication", "id" : 19, "prompt": 'Have you ever been concerned about his/her hearing or eyesight?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
        {"Category": "Early Communication", "id" : 20, "prompt": 'By the time he/she was age 4; was he/she interested in playing with or being with other children?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},

      ]};
    }
  // $scope.questions = [];
  // $http.get('appdata/file.json')
  //   .success(function (data) {
  //       // The json data will now be in scope.
  //       $scope.questions = data;
  //   });
  // $scope.questions = [
  //   {"Category": "Early Development", "id" : 1, "prompt": 'Was he/she born before he/she was due (premature)?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
  //   {"Category": "Early Development", "id" : 2, "prompt": 'Were the doctors worried about his/her medical condition immediately after he/she was born?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
  //   {"Category": "Early Development", "id" : 3, "prompt": 'Did he/she have to spend any time in a neonatal intensive care unit (NICU)?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
  //   // {"Category": "Early Development", "id" : 4, "prompt": 'Could he/she walk on his/her own by the age of 18 months?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
  //   // {"Category": "Early Development", "id" : 5, "prompt": 'Has he/she ever had a seizure?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
  //   // {"Category": "Early Development", "id" : 6, "prompt": 'Did he/she ever lose consciousness for more than a few minutes after an accident?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
  //   // {"Category": "Early Communication", "id" : 7, "prompt": 'By the time he/she was age 2; could he/she put several words together when speaking?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
  //   // {"Category": "Early Communication", "id" : 8, "prompt": 'ould people who didnt know him/her understand his/her speech by the time he/she reached age 4?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
  //   // {"Category": "Early Communication", "id" : 9, "prompt": 'Have you ever been concerned about his/her hearing or eyesight?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
  //   // {"Category": "Early Communication", "id" : 10, "prompt": 'By the time he/she was age 4; was he/she interested in playing with or being with other children?', "type" : 'graduated','answer':'', 'answers' : [{'text':'No'},{'text':'Cannot Remember'},{'text':'Do not know'},{'text':'Yes'}]},
  //
  // ];
  $scope.formData = {}
  $scope.getQs = function(){
    return null;
  };
  $scope.Score = {ed: 0, ed_risk: '', ec_risk : '', ed: 0};
  $scope.submit = function(newAnswer, id){
    $scope.questions.qs[id-1].answer = newAnswer;
  };
  $scope.evaluate = function(qs){
    $scope.Score.ed = 0;
    $scope.Score.ec = 0;
    var arrayLength = qs.length;
    for (var q=0; q < arrayLength; q++) {
      if (qs[q].Category == "Early Development"){
        if (qs[q].answer === "Yes"){
          $scope.Score.ed += 1;
        }
        else if (qs[q].answer === "No"){
          $scope.Score.ed -= 1;
        }
        else {
          $scope.Score.ed += 0;
        }

      }

      if (qs[q].Category === "Early Communication"){
        if (qs[q].answer === "Yes"){
          $scope.Score.ec += 1;
        }
        else if (qs[q].answer === "No"){
          $scope.Score.ec -= 1;
        }
        else {
          $scope.Score.ec += 0;
        }

      }
    }
    if ($scope.Score.ec = 1) {
      $scope.Score.ec_risk = 'Your child may be borderline in thier early childhood Communication. You may want to schedual an appointment with your childs doctor to discuss your concerns. Share your childs results?'
    }
    else if ($scope.Score.ec > 1) {
      $scope.Score.ec_risk = 'Your child may be at risk in thier early childhood Communication. You should schedual an appointment with your childs doctor to discuss your concerns. Share your childs results?'
    }
    else {
      $scope.Score.ec_risk = 'Your child may be low risk in thier early childhood Communication. You should still bring up your concerns at your nexted schedualed appointment with your childs doctor. Share your childs results?'
    }
    if ($scope.Score.ec = 1) {
      $scope.Score.ed_risk = 'Your child may be borderline in thier early childhood Development. You may want to schedual an appointment with your childs doctor to discuss your concerns. Share your childs results?'
    }
    else if ($scope.Score.ec > 1) {
      $scope.Score.ed_risk = 'Your child may be at risk in thier early childhood Development. You should schedual an appointment with your childs doctor to discuss your concerns. Share your childs results?'
    }
    else {
      $scope.Score.ed_risk = 'Your child may be low risk in thier early childhood Development. You should still bring up your concerns at your nexted schedualed appointment with your childs doctor. Share your childs results?'
    }
  };
})
