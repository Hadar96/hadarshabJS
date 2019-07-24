module.controller("divCtrl", function ($scope, inputService, msgService) {
    $scope.input = inputService;

    $scope.$watch('input', function (val) {
        console.log(val);
        
        if ($scope.input.b == 0)
            $scope.res = msgService.div0;
        else
            $scope.res = $scope.input.a / $scope.input.b;
    });
});