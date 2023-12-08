/*
    Stwórz funkcję która będzie mogła przyjmować wiele argumentów typu number lub string.
    Dopisz do tej funkcji ciało, które zwróci sumę wszystkich liczb.
    Jeśli podana liczba będzie stringiem należy ją sparsować do typu number.

    Dodaj do funkcji argument boolean, na podstawie któego zwracany wynik będzie typu number lub string.
*/

function sumaWieluTypow(
  arg1: number | string,
  arg2: number | string,
  returnTypeNumber: boolean
): number | string {
  const parsedArg1: number = typeof arg1 === "string" ? parseFloat(arg1) : arg1;
  const parsedArg2: number = typeof arg2 === "string" ? parseFloat(arg2) : arg2;

  const wynikSumy: number = parsedArg1 + parsedArg2;

  return returnTypeNumber ? wynikSumy : wynikSumy.toString();
}

const sumaLiczb: number = sumaWieluTypow(5, "10", true) as number;
const sumaLiczbJakoString: string = sumaWieluTypow(5, "10", false) as string;

console.log("Suma liczb (typ number):", sumaLiczb);
console.log("Suma liczb (typ string):", sumaLiczbJakoString);
