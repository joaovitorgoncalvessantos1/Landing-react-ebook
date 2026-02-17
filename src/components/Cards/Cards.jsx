import "./Cards.css";
import { Code, Rocket, Layout, Shield, TrendingUp } from "lucide-react";

<Code size={28} color="#7C3AED" />;

function Cards() {
  return (
    <section className="Card">
      <h2 className="Card_subtitulo">O que você vai conquistar</h2>
      <p className="Card_paragrafo">
        Resultado reais para quem quer sair do basico.
      </p>

      <div className="Card_conteiner">
        <div className="Cards">
    
          <h3>Projetos Reais</h3>
          <p>
            Construa aplicações completas do zero e pare de depender de
            tutoriais passo a passo.
          </p>
        </div>
        <div className="Cards">
          <h3>Estrutura Profissional</h3>
          <p>
            Aprenda a organizar seus projetos como desenvolvedores experientes
            fazem no mercado
          </p>
        </div>
        <div className="Cards">
          <h3> Portfólio de Verdade</h3>
          <p>
            Saia com projetos prontos para mostrar em entrevistas ou
            oportunidades freelance.
          </p>
        </div>
        <div className="Cards">
          <h3>Clareza na Jornada</h3>{" "}
          <p>
            Saiba exatamente o que estudar e em qual ordem para evoluir mais
            rápido.
          </p>
          
        </div>

      </div>
    </section>
  );
}

export default Cards;
