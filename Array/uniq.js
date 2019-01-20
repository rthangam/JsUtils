/**
 *  Removing duplicates in an array using Set and spread ( ... ) operator
 *
 *  
 */

 let arr = [1,2,1,2,2,3,4,5,2,3,4,5,1,1];

 //Using set
 const uniq = arr => [... new Set(arr)]; //[1,2,3,4,5]

 const uniq1 = arr => Array.from(new Set(arr));//[1,2,3,4,5]

 //Probably the fastest
 function uniqueArray(arr){
 	const seen = new Set();

 	return arr.filter(x => {
 		if(seen.has(x)){
 			return false;
 		}

 		seen.add(x);
 		return true;
 	});
 }
