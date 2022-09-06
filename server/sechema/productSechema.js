const mongoose=require("mongoose")
const productSechema=new mongoose.Schema
    ({
        id:String,
        title:String,
        imageurl:String,
        disc:String,
        price:Number,
        sizes:[String]

    })
    module.exports=productSechema