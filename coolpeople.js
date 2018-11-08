var coolPeople = ["bruce lee","arnold schwarzenegger","will smith","esther","marie curie","joan of arc"];

// console.log to print each of the names listed inside
	console.log(coolPeople[0]);
	console.log(coolPeople[1]);  //etc...
	console.log(coolPeople[2]);
	console.log(coolPeople[3]);
	console.log(coolPeople[4]);
	console.log(coolPeople[5]);
	console.log(coolPeople);
	coolPeople.forEach(function(element) {
	console.log(element);
	});


var drinks = ["Coke","Pepsi","Water","Orange Juice"];

// create an Arry of drinks with all capital letters
	console.log("first statment");
	console.log(drinks[0]);
	console.log(drinks[1]);
	console.log(drinks[2]);
	console.log(drinks[3]);


	

// modify each element of the array (individually) to make them lowercase...
	drinks[0] = "coke"
	drinks[1] = "pepsi"
	drinks[2] = "water"
	drinks[3] = "orange juice"
 
	console.log("second statment");
	console.log(drinks[0]);
	console.log(drinks[1]);
	console.log(drinks[2]);			
	console.log(drinks[3]);

//   before that adding in a function for a loop
	function logArray(arr) {
			for (let i = 0; i <= arr.length; i++) {
					console.log(arr[i]);
			}
	}
// My First Loop

	var vegetables = ["Carrots","Peas","lettuce","Tomatoes"];
	//// Looping through each item in the array and logging a message to the console. for loop
	//for (let i = 0; i <= vegetables.length; i++) {
			//console.log("I hate " + vegetables[i]);
	//}
	var zooAnimals = ["Zebra","Rhino","Giraffe","Owl"];
	//for (let i = 0; i <= zooAnimals.length; i++) {
			//console.log(zooAnimals[i]);
	//}

	//for (let i = 0; i < zooAnimals.length; i++){
			//console.log(zooAnimals[i]);
	//}
	
	var jeffsFriends = ["Andy","Jennifer"];

			logArray(vegetables);
			logArray(zooAnimals);
			logArray(jeffsFriends);





	function loopArray(arr) {
			for (let i = 0; i <= arr.length; i++) {
					console.log(arr[i]);
			}
	}

	const favBrands = ["google","apple","pixel"];

	let favFoods = ["chicken TUNA","HIbachi","eGgs"];

	let activities = ["rope","bdsm","coding","TeCh"];

	loopArray(favBrands);
	loopArray(favFoods.toString().toLowerCase());

	//var lowerActivities = activities.toString().toLowerCase();
	//var lowerFavFoods = favFoods.toString().toLowerCase();
	//loopArray(lowerActivities);
	//loopArray(lowerFavFoods);

	loopArray(activities.toString().toUpperCase() + " !");
	//loopArray(lowerFavFoods);


