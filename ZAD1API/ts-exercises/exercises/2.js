/*
    Stwórz funkcję która będzie mogła przyjmować wiele argumentów typu number lub string.
    Dopisz do tej funkcji ciało, które zwróci sumę wszystkich liczb.
    Jeśli podana liczba będzie stringiem należy ją sparsować do typu number.

    Dodaj do funkcji argument boolean, na podstawie któego zwracany wynik będzie typu number lub string.
*/
function sumaWieluTypow(arg1, arg2, returnTypeNumber) {
    var parsedArg1 = typeof arg1 === "string" ? parseFloat(arg1) : arg1;
    var parsedArg2 = typeof arg2 === "string" ? parseFloat(arg2) : arg2;
    var wynikSumy = parsedArg1 + parsedArg2;
    return returnTypeNumber ? wynikSumy : wynikSumy.toString();
}
var sumaLiczb = sumaWieluTypow(5, "10", true);
var sumaLiczbJakoString = sumaWieluTypow(5, "10", false);
console.log("Suma liczb (typ number):", sumaLiczb);
console.log("Suma liczb (typ string):", sumaLiczbJakoString);
