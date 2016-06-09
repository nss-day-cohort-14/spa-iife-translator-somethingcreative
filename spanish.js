var Card = (function (spanishCard){

  var spanish = {"merry":"feliz", "christmas":"navidad", "and":"y", "a":"un", "happy":"próspero", "new":"año", "year":"nuevo",
  "Merry":"Feliz", "Christmas":"Navidad", "And":"Y", "A":"Un", "Happy":"Próspero", "New":"Año", "Year":"Nuevo" };

  spanishCard.getSpanish = function () {
    return spanish;
  };

  spanishCard.translateToSpanish = function (array) {
    var text = '';
    for (i = 0; i < array.length; i++) {
      text = spanish[array[i]];
      Card.translate(text);
    }
  }

  return spanishCard;

})(Card);