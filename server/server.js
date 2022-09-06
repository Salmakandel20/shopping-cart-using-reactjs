const express=require("express")
const mongoose=require("mongoose")
const bodyParser=require("body-parser")
const  router  = require("./route/routes")
const orederRouter=require("./route/orderRouts")
const rundb = require("./config/db")
const app=express()
app.use(bodyParser.json())
app.use("/",router)
app.use("/",orederRouter)


rundb()


app.listen(5000,(req,res)=>{
    console.log("connection to server")
})