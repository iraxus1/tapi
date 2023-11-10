import express from "express";
import {createServer} from "node:http";
import cors from "cors";
import { faker } from "@faker-js/faker";

import { getStudent, getLecture, getCourse } from "./datagen/generator.js";


export const app = express();

export const server = createServer(app);

app.use(
  cors({
    origin: "*",
  })
);

app.get("/student/:id", (req, res) => {
  const student = getStudent(req.params.id);
  res.json(student);
});

app.get("/course/:id", (req, res) => {
  const courses = getCourse(req.params.id);
  res.json(courses);
});

app.get("/lecture/:id", (req, res) => {
  const lectures = getLecture(req.params.id);
  res.json(lectures);
});

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});
