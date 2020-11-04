const express = require('express')
const api = require('./routes/api')
const index = require('./routes/index')
const morgan = require('morgan')
const mongoose = require('mongoose')


// data base conection
mongoose.connect('mongodb://localhost:27017/tempstore',{ 
	useNewUrlParser: true,
	useUnifiedTopology: true
	 })

// Server on
app = express()

app.listen(3000, ()=>{
	console.log('Listen on 3000.')
})

//database conection
mongoose.connection.on('open',()=>{
	console.log('Conected to mongodb.')
})

// Template engine
app.set('view engine', 'ejs')
app.use(morgan('dev'))

app.use(express.json())

app.use('/', index)
app.use('/api', api)