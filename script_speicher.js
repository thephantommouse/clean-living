function speichern () {
    var eingaben = document.getElementsByTagName("input");
    for(var eingabe of eingaben) {
        console.log(eingabe.name+":"+eingabe.value);
        localStorage.setItem(eingabe.name, eingabe.value);
    }
} 
function laden () {
    var eingaben = document.getElementsByTagName("input");
    for(var eingabe of eingaben) {
        var wert = localStorage.getItem(eingabe.name);
        eingabe.value = wert; 
    }
} 
