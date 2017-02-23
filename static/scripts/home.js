function validateForm() {
	var name = document.getElementById('nameInput').value;
	var species = document.getElementById('speciesInput').value;
	var age = document.getElementById('ageInput').value;

	if (!name.length || !species.length || !age.length) {
		alert('Fields must not be empty');
		return false;
	}

	if (Boolean(Number(species))) {
		alert('Not a valid species');
		return false;
	}

	if (!Boolean(Number(age))) {
		alert('Age must be a number');
		return false;
	}

	return true;
}

function changeColor() {
	var color = document.getElementById('color').value;
	document.body.style.background = color;
}