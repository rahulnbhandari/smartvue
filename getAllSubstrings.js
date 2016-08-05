// ===== STRINGS ======
// Write a function that takes an input string and prints out various substrings as illustrated by the following sample outputs:
// - input “ab” should print “”, “a”, “b”, “ab"
// - input “abc” should print “”, “a”, “b”, “c”, “ab”, “ac”, “bc”, “abc"
// - input “abcd” should print “”, “a”, “b”, “c”, “d”, “ab”, “ac”, “ad”, “bc”, “bd”, “cd”, “abc”, “abd”, “acd”, “bcd”, “abcd"
// The function can return/print the substrings in any order (no duplicates). And it is acceptable to print each string in a separate line.
var substrings = {'':true};
function getAllSubstrings (str) {
	

	
    if (typeof str === 'string') {
        var inputLength = str.length;
        var i,j;
        var inputStringArray = str.split('');
        
        var substr = ''; 
        var tempSubStr ='';

        if(inputLength>0) {

            for( i = 0; i < inputLength; i++) {

                for(j=i; j < inputLength; j++) {

                	substr = substr + inputStringArray[j];

                	//using substrings as map to reduce lookup time to O(1)
                	if(!(substr in substrings)) {
                        substrings[substr] = true;

                    }

                    for(k=1;k<substr.length-1;k++) {
                            tempSubStr = substr.slice(0,k) + substr.slice(k+1);
                            if(!(tempSubStr in substrings)) {
                                getAllSubstrings(tempSubStr);
                            }
                    }

                   
                    
                }

                

                substr = '';
            }
        }

    } else {
        throw "Invalid input string";
    }

    return substrings;

    
}

var substringsResult = getAllSubstrings('abcde');
for(key in substringsResult) {
	console.log(key);
}