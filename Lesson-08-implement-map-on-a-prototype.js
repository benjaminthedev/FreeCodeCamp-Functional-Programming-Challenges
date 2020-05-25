// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myMap = function (callback) {
    var newArray = [];
    // Only change code below this line

    for (let i = 0; i < this.length; i++) {
        const ele = this[i];
        newArray.push(callback(ele));
    }

    //or es6 using forEach - which is cleaner.
    this.forEach(ele => {
        newArray.push(callback(ele));
    });

    // Only change code above this line
    return newArray;

};

var new_s = s.myMap(function (item) {
    return item * 2;
});
