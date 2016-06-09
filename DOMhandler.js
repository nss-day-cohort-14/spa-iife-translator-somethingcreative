var button = document.getElementById('button').addEventListener("click", buildString);
var input = document.getElementById('inputText');
var select = document.getElementById('select');
var stringArray;
var string;

function buildString () {
  string = input.value;
  splitString (string);
}

function splitString (string) {
  stringArray = string.split(' ')
  if(select.value == "Spanish")
    {
        Card.translateToSpanish(stringArray);
    }
        if(select.value == "Portuguese")
    {
        Card.translateToPortuguese(stringArray);
    }
        if(select.value == "Italian")
    {
        Card.translateToItalian(stringArray);
    }
}
