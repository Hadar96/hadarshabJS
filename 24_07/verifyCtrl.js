module.controller("verifyCtrl", function ($scope) {
    $scope.verficationClass;
    $scope.email = $scope.name = $scope.age = '';

    $scope.getVerifyStatus = function () {
        if ($scope.name.trim() == '' && $scope.email.trim() == '' && $scope.age == '')
            $scope.verficationClass = 'empty';

        else if ($scope.name.trim() == '' || $scope.email.trim() == '' || $scope.age == '')
            $scope.verficationClass = 'missing';

        else if ($scope.age < 18)
            $scope.verficationClass = 'minor';

        else $scope.verficationClass = 'ok';

        return $scope.verficationClass;
    }
});