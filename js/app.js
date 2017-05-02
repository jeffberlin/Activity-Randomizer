// Code by Jeff Berlin

$(document).foundation()

var categoryList = document.querySelector('#categories');

for (var i = 0; i < activitiesArray.sections.length; i++) {
	categoryList.innerHTML += "<li><span>" + activitiesArray.sections[i].category + "</span></li>";
	
}

function randomActivity() {

	var random = activitiesArray[Math.floor(Math.random() * activitiesArray.length)]

	document.getElementById("activity").innerHTML = random;

}

// var map;
// var markers = [];
// var bounds;

// function initMap() {

// 	bounds = new google.maps.LatLngBounds();

// 	map = new google.maps.Map(document.getElementById('map'), {
// 		center: {
// 			lat: 34.2257,
// 			lng: 77.9447
// 		},
// 		zoom: 11
// 	});
// 	infoWindow = new google.maps.InfoWindow;

// 	if (navigator.geolocation) {
// 		navigator.geolocation.getCurrentPosition(function(position) {
// 			var pos = {
// 				lat: position.coords.latitude,
// 				lng: position.coords.longitude
// 			};

// 			// infoWindow.setPosition(pos);
// 			// infoWindow.setContent("Location Found.");
// 			// infoWindow.open(map);
// 			map.setCenter(pos);
// 			var marker = new google.maps.Marker({
// 				position: pos,
// 				animation: google.maps.Animation.DROP,
// 				map: map,
// 			})
// 		}, function() {
// 			handleLocationError(true, infoWindow, map.getCenter());
// 		})
// 	} else {
// 		handleLocationError(false, infoWindow, map.getCenter());
// 	}

// 	function handleLocationError(browserHasGeolocation, infoWindow, pos) {
// 		infoWindow.setPosition(pos);
// 		infoWindow.setContent(browserHasGeolocation ? 
// 			'Error: Please enable geolocation.' :
// 			'Error: Geolocation failed.');

// 		infoWindow.open(map);
// 	}

// 	// YELP INFO

// 	// Client Secret: ACUG2cxWbZA5VLzig2ysXoXHBfNrACxpZVD4p6E66zkTgTiT5pVFfceEDqX8ZwWg
// 	// Client ID: orDoiA8TovjhlCMoHjGGHg

// 	var CLIENT_SECRET = 'ACUG2cxWbZA5VLzig2ysXoXHBfNrACxpZVD4p6E66zkTgTiT5pVFfceEDqX8ZwWg';
// 	var CLIENT_ID = 'orDoiA8TovjhlCMoHjGGHg';

// 	function populateInfoWindow(marker, infowindow) {
// 		var url = 'https://api.yelp.com/v3/search?';

// 		var parameters = {
// 			term: random,
// 			location: pos,
// 			oauth_consumer_key: CLIENT_ID,
// 			oauth_token: CLIENT_SECRET,
// 			oauth_nonce: nonce_generate(),
// 			oauth_timestamp: Math.floor(Date.now() / 1000),
// 			oauth_signature_method: 'hmac-sha1',
// 			callback: 'cb'
// 		}

// 		var encodedSignature = oauthSignature.generate('GET', url, parameters);
// 		parameters.oauth_signature = encodedSignature;

// 		$.ajax({
// 			url: url,
// 		})
// 	}
// }
// window.initMap = initMap;