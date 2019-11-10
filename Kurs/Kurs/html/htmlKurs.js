/*
    Formular auswerten
*/
function auswertung() {
    let vorname = document.getElementById("vorname").value;
    let nachname = document.getElementById("nachname").value;
    let kennwort = document.getElementById("kennwort").value;
    let wichtig = "nicht so wichtig";
    if (document.getElementById("wichtig").checked) {
        wichtig = "wichtig";
    }
    let anrede = document.querySelector('input[name="anrede"]:checked').value;
    let ort = document.getElementById("ort").value;
    let geburtstag = document.getElementById("geburtstag").value;
    let telefon = document.getElementById("telefon").value;
    let email = document.getElementById("email").value;
    let homepage = document.getElementById("homepage").value;
    let schulnote = document.getElementById("schulnote").value;
    let gehalt = parseInt(document.getElementById("gehalt").value);

document.getElementById("ergebnis").value =
    anrede + " " + vorname + " " + nachname + " " + " (" + wichtig + ") mit Kennwort " + kennwort + " aus " + ort + ", hat am" + geburtstag + " Geburtstag, die Telefonnummer " + telefon + ", die Mailadresse" + email + ", die Homepage" + homepage + ", die Schulnote" + schulnote + "und verdient" + gehalt + " Euro.";
    }