const Sum = require("./Sum")

test('sum fn testing', () => {
    let num1 = 10;
    let num2 = 20;
    let output = 30;
    expect(Sum(num1, num2)).toBe(output);
});
