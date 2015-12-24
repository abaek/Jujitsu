angular.module('Jujitsu')
.controller('HomeController', ['$http', '$scope', '$location', '$routeParams',
	function($http, $scope, $location, $routeParams){

		var socket = io();

		$scope.cards = ["A", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
		$scope.players = [
		{ id: 1, name: 'John', chosenCard: "A"},
		{ id: 2, name: 'George', chosenCard: "A"}
		];

		$scope.cardChosen = function(value, player){
			player.chosenCard = value;
		}




	}]);
