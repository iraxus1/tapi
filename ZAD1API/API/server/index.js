import express from "express";
import {createServer} from "node:http";
import cors from "cors";

import students from "./datagen/students.json" assert { type: "json" };
import courses from "./datagen/courses.json" assert { type: "json" };
import lectures from "./datagen/lectures.json" assert { type: "json" };

import swaggerAutogen from 'swagger-autogen';
import swaggerUiExpress from 'swagger-ui-express';

import outputFile from './swagger-output.json' assert { type: "json" };


export const app = express();

export const server = createServer(app);

const options = {
  info: {
    title: 'Swagger',
    version: '1.0.0',
    description: 'Swagger API',
  },
  paths: {
    '/student/{id}': {
      get: {
        description: 'Get student by id',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            type: 'integer',
          },
        ],
        responses: {
          200: {
            description: 'Student found',
            },
          },
          404: {
            description: 'Student not found',
          },
        },
      },
    },
    '/course/{id}': {
      get: {
        description: 'Get course by id',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            type: 'integer',
          },
        ],
        responses: {
          200: {
            description: 'Course found',
          },
          404: {
            description: 'Course not found',
          },
        },
      },
    },
    '/lecture/{id}': {
      get: {
        description: 'Get lecture by id',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            type: 'integer',
          },
        ],
        responses: {
          200: {
            description: 'Lecture found',
          },
          404: {
            description: 'Lecture not found',
          },
        },
      },
    },
}

const def = await swaggerAutogen({openapi: '3.0.0'})(outputFile, ['./server/index.js'], options);

if(def){
  app.use('/swagger', swaggerUiExpress.serve, swaggerUiExpress.setup(outputFile));
}

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.json({ message: "Hello world!" });
});

app.get("/student/:id", (req, res) => {
  const student = students.find((s) => s.id === Number(req.params.id));
  if (student) {
    res.json(student);
  } else {
    res.status(404).json({ error: "Student not found" });
  }
});

app.get("/course/:id", (req, res) => {
  const course = courses.find((c) => c.id === Number(req.params.id));
  if (course) {
    res.json(course);
  } else {
    res.status(404).json({ error: "Course not found" });
  }
});

app.get("/lecture/:id", (req, res) => {
  const lecture = lectures.find((l) => l.id === Number(req.params.id));
  if (lecture) {
    res.json(lecture);
  } else {
    res.status(404).json({ error: "Lecture not found" });
  }
});

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});
