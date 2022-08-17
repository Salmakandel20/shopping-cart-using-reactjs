
const mongoose=require("mongoose")
const productSchema =require( "../sechema/productSechema")
const Product = mongoose.model("product", productSchema)
module.exports=Product
