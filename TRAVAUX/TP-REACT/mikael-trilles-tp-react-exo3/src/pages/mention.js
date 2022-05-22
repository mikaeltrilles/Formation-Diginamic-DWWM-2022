import React, { Component } from "react";
import Navigation from "../components/Navigation";

const Mention = () => {
  return (
    <>
      <div className="credit">
        <div className="credit-content">
          <h1>Mentions légales</h1>
          <p>
            Les conditions générales de vente (CGV) encadrent les relations
            commerciales. Elles informent vos clients de leurs droits et
            obligations lors de la vente de vos produits et/ou de vos services.
            Cette obligation de transparence permet de réduire considérablement
            le risque de litige entre vos clients et vous-même. Le caractère
            obligatoire et le contenu des conditions générales de vente varient
            selon que votre offre de biens ou de services est adressée à des
            particuliers ou à des professionnels.
          </p>
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Clients particuliers
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p>
                    Les CGV doivent figurer obligatoirement sur votre site
                    internet.
                  </p>

                  <p>
                    Les conditions générales de vente doivent contenir les
                    informations suivantes :
                  </p>
                  <ul>
                    <li>
                      Caractéristiques essentielles des biens et/ou services
                    </li>
                    <li>Prix TTC : TTC : Toutes taxes comprises en euros</li>
                    <li>Frais et date de livraison</li>
                    <li>
                      Modalités de paiement : modes de paiement autorisés et
                      question du retard de paiement
                    </li>
                    <li>
                      Droit de rétractation : délai et conditions pour annuler
                      la commande
                    </li>
                    Garantie légale de conformité : Garantie contre tous les
                    défauts de fabrication lors de l'achat ou de la livraison
                    d'un produit et garantie des vices cachés : Garantie contre
                    un défaut rendant la chose impropre à l'usage auquel elle
                    est destinée, ou qui diminue tellement cet usage que
                    l'acquéreur ne l'aurait pas achetée ou l'aurait achetée à
                    moindre prix s'il en avait eu connaissance
                    <li>
                      Service après vente : coût de la communication à distance
                    </li>
                    <li>
                      Modalités de règlement des litiges : tribunal compétent
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Clients professionnels
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p>
                    Entre professionnels, les CGV sont facultatives mais doivent
                    pouvoir être communiquées sur simple demande. Le manquement
                    à cette obligation est puni de 15 000 € d'amende.
                  </p>
                  <ul>
                    <li>
                      Prix HT : HT : Hors taxes en euros : barèmes de prix ou
                      méthode de calcul du prix.
                    </li>
                    <li>
                      Rabais et ristourne : réductions de prix, remises
                      promotionnelles ponctuelles et ristournes différées, elles
                      doivent être fixées selon des critères précis et obje
                    </li>
                    <li>
                      Escomptes commerciaux : réduction accordée à un client en
                      cas de paiement anticipé
                    </li>
                    <li>
                      Modalités de paiement : modes de paiement autorisés et
                      pénalités appliquées en cas de retard
                    </li>
                    <li>Frais et date de livraison</li>
                    <li>
                      Modalités de règlement des litiges : tribunal compétent
                    </li>
                  </ul>
                  <p>
                    Vous avez également la possibilité d'ajouter une clause de
                    réserve de propriété : Clause qui permet de faire
                    correspondre la date du transfert de propriété avec le
                    paiement intégral du prix, une clause de limitation de
                    responsabilité, une clause relative aux cas de force majeure
                    : Événement exceptionnel, imprévisible et irrésistible
                    justifiant de s'exonérer d'une obligation, d'un engagement
                    ou d'une responsabilité (par exemple : catastrophe naturelle
                    pour un contrat d'assurance, décès du salarié pour un
                    contrat de travail...) ou encore les conditions de
                    résiliation du contrat.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p>
            Ce site a été réalisé par{" "}
            <a href="https://www.linkedin.com/in/mikael-trilles-a0a4b5a4/">
              Mikael Trilles
            </a>
            .
          </p>
        </div>
      </div>
      <Navigation />
    </>
  );
};

export default Mention;
