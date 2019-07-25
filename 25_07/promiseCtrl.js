app.controller("promiseCtrl", function ($scope, todosService) {
    $scope.data = [];

    $scope.getData = function () {
        todosService.getPhotos()
            .then(function (data) {
                console.log(data);
                $scope.data = data;
                $scope.err = undefined;
            }).catch(function (err) {
                $scope.err = err;
                $scope.data = [];
            });
    }

    $scope.getDataById = function (id) {
        todosService.getPosts(id)
            .then(function (data) {
                console.log(data);
                $scope.dataOfId = `${data.title.toUpperCase()}:\n\n${data.body}`;
                $scope.err = undefined;
            }).catch(function (err) {
                $scope.err = `Error! (${err.status})`;
                $scope.dataOfId = undefined;
            });
    }
});