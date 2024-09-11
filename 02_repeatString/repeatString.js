const repeatString = function(inputString, numberofLoops) {
    let outputString = "";

    if(numberofLoops >= 0){
        for(let i = 0; i < numberofLoops; i++){
            outputString += inputString;
        }
    } else{
        outputString = "ERROR";
    }

    return outputString;
};

// Do not edit below this line
module.exports = repeatString;
