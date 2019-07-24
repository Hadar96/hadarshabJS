const tempMod2 = angular.module("tempMod2", []);

tempMod2.controller("tempCtrl2", function ($scope) {
    $scope.msg = "Message from tempModule2 !!!";
    $scope.style = {
        'color' : 'silver',
        'font-size' : '22px',
        'font-style' : 'italic'
    }
});