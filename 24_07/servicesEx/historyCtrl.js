module.controller("historyCtrl", function ($scope, historyService) {
    $scope.getLists = function () {
        $scope.listA = historyService.getA();
        $scope.listB = historyService.getB();
    }
});