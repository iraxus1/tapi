/*
    Przepisz podany niżej typ `Person` tak, aby funkcja `exam` działała poprawnie. i nie zwracała błędów.
*/

interface Students {
  type: "students";
  takeExam: () => void;
}

interface Teacher {
  type: "teacher";
  prepareExam: () => void;
}

type Person = Students | Teacher;

const exam = (person: Person) => {
  if (person.type === "students") {
    person.takeExam();
  } else {
    person.prepareExam();
  }
};

const students: Person = {
  type: "students",
  takeExam: () => {
    console.log("Student is taking the exam.");
  },
};

const teacher: Person = {
  type: "teacher",
  prepareExam: () => {
    console.log("Teacher is preparing the exam.");
  },
};

exam(students);
exam(teacher);
