const express= require('express');
const app=express();
const cors= require('cors')
require('dotenv').config()
const { CORS_ORIGIN, PORT, BACKEND_URL } = process.env;
const productRoute=require("./routes/productRoute")
app.use("/", productRoute)
app.listen(PORT, ()=>{
    console.log(`listening at port ${PORT}`)
})