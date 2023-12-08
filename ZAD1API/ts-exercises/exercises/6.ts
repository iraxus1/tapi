/*
    Utwórz typ, zwracany przez funkcję `message`, który będzie aktualny niezależny od ciała funkcji `message`.
*/

type MessageReturnType = string | number | Error;

const message = (t: unknown): MessageReturnType => {
  if (typeof t === "string") {
    return `message: ${t}`;
  } else if (typeof t === "number") {
    return t;
  } else {
    return new Error("Invalid type");
  }
};

const result1: MessageReturnType = message("Hello");
const result2: MessageReturnType = message(42);
const result3: MessageReturnType = message(true);

console.log(result1);
console.log(result2);
console.log(result3);
