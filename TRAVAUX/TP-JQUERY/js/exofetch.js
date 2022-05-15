import createMarkup from "./dom.js";

(function () {

  fetch("https://www.coopernet.fr/rest/session/token/")
    .then(function (response) {
      if (response.status !== 200) { // si ça c'est mal passé
        throw new Error("Le serveur n'a pas répondu correctement");
      } else return response.text(); // renvoie une promesse
    })

    .then(function (data) { // data correspond au retour du résolve (ici deux lignes au dessus) 
      console.log("Token récupéré : ", data);
    })
    .catch(error => { console.log("Erreur attrapée : ", error) });

  function getUsers(token) {
    // création de la requête
    console.log("Dans getUsers de coopernet.");
    return fetch("https://www.coopernet.fr/memo/users/", {
      credentials: "same-origin",
      method: "GET",
      headers: {
        "Content-Type": "application/hal+json",
        "X-CSRF-Token": token,
        "Authorization": "Basic " + btoa("y" + ":" + "y") // btoa = encodage en base 64 
      }
    })
      .then(response => {
        if (response.status === 200) return response.json();
        else throw new Error("Problème de réponse ", response);
      })
      .then(data => {
        if (data) {
          data.forEach(element => createMarkup("li", element.uname, document.querySelector("#utilisateur")));
          callbackSuccess(); // J'apelle la fonction callbackSuccess pour generer le message de reussite dans le DOM et la liste des users
        } else {
          throw new Error("Problème de data ", data);
        }
      })
      .catch(error => {
        console.error("Erreur attrapée dans getUsers", error);
        callbackFailed(); // J'apelle la fonction callbackFailed pour generer le message d'erreur dans le DOM
      });
  }

  // fontion de  creation de message de validatidation  
  function callbackSuccess() {
    createMarkup("h3", "Liste chargée !!!!!!", document.querySelector("#result"), { name: "class", value: "text-success" });
  }
  // fontion de  creation de message d error  
  function callbackFailed(error) {
    createMarkup("h3", "Liste non chargée !!!!!!", document.querySelector("#result"), { name: "class", value: "text-danger" });
  }

  getUsers();

})();