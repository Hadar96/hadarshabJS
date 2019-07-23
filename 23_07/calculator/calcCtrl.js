module.controller("calcCtrl", function ($scope) {
    $scope.res = $scope.arg1 = $scope.arg2 = 0;
    $scope.op = '+';
    $scope.resStyle = { 
        'color': 'green',
        'font-size': '25px',
     }

    this.res2 = $scope.res;

    $scope.calc = function (op) {
        if (op) $scope.op = op;

        switch ($scope.op) {
            case '+':
                $scope.res = $scope.arg1 + $scope.arg2;
                break;
            case '-':
                $scope.res = $scope.arg1 - $scope.arg2;
                break;
            case 'x':
                $scope.res = $scope.arg1 * $scope.arg2;
                break;
            case '/':
                if ($scope.arg2 == 0)
                    $scope.res = NaN;
                else
                    $scope.res = $scope.arg1 / $scope.arg2;
                break;
            default:
                $scope.res = NaN;
                break;
        }

        $scope.resStyle.color = isNaN($scope.res) ? "red" : "green"
        this.res2 = $scope.res;
    }.bind(this);

})

