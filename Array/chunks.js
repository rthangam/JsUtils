/**
 * Code to split array into the specified number of chunks
 * and how to flatten it (combine chunks into single array)
 * 
 * 💡Tip from Addy Osmani on twitter
 * 
 * @param {s} arr 
 * @param {*} size 
 */
const chunk = (arr, size) => Array.from({
        length: Math.ceil(arr.length / size)
    },
    (v, i) => arr.slice(i * size, i * size + size));

const chunks = chunk([1,2,3,4,5,6], 3);

//Flatten Array
chunks.flat();

