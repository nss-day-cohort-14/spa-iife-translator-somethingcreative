 var Card = (function() {

    //placing element for the translated text into a variable
    var translatedTextLocation = document.getElementById("translatedText");
    var translatedText = "";



    //return functions posting results to html
    return {
        translate: function(text) {
            translatedText = text;
            translatedTextLocation.innerHTML = translatedText;
        }
    }


})();