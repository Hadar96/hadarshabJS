// angular.module("myTimerApp").controller("timeCtrl", () => { alert("hello from time controller")})

//module.controller("timeCtrl", () => { alert("hello from time controller")})

module.controller("timeCtrl", TimeCtrl)

// DI dependency injection - IOC
function TimeCtrl($scope) {
    $scope.stime = 10;
    this.ttime = 5;

    $scope.increaseTime = function () {
        $scope.stime++;
        this.ttime += 2;
    }.bind(this);

}