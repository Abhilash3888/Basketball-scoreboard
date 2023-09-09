let homeScoreEl = document.querySelector(".home-score");
let awayScoreEl = document.querySelector(".away-score");
let homeCount = 0;
let awayCount = 0;

function homePlusOne() {

    homeCount += 1;
    updateHomeScore();
}

function homePlusTwo() {
    homeCount += 2;
    updateHomeScore();
}

function homePlusThree() {

    homeCount += 3;
    updateHomeScore();
}

function updateHomeScore() {
    homeScoreEl.textContent = homeCount;

}

function awayPlusOne() {

    awayCount += 1;
    updateawayScore();
}

function awayPlusTwo() {
    awayCount += 2;
    updateawayScore();
}

function awayPlusThree() {

    awayCount += 3;
    updateawayScore();
}

function updateawayScore() {
    awayScoreEl.textContent = awayCount;

}