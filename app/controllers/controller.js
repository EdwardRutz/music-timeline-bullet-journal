"use strict";
console.log("controller.js");

app.controller("controller", function($scope, eventFactory) {

$scope.eventArray = [];
	
	eventFactory.getEvent()  //define function
	.then(function(eventCollection) {
		$scope.eventArray = eventCollection;//binds data to scope
		console.log("$scope.eventArray", $scope.eventArray);
	});
});