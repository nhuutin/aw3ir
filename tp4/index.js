$(document).ready(function () {
	var contactList;
	$("#ajou").click(function () {
		if ($("#nom").val().length < 1 || $("#prenom").val().length < 1 || $("#addr").val().length < 1 || $("#mail").val().length < 1) {
			$('#modaltit').text('Error');
			$('#modal1').text('Veuillez remplir tous les champs svp');
			$('#myModal').modal("show");
		}
		else {
			document.querySelector("table tbody").innerHTML = "";
			contactList = contactStore.add($("#prenom").val(), $("#nom").val(), $("#datepicker").val(), $("#addr").val(), $("#mail").val());
			for (var index in contactList) {
				document.querySelector("table tbody").innerHTML =
				document.querySelector("table tbody").innerHTML +
				"<tr><td>" +
				contactList[index].firstname +
				"</td><td>" +
				contactList[index].name +
				"</td><td>" +
				contactList[index].date +
				"</td><td>" +
				contactList[index].adress +
				"</td><td>" +
				contactList[index].mail +
				"</td><td>"  ;
			};
		}
		
	});
	//contactList = contactStore.getList();
	
 	$("#datepicker").datepicker({
 		dateFormat: "dd/mm/yy",
 		maxDate: 31
 	});
	$("#nom").keyup(function () { $("#nbnom").text($("#nom").val().length + " car."); });
	$("#prenom").keyup(function () { $("#nbpre").text($("#prenom").val().length + " car."); });

});