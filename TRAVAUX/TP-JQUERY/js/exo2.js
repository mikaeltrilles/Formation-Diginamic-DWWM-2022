
jQuery(function ($) {
  /**
 *! Vous affichez dans votre page web 12 cartes (4 par ligne) portant chacune un nom de Pokemon différent(de votre choix, vous pouvez inventer des noms). Comme vous le savez, chaque Pokemon possède un type (acier, combat, dragon, eau, électrik).Chaque carte (balise article) aura donc une classe en fonction du type du Pokemon (class= « acier » …) Ajoutez avec l’aide de jQuery une liste de sélection qui contiendra les 5 types sous forme d’options. Au click sur une des options, seuls les cartes Pokemon correspondantes restent affichées. 
 */

  // Création des Pokemons dans un tableau
  let pokemons = [
    {
      name: 'Bulbizarre',
      type: 'acier',
    },
    {
      name: 'Carapuce',
      type: 'combat',

    },
    {
      name: 'Salameche',
      type: 'dragon',
    },
    {
      name: 'Carabaffe',
      type: 'dragon',
    },
    {
      name: 'Tortank',
      type: 'electrik',
    },
    {
      name: 'Méga-Dracaufeu',
      type: 'electrik',
    },
    {
      name: 'Dracaufeu',
      type: 'eau',
    },
    {
      name: 'Dracolosse',
      type: 'dragon',
    },
    {
      name: 'Chenipan',
      type: 'eau',
    },
    {
      name: 'Chrysacier',
      type: 'eau',
    },
    {
      name: 'Papilusion',
      type: 'combat',
    },
    {
      name: 'Aspicot',
      type: 'feu',
    },
  ];

  // Creation de card article dans la section #pokemon à partir du tableau avec une fonction les cards seront créespar ligne de 4 dans la section #pokemon

  // variable qui contiendra la card
  let card = '<div class="card d-flex flex-row flex-wrap">';

  // variable qui contiendra le type de la card
  let cardType = '';

  // variable qui contiendra le nom de la card
  let cardName = '';

  // variable qui contiendra la liste des types
  let cardTypeList = [];

  // Création de la liste de type unique des pokemons 
  pokemons.forEach(element => {
    if (cardTypeList.indexOf(element.type) == -1) {
      cardTypeList.push(element.type);
    }
  });
  console.log("Liste de choix : " + cardTypeList);

  // Création de la liste des types
  cardTypeList.forEach(element => {
    cardType += `<option value="${element}">${element}</option>`;
  });

  // Création de la liste des choix
  let select = $('<select class="form-select">');
  $('#pokemon').append(select);
  let optionTous = $('<option value="Tous">Tous</option>');
  $(select).append(optionTous);
  select.append(cardType);

  // Création des cards avec leur nom et leur type avec la balise article
  for (let i = 0; i < pokemons.length; i++) {
    cardName = pokemons[i].name;
    cardType = pokemons[i].type;
    card += `<article class="card-body col-3 text-center border me-auto">`;
    card += `<h5 class="card-title">${cardName}</h5>`;
    card += `<p class="card-text">${cardType}</p>`;
    card += `</article>`;
  }
  card += '</div>';
  $('#pokemon').append(card);

  // Fonction qui affiche les cartes selon le type choisi
  $(select).change(function () {
    let type = $(this).val();
    if (type == 'Tous') {
      $('.card-body').show();
    } else {
      $('.card-body').hide();
      pokemons.forEach(element => {
        if (element.type == type) {
          $(`article:contains(${element.name})`).show();
        }
      });
    }
  });
});
