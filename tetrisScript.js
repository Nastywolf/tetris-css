var figure1= '1,1,1/1,0,0';
var figure1_90='1,1/0,1/0,1';
var figure1_180= '0,0,1/1,1,1';
var figure1_270='1,0/1,0/1,1';
var figureActuelle = figure1;

var tetri=$('<div/>');
tetri.addClass('tetri');
$('article[id="plateau"]').append(tetri);

var cadre = document.getElementsByClassName('tetri');
var s = cadre[0].style; // Un petit raccourci
var i = cadre[0].offsetLeft; // On récupère la position absolue initiale.
var j = cadre[0].offsetTop;

tetri.html(dessinerPiece(figure1));

function dessinerPiece(str){
  var piece=$('<div/>');
  var split1 =str.split('/');
  for(var i=0;i<split1.length;i++){
    split2=split1[i].split(',');
    var ligne=$('<div/>');
    ligne.addClass('ligne');
    piece.append(ligne);
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
  return piece;
}

function rotate(){
  if (figureActuelle == figure1){
    figureActuelle = figure1_90;
    return figureActuelle;
  }

  if (figureActuelle == figure1_90){
    figureActuelle = figure1_180;
    return figureActuelle;
  }

  if (figureActuelle == figure1_180){
    figureActuelle = figure1_270;
    return figureActuelle;}


    if (figureActuelle == figure1_270){
      figureActuelle = figure1;
      return figureActuelle;
    }
  }

  document.onkeydown = function(event){
    var event = event || window.event,
    keyCode = event.keyCode;

    // On détecte l'événement puis selon la fleche, on incrémente ou décrément les variables globales de position, i et j.
    switch(keyCode){
      case 38:
      // alert("38");
      tetri.html(dessinerPiece(rotate()));
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

  window.onload = function jeu (){
    setInterval(function(){
      j++;
      s.top = String(j*35)+'px';
    }
    , 1000)
  }
