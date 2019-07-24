module.controller("inputCtrl", function ($scope, inputService, historyService) {
    $scope.input = inputService

    $scope.setInput = function () {
        historyService.addToHist($scope.input.a, $scope.input.b);
        //calinputService.input = $scope.input
    }

    $scope.setColors = function (colors) {
        $scope.input.pos = colors.pos;
        $scope.input.neg = colors.neg;
    }
});