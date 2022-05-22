//* Créez un component fonction « University » qui affiche : le nom de l’université, l’url du site web, Le pays

import React, { Component } from "react";

export default class University extends Component {
  render() {
return(
      <>
        <h4>Nom de l'établissement : {this.props.name}</h4>
        <ul>
          <li>Pays : {this.props.web_pages}</li>
          <li>Pays : {this.props.country}</li>
        </ul>
      </>
    );
  }
}