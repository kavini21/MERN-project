import express from "express";

import { getStudents, saveStudent } from "../controler/studentcontroler.js";

const studentruter = express.Router()

studentruter.get("/",getStudents)


studentruter.post("/", saveStudent)

export default studentruter;