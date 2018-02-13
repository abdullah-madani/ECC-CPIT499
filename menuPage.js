
filtering("all")
function filtering(s) {
  var x, i;
  x = document.getElementsByClassName("filter");
  if (s == "all") 
  s = "";

  for (i = 0; i < x.length; i++) {
    hideItems(x[i], "show");
    if (x[i].className.indexOf(s) > -1) showItems(x[i], "show");
  }
}

// this function show the items that are selected
function showItems(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// this function hide the items that are not selected
function hideItems(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1); 
    }
  }
  element.className = arr1.join(" ");
}

// Adding active class to the current control button 
var btnContainer = document.getElementById("filterBtns");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}