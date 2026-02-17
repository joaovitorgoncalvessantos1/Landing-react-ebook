import "./Footer.css";
import React from "react";

function Footer() {
  return (
    <footer className="Rodape">
      <div className="Conteiner_informacoes">
        <h3>
          Dev<span className="Conteiner__span">Start</span>
        </h3>
        <p className="Conteiner_informacoes_paragrafo">Transforme sua carreira com react</p>
      </div>
      <div className="Conteiner_navegacao">
        <h3>Navegação</h3>
        <ul>
          <li>Inicio</li>
          <li>Ebook</li>
          <li>FAQ</li>
        </ul>
      </div>
      <div className="conteiner_recursos">
        <h3>Recursos</h3>
        <ul>
          <li>Blog</li>
          <li>Guia React</li>
          <li>Projetos</li>
          <li>Politica de privacidade</li>
        </ul>
      </div>

    </footer>
  );
}

export default Footer;
