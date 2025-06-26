import './App.css'
import Events from './components/events'

//2 - importando componente
import FirstComponent from './components/FirstComponent'
import MyComponent from './components/MyComponent'

//4 - template expression
import TemplateExperssion from './components/TemplateExperssion'

function App() {
  const name = 'Joelson'

  const data = {
    age: 19,
    job: 'Desenvolvedor'
  }

  return (
    <>
    {/*3 - comentario no jsx */}
    <h1>Fundamentos do React</h1>
    <FirstComponent/>
    <TemplateExperssion/>
    <h3>Bem vindo, {name}</h3>
    <p>Sua idade é {data.age} e você trabalha como {data.job}</p>
    <MyComponent/>
    <Events/>
    </>
  )
}

export default App
