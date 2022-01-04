const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("public"));

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/index.html');
});

app.listen(process.env.PORT||3000, function(){
    console.log("Servidor corriendo en puerto 3000");
});