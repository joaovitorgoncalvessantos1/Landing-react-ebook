function FaqCard({ pergunta, resposta }) {
  return (
    <div className="Faq_card">
      <h3>{pergunta}</h3>
      <p>{resposta}</p>
    </div>
  );
}

export default FaqCard;
