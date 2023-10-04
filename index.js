// Code your solution in this file!
// The arrays
const Drivers = ["James", "Peter", "Felix", "George", "Mark"];


// Returns the first two drivers from an array
const returnFirstTwoDrivers = function (){
    }
// console.log(Drivers.slice (0,2));


// Returns the last two drivers from an array
const returnLastTwoDrivers = function (){
}
// console.log (Drivers.slice (-2));


// Array containing the two driver selection functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


// function that returns a function to multiply a fare
const createFareMultiplier = function (integer, fare){
return integer * fare;
    }
// console.log(3 * 50);

// Doubles a fare
const fareDoubler = createFareMultiplier(2);

// Triples a fare
const fareTripler = createFareMultiplier(3);

// Selects drivers based on the provided function
const selectDifferentDrivers = function(Drivers, selectFunction) {
  return selectFunction(Drivers);
};