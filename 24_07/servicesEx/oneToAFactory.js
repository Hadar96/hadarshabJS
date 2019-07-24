module.factory('oneToAFactory', function (inputService) {
    const factory = {};

    factory.getList = function () {
        let list = [];

        for (let i = 1; i <= inputService.a; i++) {
            list.push(i);
        }

        return list;
    }

    return factory;
});