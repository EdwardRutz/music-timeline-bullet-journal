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
		.otherwise("/");
}]);


