const controlador={
    index:(req, res) => {
        res.sendFile('productCart.html',{root:"./views"});
    
    }
}

module.exports=controlador;