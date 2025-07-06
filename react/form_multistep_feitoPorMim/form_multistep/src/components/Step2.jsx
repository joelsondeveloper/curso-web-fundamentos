import { Smile, Meh, Frown, Laugh  } from "lucide-react";

const Step2 = ({ satisfation, setSatisfation, message, setMessage }) => {
  const avaliacaoOpcoes = [
    {
      id: "Frown",
      label: "Insatisfeito",
      icon: Frown,
    },
    {
      id: "Meh",
      label: "Poderia ser melhor",
      icon: Meh,
    },
    {
      id: "Smile",
      label: "Satisfeito",
      icon: Smile,
    },
    {
      id: "Laugh",
      label: "Muito satisfeito",
      icon: Laugh,
    },
  ];

  return (
    <div className="form-inputs">
      <div className="form-satisfation">
        {avaliacaoOpcoes.map((avaliacao) => (
          <label key={avaliacao.id}>
            <input type="radio" name="satisfation" value={avaliacao.id} checked={satisfation === avaliacao.id} onChange={(e) => setSatisfation(e.target.value)} required/>
            <div className="satisfation-icon">
              <avaliacao.icon size={24} stroke="#fff" />
            </div>
            <span>{avaliacao.label}</span>
          </label>
        ))}
      </div>
      <label className="form-message">
        <span>Comentario:</span>
        <textarea type="text" placeholder="Digite uma mensagem" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
      </label>
    </div>
  );
};

export default Step2;
