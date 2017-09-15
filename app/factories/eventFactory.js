"use strict";
console.log("eventFactory.js");

//must use the word "function" and not a fat arrow
app.factory("eventFactory", function($q, $http){
	const getEvent = () => {
		let eventArray = [];
		return $q ((resolve, reject) => {
			$http.get("https://timeline-journal.firebaseio.com/events.json")
			.then((eventObject) => {
				let eventCollection = eventObject.data;
				console.log("eventObject.data", eventObject.data);
				Object.keys(eventCollection).forEach((key) => {
					eventCollection[key].id = key;
					eventArray.push(eventCollection[key]);
				});
				resolve(eventArray);
				console.log("eventArray", eventArray);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};

	console.log("getEvent", getEvent);
	return {getEvent};
});
 const addEvent = function(obj){
        let newObj = JSON.stringify(obj);
        return $http.post(`/items.json`, newObj)
        .then( (data) => {
            console.log("data", data);
            return data;
        }, (error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
            console.log("error", errorCode, errorMessage);
        });
    };
