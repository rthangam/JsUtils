/**
 * Taken from https://gist.github.com/jakearchibald/c9093dee825601f9cc86f0894e9ec478
 * Thanks to https://gist.github.com/jakearchibald for the code
 * 
 * @param {*} obj 
 * 
 * Code to clone objects in javascript, this code preserves
 * cyclic references too.
 * 
 */
function clone(obj, cloneMap = new WeakMap){
    if(typeof obj != 'object' || !obj){
        return obj;
    }

    if(cloneMap.has(obj)){
        return cloneMap.get(obj);
    }

    if(Array.isArray(obj)){
        const r = [];
        cloneMap.set(obj, r);

        for(const [i, item] of obj.entries()){
            r[i] = clone(item, cloneMap);
        }

        return r;
    }

    const r = {};

    for(const key of Object.keys(obj)){
        r[key] = clone(obj[key], cloneMap);
    }

    return r;
}