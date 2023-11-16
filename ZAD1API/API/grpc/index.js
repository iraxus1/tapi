import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import fs from "fs";

let courses = fs.readFileSync("./server/datagen/courses.json", "utf8");
courses = JSON.parse(courses);

let groups = fs.readFileSync("./server/datagen/groups.json", "utf8");
groups = JSON.parse(groups);

let lectures = fs.readFileSync("./server/datagen/lectures.json", "utf8");
lectures = JSON.parse(lectures);

let rooms = fs.readFileSync("./server/datagen/rooms.json", "utf8");
rooms = JSON.parse(rooms);

let students = fs.readFileSync("./server/datagen/students.json", "utf8");
students = JSON.parse(students);

const server = new grpc.Server();
const coursesProto = grpc.loadPackageDefinition(
  protoLoader.loadSync("./proto/courses.proto")
);

server.addService(coursesProto.CoursesService.service, {
  getCourses: (_, callback) => {
    callback(null, { courses });
  },
  getCourse: (call, callback) => {
    const course = courses.find((c) => c.id === call.request.id);
    if (course) {
      callback(null, course);
    } else {
      callback({
        code: grpc.status.NOT_FOUND,
        details: "Not found",
      });
    }
  },
});

const groupsProto = grpc.loadPackageDefinition(
  protoLoader.loadSync("./proto/groups.proto")
);

server.addService(groupsProto.GroupsService.service, {
  getGroups: (_, callback) => {
    callback(null, { groups });
  },
  getGroup: (call, callback) => {
    const group = groups.find((g) => g.id === call.request.id);
    if (group) {
      callback(null, group);
    } else {
      callback({
        code: grpc.status.NOT_FOUND,
        details: "Not found",
      });
    }
  },
});

const lecturesProto = grpc.loadPackageDefinition(
  protoLoader.loadSync("./proto/lectures.proto")
);

server.addService(lecturesProto.LecturesService.service, {
  getLectures: (_, callback) => {
    callback(null, { lectures });
  },
  getLecture: (call, callback) => {
    const lecture = lectures.find((l) => l.id === call.request.id);
    if (lecture) {
      callback(null, lecture);
    } else {
      callback({
        code: grpc.status.NOT_FOUND,
        details: "Not found",
      });
    }
  },
});

const roomsProto = grpc.loadPackageDefinition(
  protoLoader.loadSync("./proto/rooms.proto")
);

server.addService(roomsProto.RoomsService.service, {
  getRooms: (_, callback) => {
    callback(null, { rooms });
  },
  getRoom: (call, callback) => {
    const room = rooms.find((r) => r.id === call.request.id);
    if (room) {
      callback(null, room);
    } else {
      callback({
        code: grpc.status.NOT_FOUND,
        details: "Not found",
      });
    }
  },
});

const studentsProto = grpc.loadPackageDefinition(
  protoLoader.loadSync("./proto/students.proto")
);

server.addService(studentsProto.StudentsService.service, {
  getStudents: (_, callback) => {
    callback(null, { students });
  },
  getStudent: (call, callback) => {
    const student = students.find((s) => s.id === call.request.id);
    if (student) {
      callback(null, student);
    } else {
      callback({
        code: grpc.status.NOT_FOUND,
        details: "Not found",
      });
    }
  },
});

server.bindAsync(
  "127.0.0.1:2137",
  grpc.ServerCredentials.createInsecure(),
  (err, port) => {
    if (err) {
      console.error(err);
      throw err;
    }
    console.log(`Listening on ${port}`);
    server.start();
  }
);
