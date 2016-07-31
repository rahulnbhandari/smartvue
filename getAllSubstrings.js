function getAllSubstrings (input) {
	var substrings = {'':true};

	
    if (typeof input === 'string') {
        getSubstrings(input);

    } else {
        throw "Invalid input string";
    }

    return substrings;

    function getSubstrings(str) {

    	var inputLength = str.length;
        var i,j;
        var inputStringArray = str.split('');
        
        var substr = ''; 

        if(inputLength>0) {

            for( i = 0; i < inputLength; i++) {

                for(j=i; j<inputLength; j++) {

                	substr = substr + inputStringArray[j];

                	//using substrings as map to reduce lookup time to O(1)
                	if(!(substr in substrings)) {
                        substrings[substr] = true;
                    }
                    
                }

                if(i<inputLength-2) {
                	getSubstrings(substr.slice(0,1) + substr.slice(2)) ;
                }

                substr = '';
            }
        }

    }
}

var substringsResult = getAllSubstrings('ABC');
for(key in substringsResult) {
	console.log(key);
}