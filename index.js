// Hide and Seek Lab - Mark K.

// Define a function getFirstSelector(selector), which accepts a selector and returns the first element that matches.
function getFirstSelector(selector){
  return document.querySelector(selector);
}

// Define a function nestedTarget() that pulls a .target out of #nested 
// (# is used for IDs in selectors). (Note that in index.html #nested and .target just happen to be divs. 
// This method should work with arbitrary elements.)
function nestedTarget(){
  return document.getElementById('nested').querySelector('div.target');
}

// Define a function increaseRankBy(n) that increases the ranks in all of the .ranked-lists by n. 
// (You might need to make use of parseInt()
function increaseRankBy(n) {
  var ranks = document.querySelectorAll('ul.ranked-list li');
  for (var i = 0; i < ranks.length; i++) {
    ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n
  }
}

// Define a function deepestChild() that pulls out the most deeply nested child element from div#grand-node. 
// (Remember, you can iterate over elements and call querySelector() and querySelectorAll() on them. 
// This is challenging to implement correctly, but not beyond your ability!)
function deepestChild(){
  var deep = document.getElementById('grand-node').querySelectorAll('div');
  return deep[deep.length-1];
}

