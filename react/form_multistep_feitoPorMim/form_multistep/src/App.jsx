import FormStep from './components/FormStep'
import './App.css'

function App() {

  return (
    <div className='container'>
      <h1>Deixe sua avaliação</h1>
      <p className='container-text'>Ficamos felizes com a sua compra, utilize o formulário abaixo para avaliar o produto</p>
      <FormStep />
    </div>
  )
}

export default App
