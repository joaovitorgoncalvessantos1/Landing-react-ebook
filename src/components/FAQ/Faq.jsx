import FaqCard from "../FaqCard/FaqCard";
import "./Faq.css";

import React from "react";

function Faq() {
    return (
        <section className="Faq" id="FAQ">
            <h2>Perguntas Frequentes</h2>
            <p className="Faq_subtitulo">Tudo o que você precisa saber antes de commitar a sua carreira.</p>

            <div className="Faq_Conteiner">
                <FaqCard
                    pergunta="Esse ebook é realmente gratuito?"
                    resposta="Sim. O guia é 100% gratuito. Você só precisa informar seu melhor email para receber o material completo diretamente na sua caixa de entrada."
                />
                <FaqCard pergunta={'Preciso já saber JavaScript para entender o conteúdo?'}
                    resposta={"É recomendado ter noções básicas de JavaScript (variáveis, funções e lógica).Mas o guia explica os conceitos de forma clara e prática, ideal para quem está começando no React."}
                />
                <FaqCard pergunta={'Como recebo o ebook?'}
                    resposta={'Após enviar seu email, você receberá o guia diretamente na sua caixa de entrada.O envio é automático e imediato.'}/>
                <FaqCard pergunta={'Quanto tempo leva para concluir o guia?'}
                resposta={'Depende do seu ritmo, mas em poucos dias você já consegue entender os fundamentos e começar seus primeiros projetos com segurança.'}/>
                <FaqCard pergunta={'Esse guia realmente me ajuda a conseguir um emprego?'}
                resposta={'Ele não garante emprego (ninguém pode prometer isso),mas vai te dar a base necessária para criar projetos, montar portfólio e evoluir com muito mais direção.'}/>
                <FaqCard resposta={'Por que estou disponibilizando esse guia gratuitamente'}
                pergunta={'Porque acredito que aprender programação deve ser acessível.Esse guia é uma forma de ajudar iniciantes a dar o primeiro passo com clareza e confiança.'}/>

      </div>
        </section>
    );
}

export default Faq;
