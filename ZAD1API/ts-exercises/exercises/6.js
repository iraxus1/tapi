/*
    Utwórz typ, zwracany przez funkcję `message`, który będzie aktualny niezależny od ciała funkcji `message`.
*/
var message = function (t) {
    if (typeof t === "string") {
        return "message: ".concat(t);
    }
    else if (typeof t === "number") {
        return t;
    }
    else {
        return new Error("Invalid type");
    }
};
var result1 = message("Hello");
var result2 = message(42);
var result3 = message(true);
console.log(result1);
console.log(result2);
console.log(result3);
