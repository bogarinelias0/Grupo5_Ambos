const express= require("express");
const router = express.Router();

const editarprod = require('../controllers/editprodController');

router.get("/",editarprod.edit);

module.exports=router;