const sum = require('./sum');

test("Zbrajanje - 6 + 5 = 11", () =>  {
    expect(sum(6, 5).toBe(11));
});

test("Zbrajanje - 6 + 5 = 12 (ocekujemo fail)", () =>  {
    expect(sum(6, 5).toBe(12));
});