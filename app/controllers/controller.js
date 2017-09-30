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
    // $scope.promptList = { 
		// 	text: [
		// 		"What is the first song you remember liking?",
		// 		"Think about a special person in your life, what song reminds you of them?",
   	// 		"What was the first music you bought?"
		// 	] 
		// };

	
		// PROMPT BUTTON - DISPLAY ITEM FROM ARRAY
  // $scope.select = function(item) {
  //   scope.selected = item;
  // };
    
	// 	$scope.promptArray = [
	// 		"What is the first song you remember liking?",
	// 		"Think about a special person in your life, what song reminds you of them?",
  //  		"What was the first music you bought?"
	// 		]






// Create an events object with an Array of Data

// $scope.emptyArray = Object.keys($scope.eventArray)
// 	.map(function(value,index) {
// 		return {date: new Date(value), values: $scope.eventArray[value] };
// 	});

/************ Convert Dates *************

angular.module("myApp", [])
        .controller('myController', ['$scope', function ($scope) {

            // CREATE AN 'employees' OBJECT, WITH AN ARRAY OF DATA.
            $scope.employees = {
                "05/17/2015": { 'name': 'Alpha', 'age': 37 },
                "03/25/2016": { 'name': 'Bravo', 'age': 27 },
                "09/11/2015": { 'name': 'Charlie', 'age': 29 },
                "01/07/2016": { 'name': 'Delta', 'age': 19 },
                "03/09/2014": { 'name': 'Echo', 'age': 32 }
            }

            $scope.empArray = Object.keys($scope.employees)
                .map(function (value, index) {
                    return { joinDate: new Date(value), values: $scope.employees[value] }
                }
            );
        } ]);
*************************/



	showAllEvents();
});


