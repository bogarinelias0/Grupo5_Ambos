const express = require("express");
const router = express.Router();
const path = require('path');
const creacionProduct = require('../controllers/creacionController');


router.get("/creacionproduct", creacionProduct.creacionprod);


module.exports = router;