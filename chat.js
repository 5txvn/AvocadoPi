function chat() {
  var fetch = document.getElementById("output");
  var command = document.getElementById("input").value;
let res = ""
switch(command) {
    case "hi!":
        res = "Hello there!";
        break;
    case "good afternoon":
        res = "Why good afternoon to you too!";
        break;
    case ("good evening"):
        res = "Good evening to you too!";
        break;
    case ("good luck"):
        res = "Not quiet sure what I need good luck with, but I'll accept it!";
        break;
    default: 
    return;
}
fetch.innerHTML = res;
}