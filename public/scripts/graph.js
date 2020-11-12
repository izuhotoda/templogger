const ctx = document.getElementById('myChart')

dt = {
	datasets:[{
		data:[{
			t: moment(new Date()),
			y: 100
		}],
		borderColor: 'rgba(36, 47, 64, 0.5)',
		backgroundColor: 'rgba(54, 54, 54, 0.2)'
	}]
}

const chart = new Chart(ctx,{
		type:'line',
		data: dt,
		options:{
			mantainAspectRatio: false,
			scales: {
				xAxes: [{
					type:'time',
					position:'bottom',
					time: {
						unit: 'second'
					}
				}]
			}
		}
	})


const btn = document.getElementById('clickMe')
function addData(){
	chart.data.datasets.forEach((dataset)=>{
		dataset.label = dataset.data.length
		dataset.data.push({
			t: moment(new Date()),
			y: dataset.data[dataset.data.length-1].y + (Math.random()*2-1)*2})
		/*
		dataset.data.push({
			x: dataset.data.length, 
			y: dataset.data[dataset.data.length-1].y + (Math.random()*2-1)*2})
			*/
	})
	chart.update()
}

btn.addEventListener('click',()=>{
	addData()	
})

setInterval(addData, 100)

//////////////////////////////////////////////////////////
async function getTemps(){ 
	const response = await fetch('http://192.168.0.19:3000/api')
	const json = await response.json()
	return json
}
//////////////////////////////////////////////////////////

getTemps()
.then(temps=>{
	temps.forEach((temp, index)=>{	
		dt.datasets[0].data.push({t: moment(temp.time), y: temp.value})
	})
})
.then( _=> {
	chart.update()
})
.catch(error => {
	console.log('NOK:\n' + error)
})