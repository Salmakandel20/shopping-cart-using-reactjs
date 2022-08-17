const express=require("express")
const mongoose=require("mongoose")
const bodyParser=require("body-parser")
const  router  = require("./route/routes")
const app=express()
app.use(bodyParser.json())
app.use("/",router)
const connectionUrl="mongodb://localhost/react_shopping"
mongoose.connect(connectionUrl, {useNewUrlParser:true,useUnifiedTopology:true})
.then((res)=>console.log("connection Done"))


app.listen(3005,(req,res)=>{
    console.log("connection to server")
})