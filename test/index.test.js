// This file will contain tests for the program. The purpose of these tests is to
// ensure that the core program logic works as expected.

// This project uses a testing library called Jest. You can learn more about Jest
// here: https://jestjs.io/.

// Test files can contain multiple tests, so long as those tests are grouped logically.
// Included below is a function and a test that makes assertions about the behaviour
// of the function. In most cases the subject of a test will be defined in a separate
// file. In this case we've defined the function and the corresponding test in the
// same file for illustrative and learning purposes.


var { validateUserInput } = require('../src/validate-user-input');
var { calcolatConversion } = require('../src/CalculateConversion');

//validateUserInput function Test
describe('validateUserInput', function() {

  test('should Validate User input is correct and not undefined ', function() {

    var result = validateUserInput();

    expect(result).toBe('You enter the Amount, Main Currency or Targit Currency Undefined');
  });

  
});
//calcolatConversion function Test
describe('calcolatConversion', function() {

  test('should Validate User input is correct and not undefined ', function() {
    var rates = {

      CAD: {
       USD:0.784142,
       JOD:0.554142,
      },
      USD: {
       CAD: 1.27528,
       JOD: 1.22,
      },
      JOD: {
          CAD: 1.27528,
          USD: 1.27528,
         },
      };
      var mainCurrncy = 'CAD';
      var targitCurrancy = 'USD';
 
    var result = calcolatConversion(rates,mainCurrncy,targitCurrancy);
    expect(result).toBe(0.784142);
  });

  
});

