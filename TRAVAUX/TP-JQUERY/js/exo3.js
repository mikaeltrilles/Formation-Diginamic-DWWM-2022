jQuery(function ($) {
  //! Exercice 3 jquery : Recodez avec l’aide de jQuery une fenêtre modale du même type que celle de bootstrap. Cliquez sur le bouton « launch demo modal » sur la page : https://getbootstrap.com/docs/4.2/components/modal/ pour voir ce qu’est une fenêtre modale selon bootstrap.

  // creation du bouton pour ouvrir la modale
  let bouton = $('<button type="button" id="openModal" class="btn btn-warning" data-toggle="modal" data-target="#exampleModal">Ouvre la fenêtre !!</button>');
  $('#exoModal').append(bouton);

  // creation de la modale
  let modal = $('<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">');
  $('#exoModal').append(modal);

  // contenu de la fenetre modale
  let modalDialog = $('<div class="modal-dialog" role="document">');
  let modalContent = $('<div class="modal-content">');
  let modalHeader = $('<div class="modal-header">');

  // titre de la modale
  let titre = $('<h5 class="modal-title" id="exampleModalLabel">');
  titre.text('FENETRE MODALE DEMO');

  // contenu de la modale
  let modalBody = $('<div class="modal-body">');
  modalBody.text('LE GARS QUI A FAIT CETTE FENETRE ? .... IL EST CHOUETTE !');

  // contenu de la modale
  let modalFooter = $('<div class="modal-footer">');
  let boutonFermeture = $('<button type="button" id="closeModal" class="btn btn-secondary" data-dismiss="modal">Close</button>');
  modalFooter.append(boutonFermeture);

  // ajout des élements dans la modale
  modal.append(modalDialog);
  modalDialog.append(modalContent);
  modalContent.append(modalHeader);
  modalHeader.append(titre);
  modalContent.append(modalBody);
  modalContent.append(modalFooter);

  // ouverture de la modale
  $('#openModal').click(function () {
    $('#exampleModal').modal('show');
  });

  // fermeture de la modale
  $('#closeModal').click(function () {
    $('#exampleModal').modal('hide');
  });
});



