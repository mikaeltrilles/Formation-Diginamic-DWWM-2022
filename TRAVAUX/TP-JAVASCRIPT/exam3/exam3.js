(function () {
  //Recuperer l'element de l'html et je le stocke
  const btnAddTask = document.getElementById("button"); // recuperer le click du bouton
  const input = document.getElementById("task-text"); // recupere l'element d'input

  /**
   * Crée un élément du DOM, lui ajoute un élément ,le place comme dernier
   * enfant de parent et ajoute un attribut en utilisant le
   * parametre attribute
   * @param {string} markup_name
   * @param {string} text
   * @param {domElemnt} parent
   * @param {object} attribute (doit comprendre les propriete name et value)
   * @returns
   */
  function createMarkup(markup_name, text, parent, attribute) {
    const markup = document.createElement(markup_name);
    markup.textContent = text;
    parent.appendChild(markup);
    if (attribute && attribute.hasOwnProperty("name")) {
      markup.setAttribute(attribute.name, attribute.value);
    }
    return markup;
  }

  // Dans la const container creation une div dans le body
  const container = createMarkup("div", "", document.body)

  //btnAddTask est le bouton qui a pour fonction creation de la tache

  btnAddTask.onclick = function () {
    if (input.value == "") { // au clic si l'input est vide j'affiche une alerte
      alert('Veuillez saisir une tache !')
    } else {
      //creation de la section dans le body
      const section = createMarkup("section", input.value, container);
      //Creation des boutons Valider et supprimer dans la div tout juste créé 
      const btnValidate = createMarkup("button", "Valider", section, { name: "class", value: "btnVal" });
      const btnDelete = createMarkup("button", "Supprimer", section, { name: "class", value: "btnDel" });
      //Effacement de la tache dans l'input
      input.value = null;


      // Ce bouton supprime la section attenante a ce bouton
      btnDelete.onclick = function () {
        section.remove();
      };
      // Ce bouton valide la tache en changeant l'état du bouton de "valider" a "invalider"
      // il placera la tache en fin de liste
      btnValidate.onclick = function () {
        if (btnValidate.textContent == "Valider") {
          btnValidate.textContent = "Invalider";
          section.style.textDecoration = "line-through";
          container.appendChild(section); // placement de la tache en fin de liste
        } else {
          btnValidate.textContent = "Valider";
          section.style.textDecoration = "none";
          container.prepend(section);// placement de la tache en debut de liste
        };
      }
    };
  };
})();