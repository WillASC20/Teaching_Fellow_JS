let x;
let array = [];
function fizzBuzz(start, end, skip){
    for(x= start; x <= end; x++){
       let xStr = x.toString();
       let skipStr = skip.toString();
        if(xStr.indexOf(skipStr) == -1){
            array.push(x);
        }

    }
    return array;
}

// DON'T EDIT THE LINE BELOW THIS COMMENT
module.exports = fizzBuzz;