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
		'Motorcycles',
		'Dirtbikes',
		'ATVs',
		'Off Road & 4x4',
		'Circuit Racing',
		'Auto Cross',
		'Go Karts',
		'Automotive Meet',
		'Motorcycle Meet',
		'Working on cars',
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
		'Park',
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
		'Family Attractions',
		'Babysit',
		'Adoption',  
		'Daycare',
		'Homeschooling',
		'Kids',
		'Playdates',
		'Stay at Home Parents',
		'Youth Sports',
		'Comedy',
		'Dinner Party',
		'Cookout',
		'House Party',
		'Weekend Getaway',
		'Flash Mob',
		'Night In',
		'Locals',
		'Night Out',
		'Party',
		'Clubbing',
		'Dancing',
		'Nightlife',
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
		'Wine',
		'Cocktails & Spirits',
		'Aerobics',
		'Dance Fitness',
		'Work Out',
		'Stroller Workout',
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
		'E-cigs',
		'Amateur Radio',
		'Astrology',
		'Astronomy',
		'Gambling',
		'Cigars',
		'Smoking',
		'Collecting',
		'Educational Courses',
		'Yard Sales',
		'Genealogy',
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
		'Traveling',
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
		'Settlers of Catan'
];

function randomActivity() {
	var random = activitiesArray[Math.floor(Math.random() * activitiesArray.length)]
	document.getElementById("activity").innerHTML=random;
}

