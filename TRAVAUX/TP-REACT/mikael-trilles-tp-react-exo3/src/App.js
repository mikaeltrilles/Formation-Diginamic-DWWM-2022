import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Mention from "./pages/mention";
import Credit from "./pages/credit";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mention" element={<Mention />} />
        <Route path="/credit" element={<Credit />} />
        <Route path="*" element={<Home />} /> //* pour toutes les routes qui ne
        sont pas prévues (Ex: Erreur 404)
      </Routes>
    </BrowserRouter>
  );
};

export default App;
