let arrOfInts = [0];

function oddOneOut(arrOfInts){
    // Your code here!
    for(i = 0; i< arrOfInts.length; i++){
        if(((arrOfInts[i] + 2) % 2) == 1){
            return arrOfInts[i];
        } 
    };
    
    return -1;

}


// DON'T EDIT THE LINE BELOW THIS COMMENT
module.exports = oddOneOut;