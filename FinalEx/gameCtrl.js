app.controller("gameCtrl", function ($scope, $timeout, gameService) {
    $scope.cards = [];

    function shuffle(amount) {
        function genTemp() {
            let a = [];

            for (let i = 1; i <= max; i++) {
                a[i] = { value: i, times: 0 };
            }

            return a;
        }

        function getRand() {
            return Math.floor((Math.random() * max) + 1);
        }

        let max = amount / 2;
        let temp = genTemp();
        $scope.cards = [];
        $scope.cards.length = amount;

        for (let t = 1; t <= amount; t++) {
            let newVal;
            do {
                newVal = getRand();
            } while (temp[newVal].times == 2);

            $scope.cards[t - 1] = new Card(newVal);
            temp[newVal].times++;
        }
    }

    function createMatrix(size) {
        let row, col, i = 0, temp = $scope.cards;
        $scope.cards = [];

        for (row = 0; row < size; row++) {
            $scope.cards[row] = [];
            for (col = 0; col < size; col++) {
                $scope.cards[row].push(temp[i++]);
            }
        }

        if (size * size !== temp.length) {
            $scope.cards[size - 1].push(temp[size * size])
        }
    }

    $scope.replay = function (size = 4) {
        gameService.games++;

        $scope.cards.forEach(row => {
            row.forEach(card => {
                card.hidden = true;
            });
        });

        let amount = size * size;
        if (amount % 2 === 1) amount++;

        shuffle(amount);
        createMatrix(size);
    }
    $scope.replay();

    $scope.clickCard = function (card) {
        gameService.addClick();
        card.hidden = false;

        // if it's the first card of the guess
        if (!$scope.currGuess) {
            $scope.currGuess = card;
        }
        // if it's the second card of the guess
        else {
            $scope.dontClick = true;
            // if we have a match
            if ($scope.currGuess.value === card.value) {
                gameService.corrects++;
                $scope.currGuess = undefined;
                $scope.dontClick = false;
            }
            // if the guess is incorrect
            else {
                $timeout(() => {
                    card.hidden = $scope.currGuess.hidden = true;
                    $scope.currGuess = undefined;
                    $scope.dontClick = false;
                }, 1000);
            }
        }
    }
});

class Card {
    constructor(value) {
        this.value = value;
        this.hidden = true;
    }
}