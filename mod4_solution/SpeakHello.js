
(function (window){
	var speakword = "Hello";
	var helloSpeaker = {};
	helloSpeaker.speak = function (name){
		console.log(speakword + " " + name);
	};
	window.helloSpeaker = helloSpeaker;
})(window);