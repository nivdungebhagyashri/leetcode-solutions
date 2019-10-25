var toLowerCase = function(str) {
    const DIFF = ('a'.charCodeAt(0) - 'A'.charCodeAt(0));
    newStr='';
    for(let char of str){
        if(char>='A' && char<='Z'){
            char = String.fromCharCode(char.charCodeAt(0)+DIFF)
            newStr=newStr+char;
        }
        else{
            newStr=newStr+char;
        }
    }
    return newStr
    
};