const add = (x, y) => {
    if (x == "") throw "'x' cannot be empty";
    if (isNaN(x)) throw "'x' is not a number";

    if (y == "") throw "'y' cannot be empty";
    if (isNaN(y)) throw "'y' is not a number";

    return x + y;
};

const subtract = (x, y) => {
    return x - y;
};

const multiply = (x, y) => {
    return x * y;
};

const divide = (x, y) => {
    if (y === 0) {
        throw "Cannot divide by 0!";
    }
    return x / y;
};

const clearAllfields = () => {
    return 0;
}


module.exports = {
    add,
    subtract,
    multiply,
    divide,
    clearAllfields
};