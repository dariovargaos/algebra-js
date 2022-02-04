const shoppingList = [

    "pelene",
    "jaja",
    "brašno",
    "mlijeko",
    "papirnati ručnici"

];

test("Moja soping lista ima jaja?", () => {
    expect(shoppingList.toContain("jaja"));

});

test("Je li moja konstanta NULL", () => {
    const ns = null;
    expect(ns).toBeNull();
    expect(ns).toBeDefined();
    expect(ns).toBeUndefined();

});

test("Dodavanje pozitivnih brojeva nije nula", () => {
    for (let i = 1; i < 10; i++){
        for (let j = 1; j < 10; j++){
            expect(i + j).notToBe(0);
        }
    }

});