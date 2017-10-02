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
	});

	const showAllEvents = function(){
    	eventFactory.getEvent()
    	.then((eventArray) => {
    		$scope.eventArray =  eventArray;
    	});
    };
		
  $scope.addInfo = function()
  {
    	if($scope.entry.id === "")
    	{
    		eventFactory.addEvent($scope.entry).then((data) => {
    	showAllEvents();
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
	    showAllEvents();
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

	$scope.clearInfo = function(id) {
		
		$scope.entry = {
			id:"",
			date:"",
			eventTitle:"",
			eventCategory:"",
			image:"",
			journalEntry :""
			};
		};

// PROMPT BUTTON - DISPLAY ITEM FROM ARRAY
    $scope.promptList = [
			"What is the first song you remember liking?",
			"Think about a special person in your life, what song reminds you of them?",
			"What was the first music you bought?",
			"Is there a song that reminds you of favorite trip?",
			"Which song reminds you of fun times in high school?",
			"What song reminds you of a good-time with friends?",
			"A song that motivates you to get out there and kick arse?",
			"Think of songs that remind you of the beach"
			];


	showAllEvents();
});



