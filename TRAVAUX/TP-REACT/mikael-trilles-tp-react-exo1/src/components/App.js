//* Component
//* Description:  d’objets littéraux.
//* Créer deux premiers objets qui auront pour structure :
import React, { Component } from 'react';
import University from './University';
import '../App.css';

//*Ecrivez un component class « App.js » dont le state a une propriété de type tableau « universities »
class App extends Component {
  state = {
    universities: [
      {
        alpha_two_code: "FR",
        domains: ["univ-montp1.fr"],
        country: "France",
        state_province: null,
        web_pages: ["http://www.univ-montp1.fr/"],
        name: "Université de Montpellier I",
      },
      {
        alpha_two_code: "FR",
        domains: ["univ-montp2.fr"],
        country: "France",
        state_province: null,
        web_pages: ["http://www.univ-montp2.fr/"],
        name: "Université de Montpellier II",
      },
    ]
  };


  render() {
    return this.state.universities.map(university => {
      return <University key={university.name} {...university} />
    }
    );
  }
}
export default App;