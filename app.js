
const express = require('express')
const app=express()
const uploads = require('./routes/uploads')
const cors = require('cors')
require('dotenv').config()

app.use(express.json())
app.use(cors())

app.use('/api',uploads)
app.use('/uploads',express.static('uploads'))

app.listen(process.env.PORT,()=>{
  console.log(`servidor corriendo en puerto ${process.env.PORT}`)
})