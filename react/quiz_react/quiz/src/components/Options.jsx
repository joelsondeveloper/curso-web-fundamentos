import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import "./Options.css";

const Options = ({ option, answer, selectOption, hide }) => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div
      className={`option ${
        quizState.answerSelected && option === answer ? "correct" : ""
      } ${quizState.answerSelected && option !== answer ? "wrong" : ""} ${hide == "hide" ? "hide" : ""}`}
      onClick={() => selectOption(option)}
    >
      <p>{option}</p>
    </div>
  );
};

export default Options;
