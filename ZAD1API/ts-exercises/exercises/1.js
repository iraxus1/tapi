/*
    Utwórz typy dla studenta oraz nauczyciela.

    Student powinien mieć:
    - imię
    - nazwisko
    - numer indeksu
    - listę zajęć na które uczęszcza
    - listę ocen (może nie posiadać żadnej)
    - informację czy studia skończone

    Nauczyciel powinien mieć:
    - imię
    - nazwisko
    - przedmiot
    - przygotowane egzaminy (których typu nie znamy ;) )
    - funkcję do przeprowadzania egzaminu

    Stwórz również typ dla tablicy, która może zawierać zarówno studentów jak i nauczycieli.
    Stwórz typ na podstawie typu studenta oraz nauczyciela, który pozwoli nam wypisać ich imiona oraz nazwiska.
*/
function wypiszImionaNazwiska(osoby) {
    return osoby.map(function (osoba) { return ({ imie: osoba.imie, nazwisko: osoba.nazwisko }); });
}
var student1 = {
    imie: "Jan",
    nazwisko: "Kowalski",
    numerIndeksu: 123456,
    zajecia: ["Matematyka", "Fizyka"],
    oceny: [4.5, 5.0],
    studiaSkonczone: false
};
var nauczyciel1 = {
    imie: "Anna",
    nazwisko: "Nowak",
    przedmiot: "Chemia",
    przygotowaneEgzaminy: [{ typ: "pisemny" }, { typ: "ustny" }],
    przeprowadzEgzamin: function () {
        console.log("Przeprowadzenie egzaminu");
    }
};
var osoby = [student1, nauczyciel1];
var imionaNazwiska = wypiszImionaNazwiska(osoby);
console.log(imionaNazwiska);
