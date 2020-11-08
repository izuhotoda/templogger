const ctx = document.getElementById('myChart')
dt = {
	datasets:[{
		data:[],
		borderColor: 'rgba(36, 47, 64, 0.5)',
		backgroundColor: 'rgba(54, 54, 54, 0.2)'


	}],
}

for( i = 0; i < 50; i++){
	dt.datasets[0].data.push({x: i, y: Math.random()})
}
console.log(dt)

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