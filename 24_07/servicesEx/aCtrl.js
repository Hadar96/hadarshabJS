module.controller("aCtrl", function ($scope, inputService, oneToAFactory, msgService) {
    $scope.genList = function () {
        if (inputService.a < 1)
            $scope.list = msgService.negA;
        else
            $scope.list = oneToAFactory.getList();
    }
});