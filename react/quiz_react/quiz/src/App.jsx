import { useContext } from 'react'
import { QuizContext } from './context/quiz'
import Welcome from './components/Welcome'
import PickCategory from './components/PickCategory'
import Question from './components/Question'
import GameOver from './components/GameOver'


import './App.css'
import { useEffect } from 'react'

function App() {

  const [quizState, dispatch] = useContext(QuizContext)

  return (
    <div className='app'>
    <h1>Quiz de progamação</h1>
    {quizState.gameStage === "start" && <Welcome />}
    {quizState.gameStage === "category" && <PickCategory />}
    {quizState.gameStage === "playing" && <Question />}
    {quizState.gameStage === "end" && <GameOver />}
    </div>
  )
}

export default App
