function validation() {
	if (document.getElementById("nom").value.length < 2) {
		document.getElementById("error").innerHTML = "La nom doit contenir au moins 2 caracteres";
		document.getElementById("error").style.display = "initial";
		document.getElementById("resultat").style.display = "none";
	}
	else if (document.getElementById("nom").value.length > 20) {
		document.getElementById("error").innerHTML = "La nom doit contenir moins que 20 caracteres";
		document.getElementById("error").style.display = "initial";
		document.getElementById("resultat").style.display = "none";
	}
	else if (document.getElementById("prenom").value.length < 2) {
		document.getElementById("error").innerHTML = "La prenom doit contenir au moins 2 caracteres";
		document.getElementById("error").style.display = "initial";
		document.getElementById("resultat").style.display = "none";
	}
	else if (document.getElementById("prenom").value.length > 20) {
		document.getElementById("error").innerHTML = "La prenom doit contenir au plus 20 caracteres";
		document.getElementById("error").style.display = "initial";
		document.getElementById("resultat").style.display = "none";
	}
	else if (document.getElementById("addr").value.length < 5) {
		document.getElementById("error").innerHTML = "La addresse doit contenir au moins 5 caracteres";
		document.getElementById("error").style.display = "initial";
		document.getElementById("resultat").style.display = "none";
	}
	else if (document.getElementById("addr").value.length > 50) {
		document.getElementById("error").innerHTML = "La addresse doit contenir moins que 50 caracteres";
		document.getElementById("error").style.display = "initial";
		document.getElementById("resultat").style.display = "none";
	}
	else if (document.getElementById("email").value.length < 5) {
		document.getElementById("error").innerHTML = "La email doit contenir au moins 5 caracteres";
		document.getElementById("error").style.display = "initial";
		document.getElementById("resultat").style.display = "none";
	}
	else if (document.getElementById("email").value.length > 30) {
		document.getElementById("error").innerHTML = "La email doit contenir moins que 30 caracteres";
		document.getElementById("error").style.display = "initial";
		document.getElementById("resultat").style.display = "none";
	}
	else {
		document.getElementById("resultat").innerHTML = "Bienvenue " + document.getElementById("prenom").value;
		document.getElementById("error").style.display = "none";
		document.getElementById("resultat").style.display = "initial";
	}
}