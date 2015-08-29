angular.module('starter.services', ['ngResource'])

.service('playlistService', function(){
  var playlistData = [];

  var addData = function(data){
    playlistData.push(data);
  };

  var getData =function(){
    var data = playlistData.pop();
    return data;
  };
});
