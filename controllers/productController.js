const fs=require('fs')

exports.index=(req, res)=>{
    fs.readFile('./products.json', 'utf-8',(err,data)=>{
        if(err){
            console.log(err)
            return res.send("error loading videos")
        }
        data=JSON.parse(data)
        return res.json(data)
    })
}