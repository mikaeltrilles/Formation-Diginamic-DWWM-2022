(function () {
  window.onload = function () {
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
    // Créations de 3 constantes qui stocke 3 boutons (header, main et footer)
    // avec les parametres de la fonction createMarkup
    const btn_header = createMarkup("button", "Créer un header", document.body);
    const btn_main = createMarkup("button", "Créer un main", document.body);
    const btn_footer = createMarkup("button", "Créer un footer", document.body);

    // Gestionnaire event qui : 
    // creer l'element du bouton choisi dans le body 
    // fait apparaitre le texte en fonction du bouton choisi dans le body
    // fait disparaitre le bouton du body apres avoir cliquer dessus

    btn_header.onclick = function (event) {
      createMarkup("header", "header ici", document.body, { name: "id", value: "btn-header" });
      btn_header.style.visibility = "hidden";
    }
    btn_main.onclick = function (event) {
      createMarkup("main", "main ici", document.body, { name: "id", value: "btn-main" });
      btn_main.style.visibility = "hidden";
    }
    btn_footer.onclick = function (event) {
      createMarkup("footer", "footer ici", document.body, { name: "id", value: "btn_footer" });
      btn_footer.style.visibility = "hidden";
    }
  }
})();