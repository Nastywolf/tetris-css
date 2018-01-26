// (function(){
  // tout ce qui est dans cette fonction est non global, fonction annonyme
alert('ok');

function getTypeClient(param){

  if(param>=0 && param <=200){
    return "Petit client";
  }
  if(param>200 && param <=2000){
    return "Client";
  }
  if(param>2000 && param <=10000){
    return "Client à potentiel";
  }
  if(param>10000){
    return "Client de ouuuff";
  }
}

// for(var i=0;i<10;i++){
//   let myCa= i*1200;
//   alert(getTypeClient(myCa));
//   console.log(myCa+ "=>" + getTypeClient(myCa));
// }

// var myTab = [100, 600, 700, 8000, 11000];
// myTab[6]= 852;
// myTab["test"] = 856;
// myTab.toto = "1056";
// for (let index in myTab) {
// alert(mytab[index]);
// }

// for (let ca of myTab) {
//   alert(getTypeClient(ca));
//   console.log("For of" +ca+ "=>" + getTypeClient(ca));
// }

// myTab.forEach(function(el, index) {
// alert(el);
// });

var corentin ={
  nom: "coco",
  prenom: "l'asticot",
  ca:120,
  getType: function(){
    return getTypeClient(this.ca)}
  }

  alert(corentin.nom+" "+corentin.prenom+" "+corentin.ca+" "+corentin.getType());

  function Personne(nom, prenom) {
    this.nom = nom;
    this.prenom = prenom;
    this.getNom = function() {
      return this.prenom + " " + this.nom;
    }
  }

  function Client(nom, prenom, ca) {
    Personne.call(this, nom, prenom); //Héritage
    this.ca = ca;
    this.getType = function(){
      return getTypeClient(this.ca)
    }
  }

var myClients =[];

for (let i=0;i<5;i++){
  let myClient = new Client("Client #"+ i, "Jean"+i, i*3000);
  myClients.push(myClient);
}

for (client of myClients) {
  console.log(client.getNom()+ " ===> "+client.getType());
}


function ajouter(){
  var myProduit = {
  Nom : document.querySelector('input[name="nom"]').value,
  Prix : document.querySelector('input[name="prix"]').value,
  Fournisseur : document.querySelector('select[name="fournisseur"]').value
};
  createParagraph(myProduit);
  createRow(myProduit);
}
function createParagraph(produit){
  var myParagraph = document.createElement('p');

  myParagraph.innerHTML = produit.Nom + " "+ produit.Prix+ " (" + produit.Fournisseur+") ";
  document.querySelector('#divProduits').append(myParagraph);
}

function createRow(produit){
  var myRow = document.createElement('tr');

  for (let prop in produit){
    var myCell = document.createElement('td');
    myCell.innerHTML = produit[prop];
    myRow.append(myCell);
  }
  document.querySelector('#tableProduits').append(myRow);
}


function envoyer(){
document.querySelector('form').remove();

var myMessage = document.createElement('h1');
myMessage.innerHTML = "Merci petit jésus";
document.querySelector('section').append(myMessage);

}

// })();
