"use strict";
console.log("app.js");

var app = angular.module("capstoneApp", ["ngRoute"]);

app.config(["$routeProvider",
	function($routeProvider) {
		$routeProvider
		.when("/", {
			templateUrl: "partials/homeView.html",
			controller: "controller",
		})
		.when("/formTimeline", {
		templateUrl: "partials/formTimeline.html",
		controller: "controller",
		})
		.when("/display", {
		templateUrl: "partials/display.html",
		controller: "controller",
		})
		.when("/soundtrack", {
		templateUrl: "partials/createSoundtrack.html",
		controller: "controller",
		})
		.when("/displayTimeline", {
		templateUrl: "partials/displayTimeline.html",
		controller: "controller",
		})
		.when("/displayChart", {
		templateUrl: "partials/displayChart.html",
		controller: "controller",
		})
		.when("/displayAsciiOldSchool", {
		templateUrl: "partials/displayAsciiOldSchool.html",
		controller: "controller",
		})
		.when("/displayVertical", {
		templateUrl: "partials/displayVertical.html",
		controller: "controller",
		})
		.when("/displayJournal", {
		templateUrl: "partials/displayJournal.html",
		controller: "controller",
		})


		.otherwise("/");
}]);



		// **** SuperTL with timelinejs3 ****/
		// .when("/displaySuperTL", {
		// templateUrl: "angular-timelinejs3/app/demo/#/demo",
		// controller: "controller",
		// })