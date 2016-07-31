function getAllPermutations(input) {
    var permutations = [''];

    if (typeof input === 'string') {
        var inputLength = input.length;
        var i,j;
        var inputStringArray = input.split('');
        var substr = ''; 

        if(inputLength>0) {
            for( i = 0; i<inputLength; i++) {
                for(j=i;j<inputLength;j++) {
                    substr = substr.toString()+inputStringArray[j].toString();
                    if(!(substr in permutations)) {
                        getPermutations(substr);
                    }
                }
                substr = '';
            }
        }

    } else {
        throw "Invalid input string";
    }

    return permutations;


    function getPermutations(str) {
            //Enclosed data to be used by the internal recursive function permutate():
            
           
            var len = str.length;
            permutate(str,0,len);
           // return permutations;
         
            function permutate(str,start,end){ 
                //console.log(str);
                var current;
                if (typeof str === 'string') {
                    var chars = str.split(''); 
                } else {
                    throw "Invalid input";
                    return;
                }
                if(start == end-1) {
                    if(!(str in permutations)) {
                        permutations.push(str);
                    }
                } else {
                    for(current = start; current<end; current++) {
                        temp = chars[start];
                        chars[start] = chars[current];
                        chars[current] = temp;
                        permutate(chars.join(''),start+1,end);
                        temp = chars[start];
                        chars[start] = chars[current];
                        chars[current] = temp;
                    }
                   
                }
            }
        }
}

    var permutations = getAllPermutations('ABC');

    permutations.forEach (function(permutationString) {
        console.log(permutationString);
    });


