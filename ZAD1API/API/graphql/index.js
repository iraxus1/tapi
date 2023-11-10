import express from "express";
import fs from "fs";
import cors from "cors";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";

const app = express();
const typeDefs = `#graphql
    type Student {
        id: Int
        name: String
        surname: String
        email: String
    }
    type Course {
        id: ID!
        name: String
        description: String
        startDate: String
        endDate: String
    }
    type Lecturer {
        id: ID!
        name: String
        surname: String
        email: String
    }
    type Room {
        id: ID!
        name: String
        description: String
        capacity: Int
    }
    type Group {
        id: ID!
        name: String
        description: String
    }
    type Query {
        students: [Student]
        courses: [Course]
        lecturers: [Lecturer]
        rooms: [Room]
        groups: [Group]
    }
    `;

const resolvers = {
  Query: {
    students: () => {
      return JSON.parse(fs.readFileSync("./server/datagen/students.json", "utf8"));
    },
    courses: () => {
      return JSON.parse(fs.readFileSync("./server/datagen/courses.json", "utf8"));
    },
    lecturers: () => {
      return JSON.parse(fs.readFileSync("./server/datagen/lectures.json", "utf8"));
    },
    rooms: () => {
      return JSON.parse(fs.readFileSync("./server/datagen/rooms.json", "utf8"));
    },
    groups: () => {
      return JSON.parse(fs.readFileSync("./server/datagen/groups.json", "utf8"));
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

await server.start();
app.use("/graphql", cors(), express.json(), expressMiddleware(server));
app.use(
  cors({
    origin: "*",
  })
);

app.listen(2137, () => {
  console.log("Server listening on port 2137");
});
