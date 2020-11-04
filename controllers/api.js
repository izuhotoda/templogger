const Temp = require('../models/temperature')
const createTemp = async(t) => {
	const temp = new Temp({
		value : t,
	})
	return await temp.save()
}
const listTemps = async _=>	await Temp.find() 

module.exports = {
	list : (req, res, next) => {
		listTemps()
		.then((temps)=>{
			res.json(temps)
		})
	},
	viewUser : (req, res, next)=>{
		console.log('GET received')
		res.json(req.params)
	},

	newTemp : (req, res, next) => {
		createTemp(req.body.value)
		.then(()=> {res.json( {added : "ok"})})
	},

	updateUser : (req, res, next)=>{
		console.log('PUT received', req.params)
		res.end()
	},

	deleteUser : (req, res, next)=>{
		console.log('DELETE received to erase: ', req.params)
		res.end()
	}
}