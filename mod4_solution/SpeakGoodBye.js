(function(window){
	var speakword = "Good Bye";
	var byeSpeaker = {};
	byeSpeaker.speak = function (name){
		console.log(speakword+" "+name);
	};
	window.byeSpeaker = byeSpeaker;
})(window); 