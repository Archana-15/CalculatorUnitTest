const { add, subtract, multiply, divide, clearAllfields, Equal } = require("./calculator");

//-------------- Addition function-------------------


describe("Calling Addition function", () => {
    test("5 + 5 = 10", () => {
        expect(add(5, 5)).toEqual(10);
    });

    test("0.1 + 0.5 = 0.6", () => {
        expect(add(0.1, 0.5)).toEqual(0.6);
    });

    test("Invalid scenario: Cannot add a number with an empty string", () => {
        expect(() => {
            expect(add("", 0.5));
        });
    });

    test("Entered value is not a number", () => {
        expect(() => {
            expect(add('a', 5));
        });
    });
});

//--------------Substraction Function -------------------
describe("Calling Substraction function", () => {
    test("10 - 5 = 5", () => {
        expect(subtract(10, 5)).toEqual(5);
    });

    test("0.9 - 0.5 = 0.4", () => {
        expect(subtract(0.9, 0.5)).toEqual(0.4);
    });

    test("6 - 20 = -14", () => {
        expect(subtract(6, 20)).toEqual(-14);
    });

});

//-------------- Multiplication Function-------------------

describe("Calling Multiplication function", () => {
    test("10 * 5 = 50", () => {
        expect(multiply(10, 5)).toEqual(50);
    });

    test("-0.3 * 0.2 = -0.06", () => {
        expect(multiply(-0.3, 0.2)).toEqual(-0.06);
    });
});

//-------------- Division function-------------------

describe("Calling Division function", () => {
    test("10 / 5 = 2", () => {
        expect(divide(10, 5)).toEqual(2);
    });

    test("Number is not divisable by 0", () => {
        expect(() => {
            expect(divide(20, 0));
        });
    });
});

//-------------- Clear All Fields function--------------------

describe("Calling Clear All Fields function", () => {

    test("Clears the given number to 0", () => {
        expect(clearAllfields(30)).toEqual(0);
    });

    test("Clears the given number to 0", () => {
        expect(clearAllfields(60)).toEqual(0);
    });
});

//-------------- EQUAL function-------------------

describe("Calling Equal function", () => {
    test("In Valid scenario for '=' operator (You need to provide valid number before and after an operator", () => {
        expect(() => {
            expect(Equal("", "+", ""));
        });
    });

    test("Valid scenario for '=' operator (2 + 3 = 5)", () => {
        expect(Equal(2, "+", 3)).toEqual(5);
    });

});

//--------------Decimal Multiplication and Division------------------
describe("Perform Decimal Multiplication and Division", () => {

    test("0.3 * 0.2 = 0.06", () => {
        expect(multiply(0.3, 0.2)).toEqual(0.06);
    });

    test("0.5 / 0.2 = 2.5", () => {
        expect(divide(0.5, 0.2)).toEqual(2.5);
    });

});