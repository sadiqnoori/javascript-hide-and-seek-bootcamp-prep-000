function getFirstSelector(selector) {
  var firstDiv = document.querySelector(selector);
  return firstDiv;
}

function nestedTarget() {
  var pullTarget = document.querySelector("#nested .target");
  return pullTarget;
}

function increaseRankBy(n) {
  var x = document.getElementById("app");
  var arr = x.querySelectorAll("ul.ranked-list");

  for (var i = 0; i < arr.length; i++) {
    var children = arr[i].children;
    for (var j = 0; j < children.length; j++) {
    children[j].innerHTML = parseInt(children[j].innerHTML) + n;
    }
  }
}
function deepestChild() {
  var node = document.querySelector("#grand-node");
  var newNode = node.children[0];
  while (newNode) {
    node = newNode;
    newNode = node.children[0];
  }
  return node;
}
