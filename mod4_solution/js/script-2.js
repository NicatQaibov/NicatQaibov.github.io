// var name  = "Ubbe";
// function Greet(){
// 	console.log("Hail , "+name);
// }

// Faking Namespaces

// var hailUbbe = {};
// hailUbbe.name = "Ubbe";
// hailUbbe.Hail = function () {
// 	console.log("Long Live , " + hailUbbe.name);
// };

(function (window) {
	greeter2 =  {}; 
	greeter2.name = "Ubbe";
	greeter2.hail = function () {
		console.log("Long Live , "+ greeter2.name);
	} 
	window.greeter2 = greeter2;
}) (window);