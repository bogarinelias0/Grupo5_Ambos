const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("public"));

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/index.html');
});


app.get('/carrito', (req,res)=>{
    res.sendFile(__dirname + '/views/productCart.html');
});

app.get('/register', (req, res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});
app.get('/productos', (req,res)=>{
    res.sendFile(__dirname + '/views/catalogoDeProductos.html');
});


app.listen(process.env.PORT||3000, function(){
    console.log("Servidor corriendo en puerto 3000");
});