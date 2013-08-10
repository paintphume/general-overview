/*
File Name: dhtml2.js
Date: 3/3/12
Programmer: Fiona Solliday
*/

//declare variables

var id1;
var id2;
var id3;
var id4;
var id5;
var id6;
var id7;
var id8;
var id9;
var id10;
var id11

//run loadEventHandlers when page loads

window.onload = loadEventHandlers;

//loadEventHandlers function

function loadEventHandlers()
{
id1 = document.getElementById("example1");  
id1.onmouseover = function1;

id2 = document.getElementById("example2");
id2.onmouseover = function2Over;
id2.onmouseout = function2Out;

id3 = document.getElementById("example3");
id3.onmouseover = function3Over;
id3.onmouseout = function3Out;

id4 = document.getElementById("example4");
id4.onclick = function4Click;
id4.ondblclick = function4DoubleClick;

id5 = document.getElementById("butterfly");
id5.onmouseover = function5Over;
id5.onmouseout = function5Out;

id6 = document.getElementById("hideText");
id6.onclick = function6HideTextClick;

id7 = document.getElementById("displayText");
id7.onclick = function7displayTextClick;

id8 = document.getElementById("fullName");
id8.onfocus = function8textFieldOnFocus;
id8.onblur = function8textFieldOnBlur;

id9 = document.getElementById("address");
id9.onfocus = function9textFieldOnFocus;
id9.onblur = function9textFieldOnBlur;

id10 = document.getElementById("button1");
id10.onclick = function10hideButterfly;

id11 = document.getElementById("button2");
id11.onclick = function11displayButterfly;
}

//DHTML functions

function function1()
{
id1.style.color = "red";
}

function function2Over()
{
id2.style.color = "red";	
}

function function2Out()
{
id2.style.color = "black";	
}

function function3Over()
{
id3.style.color = "red";
id3.style.backgroundColor = "yellow";
}

function function3Out()
{
id3.style.color = "black";
id3.style.backgroundColor = "lightgrey";
}

function function4Click()
{
id4.style.fontSize = "2em";
}

function function4DoubleClick()
{
id4.style.fontSize = "1em";	
}

function function5Over()
{
id5.style.border = "2px solid blue";
}

function function5Out()
{
id5.style.border = "none";	
}

function function6HideTextClick()
{
id6.style.visibility = "hidden";	
}

function function7displayTextClick()
{
id6.style.visibility = "visible";	
}

function function8textFieldOnFocus()
{
id8.style.border = "2px solid blue";	
}

function function8textFieldOnBlur()
{
id8.style.border = "1px solid lightsteelblue";	
}

function function9textFieldOnFocus()
{
id9.style.border = "2px solid blue";
}

function function9textFieldOnBlur()
{
id9.style.border = "1px solid lightsteelblue";	
}

function function10hideButterfly()
{
id5.style.visibility = "hidden";	
}

function function11displayButterfly()
{
id5.style.visibility = "visible";	
}
