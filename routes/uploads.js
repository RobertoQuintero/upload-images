const {Router}= require('express')
const { uploadImage } = require('../controllers/uploads')
const multer = require('../libs/multer')

const router= Router()

router.post('/uploads',multer.single('file'),uploadImage)
module.exports = router