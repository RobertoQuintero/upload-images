const fs = require('fs');
const {response,request}= require('express')

const uploadImage=(req=request,res=response)=>{

  const name=String(req.body.name.split('uploads/')[1]) 
  const directoryPath = __dirname.split('controllers')[0]+'uploads/'+name ;
  
  // console.log(req.file.filename)
  // console.log(name)
  // return

  if(name!==req.file.filename){
    fs.unlink(directoryPath , (err) => {
      console.log("Delete File successfully.");
  });
  }
  try {
    return res.json({
      ok:true,
      data:`${process.env.BASE_URL}:${process.env.PORT}/uploads/${req.file.filename}`
    })
  } catch (error) {
    console.log({error})
    return res.status(400).json({
      ok:false,
      data:'Error al subir imagen'
    })  
  }
}

module.exports={
 uploadImage
}