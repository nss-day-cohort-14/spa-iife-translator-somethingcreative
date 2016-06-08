var Card = (function (spanishCard){

  var spanish = {"merry":"feliz", "christmas":"navidad", "and":"y", "happy":"próspero", "new":"año", "year":"nuevo"};

  spanishCard.getSpanish = function () {
    return spanish;
  };

  spanishCard.translateToSpanish = function (userText) {
    text = spanish[userText]
    Card.translate(text)
  }

  return spanishCard;

})(Card);