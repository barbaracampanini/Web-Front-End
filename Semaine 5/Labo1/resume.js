window.addEventListener('load', (event) => {
  			const data = JSON.parse(localStorage.getItem("data"));
			
			let table = document.getElementById('tbody');

			let elements = [];
			for (var i = 0; i < data.length; i++) { 								 
				table.insertAdjacentHTML('beforeend', `<tr><td>${data[i].product}</td><td>${data[i].quantity}</td></tr>`)
			}
		});