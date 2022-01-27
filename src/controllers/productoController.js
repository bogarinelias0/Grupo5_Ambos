const controlador= {
    catalogo: (req,res)=>{
        res.render("catalogoDeProductos");
    },

    detalle: (req, res) => {
        let idProducto =req.params.idProducto;
        let recurso = "productDetail"+idProducto;
        res.render(recurso);
    }

};

module.exports=controlador;