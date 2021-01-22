function reddit() {
    var fetch = document.getElementById("output");
  var command = document.getElementById("input").value;
  var prefix  = "$reddit%"
  if (command === prefix + ("meme")) {
      fetch.innerHTML = "<iframe src='./reddit/fetchers/memes.html' style='width:75%;height:500px;border-style:none;border-width:0px;border-color:honeydew;'>"
  } else if (command === prefix + ("dank.meme")) {
    fetch.innerHTML = "<iframe src='./reddit/fetchers/dankmemes.html' style='width:75%;height:500px;border-style:none;border-width:0px;border-color:honeydew;'>"
  } else if (command === prefix + ("koala")) {
    fetch.innerHTML = "<iframe src='./reddit/fetchers/animals/koalas.html' style='width:75%;height:500px;border-style:none;border-width:0px;border-color:honeydew;'>"
  } else if (command === prefix + ("goat")) {
    fetch.innerHTML = "<iframe src='./reddit/fetchers/animals/goats.html' style='width:75%;height:500px;border-style:none;border-width:0px;border-color:honeydew;'>"
  } else if (command === prefix + ("golden.retriever")) {
    fetch.innerHTML = "<iframe src='./reddit/fetchers/animals/goldenretrievers.html' style='width:75%;height:500px;border-style:none;border-width:0px;border-color:honeydew;'>"
  } else {
      null
  }
}