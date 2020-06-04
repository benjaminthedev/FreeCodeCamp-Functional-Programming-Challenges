const squareList = (arr) => {
    // Only change code below this line

    let posInterSq = arr.filter(num => {
        if (Number.isInteger(num) && num > 0) return num;
    })
        .map(num => {
            return num * num;
        });

    return posInterSq;
    // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
