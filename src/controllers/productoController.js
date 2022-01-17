const controlador= {
    catalogo: (req,res)=>{
        res.sendFile("catalogoDeProductos.html",{root:"./views"});
    },

    detalle: (req, res) => {
        let idProducto =req.params.idProducto;
        let recurso = "productDetail"+idProducto+".html";
        res.sendFile(recurso,{root:"./views"});
    }

};

module.exports=controlador;