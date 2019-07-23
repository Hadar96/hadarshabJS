module.controller("cellphoneCtrl", function ($scope) {
    $scope.phones = [
        new Phone("IPhone X", "white", 3500),
        new Phone("Xiaomi", "lightgreen", 1000),
        new Phone("Samsung Galaxy 11+", "silver", 5500),
        new Phone("LG V60", "lightblue", 7500)
    ];

    $scope.remove = function (phone) {
        let i = $scope.phones.indexOf(phone);
        $scope.phones.splice(i, 1);
    }

    $scope.add = function (model, color, price) {
        if (model && model.trim() !== '' &&
            color && color.trim() !== '' &&
            price && price !== '') {
            $scope.phones.push(new Phone(model, color, price));
        }
    }

    $scope.switchEditMode = function (id = -1) {
        $scope.editedRow = id;
    }

    $scope.setOrder = function (param) {
        if ($scope.orderParam == param) {
            $scope.orderParam = '-' + param;
        }
        else {
            $scope.orderParam = param;
        }
        console.log($scope.orderParam);
    }
});

class Phone {
    constructor(model, color, price) {
        this.model = model
        this.color = color
        this.price = price
    }
}