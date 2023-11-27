import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import dotenv from "dotenv";
import { Analytics } from "@vercel/analytics/react";

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
        <div className="book-section" id="book">
          <img src={bookImage} className="book-image" alt="Capa do livro Quarto de Costura" />
          <div className="book-description">
            <h2>Quarto de Costura</h2>
            <p>
            Este é o meu livro de poesia, iniciado em 1977, que será apresentado no dia 7 de dezembro, quinta-feira, às 17h, em Braga, na Biblioteca da Faculdade de Filosofia e Ciências Sociais - Padre Júlio Fragata SJ, na Universidade Católica Portuguesa - Centro Regional de Braga. Uma obra que promete tocar as almas através das palavras, revelando a beleza e profundidade dos sentimentos humanos. Venha descobrir um universo poético único e deixe-se envolver pela magia da poesia que atravessa décadas. Será uma oportunidade ímpar de se conectar com a essência da lírica portuguesa contemporânea.
            </p>
            <BtnComprar />
          </div>
        </div>
        <div className="author-section" id="author">
          <div className="author-description">
            <h2>António Machado</h2>
            <p>
            António Machado, nascido a 18 de abril de 1965, é um engenheiro de sistemas respeitado, formado pela Universidade do Minho em 1988. Desenvolveu a sua carreira na área de TI, desempenhando funções como Diretor de TI na Coelima Indústrias Têxteis e Gestor de TI na Felpinter. Atualmente, é engenheiro de sistemas na Universidade Católica Portuguesa, em Braga, onde contribui de forma significativa para a inovação e tecnologia no sector educativo.
            </p>
          </div>
          <img src={authorImage} className="author-image" alt="Foto do autor António Machado" />
        </div>
        <div className="sell-section" id="sell">
          <div className="sell-description">
            <h2>Como adiquir seu livro</h2>
            <p>Reserve já a sua cópia de "Quarto de Costura" e mergulhe numa jornada inesquecível! Clique no botão abaixo para ser direcionado a uma página com todos os detalhes da compra e um formulário para o contactarmos. Não perca esta oportunidade de se conectar com esta obra extraordinária.</p>
          </div>
          <div className="sell-btn">
            <BtnComprar />
          </div>
          <br />
        </div>
      </header>
      <footer>
        <p>
          &copy; Site desenvolvido por{" "}
          <a href="https://linktr.ee/faelpatrick" target="_blank">
            Rafael Patrick de Souza
          </a>
        </p>
      </footer>
      <Analytics />
    </div>
  );
}

export default App;
