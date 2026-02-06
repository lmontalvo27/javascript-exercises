const leapYears = function(year) {

    const isLeapyear = year % 4 === 0;
    const isCentury = year % 100 === 0;
    const isCenturySpecial = year % 400 === 0;

    if (isLeapyear && (!isCentury || isCenturySpecial)) {
        return true;
    }
    else {
        return false;
    }


    //leap years % 4 === 0
    // not leap Years % 100 === 0 unless % 400 === 0

};

// Do not edit below this line
module.exports = leapYears;
