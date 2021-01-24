var script = document.createElement('script');
  script.src = 'https://code.jquery.com/jquery-3.5.1.min.js';
  script.type = 'text/javascript';
  document.getElementsByTagName('head')[0].appendChild(script);
//variable functions
function declare(variable) {
    var replaced1 = (variable).replace(/'/g, "");
    console.log(eval(replaced1))
  }
  function variable(variable) {
    var replaced1 = (variable).replace(/'/g, "");
    console.log(eval(replaced1))
  }
  function set(variable) {
    var replaced1 = (variable).replace(/'/g, "");
    console.log(eval(replaced1))
  }
  function callvariable(variable) {
    return variable
  }
  //storage
  var storage = {
    set : function(name, value) {
      localStorage.setItem(name, value)},
    get : function(name) {
      localStorage.getItem(name)},
    remove : function(name) {
      localStorage.removeItem(name)}
  }
  function html_text(text) {
    document.createTextNode(text)
  }
  function html_create_element(element) {
    document.createElement(element)
  }
  function html_add(append) {
    appendChild(append)
  }
  function loopfor(condition1, condition2, condition3, execute) {
    for (condition1; condition2; condition3) {
      eval(execute)
    }
  }
  function plus(variable) {
    (variable) = (variable)++
  }
  function comment(comment) {
    null;
  }
  function add_h1(text) {
      $("#page").append("<h1>" + (text) + "</h1>")
  }
  add_h1("test")