
//Card iife function
var Card = (function(portuguese) {
	
	//message object with english/portuguese translations
	var message = {
		"Merry": "Alegre",
		"Christmas": "Natal",
		"and": "e",
		"Happy": "Feliz",
		"New": "Novo",
		"Year": "Ano"
	}

	 //varaible to store translated text
	 var translatedText = "";

	 //getter for message object
	 
	 	portuguese.getMessage = function() {
	 		return message;
	 	};

	 	//add key values to translatedText
	 	portuguese.addTranslatedText = function() {
	 		for (var key in message) {
	 			translatedText += (message[key]) + " ";
	 		}

	 		return translatedText;
	 	};

	 return portuguese;
	
})(Card);








