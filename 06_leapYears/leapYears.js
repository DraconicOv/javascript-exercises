const leapYears = function(date) {
    return date % 4 === 0 && (date % 100 !== 0 || date % 400 === 0);
};

// Do not edit below this line
module.exports = leapYears;
