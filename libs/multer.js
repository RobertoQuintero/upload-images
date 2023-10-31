const multer =require("multer");

const {v4: uuid}=require('uuid')
const path=require('path') 

const storage=multer.diskStorage({
  destination:'uploads',
  filename:async(req,file,cb)=>{
   console.log()
    cb(null,file.originalname+`.${file.mimetype.split('/')[1]}`)
  }
})

module.exports= multer({storage})