/*Given an array of integers [2, 1, 2, 101, 4, 95, 3, 250, 4, 1, 2, 2, 7, 98, 123, 99, ...]
// Write a function to print the following tabular output with ‘xxx' that resembles a histogram (your output should closely match the sample output below, including "99+" to capture the count for all numbers > 99):
// Num | count
//   1 | xx
//   2 | xxxx
//   3 | x
//   4 | xx
// ...
//  98 | x
//  99 | x
// 99+ | xxx


Assumption Only allowing positive integers 
*/

var input =  [2, 1, 2, 101, 4, 95, 3, 250, 4, 1, 2, 2, 7, 98, 123, 99];

printHistogram(input);

function getHistogram(input) {
	var result = {};
	input.forEach(function(entry) {
      if(entry>0) {
        entry = entry>99 ? '99+' : entry;
       if (entry in result) {
         result[entry] += 'x';
      } else {
         result[entry] = 'x';
      }
  }
  	
   
	});
  return result
}

function printHistogram(input) {
	result = getHistogram(input);
  console.log("Num | Count")
  for (key in result ) {
  	console.log(String(key.toString()+"    ").slice(0,4)+"| "+result[key].toString());
	}
}  