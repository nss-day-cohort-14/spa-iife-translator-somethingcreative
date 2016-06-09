
//Card iife function
var Card = (function(portuguese) {
	
	//message object with english/portuguese translations
	var message = {
		"merry": "alegre",
		"christmas": "natal",
		"and": "e",
		"a": "uma",
		"happy": "feliz",
		"new": "novo",
		"year": "ano",
		"Merry": "Alegre",
		"Christmas": "Natal",
		"And": "E",
		"A": "Uma",
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
  portuguese.translateToPortuguese = function (array) {
    text = ''
    for (i = 0; i < array.length; i++) {
      text = message[array[i]];
      Card.translate(text);
    }
  }

	 return portuguese;
	
})(Card);








