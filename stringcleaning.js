function strClean(arrOfStrs){
    //Your code goes here
    for(i=0; i < arrOfStrs.length; i++){
        let string = arrOfStrs[i]; 
        string = string.trim();
        string = string.replace(/2/g,"");
        string = string.replace(/3/g,"");
        string = string.replace(/4/g,"");
        string = string.replace(/5/g,"");
        string = string.replace(/6/g,"");
        string = string.replace(/7/g,"");
        string = string.replace(/8/g,"");
        string = string.replace(/9/g,""); 
        string = string.replace(/1/g,"one");
        string = string.replace(/0/g,"zero");
        string = string.replace(/ /g, "_");
        arrOfStrs[i] = string;
    }
    return arrOfStrs;
}



// DO NOT EDIT THE LINE BELOW THIS
module.exports = strClean;