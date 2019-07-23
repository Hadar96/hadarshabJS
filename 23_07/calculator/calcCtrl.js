module.controller("calcCtrl", function ($rootScope, $scope) {
    $scope.res = $scope.arg1 = $scope.arg2 = 0;
    $scope.op = '+';
    $scope.resStyle = {
        'color': 'seagreen',
        'font-size': '25px',
    }

    this.res2 = $rootScope.rootRes = $scope.res;

    $scope.calc = function (op) {
        if (op) $scope.op = op;

        if ($scope.arg1 == undefined || $scope.arg2 == undefined) {
            $scope.res = NaN
        }
        else {
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
        }

        $scope.resStyle.color = isNaN($scope.res) ? "red" : "seagreen"
        this.res2 = $rootScope.rootRes = $scope.res;
    }.bind(this);
})

