var Card = (function (spanishCard){

  var spanish = {"merry":"feliz", "christmas":"navidad", "and":"y", "happy":"próspero", "new":"año", "year":"nuevo"};

  spanishCard.getSpanish = function () {
    return spanish;
  };

  spanishCard.translateToSpanish = function (array) {
    text = ''
    space = " "
    for (i = 0; i < array.length; i++) {
      text += spanish[array[i]] += space;
    }
    Card.translate(text);
  }

  return spanishCard;

})(Card);