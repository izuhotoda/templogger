const { Router } = require('express')

const {
	list,
	viewUser,
	newTemp,
	updateUser,
	deleteUser
} = require('../controllers/api')


const router = Router()


router.get('/', list)

router.get('/:userId', viewUser)

router.post('/', newTemp)

router.put('/:userId', updateUser)

router.delete('/:userId', deleteUser)

module.exports = router