// let x = 1;
// let ergebnis = document.getElementById("clickme");
// ergebnis.addEventListener("click", () => {
//     ergebnis.innerHTML = "Click me: " + x;
//     x++;
// })
const roundContainer = document.getElementById("round-container")
const roundTotal = document.getElementById("round-total");
const roundInc = document.getElementById("round")



ergebnisComputer = 0;
ergebnisSpieler = 0;



// Funktion "display" zur Anzeige von Texten im Paragraphen mit der ID "ausgabe" des HTML-Dokuments
var display = function (text) {
    var ausgabeParagraph = document.getElementById('Spiel');
    ausgabeParagraph.innerHTML = text + "<br>";
    return;
};

// Funktion "displayErgebnis" zur Anzeige von Texten im Paragraphen mit der ID "ergebnis" des HTML-Dokuments
var displayErgebnis = function (text) {
    var ausgabeParagraph = document.getElementById('ergebnis');
    ausgabeParagraph.innerHTML = text + "<br>";
    return;
};


/* Funktion "vergleich" vergleicht die Eingaben und gibt das gewinnende Element zurück */
var vergleich = function (auswahlSpieler, auswahlComputer) {
    auswahlSpieler = auswahlSpieler.toLowerCase().trim();
    auswahlComputer = auswahlComputer.toLowerCase().trim();
    if (auswahlSpieler === auswahlComputer) {
        ergebnisComputer++;
        ergebnisSpieler++;
        document.body.style.background = "blue";
        return "Unentschieden!";

    } else if (auswahlSpieler === "stein") {
        if (auswahlComputer === "schere") {
            document.body.style.background = "yellow";
            ergebnisSpieler++;
            return "Stein gewinnt";
        } else {
            ergebnisComputer++;
            return "Papier gewinnt!";
        }
    } else if (auswahlSpieler === "papier") {
        if (auswahlComputer === "stein") {
            document.body.style.background = "green";
            ergebnisSpieler++;
            return "Papier gewinnt!";
        }
        else {
            ergebnisComputer++;
            return "Schere gewinnt!";
        }
    } else if (auswahlSpieler === "schere") {
        if (auswahlComputer === "stein") {
            ergebnisComputer++;
            return "Stein gewinnt!";
        }
        else {
            ergebnisSpieler++;
            return "Schere gewinnt!";
        }
    } else {
        return "Falsche Eingabe!?"
    }
};
var erzeugeComputerAuswahl = function () {
    var zufallsZahl = Math.random();
    if (zufallsZahl < 0.34) {
        return "stein";
    } else if (zufallsZahl <= 0.67) {
        return "papier";
    } else {
        return "schere";
    }
};

/* Hauptteil */
/* --------- */
var spielen = function (spielerAuswahl) {
    var meldung;
    var ergebnis;
    var computerAuswahl = erzeugeComputerAuswahl();

    meldung = "Du hast " + spielerAuswahl.substr(0, 1).toUpperCase() + spielerAuswahl.substr(1) + " und der Computer hat " + computerAuswahl.substr(0, 1).toUpperCase() + computerAuswahl.substr(1) + ".\n";
    meldung = meldung + vergleich(spielerAuswahl, computerAuswahl);
    display(meldung);

    ergebnis = "Spieler: " + ergebnisSpieler + " / Computer: " + ergebnisComputer;
    displayErgebnis(ergebnis);
}
let i = 0
function main() {
    let round = getRounds()
    container.style.display = "none";
    roundContainer.style.display = "block";
    roundTotal.innerHTML = round
    if (i < round) {
        i++;
        roundInc.innerHTML = i;
    }
}
function getRounds() {
    let round = 0;
    custom.checked ? custom_Input.style.display = "block" : custom_Input.style.display = "none";
    if (four.checked) {
        round = 4
    } else if (five.checked) {
        round = 5
    } else if (six.checked) {
        round = 6
    } else {
        round = customInput.value * 1
    }
    return round;
}