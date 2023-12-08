/*
    Stwóz funkcję, która będzie mogła przyjmować wiele argumentów typu number lub string.

*/

function sumaWieluArgumentow(...args: (number | string)[]): number {
  let suma: number = 0;

  for (const arg of args) {
    suma += typeof arg === "string" ? parseFloat(arg) : arg;
  }

  return suma;
}

const wynikSumy: number = sumaWieluArgumentow(1, "10", 2, "11", "1.5");
console.log("Suma liczb:", wynikSumy);
