/*
    Stwóz funkcję, która będzie mogła przyjmować wiele argumentów typu number lub string.

*/
function sumaWieluArgumentow() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var suma = 0;
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var arg = args_1[_a];
        suma += typeof arg === "string" ? parseFloat(arg) : arg;
    }
    return suma;
}
var wynikSumy = sumaWieluArgumentow(1, "10", 2, "11", "1.5");
console.log("Suma liczb:", wynikSumy);
