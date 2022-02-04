function findMax(numbers) {
    if (!numbers) {
        return undefined;
    }
    var i;
    var max = -Infinity;
    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}

const testArray = [1, -72, 10, -4, 0, 0.0001, 999, 132914];


module.exports = findMax;