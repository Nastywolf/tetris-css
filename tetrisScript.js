
  var cadre = document.getElementById('tetromino'),
    s = cadre.style, // Un petit raccourci
    i = cadre.offsetLeft, // On récupère la position absolue initiale.
    j = cadre.offsetTop;
document.onkeydown = function(event){
    var event = event || window.event,
        keyCode = event.keyCode;
     
    // On détecte l'événement puis selon la fleche, on incrémente ou décrément les variables globales de position, i et j.
    switch(keyCode){
     case 38:
		// alert("38");
        j--;
        break;
    case 40:
		// alert("40");
        j++;
        break;
    case 37:
		// alert("37");
        i--;
        break;
    case 39:
		// alert("39");
        i++;
        break;
    }
    // Et enfin on applique les modifications :
    s.left = String(i*35)+'px';
    s.top = String(j*35)+'px';
}

