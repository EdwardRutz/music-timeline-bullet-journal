"use strict";
console.log("controller.js");

app.controller("controller", function($scope, eventFactory, $location) {
	
	$scope.entry = {
		id:"",
		date:"",
		eventTitle:"",
		eventCategory:"",
		image:"",
		journalEntry :""
	};

	$scope.eventArray = [];
	
	eventFactory.getEvent()  //define function
	.then(function(eventCollection) {
		$scope.eventArray = eventCollection;//binds data to scope
		console.log("$scope.eventArray", $scope.eventArray);
	});

		
  $scope.addInfo = function()
  {
    	if($scope.entry.id === "")
    	{
    		eventFactory.addEvent($scope.entry).then((data) => {
    		$location.url("/formTimeline"); });
    	}
		else 
		{
			eventFactory.editEvent($scope.entry).then((data) => {
    		$location.url("/formTimeline");});
		}
    	
    };

     $scope.deleteEvent = function(id)
     {
    	eventFactory.deleteEvent(id)
    	.then( (irrelevant) => {
	    $location.url("/formTimeline");

    	});
    };

	 $scope.editEvent = function (id) {
	 	var x;
	 	for(x in $scope.eventArray)
	 	{
	 		if(id === $scope.eventArray[x].id)
	 		{
	 			$scope.entry = $scope.eventArray[x];
	 		}
	 	}
	};

	// $scope.clearInfo = function(id) {
	// 	var x;
	// 	$scope.entry = {
	// 		id:"",
	// 		date:"",
	// 		eventTitle:"",
	// 		eventCategory:"",
	// 		image:"",
	// 		journalEntry :""
	// 		}
	// 	};

});


