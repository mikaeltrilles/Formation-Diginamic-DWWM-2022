import React, { Component } from "react";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home-content">
          <h1>Accueil</h1>
          <p>
            Ce site a été réalisé par{" "}
            <a href="https://www.linkedin.com/in/mikael-trilles-a0a4b5a4/">
              Mikael Trilles
            </a>
            .
          </p>
          <p>
            <div>
              <h2 className="display-1 fw-1 align-items-center">Coucou</h2>
            </div>
          </p>
        </div>
      </div>
      <Navigation />
    </>
  );
};

export default Home;
