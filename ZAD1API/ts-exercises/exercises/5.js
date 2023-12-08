/*
    Przepisz podany niżej typ `Person` tak, aby funkcja `exam` działała poprawnie. i nie zwracała błędów.
*/
var exam = function (person) {
    if (person.type === "students") {
        person.takeExam();
    }
    else {
        person.prepareExam();
    }
};
var students = {
    type: "students",
    takeExam: function () {
        console.log("Student is taking the exam.");
    }
};
var teacher = {
    type: "teacher",
    prepareExam: function () {
        console.log("Teacher is preparing the exam.");
    }
};
exam(students);
exam(teacher);
