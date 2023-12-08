/*
    Utwórz typ tuple, który przyjmie numer indeksu studenta, oraz jego ocenę, i nic więcej.
    Stwórz przykładową tablicę takich tupli.
*/
var ocenyStudentow = [
    [123456, 4.5],
    [654321, 5.0],
    [420666, 3.5],
];
ocenyStudentow.forEach(function (_a) {
    var numerIndeksu = _a[0], ocena = _a[1];
    console.log("Student o numerze indeksu ".concat(numerIndeksu, " ma ocen\u0119 ").concat(ocena));
});
