$(document).foundation()

var activitiesArray = [
		'Baseball',
		'Basketball',
		'Football',
		'Golf',
		'Hockey',
		'Lacrosse',
		'Soccer',
		'Tennis',
		'Rugby',
		'Paintball',
		'Boxing/MMA',
		'Archery',
		'Rodeo',
		'Fencing',
		'Roller Skating',
		'Gymnastics',
		'Bowling',
		'Volleyball',
		'Wrestling',
		'Cheerleading',
		'Dodgeball',
		'Table Tennis',
		'Handball',
		'Horse Racing',
		'Hurling',
		'Curling',
		'Softball',
		'Cycling',
		'Field Hockey',
		'Badminton',
		'Bull Riding',
		'Jetskis',
		'Swimming',
		'Free Diving',
		'Scuba Diving',
		'Snorkeling',
		'Water Polo',
		'Fishing',
		'Boating',
		'Kayaking',
		'Canoeing',
		'Sailing',
		'Water Skiing',
		'Wakeboarding',
		'Tubing',
		'Paddle Boarding (SUP)',
		'Windsurfing',
		'Surfing',
		'Skimboarding',
		'Knee Boarding',
		'Rafting',
		'Kiteboarding',
		'Body Boarding',
		'Rowing',
		'Drag Racing',
		'Drifting',
		'Rally Racing',
		'Ride Motorcycles',
		'Dirtbikes',
		'ATVs',
		'Off Road & 4x4',
		'Circuit Racing',
		'Autocross',
		'Race Go Karts',
		'Automotive Meet',
		'Motorcycle Meet',
		'Work on cars',
		'Monster Trucks',
		'NASCAR',
		'Skateboarding',
		'BMX',
		'Skydiving',
		'Base Jumping',
		'Bungee Jumping',
		'Cave Diving',
		'Hang Gliding',
		'Rock Climbing',
		'Paragliding',
		'Free Climbing',
		'Mountaineering',
		'Parkour',
		'Free Running',
		'Snowboarding',
		'Snow Skiing',
		'Snowmobiling',
		'Snow Tubing',
		'Ice Skating',
		'Figure Skating',
		'Luge',
		'Bobsleigh',
		'Sledding',
		'Polar Plunge',
		'Backpacking',
		'Hiking',
		'Biking',
		'Tailgating',
		'Relaxing in the Park',
		'Picnic',
		'Corn Hole',
		'Sun tanning',
		'Beach',
		'Bird watching',
		'Disc Golf',
		'Ultimate Frisbee',
		'Gardening',
		'Horseback riding',
		'Sightseeing',
		'Hunting',
		'Kites',
		'Camping',
		'Spelunking',
		'Ziplining',
		'Exploration',
		'Drones',
		'Airsoft',
		'R/C (Cars, Planes, Boats)',
		'Music Festival',
		'Concert',
		'Live Music',
		'Opera',
		'Symphony',
		'Jam Session',
		'Learn an Instrument',
		'Photography',
		'Digital Art',
		'Art Showcase',
		'Performing Art',
		'DIY & Crafts',
		'Painting',
		'Drawing',
		'Knitting',
		'Crocheting',
		'Ceramics',
		'Graffiti',
		'Stain Glass',
		'Woodworking',
		'Fabrication',
		'Literature',
		'Writing',
		'Poetry',
		'Amusement Park',
		'Babysit',
		'Homeschooling',
		'Playdates',
		'Comedy',
		'Improv',
		'Dinner Party',
		'Cookout',
		'House Party',
		'Weekend Getaway',
		'Flash Mob',
		'Party',
		'Clubbing',
		'Dancing',
		'Nightclub',
		'Drinking Games',
		'Farmers Market',
		'Healthy Eating',
		'Breakfast',
		'Brunch',
		'Lunch',
		'Dinner',
		'Dessert',
		'Cooking',
		'Dining Out',
		'Coffee',
		'Tea',
		'Happy Hour',
		'Beer',
		'Brewery',
		'Wine',
		'Cocktails & Spirits',
		'Aerobics',
		'Dance Fitness',
		'Work Out',
		'Yoga',
		'Weightlifting',
		'Marathon',
		'Fitness Group',
		'Pilates',
		'Running',
		'Spinning',
		'Triathlon',
		'Walking',
		'Obstacle Race',
		'Training',
		'Kickboxing',
		'Fairs & Festivals',
		'Couponing',
		'Billiards',
		'Darts',
		'Skeeball',
		'Trampolines',
		'Home Improvement',
		'Movies & TV',
		'Amateur Radio',
		'Podcast',
		'Astrology',
		'Astronomy',
		'Gambling',
		'Cigars',
		'Collecting',
		'Educational Courses',
		'Yard Sales',
		'Puzzles',
		'Learn A New Language',
		'Metal Detecting',
		'Reading',
		'Robotics',
		'Rockets',
		'Guns',
		'Shopping',
		'Singing',
		'Tattoos',
		'Travel',
		'Animal Rescue',
		'Animal Adoption',
		'Group Date',
		'Double Date',
		'Lunch Date',
		'Casual Dating',
		'Comic Books',
		'Trivia',
		'Adventure Gaming',
		'Action Gaming',
		'Sports Gaming',
		'Strategy Gaming',
		'Simulation Gaming',
		'Online Roleplaying Games', 
		'Live Action Roleplaying Games',
		'Backgammon',
		'Dominoes',
		'Card Games',
		'Chess',
		'Checkers',
		'PC Gaming',
		'Board Games',
		'Game Night',
		'Xbox',
		'Playstation',
		'Nintendo',
		'Poker',
		'Blackjack',
		'Dungeons & Dragons',
		'Settlers of Catan',
		'Volunteer'
];

function randomActivity() {
	var random = activitiesArray[Math.floor(Math.random() * activitiesArray.length)]
	document.getElementById("activity").innerHTML=random;
}

// Flickr pictures

var key = '91a39f1666dd2f372e92cf06637f223f';
var secret = '1a0ebcb486b61537';
var url = 'http://api.flickr.com/services/rest/?method=flickr.photos.getRecent' + '&api_key=' + key + '&per_page=10&format=json' + '&nojsoncallback=1';

function showFlickr() {

	$.ajax({
		url: url,
		dataType: 'json',
		data: {

		}
	})
	document.getElementById("flickrImages").innerHTML = showFlickr();
}

