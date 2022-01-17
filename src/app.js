const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("public"));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});


app.get('/carrito', (req, res) => {
    res.sendFile(__dirname + '/views/productCart.html');

});
app.get('/detalleamboblanco', (req, res) => {
    res.sendFile(__dirname + '/views/productDetail.html');
});

app.get('/detalleambofucsia', (req, res) => {
    res.sendFile(__dirname + '/views/productDetail2.html');
});

app.get('/detalleambocombinado', (req, res) => {
    res.sendFile(__dirname + '/views/productDetail3.html');
});
app.get('/detalleambogris', (req, res) => {
    res.sendFile(__dirname + '/views/productDetail4.html');
});
app.get('/detalleamboceleste', (req, res) => {
    res.sendFile(__dirname + '/views/productDetail5.html');
});
app.get('/detalleamborosado', (req, res) => {
    res.sendFile(__dirname + '/views/productDetail6.html');
});


app.get('/register', (req, res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/views/login.html');
});
app.get('/productos', (req,res)=>{
    res.sendFile(__dirname + '/views/catalogoDeProductos.html');
});

app.get('/productCart', (req, res)=>{
    res.sendFile(__dirname + '/views/productCart.html');
})


app.listen(process.env.PORT || 3000, function() {
    console.log("Servidor corriendo en puerto 3000");
});