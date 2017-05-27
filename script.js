//Change the background color of the entire document to red
document.body.style.backgroundColor = "red";

//Change the background color of just the "about me" portion to blue
//document.getElementsByTagName("h1").style.backgroundColor = "blue";
document.querySelector("h1").style.backgroundColor = "blue";

//Change the font-style of the entire document to sans-serif

//Add your nickname
document.getElementById("nickname").innerHTML = "Looper";

//Add your favorites
document.getElementById("favorites").innerHTML = "Linux";

//Add your hometown
document.getElementById("hometown").innerHTML = "irc";

//## Extra Credit (still only using JavaScript) ##

//Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.
var lis = document.getElementByTagName('li');
for (var i = 0; i < lis.length; i++) {
    lis[i].className += ' listitem';
}

//Create a new `img` element and set its src attribute to a picture of you. Append that element to the page.
