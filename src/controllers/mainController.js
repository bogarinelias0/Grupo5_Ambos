const controlador = {
    home:(req, res) => {
        res.sendFile('index.html',{root:"./views"});
    },
}

module.exports=controlador;