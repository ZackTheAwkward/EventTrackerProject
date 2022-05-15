window.addEventListener('load', function(e) {
	console.log('document loaded');
	init();
});

function init() {
	console.log('in init()');
	document.findBeer.lookup.addEventListener('click', function(event) {
		event.preventDefault();
		let beerId = document.findBeer.beerId.value;
		if (!isNaN(beerId) && beerId > 0) {
			getBeer(beerId);
		}



	});


	//Event Listener for Post Method(Adding Beer)
	document.createBeerForm.createBeer.addEventListener('click', createBeer);







	//Event Listener for Put Method(Updating Beer)
	document.updateBeerForm.updateBeer.addEventListener('click', function(event) {
		event.preventDefault();
		let updateId = document.updateBeerForm.updateId.value;
		console.log(updateId);
		if (!isNaN(updateId) && updateId > 0) {
			updateBeer(updateId);
		}
	});


	document.deleteBeer.lookup.addEventListener('click', function(event) {
		event.preventDefault();
		let deleteId = document.deleteBeer.deleteId.value;
		console.log(deleteId);
		if (!isNaN(deleteId) && deleteId > 0) {
			deleteBeer(deleteId);
		}
	});

	document.findBeerRange.range.addEventListener('click', function(event) {
		event.preventDefault();
		let min = document.findBeerRange.min.value;
		let max = document.findBeerRange.max.value;
		console.log(min);
		console.log(max);
		if (!isNaN(min) && min > 0) {
			findBeerByABVRange(min, max);
		}


	});




}










function getBeer(beerId) {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/beers/' + beerId);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let beer = JSON.parse(xhr.responseText);
				console.log(beer);
				displayBeer(beer);
			}
		} else {
			console.log('Beer not found');
		}
	}
	xhr.send();
};

function displayBeer(beer) {
	let beerDiv = document.getElementById('beerData');
	beerDiv.textContent = '';

	let h1 = document.createElement('h1');
	h1.textContent = beer.name;
	beerDiv.appendChild(h1);

	let ul = document.createElement('ul');

	let type = document.createElement('li');
	type.textContent = 'Style: ' + beer.type;
	ul.appendChild(type);

	let abv = document.createElement('li');
	abv.textContent = 'ABV%: ' + beer.abv;
	ul.appendChild(abv);

	let company = document.createElement('li');
	company.textContent = 'Company: ' + beer.company;
	ul.appendChild(company);

	beerDiv.appendChild(ul);

	let bq = document.createElement('blockquote');
	bq.textContent = beer.description;
	beerDiv.appendChild(bq);

	//TODO: FIGURE OUT DOM IMAGE

}
function createBeer(e) {
	e.preventDefault();
	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/beers', true);

	xhr.setRequestHeader("Content-type", "application/json"); // Specify JSON request body

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status == 200 || xhr.status == 201) { // Ok or Created
				let data = JSON.parse(xhr.responseText);
				displayBeer(data);
			}
			else {
				console.error("POST request failed.");
				console.error(xhr.status + ': ' + xhr.responseText);
			}
		}
	};
	let beer = {
		name: document.createBeerForm.name.value,
		type: document.createBeerForm.type.value,
		abv: document.createBeerForm.abv.value,
		company: document.createBeerForm.company.value,
		description: document.createBeerForm.description.value,
		imageUrl: document.createBeerForm.imageUrl.value,
	};

	xhr.send(JSON.stringify(beer));

}

function updateBeer(updateId) {
	let xhr = new XMLHttpRequest();
	xhr.open('PUT', 'api/beers/' + updateId, true);

	xhr.setRequestHeader("Content-type", "application/json"); // Specify JSON request body

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status == 200 || xhr.status == 201) { // Ok or Created
				let data = JSON.parse(xhr.responseText);
				displayBeer(data);
			}
			else {
				console.error("PUT request failed.");
				console.error(xhr.status + ': ' + xhr.responseText);
			}
		}
	};
	let beer = {
		id: document.updateBeerForm.updateId.value,
		name: document.updateBeerForm.name.value,
		type: document.updateBeerForm.type.value,
		abv: document.updateBeerForm.abv.value,
		company: document.updateBeerForm.updateCompany.value,
		description: document.updateBeerForm.description.value,
		imageUrl: document.updateBeerForm.imageUrl.value,
	};

	xhr.send(JSON.stringify(beer));


}

function deleteBeer(deleteId) {
	let beerDiv = document.getElementById('beerData');
	beerDiv.textContent = '';
	let xhr = new XMLHttpRequest();
	xhr.open('DELETE', 'api/beers/' + deleteId);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 204) {
				console.log('Deleted');
				let h2 = document.createElement('h2');
				h2.textContent = "You have deleted the beer with the ID of " + deleteId;
				beerDiv.appendChild(h2);
			}
		} else {
			console.log('Beer not found');
		}
	}
	xhr.send();

};

function findBeerByABVRange(min, max) {
	let beerDiv = document.getElementById('beerData');
	beerDiv.textContent = '';
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/beers/search/abv/' + min + '/' + max);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let beer = JSON.parse(xhr.responseText);
				let h1 = document.createElement('h1');
				h1.textContent = 'Beer by ABV% in the range of ' + min + '% and ' + max + '%';
				beerDiv.appendChild(h1);
				for (let i = 0; i < beer.length; i++) {
					let li = document.createElement('li');
					li.textContent = 'Name: ' + beer[i].name + ' ABV:' + beer[i].abv + '%';
					beerDiv.appendChild(li);

				}
			}
		} else {
			console.log('Beer not found');
		}
	}
	xhr.send();
};

