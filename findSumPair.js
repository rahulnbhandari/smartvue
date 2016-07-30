// ===== PAIRS OF 10 ======
// Given array of integers [1, 6, 3, 2, 5, 5, 7, 8, 4, 8, 2, 5, 9, 9, 1, ...]
// Write a function to print out all pairs that sum to 10 with average/best O(n) run-time complexity.
// Sample output: (1,9), (1,9), (6,4), (3,7), (2,8), (2,8), (5,5), (5,5), (5,5), (8,2), (8,2), (9,1), (9,1)
// Can print the pairs in any order, as long as numbers inside the pair respect the same order in which they appear in the original array. And it is acceptable to print each pair in a separate line.
 var input = [1, 6, 3, 2, 5, 5, 7, 8, 4, 8, 2, 5, 9, 9, 1];
 var sum = 10;

function findPairSum(input,sum) {

	var mapSum = {};
	var result = [];
	if(!isInt(sum)) {
		throw "Invalid sum";
	}

	input.forEach(function(value) {
		if(isInt(value)) {
			var difference = sum - value;
			if(value in mapSum) {
				for(var i=0;i<mapSum[value];i++) {
					result.push([difference,value]);
				}
			}
			if (difference in mapSum) {
				mapSum[difference]++;
			} else {
				mapSum[difference] = 1;
			}
		} else {
			throw "Invalid input " + value.toString();
		}
		
	});

	return result;

}

function printPairSum(input,sum) {
	var result = findPairSum(input,sum);
	result.forEach(function(values) {
		console.log('('+values[0].toString()+","+values[1].toString()+')');
	})
}

function isInt(value) {
  return !isNaN(value) && 
         parseInt(Number(value)) == value
}

printPairSum(input,sum);