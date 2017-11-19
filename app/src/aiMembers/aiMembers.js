'use strict';

angular.module('myApp.aiMembers', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/aiMembers', {
    templateUrl: '/src/aiMembers/aiMembers.html',
    controller: 'AiMembersCtrl'
  });
}])

.controller('AiMembersCtrl', ['$scope', function($scope) {
    $scope.firsttable = [{}];
    $scope.secondtable = [{}];
    $scope.thirdtable = [{}];
    $scope.row1 = [{num:'1', fname: 'Alex', add:'9119', phone:'12345'},{num:'2', fname: 'Alex', add:'9119', phone:'12345'},
                 {num:'3', fname: 'Alex', add:'9119', phone:'12345'},{num:'4', fname: 'Alex', add:'9119', phone:'12345'},
                {num:'5', fname: 'Alex', add:'9119', phone:'12345'},{num:'6', fname: 'Alex', add:'9119', phone:'12345'},
                {num:'7', fname: 'Alex', add:'9119', phone:'12345'},{num:'8', fname: 'Alex', add:'9119', phone:'12345'},
                {num:'9', fname: 'Alex', add:'9119', phone:'12345'},{num:'10', fname: 'Alex', add:'9119', phone:'12345'},
                {num:'11', fname: 'Alex', add:'9119', phone:'12345'},{num:'12', fname: 'Alex', add:'9119', phone:'12345'},
                {num:'13', fname: 'Alex', add:'9119', phone:'12345'},{num:'14', fname: 'Alex', add:'9119', phone:'12345'}];
    $scope.row2 = [{num:'1', fname: 'Max', add:'9119', phone:'12345'},{num:'2', fname: 'Max', add:'9119', phone:'12345'},
                {num:'3', fname: 'Max', add:'9119', phone:'12345'},{num:'4', fname: 'Max', add:'9119', phone:'12345'},
                {num:'5', fname: 'Max', add:'9119', phone:'12345'},{num:'6', fname: 'Max', add:'9119', phone:'12345'},
                {num:'7', fname: 'Max', add:'9119', phone:'12345'},{num:'8', fname: 'Max', add:'9119', phone:'12345'},
                {num:'9', fname: 'Max', add:'9119', phone:'12345'},{num:'10', fname: 'Max', add:'9119', phone:'12345'},
                {num:'11', fname: 'Max', add:'9119', phone:'12345'},{num:'12', fname: 'Max', add:'9119', phone:'12345'},
                {num:'13', fname: 'Max', add:'9119', phone:'12345'},{num:'14', fname: 'Max', add:'9119', phone:'12345'}];
    $scope.row3 = [{num:'1', fname: 'John', add:'9119', phone:'12345'},{num:'2', fname: 'John', add:'9119', phone:'12345'},
                {num:'3', fname: 'John', add:'9119', phone:'12345'},{num:'4', fname: 'John', add:'9119', phone:'12345'},
                {num:'5', fname: 'John', add:'9119', phone:'12345'},{num:'6', fname: 'John', add:'9119', phone:'12345'},
                {num:'7', fname: 'John', add:'9119', phone:'12345'},{num:'8', fname: 'John', add:'9119', phone:'12345'},
                {num:'9', fname: 'John', add:'9119', phone:'12345'},{num:'10', fname: 'John', add:'9119', phone:'12345'},
                {num:'11', fname: 'John', add:'9119', phone:'12345'},{num:'12', fname: 'John', add:'9119', phone:'12345'},
                {num:'13', fname: 'John', add:'9119', phone:'12345'},{num:'14', fname: 'John', add:'9119', phone:'12345'}];
    $scope.copy = function(ontable) {
        ontable.push({});
    };
}]);


