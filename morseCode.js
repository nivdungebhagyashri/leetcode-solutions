var uniqueMorseRepresentations = function(words) {
    const Morse_Code_Map = {
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--.."
}
const ws =[];
    for(let word of words){
        let w=''
        for(let char of word){
            
            char= Morse_Code_Map[char];
            w=w+char;
            
         }
        ws.push(w);
       
     }
    
    return new Set(ws).size
};
