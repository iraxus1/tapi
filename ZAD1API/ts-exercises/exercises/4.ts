/*
    Utwórz typ tuple, który przyjmie numer indeksu studenta, oraz jego ocenę, i nic więcej.
    Stwórz przykładową tablicę takich tupli.
*/

type StudentGradeTuple = [number, number];

const ocenyStudentow: StudentGradeTuple[] = [
  [123456, 4.5],
  [654321, 5.0],
  [420666, 3.5],
];

ocenyStudentow.forEach(([numerIndeksu, ocena]) => {
  console.log(`Student o numerze indeksu ${numerIndeksu} ma ocenę ${ocena}`);
});
