function rast(min, max) {
    let rastgele = Math.floor(Math.random() * (max - min + 1)) + min;
    return rastgele;
}
var uretilenSayi = rast(20, 1);

function getvalue() {
    let inputValue = parseInt(document.querySelector(".guess").value);
    let score = parseInt(document.querySelector(".score").textContent);
    let highscore = parseInt(document.querySelector(".HighScore").textContent);                       /* OLAYDA YAPILMASI İSTENEN İŞLEM */
    if (inputValue == uretilenSayi) {
        document.querySelector(".message").textContent = "great";
        if (score >= highscore) {
            highscore = score;
            document.querySelector(".HighScore").textContent = highscore;

        }
        document.body.style.backgroundColor = "green";

    } else if (inputValue != uretilenSayi) {

        score -= 1;
        document.querySelector(".score").textContent = score;
        document.body.style.backgroundColor = "red";
        if (inputValue < uretilenSayi) {
            document.querySelector(".message").textContent = "higher!";
        } else if (inputValue > uretilenSayi) {
            document.querySelector(".message").textContent = "lower!";
        }

    }

}

function resetgame() {
    uretilenSayi = rast(20, 1);
    document.querySelector(".score").textContent = "20";
    document.body.style.backgroundColor = " #222";
    console.log(uretilenSayi);
}

document.querySelector(".check").addEventListener("click", getvalue);                                    /* OLAYIN DEKLERASYONU*/
document.querySelector(".again").addEventListener("click", resetgame);
