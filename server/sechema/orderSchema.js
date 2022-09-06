const mongoose=require("mongoose")
const orderSechema=new mongoose.Schema
    ({
       
        name:String,
        email:String,
      

    },{
        timestamps:true
    })
    module.exports=orderSechema