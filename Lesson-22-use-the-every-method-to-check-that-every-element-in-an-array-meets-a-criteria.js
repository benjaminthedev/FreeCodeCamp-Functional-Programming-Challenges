function checkPositive(arr) {
    // Only change code below this line
    const result = arr.every(function (value) {
        return value > 0;
    });

    return result;
    // Only change code above this line
}
checkPositive([1, 2, 3, -4, 5]);


//Or do it like this:


function checkPositive(arr) {
    // Only change code below this line
    return arr.every(value => { return value > 0; });
    // Only change code above this line
}
checkPositive([1, 2, 3, -4, 5]);

