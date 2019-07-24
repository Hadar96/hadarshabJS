// bootstrap the application
const module = angular.module("dataApp", [])

// angular.module("myTimerApp").controller("timeCtrl", () => { alert("hello from time controller")})

//module.controller("timeCtrl", () => { alert("hello from time controller")})

module.controller("formCtrl", function ($scope) {

    $scope.person = new Person();
    // $scope.name = '';

    $scope.resetName = function () {
        $scope.person.name = '';
    }

});

class Person {
    constructor(name = '') {
        this.name = name;
        this.type = 'person';
    }
}