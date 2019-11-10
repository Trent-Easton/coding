// Erste Versuche mit HTML/CSS/JS

// let erst ES6 (früher nur var) 
// Aangabe für jsbin.com (alt): jshint esnext: true
// Aangabe für jsbin.com (neu): jshint esversion: 6
// jshintversion: 6

// Neues Datum Objekt mit heutigem Datum anlegen 
let d = new Date();
let datum = d.getDate() + "." + (d.getMonth() + 1) + "." + d.getFullYear();

// Überschrift h1 mit Datum bilden
document.body.innerHTML = "<h1>Hallo Welt am " + datum + "!</h1>";

// Hintergrundfarbe im Body einstellen
document.body.style.backgroundColor = "blue";

// Schriftfarbe body einstellen 
document.body.style.color = "white";

// Neuen Absatz p erzeugen und variable p zuweisen
let p = document.createElement("P");

// Neuen Text erzeugen und variable t zuweisen
let t = document.createTextNode("Hier beginnt die Webdesign Ausbildung");

// text in Absatz schreiben
p.appendChild(t);

// Absatz in Body schreiben
document.body.appendChild(p);


