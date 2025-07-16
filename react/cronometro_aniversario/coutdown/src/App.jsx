import Title from './components/Title'
import Counter from './components/Counter'

import NewYear from "./assets/newYear.jpg"

import useCoutdown from './hooks/useCoutdown'

import './App.css'

function App() {

  const [day, hour, minute, second] = useCoutdown("jan 1, 2026 00:00:00")

  return (
    <div className='app' style={{backgroundImage: `url(${NewYear})`}}>
      <div className="container">
        <Title title="Contagem regressiva para 2023" />
        <div className="countdown-container">
          <Counter title="Dias" number={day}/>
          <Counter title="Horas" number={hour}/>
          <Counter title="Minutos" number={minute}/>
          <Counter title="Segundos" number={second}/>
        </div>
      </div>
    </div>
  )
}

export default App
