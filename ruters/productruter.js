import  express from "express";
import { getProducts, saveProduct } from "../controler/productcontroler.js";

const productruter = express.Router();


productruter.get("/",getProducts);
productruter.post("/", saveProduct);


export default productruter;