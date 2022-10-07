'use strict';
/* temperature amplitude calculator */

/*const temp = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5,];

function tempAmpCalc(tempe) {
    let min = tempe[0]
    let max = tempe[0];

    for (let i = 0; i < tempe.length; i++) {
        if (typeof (tempe[i]) !== "number") { continue; }

        console.log(tempe[i]);
        if (tempe[i] < min) {
            min = tempe[i];
        }
        if (tempe[i] > max) {
            max = tempe[i];
        }

    }
    console.log(min);
    console.log(max);
    dif = max - min;
    return dif;

}

console.log(tempAmpCalc(temp));
*/

/*let b = 0;

function meyve(elma, armut) {
    console.log(elma, armut);
    const al = "bakkaldan " + elma + " elma ve " + armut + " armut aldım";
    return al;

}


const cikti = [meyve(8, 5), meyve(3, 2), meyve(8, 6),];


for (let a = 0; a < cikti.length; a++) {
    console.log(cikti[a]);

}


/*function kesici(meyve) {
    let parca = meyve * 4;
    return parca;
}


function meyve(elma, armut) {
    const elmaparca = kesici(elma);
    const armutparca = kesici(armut);
    const sa = elmaparca + " " + armutparca;
    return sa;
}
*/





/*const dolScore = [0, 0, 71];
const koalScore = [65, 54, 49];

function calctakimAv(takim) {
    let takimAv = 0;
    let takimdizi3 = 0;
    for (let i = 0; i < takim.length; i++) {
        takimdizi3 += takim[i];

    }
    takimAv = takimdizi3 / takim.length;
    return takimAv;
}

console.log(calctakimAv(dolScore));
console.log(calctakimAv(koalScore));

const dolphins = calctakimAv(dolScore);
const koalas = calctakimAv(koalScore);

function checkWin(takim1, takim2) {
    if (takim1 >= 2 * takim2) {
        return takim1 + "wins (by";
    }
}

console.log(checkWin(koalas, dolphins));*/





/*
const dizi1 = [125, 155, 44];
const dizi2 = [];
const dizi3 = [];
const total = [];

function calctip(bill) {
    let tip = 0;
    if (bill >= 50 && bill <= 300) {
        tip = bill * 15 / 100;
    } else {
        tip = bill * 20 / 100;
    }
    return tip;
}
for (let i = 0; i < dizi1.length; i++) {
    dizi2.push(calctip(dizi1[i]));
}

for (let i = 0; i < dizi1.length; i++) {
    dizi3.push(dizi1[i] + dizi2[i])
}
function newArray(dizi) {
    total.push(dizi);
    return total;
}


console.log(dizi1);
console.log(dizi2);
console.log(dizi3);
console.log(total);
*/

/*const berk = {
    isim: "berk",
    soyisim: "kural",
    dogumyil: 2002,
    yashesap: function () {
        this.yas = 2022 - this.dogumyil;
        return this.yas;
    },

};
berk.yashesap();

let ehliyet = function (kisi) {
    if (2022 - kisi.yas > 18) {
        kisi.ehliyet = true;
    } else { kisi.ehliyet = false; }
    return kisi.ehliyet;
}

console.log(ehliyet(berk));
console.log(berk);
*/






