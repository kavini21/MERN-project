import express from "express";
import { createUser, loginUser } from "../controler/usercontroler.js";

const userruter = express.Router();

userruter.post("/",createUser)
userruter.post("/login",loginUser)

export default userruter;