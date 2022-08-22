// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

//returning firsttwo drivers
const returnFirstTwoDrivers = function() {
        return drivers.slice(0, 2);
    }


//return last two drivers
const returnLastTwoDrivers = function() {
    return drivers.slice(-2);
}

//selecting drivers
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//fare multiplier
function createFareMultiplier(multiplier) {
   const fareMultiplier = function(fare) {
    return multiplier * fare;
   }
   return fareMultiplier;
}

//fare doubler
const fareDoubler = createFareMultiplier(2);

//fare trippler
const fareTripler = createFareMultiplier(3);

//selecting different drivers
function selectDifferentDrivers (arrayOfDrivers, returnFirstTwoDrivers) {
    return arrayOfDrivers = returnFirstTwoDrivers();
}
