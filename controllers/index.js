const Temp = require('../models/temperature')


async function getTemps(){
	return await Temp.find()
}

module.exports = {
	index : (req, res, next) => {
		getTemps()
		.then((temps)=>{
			res.render('../views/index',{temp_list: temps})
		})
	}
}
