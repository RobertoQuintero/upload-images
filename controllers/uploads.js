const {response,request}= require('express')

const uploadImage=(req=request,res=response)=>{

  try {
    return res.json({
      ok:true,
      data:`http://localhost:3001/uploads/${req.file.filename}`
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