// var name ="Ragnar"; 
// function greet (){
// 	console.log("Hail ,King "+name );
// };

// Faking Namespaces

// var hailRagnar = {};
// hailRagnar.name = "Ragnar"; 
// hailRagnar.hail= function (){
// 	console.log("Hail , "+hailRagnar.name);
// };

// Immediately Invoked Function Expression (IIFE)

// (function (name) {
// 	console.log("I shall not enter "+name+"'s Hall with fear!");
// })("Odin");

(function (window){
	var greeter = {};
	greeter.name = "Ragnar";
	var greeting ="Hail";
	greeter.hail = function (){
		console.log(greeting +" " +greeter.name);
	}

	window.greeter = greeter;
})(window);