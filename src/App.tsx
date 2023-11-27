import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import dotenv from "dotenv";

import bookImage from "./assets/img/Capa_Livro_Quarto_de_Costura.png";
import authorImage from "./assets/img/Autor_Livro_Quarto_de_Costura.png";
import BtnComprar from "./components/BtnComprar";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <div className="book-section" id="book-section">
          <img src={bookImage} className="book-image" alt="Capa do livro Quarto de Costura" />
          <div className="book-description">
            <h2>Quarto de Costura</h2>
            <p>
              Trata-se do meu livro de poesia começado a escrever em 1977 e que se apresenta no dia 7 de dezembro, quinta-feira pelas 17h, em Braga na Biblioteca da Faculdade de Filosofia e Ciências
              Sociais - Padre Júlio Fragata SJ na Universidade Católica Portuguesa - Centro Regional de Braga.
            </p>
            <BtnComprar />
          </div>
        </div>
        <div className="author-section" id="author-section">
          <div className="author-description">
            <h2>António Machado</h2>
            <p>
              Trata-se do meu livro de poesia começado a escrever em 1977 e que se apresenta no dia 7 de dezembro de 2023, quinta-feira pelas 17h, em Braga na Biblioteca da Faculdade de Filosofia e
              Ciências Sociais - Padre Júlio Fragata SJ na Universidade Católica Portuguesa - Centro Regional de Braga.
            </p>
          </div>
          <img src={authorImage} className="author-image" alt="Foto do autor António Machado" />
        </div>
        <div className="sell-section" id="sell-section">
          <div className="sell-description">
            <h2>Como adiquir seu livro</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="sell-btn">
            <BtnComprar />
          </div>
          <br />
        </div>
      </header>
    </div>
  );
}

export default App;
