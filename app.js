
const express = require('express')
const app=express()
const uploads = require('./routes/uploads')
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.use('/api',uploads)
app.use('/uploads',express.static('uploads'))

app.listen(3001,()=>{
  console.log('servidor corriendo en puerto 8000')
})