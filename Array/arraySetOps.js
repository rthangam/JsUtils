let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [5, 6, 7, 8, 9, 10];

//Intersection
const intersect = arr1.filter(x => arr2.includes(x));

//Difference
const difference = arr1.filter(x => !arr2.includes(x));

//union
const union = arr1.concat(arr2);

//Symmetric Difference
const symDifference =
    arr1.filter(x => !arr2.includes(x))
        .concat(arr2.filter(x => !arr1.includes(x)));
