
/* HH = hour hand MH = minute hand */
var angleClock = function (hour, minutes) {
    var inc = 0.083333333;
    var HHinc = 0;
    var HH = hour * 30;
    var MH = minutes * 6;

    HHinc = MH * inc;

    if (hour == 12) {
        HH = 0;
    }

    var HHdegree = HH + HHinc;
    var DegreeBetween = MH - HHdegree;

    if (DegreeBetween < 0) {
        DegreeBetween = DegreeBetween * (-1)
    }
    if (DegreeBetween > 180) {
        return 360 - as;
    }


    return as;
};