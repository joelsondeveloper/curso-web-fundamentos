
import './App.css'

// 2 - imagem em assets 

import city from './assets/city.jpg'

// 3 - useState 
import Data from './Data'

// 4 - renderização de listas
import ListRender from './ListRender'

// 7 - render condicional
import ConditionalRender from './ConditionalRender'

// 8 - props 
import ShowUserName from './ShowUserName'

// 9 - desestruturando props
import CarDetails from './carDetails'


function App() {

  return (
    <div style={{paddingBottom: '500px'}}>
      <h1>Avançando em react</h1>
      {/* 1 - imagem em public */}
      <img src="/img1.jpg" alt="Alguma imagem" />
      {/* 2 - imagem em assets */}
      <img src={city} alt="Cidade" />
      {/* 3 - useState  */}
      <Data />
      {/* 4 - renderização de listas */}
      <ListRender />
      {/* 7 - render condicional */}
      <ConditionalRender />
      {/* 8 - props */}
      <ShowUserName name="Joelson" />
      {/* 9 - desestruturando props */}
      <CarDetails brand="VW" km={10000} color="Preto" />
    </div>
  )
}

export default App
