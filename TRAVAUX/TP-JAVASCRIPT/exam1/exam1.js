(function () {
  //chargement de la page 
  window.onload = function () {
    //avec paragraphe caché
    // on stocke le paragraphe dans parCache
    const parCache = document.querySelector('p');
    //parCarche est par defaut caché
    parCache.style.visibility = "hidden";
    //on affiche la boite de dialogue en attente
    //qui retourne un string
    let message = window.prompt("Voulez-vous voir le contenu de cette page (o/n) ?");
    // appel de la fonction pour teste la reponse du prompt
    vupasvu(message);


    //fonction pour teste avec un if la reponse du prompt 
    //minuscule ou majuscule valide la reponse grace a toLowerCase
    //je compare les deux valeurs en miniscule
    function vupasvu() {
      if (message.toLowerCase() == "o") {
        parCache.style.visibility = "visible";
        //Indication dans la console de la bonne reponse
        console.log(`La réponse utilisateur est "${message}", donc le paragraphe s'affiche`);
      } else {
        //Indication dans la console de la reponse incorrecte
        console.log(`La réponse utilisateur est "${message}", donc le paragraphe NE s'affiche PAS`);
      }
    }
  }
})();