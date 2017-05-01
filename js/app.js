// Code by Jeff Berlin

$(document).foundation()

function randomActivity() {

	var random = activitiesArray[Math.floor(Math.random() * activitiesArray.length)]

	document.getElementById("activity").innerHTML = random;

}

var map;
var markers = [];
var bounds;

function initMap() {

	bounds = new google.maps.LatLngBounds();

	map = new google.maps.Map(document.getElementById('map'), {
		center: {
			lat: 34.2257,
			lng: 77.9447
		},
		zoom: 11
	});
	infoWindow = new google.maps.InfoWindow;

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			var pos = {
				lat: position.coords.latitude,
				lng: position.coords.longitude
			};

			// infoWindow.setPosition(pos);
			// infoWindow.setContent("Location Found.");
			// infoWindow.open(map);
			map.setCenter(pos);
			var marker = new google.maps.Marker({
				position: pos,
				animation: google.maps.Animation.DROP,
				map: map,
			})
		}, function() {
			handleLocationError(true, infoWindow, map.getCenter());
		})
	} else {
		handleLocationError(false, infoWindow, map.getCenter());
	}

	function handleLocationError(browserHasGeolocation, infoWindow, pos) {
		infoWindow.setPosition(pos);
		infoWindow.setContent(browserHasGeolocation ? 
			'Error: Please enable geolocation.' :
			'Error: Geolocation failed.');

		infoWindow.open(map);
	}

	// YELP INFO

	// Client Secret: ACUG2cxWbZA5VLzig2ysXoXHBfNrACxpZVD4p6E66zkTgTiT5pVFfceEDqX8ZwWg
	// Client ID: orDoiA8TovjhlCMoHjGGHg

	var CLIENT_SECRET = 'ACUG2cxWbZA5VLzig2ysXoXHBfNrACxpZVD4p6E66zkTgTiT5pVFfceEDqX8ZwWg';
	var CLIENT_ID = 'orDoiA8TovjhlCMoHjGGHg';

	function populateInfoWindow(marker, infowindow) {
		var url = 'https://api.yelp.com/v3/businesses/search?term' + random;

		$.ajax({
			url: url,
			type: 'GET',
			dataType: 'json',
			data: {
				client_id: CLIENT_ID,
				client_secret: CLIENT_SECRET,
				async: true
			}
		})
	}
}
window.initMap = initMap;