/*Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note:

All inputs will be in lowercase.
The order of your output does not matter.*/

var groupAnagrams = function(strs) {
    let dict={};
    strs=strs.sort();
    strs.map(v=>{
        temp=v.split("");
        temp.sort();
        console.log(temp);
        if(dict[temp]){
            dict[temp].push(v);
            
        }
        else{
            dict[temp]=[v];
        }
    })
    return Object.values(dict);
};
