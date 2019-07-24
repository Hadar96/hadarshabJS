module.controller("bCtrl", function ($scope, inputService, oneToBService, msgService) {
    $scope.genList = function () {
        if (inputService.b < 1)
            $scope.list = msgService.negB;
        else
            $scope.list = oneToBService.getList();
    }
});