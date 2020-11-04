const {
	index
} = require('../controllers/index')

const { Router } = require('express')

const router = Router()

router.get('/', index)

module.exports = router