"use strict";

/*
 Creates entries into the eventData table on Firebase.  
 */

app.controller("ctrlAddData", function($scope, eventFactory, $location){

	$scope.title = "";
	$scope.submitButtonText = "Add New Song";
	let event = eventFactory.getCurrentEvent();

	$scope.addInfo = {
		date: "",
		eventTitle: "",
		eventCategory: "",
		image: "high",
		task: "",
		journalEntry: ""
	};

    $scope.addInfo = function(){
    	
    	eventFactory.addEvent($scope.addInfo)
    	.then((data) => {
    		$location.url("/formTimeline");
    	});
    };



});