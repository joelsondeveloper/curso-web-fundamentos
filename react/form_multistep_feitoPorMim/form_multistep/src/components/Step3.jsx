import { Frown, Meh, Smile, Laugh } from "lucide-react"

const Step3 = ({name, satisfation, message}) => {

  const satisfationIcon = satisfation === "Frown" ? <Frown /> : satisfation === "Meh" ? <Meh /> : satisfation === "Smile" ? <Smile /> : <Laugh />

  return (
    <div className="form-resume">
      <h2>Falta pouco...</h2>
      <p>
        A sua opinião é muito importante, em breve você receberá um cupom de 10% desconto para a sua próxima compra
      </p>
      <p>Para concluir sua avaliação clique no botão de Enviar abaixo</p>

      <div className="resume">
        <h3>Aqui está o resumo da sua avaliação {name}</h3>
        {console.log(satisfationIcon) }
        <p>Satisfação com o produto: {satisfationIcon}</p>
        <p>Comentario: <span>{message || "Sem comentários"}</span></p>
      </div>
      
    </div>
  )
}

export default Step3
