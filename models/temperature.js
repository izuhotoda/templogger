
const { Schema , model } = require('mongoose')


const tempScheme = new Schema({
	value : {
		type : Number,
		required : true
	},
	time : {
		type : Date,
		required : true,
		default: Date()
	}
})

module.exports = model('Temp', tempScheme)