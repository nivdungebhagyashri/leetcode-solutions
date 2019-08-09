/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s= s.replace(/[~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g,"");
    s=s.split(" ").join("").toLowerCase()
    newArr=[];
    
    for (let i=s.length-1; i>=0; i--){
        
        newArr.push(s[i]);
        
        }
    newArr=newArr.join("")
    if(s===newArr){
        return true;
    }
    else return false;
        
    
    
};