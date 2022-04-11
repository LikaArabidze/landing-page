///onCLick

function switchVisible() {
  if (document.getElementById('changeableDiv')) {

      if (document.getElementById('changeableDiv').style.display == 'none') {
          document.getElementById('changeableDiv').style.display = 'block';
          document.getElementById('testDiv').style.display = 'none';
      }
      else {
          document.getElementById('changeableDiv').style.display = 'none';
          document.getElementById('testDiv').style.display = 'block';
      }
  }
}








//Slider







//Accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}