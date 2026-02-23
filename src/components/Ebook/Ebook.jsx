import "./Ebook.css";
import mentora from "../../assets/mentora.webp";
import ebookMockup from "../../assets/ebookMockup.webp";

function Ebook() {
  return (
    <section className="Ebook">
      <h2>Guia Completo de React para Iniciantes</h2>

      <p>
        Aprenda os fundamentos do React de forma prática e construa seus
        primeiros projetos profissionais do zero. Digite seu melhor email abaixo
        e receba gratuitamente o guia que vai acelerar sua evolução.
      </p>

      <div className="ebook-bottom">
        <form className="Ebook-submit-email">
          <input
            type="email"
            name="EbookEmail"
            placeholder="Digite o seu email"
          />
          <button type="submit" className="Ebook-button">
            Enviar
          </button>
        </form>

        <div className="mentora">
          <div className="">
            {" "}
            <img src={ebookMockup} className="Ebook-img block" />
          </div>
          <div className="">
            {" "}
            <img src={mentora} className="Ebook-img" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ebook;
