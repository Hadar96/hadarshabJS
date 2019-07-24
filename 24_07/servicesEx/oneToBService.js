module.service('oneToBService', function (inputService) {
    this.getList = function () {
        let list = [];

        for (let i = 1; i <= inputService.b; i++) {
            list.push(i);
        }

        return list;
    }
});