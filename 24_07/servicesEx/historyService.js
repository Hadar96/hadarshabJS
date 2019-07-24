module.service("historyService", function () {
    let aHist = [];
    let bHist = [];

    this.addToHist = function (a, b) {
        if (aHist[aHist.length - 1] !== a)
            aHist.push(a);

        if (bHist[bHist.length - 1] !== b)
            bHist.push(b);
    }

    this.getA = function () {
        return aHist;
    }

    this.getB = function () {
        return bHist;
    }
});