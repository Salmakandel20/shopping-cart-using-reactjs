const mongoose= require("mongoose")
    const connectionUrl="mongodb://localhost/react_shopping"

function rundb(){
mongoose.connect(connectionUrl, {useNewUrlParser:true,useUnifiedTopology:true})
.then((res)=>console.log("connection Done"))


}
module.exports=rundb