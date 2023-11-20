import { faker } from "@faker-js/faker";
import fs from 'fs';
import { addDays, addMinutes, endOfWeek, startOfWeek } from "date-fns";

const DEFAULT_FROM_DATE = addDays(startOfWeek(new Date()), 1);
const DEFAULT_TO_DATE = endOfWeek(new Date());

export const getStudent = (id) => {
  faker.seed(Number(id));
  return {
    id: id,
    name: faker.person.firstName(),
    surname: faker.person.lastName(),
    email: faker.internet.email(),
  };
};

export const getCourse = (id) => {
  faker.seed(Number(id));
  return {
    id: id,
    name: faker.lorem.words(3),
    description: faker.lorem.sentence(),
    startDate: faker.date.between({DEFAULT_FROM_DATE, DEFAULT_TO_DATE}),
    endDate: faker.date.between({DEFAULT_FROM_DATE, DEFAULT_TO_DATE}),
  };
};

export const getLecture = (id) => {
  faker.seed(Number(id));
  return {
    id: id,
    name: faker.person.firstName(),
    surname: faker.person.lastName(),
    email: faker.internet.email()
  };
};

export const getGroup = (id) => {
  faker.seed(Number(id));
  return {
    id: id,
    name: faker.lorem.words(3),
    description: faker.lorem.sentence(),
  };
};

export const getRoom = (id) => {
  faker.seed(Number(id));
  return {
    id: id,
    name: faker.lorem.words(3),
    description: faker.lorem.sentence(),
    capacity: faker.datatype.number(100),
  };
};

//students data, 1000 students next export to students.json
export const students = Array.from({ length: 1000 }, (_, i) => getStudent(i));
fs.writeFileSync('./students.json', JSON.stringify(students));

//courses data, 1000 courses next export to courses.json
export const courses = Array.from({ length: 1000 }, (_, i) => getCourse(i));
fs.writeFileSync('./courses.json', JSON.stringify(courses));

//lectures data, 1000 lectures next export to lectures.json
export const lectures = Array.from({ length: 1000 }, (_, i) => getLecturer(i));
fs.writeFileSync('./lectures.json', JSON.stringify(lectures));

//groups data, 1000 groups next export to groups.json
export const groups = Array.from({ length: 1000 }, (_, i) => getGroup(i));
fs.writeFileSync('./groups.json', JSON.stringify(groups));

//rooms data, 1000 rooms next export to rooms.json
export const rooms = Array.from({ length: 1000 }, (_, i) => getRoom(i));
fs.writeFileSync('./rooms.json', JSON.stringify(rooms));

