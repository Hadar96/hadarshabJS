const tempMod1 = angular.module("tempMod1", []);

tempMod1.controller("tempCtrl1", function ($scope) {
    $scope.msg = "This is a message from temp module 1";
    $scope.style = {
        'color' : 'mediumpurple',
        'font-weight' : 'bold',
        'text-decoration' : 'underline',
        'font-family' : 'cursive'
    }
});