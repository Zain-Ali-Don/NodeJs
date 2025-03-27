var exp = require("express")
var r = require("./Route/Router");
require("dotenv").config();

let app = exp()
app.use("/",r);

app.listen(process.env.PORT,()=>{
    console.log(`Server Started at http://localhost:3002`)
});