app.service('gameService', function () {
    let clicks = 0;
    this.tries = this.corrects = this.games = 0;

    this.addClick = function () {
        clicks++;

        if (clicks % 2 == 0) {
            this.tries++;
        }
    }
});