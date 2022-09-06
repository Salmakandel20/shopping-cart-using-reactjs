
const mongoose=require("mongoose")
const orderSchema =require( "../sechema/orderSchema")
const Order = mongoose.model("order", orderSchema)
module.exports=Order
