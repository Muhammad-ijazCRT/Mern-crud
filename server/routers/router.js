const express = require('express')
var router = express.Router()

const { getPosts, insertPost, getSinglePost, updateSinglePost } = require('../controllers/postController')

router.get('/', getPosts)
router.post('/', insertPost)
router.get('/:id', getSinglePost)
router.post('/update/:id', updateSinglePost)

module.exports = router