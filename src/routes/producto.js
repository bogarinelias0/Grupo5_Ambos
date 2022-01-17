const express=require("express");
const router = express.Router();

const productoController = require('../controllers/productoController');

router.get("/",productoController.catalogo);

router.get("/detalle/:idProducto",productoController.detalle);

module.exports=router;