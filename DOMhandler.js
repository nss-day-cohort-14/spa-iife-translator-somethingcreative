var button = document.getElementById('button').addEventListener("click", buildString);
var translatedTextLocation = document.getElementById("translatedText");
var input = document.getElementById('inputText');
input.addEventListener('keyup', function (e) {
  var key = e.which || e.keyCode;
  if (key === 13) { 
    buildString();
  }
});
var select = document.getElementById('select');
select.addEventListener("change", function (e) {
  translatedTextLocation.innerHTML = '';
})
var stringArray;
var string;

function buildString () {
  string = input.value;
  splitString (string);
}

function splitString (string) {
  stringArray = string.split(' ')
  if(select.value === "Spanish")
    {
      Card.translateToSpanish(stringArray);
    }
      else if (select.value === "Portuguese")
    {
      Card.translateToPortuguese(stringArray);
    }
      else if (select.value === "Italian")
    {
      Card.translateToItalian(stringArray);
    }
      else alert("Select a language")
}
