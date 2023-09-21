const router = require("express").Router();
const storesController=require( "../controllers/storesController")
router
.route("/stores")
.get(storesController.index)

module.exports=router