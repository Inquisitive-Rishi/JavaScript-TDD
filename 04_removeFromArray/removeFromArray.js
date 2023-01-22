const removeFromArray = function(arr, n) {
    const remElement = arr.splice(arr.indexOf(n), 1)
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
