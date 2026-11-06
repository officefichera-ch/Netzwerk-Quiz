let punkte = 0;
let beantwortet = 0;
let fragen = [
    {
    frage: "Was bedeutet TCP?",
    antwort: [
        "Totally computerized pausing",
        "Transmission control podcast",
        "Has no meaning",
        "Transmission control protocol",
    ],
    richtig: 3
},
{
    frage: "Was ist WLAN?",
    antwort: [
        "Wireless Local Area Network",
        "We love animals now",
        "Water leakage around nebraska",
        "Wired Local Area Network"
    ],
    richtig: 0
},
{
    frage: "Was ist eine IP-Adresse und wozu wird sie verwendet?",
    antwort: [
        "Ein Kabel der Hardware",
        "Identifikation eines Gerätes im Netzwerk",
        "Teil innerhalb des Netzwerkes",
        "Eine Nachricht an alle senden, die im gleichen Netzwerk sind"
    ],
    richtig: 1
},
{
    frage: "Was ist ein Subnetz?",
    antwort: [
        "Ein Befehl in der Eingabeaufforderung",
        "Ein Teilnetz innerhalb eines grösseren Netzwerks",
        "Das Gleiche wie die IP-Adresse",
        "Die Hardware-Adresse einer Netzwerkkarte"
    ],
    richtig: 1
},
{
    frage: "Wie viele nutzbare Geräteadressen besitzt ein /24-Netzwerk?",
    antwort: [
        "64",
        "256",
        "128",
        "254"
    ],
    richtig: 3
},
{
    frage: "Wie viele Bits gehören bei /24 zum Netzwerk und wie viele bleiben für Geräte?",
    antwort: [
        "Geräteteil: 8, Netzwerkteil: 24",
        "Geräteteil: 24, Netzwerkteil: 8",
        "Geräteteil: 16, Netzwerkteil: 16",
        "Geräteteil: 32, Netzwerkteil: 0"
    ],
    richtig: 0
},
{
    frage: "Was ist ein Router?",
    antwort: [
        "Ein Gerät, das Netzwerke miteinander verbindet",
        "Ein Gerät, das nur Strom verteilt",
        "Ein Speicher für Netzwerkdaten",
        "Ein Kabel zwischen zwei Computern"
    ],
    richtig: 0
},
{
    frage: "Was ist ein Switch?",
    antwort: [
        "Ein Gerät, das verschiedene Netzwerke miteinander verbindet",
        "Ein Gerät, das Geräte innerhalb eines Netzwerks verbindet",
        "Ein Programm zur Verschlüsselung",
        "Ein Server, der Domainnamen auflöst"
    ],
    richtig: 1
},
{
    frage: "Was sind Netzwerktopologien?",
    antwort: [
        "Die Anordnung von Geräten in einem Netzwerk",
        "Die Art und Weise, wie Daten in einem Netzwerk übertragen werden",
        "Die Geschwindigkeit, mit der Daten in einem Netzwerk übertragen werden",
        "Die Anzahl der Geräte in einem Netzwerk"
    ],
    richtig: 0
},
{
    frage: "Was ist ein VPN?",
    antwort: [
        "Virtual Public Network",
        "Very Private Network",
        "Virtual Private Network",
        "Very Public Network"
    ],
    richtig: 2
},
{
    frage: "Was ist ein DNS-Server?",
    antwort: [
        "Ein Server, der Daten in einem Netzwerk überträgt",
        "Ein Server, der IP-Adressen in Domainnamen übersetzt",
        "Ein Server, der Daten in einem Netzwerk speichert",
        "Ein Server, der Domainnamen in IP-Adressen übersetzt"
    ],
    richtig: 3
},
{
    type: "multiple",
    frage: "Was kann ein Proxy-Server?",
    antwort: [
        "Domainnamen in IP-Adressen übersetzen",
        "Anfragen von Clients entgegennehmen und an andere Server weiterleiten",
        "Häufig abgerufene Inhalte zwischenspeichern (Cache)",
        "Automatisch IP-Adressen an Geräte verteilen"
    ],
    richtig: [1, 2]
},
{
    frage: "Wie lautet die Abkürzung für Wireless Local Area Network?",
    antwortText: ["wlan", "w-lan"],
    type: "text"
},
{
    frage: "Wofür steht MAC bei der MAC-Adresse?",
    antwortText: ["media access control", "mac"],
    type: "text"
},
{
    frage: "Welcher Port wird standardmässig für HTTPS verwendet?",
    antwort: [
        "80",
        "21",
        "443",
        "25"
    ],
    richtig: 2
},
{
    frage: "Wozu dient ein DHCP-Server?",
    antwort: [
        "Er verteilt automatisch IP-Adressen an Geräte",
        "Er übersetzt Domainnamen in IP-Adressen",
        "Er verschlüsselt den Datenverkehr",
        "Er speichert Webseiten zwischen"
    ],
    richtig: 0
},
{
    frage: "Was ist ein Standardgateway?",
    antwort: [
        "Die MAC-Adresse des Switches",
        "Der DNS-Server des Providers",
        "Ein Drucker im Netzwerk",
        "Das Gerät, über das Daten in andere Netzwerke gelangen"
    ],
    richtig: 3
},
{
    frage: "Welche Subnetzmaske entspricht /24?",
    antwort: [
        "255.255.0.0",
        "255.255.255.0",
        "255.255.255.128",
        "255.0.0.0"
    ],
    richtig: 1
},
{
    type: "multiple",
    frage: "Welche der folgenden Bereiche sind private IPv4-Adressbereiche?",
    antwort: [
        "10.0.0.0 – 10.255.255.255",
        "172.16.0.0 – 172.31.255.255",
        "192.168.0.0 – 192.168.255.255",
        "8.8.8.8 – 8.8.8.255"
    ],
    richtig: [0, 1, 2]
},
{
    frage: "Wie viele Bits hat eine IPv4-Adresse?",
    antwort: [
        "32",
        "64",
        "128",
        "48"
    ],
    richtig: 0
},
{
    frage: "Wie viele Bits hat eine IPv6-Adresse?",
    antwort: [
        "32",
        "64",
        "256",
        "128"
    ],
    richtig: 3
},
{
    frage: "Welches Protokoll wird zum Versenden von E-Mails verwendet?",
    antwort: [
        "FTP",
        "SMTP",
        "SSH",
        "DNS"
    ],
    richtig: 1
},
{
    frage: "Auf welcher Schicht des OSI-Modells arbeitet ein Router hauptsächlich?",
    antwort: [
        "Schicht 1 (Bitübertragung)",
        "Schicht 2 (Sicherung)",
        "Schicht 3 (Vermittlung)",
        "Schicht 7 (Anwendung)"
    ],
    richtig: 2
},
{
    frage: "Mit welchem Befehl zeigt man unter Windows die IP-Konfiguration an?",
    antwortText: ["ipconfig", "ipconfig /all"],
    type: "text"
},
{
    frage: "Wozu dient eine Firewall?",
    antwort: [
        "Sie beschleunigt die Internetverbindung",
        "Sie filtert den Datenverkehr nach festgelegten Regeln",
        "Sie vergibt IP-Adressen",
        "Sie verbindet zwei Switches"
    ],
    richtig: 1
},
{
    frage: "Wie sind die Geräte bei einer Stern-Topologie verbunden?",
    antwort: [
        "Alle Geräte hängen an einem einzigen Kabel",
        "Jedes Gerät ist mit jedem anderen direkt verbunden",
        "Alle Geräte sind mit einem zentralen Gerät verbunden",
        "Die Geräte bilden einen geschlossenen Ring"
    ],
    richtig: 2
},
{
    type: "multiple",
    frage: "Welche Protokolle gehören zur Anwendungsschicht?",
    antwort: [
        "HTTP",
        "DNS",
        "FTP",
        "Ethernet"
    ],
    richtig: [0, 1, 2]
},
{
    frage: "Welches Protokoll nutzt der Befehl ping?",
    antwort: [
        "ICMP",
        "HTTP",
        "SMTP",
        "DHCP"
    ],
    richtig: 0
},
{
    frage: "Wie lautet die Abkürzung für Wide Area Network?",
    antwortText: ["wan"],
    type: "text"
},
{
    frage: "Wofür wird NAT in einem Heimnetzwerk verwendet?",
    antwort: [
        "Um Webseiten schneller zu laden",
        "Um MAC-Adressen zu ändern",
        "Um Viren zu entfernen",
        "Um mehrere private Geräte mit einer öffentlichen IP-Adresse ins Internet zu bringen"
    ],
    richtig: 3
}
];

let files = document.getElementById("Files");
let quiz = document.getElementById("Quiz");

let übrigButton = document.createElement("button");

document.createElement("button");
übrigButton.classList.add("übrig-Anzeige");
document.body.appendChild(übrigButton);

function updateÜbrigAnzeige() {
    let fragenÜbrig = fragen.length - beantwortet;
    übrigButton.textContent = "Fragen übrig: " + fragenÜbrig;
}


function pruefeQuizEnde() {
    updateÜbrigAnzeige();


    if (beantwortet === fragen.length) { 
        files.style.display = "block";
        files.innerHTML = "<h2>Du hast " + punkte + " von " + fragen.length + " richtig.</h2>";
        
        let neustartButton = document.createElement("button");
        neustartButton.textContent = "Quiz neu starten";
        neustartButton.classList.add("karte");
        
        neustartButton.addEventListener("click", function () {
            localStorage.clear();
            window.location.reload();
        });
        
        files.appendChild(neustartButton);
    }
        updateÜbrigAnzeige();

    fragen.forEach(function (aktuelleFrage, frageindex) {
    let karte = document.createElement("div");
    karte.classList.add("karte");
    });

    if (beantwortet === fragen.length) {
        files.style.display = "block";
        files.innerHTML = "<h2>Du hast " + punkte + " von " + fragen.length + " richtig.</h2>";

        let neustartButton = document.createElement("button");
        neustartButton.textContent = "Quiz neu starten";
        neustartButton.classList.add("karte");

        neustartButton.addEventListener("click", function () {
            localStorage.clear();
            window.location.reload();
        });

        files.appendChild(neustartButton);
    }
    updateÜbrigAnzeige();

}
fragen.forEach(function (aktuelleFrage, frageindex) {
    let karte = document.createElement("div");
    karte.classList.add("karte");

    let titel = document.createElement("h2");
    titel.textContent = aktuelleFrage.frage;
    karte.appendChild(titel);

    let rueckmeldung = document.createElement("p");
    let alleButtons = [];

    // Textfragen
    if (aktuelleFrage.type === "text") {
        let input = document.createElement("input");
        input.type = "text";
        input.classList.add("antwort-eingabe");
        input.placeholder = "Antwort eingeben";
        karte.appendChild(input);

        let pruefenButton = document.createElement("button");
        pruefenButton.textContent = "Antwort prüfen";
        karte.appendChild(pruefenButton);

        pruefenButton.addEventListener("click", function () {
            let eingabe = input.value.trim().toLowerCase();
            if (aktuelleFrage.antwortText.includes(eingabe)) {
                rueckmeldung.textContent = "Richtig!";
                punkte = punkte + 1;
                pruefenButton.classList.add("richtig");
            } else {
                rueckmeldung.textContent = "Falsch! Richtig wäre z.B. : " + aktuelleFrage.antwortText[0];
                pruefenButton.classList.add("falsch");
            }
            input.disabled = true;
            pruefenButton.disabled = true;
            beantwortet = beantwortet + 1;
            updateÜbrigAnzeige();

            pruefeQuizEnde();
        });
    } 
    
    // Multiple-Choice-Fragen
    else if (aktuelleFrage.type === "multiple") {
        
        let ausgewaehlteAntworten = []; 

        aktuelleFrage.antwort.forEach(function (antwort, nummer) {
            let button = document.createElement("button");
            button.textContent = antwort;

            button.addEventListener("click", function () {
                if (ausgewaehlteAntworten.includes(nummer)) {
                    let position = ausgewaehlteAntworten.indexOf(nummer);
                    ausgewaehlteAntworten.splice(position, 1); 
                    button.classList.remove("ausgewaehlt");
                } else {
                    ausgewaehlteAntworten.push(nummer);
                    button.classList.add("ausgewaehlt");
                }
        
            });
            
            alleButtons.push(button);
            karte.appendChild(button);
        });

        let pruefenButton = document.createElement("button");
        pruefenButton.classList.add("pruefen-button");
        pruefenButton.textContent = "Antworten prüfen";
        karte.appendChild(pruefenButton);

        pruefenButton.addEventListener("click", function () {
            let auswahl = ausgewaehlteAntworten.sort().toString();
            let loesung = aktuelleFrage.richtig.sort().toString();

            if (auswahl === loesung) {
                rueckmeldung.textContent = "Richtig!";
                punkte = punkte + 1;
                pruefenButton.classList.add("richtig");
            } else {
                rueckmeldung.textContent = "Leider nicht ganz richtig!";
                pruefenButton.classList.add("falsch");
            }

            alleButtons.forEach(function (b, index) {
                b.disabled = true;
                if (aktuelleFrage.richtig.includes(index)) {
                    b.classList.add("richtig"); 
                }
                
            });
            pruefenButton.disabled = true;
            beantwortet = beantwortet + 1;
            updateÜbrigAnzeige();
            PruefeQuizEnde();
        });
    } 

    // Normale Click Fragen
    else { 
        aktuelleFrage.antwort.forEach(function (antwort, nummer) {
            let button = document.createElement("button");
            button.textContent = antwort;

            button.addEventListener("click", function () {
                localStorage.setItem("frage_" + frageindex, nummer);

                if (nummer === aktuelleFrage.richtig) {
                    rueckmeldung.textContent = "Richtig!";
                    button.classList.add("richtig");
                    punkte = punkte + 1;
                } else {
                    rueckmeldung.textContent = "Falsch!";
                    button.classList.add("falsch");
                    if (alleButtons[aktuelleFrage.richtig]) {
                        alleButtons[aktuelleFrage.richtig].classList.add("richtig");
                    }
                }
                alleButtons.forEach(function (b) {
                    b.disabled = true;
                });
                
                beantwortet = beantwortet + 1;
                pruefeQuizEnde();
            });
            
            alleButtons.push(button);
            karte.appendChild(button);
        });
    }
    
    karte.appendChild(rueckmeldung);
    quiz.appendChild(karte);

   
    let gemerkt = localStorage.getItem("frage_" + frageindex);
    if (gemerkt !== null && aktuelleFrage.type !== "text" && aktuelleFrage.type !== "multiple") {
        if (alleButtons[gemerkt]) {
            alleButtons[gemerkt].click();
        }
    }
});