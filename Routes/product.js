import express from "express";
import { getAllProducts, getAllProductsTesting, addProduct ,updateProduct} from "../Controllers/product.js"

const router = express.Router()

router.route("/").get(getAllProducts);

router.route("/addproduct").post(addProduct);

router.route("/updateproduct").post(updateProduct);

router.route("/testing").get(getAllProductsTesting);


export default router