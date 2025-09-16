import express from "express";
import { createUser } from "../controler/usercontroler.js";

const userruter = express.Router();

userruter.post("/",createUser)

export default userruter;