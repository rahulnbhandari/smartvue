function getAllSubstrings (str) {
	var substrings = {'':true};

	
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
                    
                }

                for(j=1;j<substr.length-1;j++) {
                	tempSubStr = substr.slice(0,j) + substr.slice(j+1);
                	if(!(tempSubStr in substrings)) {
                        substrings[tempSubStr] = true;
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

var substringsResult = getAllSubstrings('ABCD');
for(key in substringsResult) {
	console.log(key);
}