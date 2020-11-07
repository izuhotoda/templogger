/*
		let request = new XMLHttpRequest();
		var ctx = document.getElementById('myChart').getContext('2d');
		let something = 0

		request.open('GET', 'https://julia004.herokuapp.com/api/');
		request.responseType = 'json';
		let data = []


		let myVar = setInterval(myTimer, 10000)

		function myTimer(){
			console.log(something++);
			data = []
			request.open('GET', 'https://julia004.herokuapp.com/api/');
			request.send();
		}

		request.onload = function(){
			for (o of request.response)
				data.push({t: moment(o.time), y: o.temp});

			var myChart = new Chart(ctx, {
				type: 'line',
				data: {
					datasets: [{
						label: 'Sempron',
						data:data
					}]
				},
				options: {
					scales: {
				/*	yAxes: [{
						ticks: {
							beginAtZero: true
						}
					}],
					*/	/*xAxes: [{
						type: 'time',
						time: {unit:'minute'},
					}]
				}
			}
		});
		}

		request.send();
*/
var ctx = document.getElementById('myChart').getContext('2d');

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 9, 3, 5, 2, 3, 12, 9, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
//		responsive : true,
//		maintainAspectRatio: false,
		title: {
			display: true,
			text: 'Solo me falta esto'

		},
		legend: {
			position: 'right',
			onClick: (text)=>{
				alert('click on legend'),
				text

			}},
//    	aspectRatio: 5,
	
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
