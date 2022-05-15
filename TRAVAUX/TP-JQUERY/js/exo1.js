jQuery(function ($) {/*code ici */
  /** *
   *! Utilisez jQuery pour faire avancer et disparaître une locomotive ! Image de la locomotive : https://media.auchan.fr/d87f5bf0-733c-417f-a3f6-7e57d6dd898c_256x256/B2CD/ . Affichez la locomotive en haut et à gauche de votre page web. Au click sur la locomotive, celle ci : se déplace jusqu’à atteindre le bord droit de la page disparaît.
   */
  // faire slide image vers la droite et disparaitre au click sur l'image
  $(document).ready(function () {
    $("img").click(function () {
      $("img").animate({
        left: '100%',
      }).hide(500);
    });
  });
});