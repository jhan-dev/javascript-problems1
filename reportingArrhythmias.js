//Reporting Arrhythmias
//You're fixing an Electrocardiogram program that captures heart-rates. The problem is that it doesn't indicate whether the rates are normal or bad rhythms (Arrhythmic). If a heart-rate is less that 60 beats-per-minute, we say that it is Bradycardic, latin for 'slow heart'. If the heart-rate is greater than 100, we say that it is Tachycardic, also latin meaning 'fast heart'. Normal heart rates are in between.

//Your job is to fix the diagnoseRates function so that it can take an array of heart-rates and return a new array where each rate is formatted into a string with the cooresponding diagnosis along with the rate.

//For example, the data [ 42, 77, 103 ] would return ["Bradycardia: 42", "Normal: 77", "Tachycardia: 103"]. See if you can fix diagnoseRates and help improve patient outcomes!

function diagnoseRates(data) {

    var patients = [];

    for (var i = 0; i < data.length; i++) {
        var currentPatient = data[i];
        if (currentPatient < 60) {
            var lowHR = `Bradycardia: ${currentPatient}`;
            patients.push(lowHR);
        } 
        else if (currentPatient > 100) {
            var highHR = `Tachycardia: ${currentPatient}`;
            patients.push(highHR)
        } 
        else {
          var normHR = `Normal: ${currentPatient}`;
          patients.push(normHR);
        }
    }
  console.log(patients);
  return patients;
}

function assertEqualArrays(actual, expected, testName) {
    if(JSON.stringify(actual) === JSON.stringify(expected)) {
        console.log(`Passed: ${expected} is displaying correctly.`);
    } else {
        console.log(`test failed: ${testName}`);
    }
}

var heartRates = [63, 117, 52, 121, 67, 43];
var actual = diagnoseRates(heartRates);
var expected = [
    'Normal: 63',
    'Tachycardia: 117',
    'Bradycardia: 52',
    'Tachycardia: 121',
    'Normal: 67',
    'Bradycardia: 43'
];
assertEqualArrays(actual, expected, 'function should return correct heartrates and diagnoses');

var heartRates2 = [161, 90, 65, 45, 101, 59];
var actual2 = diagnoseRates(heartRates2);
var expected2 = [
    'Tachycardia: 161',
    'Normal: 90',
    'Normal: 65',
    'Bradycardia: 45',
    'Tachycardia: 101',
    'Bradycardia: 59'
];
assertEqualArrays(actual2, expected2, 'function should return correct heartrates and diagnoses');