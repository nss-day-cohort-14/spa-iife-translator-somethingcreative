//Card iife function
var Card = (function(italian) {
    
    //message object with english/portuguese translations
    var message = {
        "merry": "allegro", "christmas": "natale", "and": "e", "a": "un", "happy": "contento", "new": "nuovo", "year": "anno",
        "Merry": "Allegro", "Christmas": "Natale", "And": "E", "A": "Un", "Happy": "Contento", "New": "Nuovo", "Year": "Anno"
    }

     //varaible to store translated text
     var translatedText = "";

     //getter for message object
     
         italian.getMessage = function() {
             return message;
         };

      italian.translateToItalian = function (array) {
        text = ''
        for (i = 0; i < array.length; i++) {
          text = message[array[i]];
          Card.translate(text);
        }
      }

     return italian;
    
})(Card);

