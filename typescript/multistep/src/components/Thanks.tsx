import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

import "./Thanks.css"
import type { ReactElement } from "react";

type ThanksProps = {
  data: {
    name: string;
    review: string;
    comment: string;
  }
}

type emojiObject = {
    unsastisfied: ReactElement,
    neutral: ReactElement,
    satisfied: ReactElement,
    very_satisfied: ReactElement,
}

const emojiData: emojiObject = {
  unsastisfied: <BsFillEmojiFrownFill />,
  neutral: <BsFillEmojiNeutralFill />,
  satisfied: <BsFillEmojiSmileFill />,
  very_satisfied: <BsFillEmojiHeartEyesFill />,
}

const Thanks = ({data}: ThanksProps) => {
  return (
    <div className="thanks-container">
      <h2>Falta pouco...</h2>
      <p>A sua opinião e importante, em breve voce recebera um cupom de desconto de 10% em nossa loja.</p>
      <p>Para concluir sua avaliacao, clique no botao de enviar abaixo.</p>
      <h3>Aqui está o resumo da sua avaliacao {data.name}:</h3>
      <p className="review-data">
        <span>Satisfação com o produto: {emojiData[data.review as keyof typeof emojiData]}</span>
      </p>
      <p className="review-data">
        <span>Comentario: {data.comment}</span>
      </p>
    </div>
  )
}

export default Thanks
