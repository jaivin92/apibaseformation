import { allProduct, BaseModel } from "../Model/basemodel.js";

const getAllProducts = async (req, res) => {
    BaseModel.message = "Successfully Called Get All API"
    BaseModel.data = allProduct
    res.status(200).json(BaseModel)
}


const addProduct = async (req, res) => {
    if (req.body) {
        const { product } = req.body
        if (product != "") {
            console.log(product)
            const value = allProduct.indexOf(product)
            console.log(value)
            if (value >= 0) {
                BaseModel.message = "Product Alread Added"
                BaseModel.data = ""
            } else {
                allProduct.push(product)
                BaseModel.message = "Product Add Successfully"
                BaseModel.data = product
            }

        } else {
            BaseModel.status = false
            BaseModel.message = "Please insert value in product"
        }
        res.status(200).json(BaseModel)
    } else {
        BaseModel.status = false
        BaseModel.message = "Params are Mission"
        res.status(200).json(BaseModel)
    }
}


const updateProduct = async (req, res) => {
    const { currentproduct, changeproduct } = req.body

    const value = allProduct.indexOf(currentproduct)
    if (value >= 0){
       allProduct[value]  = changeproduct
       BaseModel.message = "Product Change Successfully"
    } else {
        BaseModel.message = "No Product Available"
        BaseModel.data = ""
    }
    res.status(200).json(BaseModel)
}

const getAllProductsTesting = async (req, res) => {
    console.log({ datas })
    res.status(200).json({ msg: "All Product testing show" });
}


export { getAllProducts, getAllProductsTesting, addProduct, updateProduct };