
function start() {
  screen = document.getElementsByTagName("body") [0];
  screen.style.textAlign = "center";
  
  titleText();
  sequenciaBox();
  groupMouseOver()
  groupMouseOut()
  groupMouseClick()
  
  var text = document.createTextNode("at");
  var paragraph = document.createElement("p");
  paragraph.style.clear = "both";
  paragraph.style.paddingTop = "3em";
  paragraph.appendChild(text);
  screen.appendChild(paragraph);

}

  window.addEventListener("load", start, false);

