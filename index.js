const express= require('express');
const cors= require('cors')
const app=express();

require('dotenv').config();

const PORT = process.env.PORT || 8000;

//Allows client sidde to connect to server side without issues
app.use(cors());

//Used to access public folder for images
app.use(express.static('public'));

const productRoute=require("./routes/productRoute")
app.use("/", productRoute)
app.listen(PORT, ()=>{
    console.log(`listening at port ${PORT}`)
})