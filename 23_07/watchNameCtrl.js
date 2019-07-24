app.controller("watchNameCtrl", function ($scope) {
    const MY_NAME = 'HADAR';

    $scope.someName = '';

    $scope.$watch('someName', function (name) {
        $scope.isMyName = (name.toUpperCase() === MY_NAME);

        // if (name.toUpperCase() === MY_NAME) {
        //     alert(`${name.toUpperCase()} is my name!`);
        // }
    });
})

