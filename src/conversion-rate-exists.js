function conversionRateExists(rates, mainCurrncy,targitCurrancy){
    if (rates[mainCurrncy] === undefined || rates[mainCurrncy][targitCurrancy] === undefined){

        return 'You have enterd Undefined Valeu for Main and Target Carrency';
        process.exit();
        
        }

}

module.exports ={
    conversionRateExists,
}