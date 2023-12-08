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

type Student = {
  imie: string;
  nazwisko: string;
  numerIndeksu: number;
  zajecia: string[];
  oceny?: number[];
  studiaSkonczone: boolean;
};

type Nauczyciel = {
  imie: string;
  nazwisko: string;
  przedmiot: string;
  przygotowaneEgzaminy: any[];
  przeprowadzEgzamin: () => void;
};

type Osoba = (Student | Nauczyciel)[];

type ImieNazwisko = {
  imie: string;
  nazwisko: string;
};

function wypiszImionaNazwiska(osoby: Osoba): ImieNazwisko[] {
  return osoby.map((osoba) => ({ imie: osoba.imie, nazwisko: osoba.nazwisko }));
}

const student1: Student = {
  imie: "Jan",
  nazwisko: "Kowalski",
  numerIndeksu: 123456,
  zajecia: ["Matematyka", "Fizyka"],
  oceny: [4.5, 5.0],
  studiaSkonczone: false,
};

const nauczyciel1: Nauczyciel = {
  imie: "Anna",
  nazwisko: "Nowak",
  przedmiot: "Chemia",
  przygotowaneEgzaminy: [{ typ: "pisemny" }, { typ: "ustny" }],
  przeprowadzEgzamin: () => {
    console.log("Przeprowadzenie egzaminu");
  },
};

const osoby: Osoba = [student1, nauczyciel1];

const imionaNazwiska: ImieNazwisko[] = wypiszImionaNazwiska(osoby);

console.log(imionaNazwiska);
