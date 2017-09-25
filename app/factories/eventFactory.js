"use strict";
console.log("eventFactory.js");

//must use the word "function" and not a fat arrow
app.factory("eventFactory", function($q, $http)
{

	const getEvent = () => {
		let eventArray = [];
		return $q ((resolve, reject) => {
			$http.get("https://timeline-journal.firebaseio.com/events.json")
			.then((eventObject) => {
				let eventCollection = eventObject.data;
				Object.keys(eventCollection).forEach((key) => {
					eventCollection[key].id = key;
				});
				resolve(eventArray);
				console.log("eventArray", eventArray);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};

	const addEvent = function(obj){
		
        let newObj = JSON.stringify(obj);
        return $http.post("https://timeline-journal.firebaseio.com/events.json", newObj)
        .then( (data) => {
            return data;
        }, (error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
            console.log("error", errorCode, errorMessage);
        });
    };
	
	const deleteEvent = function(id){
        return $q( (resolve, reject) => {
            $http.delete(`https://timeline-journal.firebaseio.com/events/${id}.json`)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
        });
    };

 	const editEvent = function( obj) {
        console.log(" obj to update",  obj);
        return $q((resolve, reject) => {
        	var id = obj.id;
           //Firebase didn't like including an id not in the url so add all the fields except id.
            var entry = 
        	{
                date:obj.date,
				eventTitle:obj.eventTitle,
				eventCategory:obj.eventCategory,
				image:obj.image,
				journalEntry :obj.journalEntry
			};
            let newObj = JSON.stringify(entry);
            $http.patch(`https://timeline-journal.firebaseio.com/events/${id}.json`, newObj)
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
        });
    };		

   	return {getEvent,addEvent, deleteEvent, editEvent};



});
 
