
var Card = (function() {

	//placing element for the translated text into a variable
	var translatedTextLocation = document.getElementById("translatedText");

	//return function posting results to html element
	return {
		translate: function(text) {
			translatedTextLocation.innerHTML = text;	
		}
	};

})();