$(document).ready(function () {
	$("#gps").click(function () {
        //function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else {
            document.querySelector("#map").innerHTML ="Geolocation is not supported by this browser.";
        }

        function showPosition(position) {
            var latlon = position.coords.latitude + "," + position.coords.longitude;
            var img_url = "https://maps.googleapis.com/maps/api/staticmap?size=400x250&center=" + latlon + "&markers=" + latlon + "&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg";
            $("#addr").val(position.coords.latitude+", "+position.coords.longitude);
            document.getElementById("map").innerHTML = "<img src='" + img_url + "'>";
        }

        function showError(error) {
            switch (error.code) {
              case error.PERMISSION_DENIED:
                document.querySelector("#map").innerHTML =
                  "User denied the request for Geolocation.";
                break;
              case error.POSITION_UNAVAILABLE:
                document.querySelector("#map").innerHTML =
                  "Location information is unavailable.";
                break;
              case error.TIMEOUT:
                document.querySelector("#map").innerHTML =
                  "The request to get user location timed out.";
                break;
              case error.UNKNOWN_ERROR:
                document.querySelector("#map").innerHTML = "An unknown error occurred.";
                break;
            }
        }
    });
});