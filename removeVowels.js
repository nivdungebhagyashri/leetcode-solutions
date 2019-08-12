var removeVowels = function(S) {
    let vowel='aeiou';
    for(let char of S){
        
        if(vowel.includes(char)){
            
            S=S.replace(char, '')
        }
    }
    return S;
}; 