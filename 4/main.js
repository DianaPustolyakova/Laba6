function roll(){
    var dice1 = document.querySelector("#dice1");
    var dice2 = document.querySelector("#dice2");
    var status = document.querySelector("#status");
    var d1 = Math.floor(Math.random() * 6) + 1;
    var d2 = Math.floor(Math.random() * 6) + 1;
    dice1.style.backgroundImage = "url(images/" + d1 + ".png";
    dice2.style.backgroundImage = "url(images/" + d2 + ".png";

    if (d1 == d2) {
        status.innerHTML = "🏁Draw!🏁";
    }   else if (d1 > d2) {
        status.innerHTML = "🚩Player 1 Win!";
    }   else if (d1 < d2) {
        status.innerHTML = "Player 2 Win!🚩";
    };
};
