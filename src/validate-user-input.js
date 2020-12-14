function validateUserInput(amount,mainCurrncy,targitCurrancy){
    if (amount === undefined || mainCurrncy === undefined || targitCurrancy === undefined ) {
        console.log('You enter the Amount, Main Currency or Targit Currency Undefined');
        process.exit();
    }
    
    }

    module.exports = {
        validateUserInput,
    }