function initialize()
{
	var location = new google.maps.LatLng(41.856825,-87.639225);

	var mapOptions = {
		center: location,
		zoom: 15
	};

	var mapElement = document.getElementById("contactusmap");

	var map = new google.maps.Map(mapElement, mapOptions);

	var marker = new google.maps.Marker({
		position: location,
		map: map,
		animation: google.maps.Animation.BOUNCE
	});


	var windowContent = '<div id="coffeshopinfo"><sup><img src="images/logo_black.png" alt="ccs_logo" /><sup><p>Chicago Coffee Sevice</p><p>1826 S Canal Street Chicago, IL 60616</p><p>PhoneNumber: 800-555-1825,</p><p>312-555-3000</p></div>';

	var infowindow = new google.maps.InfoWindow({
        content: windowContent
    });

    google.maps.event.addListener(marker, 'click', function(){
        infowindow.open(map, marker);
    });
}

google.maps.event.addDomListener(window, 'load', initialize);