function nextPage() {
			const inputsNode = document.querySelectorAll('.js-quantity');
			const inputsArray = Array.from(inputsNode)
			const data = []
			inputsArray.map(input => {
				if (input.valueAsNumber > 0) {
					data.push({'product': input.name, 'quantity': input.valueAsNumber})
				}
			})
			if (data.length > 0) {
				localStorage.setItem('data', JSON.stringify(data))
				window.location = "resume.html"
			} else {
				alert('Vous devez choisir au moins un produit!')
			}
		}