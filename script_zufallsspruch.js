var zufallsspruch = [
              "Hey, achte doch heute (oder immer) mal darauf, keine Plastiktüten zu verwenden!",
              "Heute schon Autogefahren? Wenn nein, echt toll. Wenn ja, versuche es doch nächstes mal ohne Auto!",
            "Uns ist die Zukunft nicht egal...es ist noch nicht zu spät!",
            "Die Dinos dachten auch, sie hätten noch Zeit!",
            "Life in plastic is not fantastic!",
            "Join the Green Side!",
            "What I stand for is what I stand on!",
            "Unsere Welt ist wichtiger als Geld (und Kleidung)!"
    
              ];
function spruchAnzeigen(){
        var randomItem = zufallsspruch[Math.floor(Math.random()*zufallsspruch.length)];
        var spruchElement = document.getElementById("zufallsspruch");
    console.log(randomItem);
    console.log(spruchElement);
    spruchElement.innerHTML=randomItem;
}
spruchAnzeigen();          