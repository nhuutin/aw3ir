$(document).ready(function () {
	$("button").click(function () {
		if ($("#nom").val().length < 1 || $("#prenom").val().length < 1 || $("#addr").val().length < 1 || $("#mail").val().length < 1) {
			$('#modaltit').text('Error');
			$('#modal1').text('Veuillez remplir tous les champs svp');
			$('#myModal').modal("show");
		}
		else {
 			$('#modaltit').text('Bienvenue ' + $("#nom").val());
			$("#modal1").text('Vous êtes nés le ' + $("#datepicker").val() + ' et vous habitez');
			$("#myModal .modal-body a").attr("href", "https://maps.google.com/maps?q=" + $("#addr").val() + "&markers=" + $("#addr").val());
			$("#myModal .modal-body a img").attr("src", "https://maps.googleapis.com/maps/api/staticmap?size=400x250&center=" + $("#addr").val() + "&markers=" + $("#addr").val() + "&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg");
			$("#modal2").text($("#addr").val());
			$('#myModal').modal('show');
 		}
	});
 	$("#datepicker").datepicker({
 		dateFormat: "dd/mm/yy",
 		maxDate: 31
 	});
});