//Card iife function
var Card = (function(italian) {
    
    //message object with english/portuguese translations
    var message = {
        Merry: Allegro, Christmas: Natale, and: e, a: un, Happy: Contento, New: Nuovo, Year: Anno

    }

     //varaible to store translated text
     var translatedText = "";

     //getter for message object
     
         italian.getMessage = function() {
             return message;
         };

         //add key values to translatedText
         italian.addTranslatedText = function() {
             for (var key in message) {
                 translatedText += (message[key]) + " ";
             }

             return translatedText;
         };

     return italian;
    
})(Card);

console.log(Card.translate(Card.addTranslatedText()));