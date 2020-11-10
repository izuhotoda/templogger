const ctx = document.getElementById('myChart')

dt = {
	datasets:[{
		data:[],
		borderColor: 'rgba(36, 47, 64, 0.5)',
		backgroundColor: 'rgba(54, 54, 54, 0.2)'
	}]
}
//////////////////////////////////////////////////////////
async function getTemps(){
	const response = await fetch('http://localhost:3000/api')
	const json = await response.json()
	return json
}
//////////////////////////////////////////////////////////
getTemps()
.then(temps=>{
	temps.forEach((temp, index)=>{	
		dt.datasets[0].data.push({x: index, y: temp.value})
	})
})
.then(_=>{
	const chart = new Chart(ctx,{
		type:'line',
		data: dt,
		options:{
			mantainAspectRatio: false,
			scales: {
				xAxes: [{
					type:'linear',
					position:'bottom'
				}]
			}
		}
	})
})
.catch(error => {
	console.log('NOK:\n' + error)
})