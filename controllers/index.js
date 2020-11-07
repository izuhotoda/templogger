db = [{
	value : 4,
	time : Date.now()
},{
	value : 7,
	time : Date.now()
}]

module.exports = {
	index : (req, res, next) => {
		res.render('../views/index',{temp_list: db})
	}
}
