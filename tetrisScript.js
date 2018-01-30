var figure1= '1,1,1/1,0,0';
var figure1_90='1,1/0,1/0,1';
function ajouterPiece(str){
  var split1 =str.split('/');
  var tetri=$('<div/>');
  tetri.addClass('tetri');
  $('article[id="plateau"]').append(tetri);
  for(var i=0;i<split1.length;i++){
    split2=split1[i].split(',');
    var ligne=$('<div/>');
    ligne.addClass('ligne');
    tetri.append(ligne);
    for(var j=0; j<split2.length;j++){
      var str1 = split2[j];
      var case1 = $('<div/>');
      ligne.append(case1);
      if (str1==1) {
        case1.addClass('cube');
      }
      if (str1==0){
        case1.addClass('vide');
      }


    }
  };
}

ajouterPiece(figure1);

  var cadre = document.getElementsByClassName('tetri'),
    s = cadre[0].style, // Un petit raccourci
    i = cadre[0].offsetLeft, // On récupère la position absolue initiale.
    j = cadre[0].offsetTop;
document.onkeydown = function(event){
    var event = event || window.event,
        keyCode = event.keyCode;

    // On détecte l'événement puis selon la fleche, on incrémente ou décrément les variables globales de position, i et j.
    switch(keyCode){
     case 38:
		// alert("38");
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
