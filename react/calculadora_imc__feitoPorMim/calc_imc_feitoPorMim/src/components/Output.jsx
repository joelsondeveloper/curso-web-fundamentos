import "./Output.css"

const output = ({setIsSubmit, imc}) => {

    function calculeSituation(imc) {
      if (imc < 18.5) {
        return "Magreza";
      } else if (imc >= 18.5 && imc <= 24.9) {
        return "Normal";
      } else if (imc >= 25.0 && imc <= 29.9) {
        return "Sobrepeso";
      } else if (imc >= 30.0 && imc <= 39.9) {
        return "Obesidade";
      } else if (imc >= 40.0) {
        return "Obesidade Grave";
      }
    }

  return (
    <section className='section-output section'>
      <h2 className="output-title">Seu IMC: {imc.toFixed(2)}</h2>
      <h3 className="output-subtitle">
        Situação atual: {calculeSituation(imc)}
      </h3>
      <p className='output-text'>Confira as classificações</p>
      <table className='output-table'>
        <thead>
          <tr>
            <th>IMC</th>
            <th>Classificação</th>
            <th>Obesidade</th>
          </tr>
        </thead>
        <tbody>
            <tr>
                <td>Menor que 18.5</td>
                <td>Magreza</td>
                <td>0</td>
            </tr>
            <tr>
                <td>Entre 18.5 e 24.9</td>
                <td>Normal</td>
                <td>0</td>
            </tr>
            <tr>
                <td>Entre 25.0 e 29.9</td>
                <td>Sobrepeso</td>
                <td>I</td>
            </tr>
            <tr>
                <td>Entre 30.0 e 39.9</td>
                <td>Obesidade</td>
                <td>II</td>
            </tr>
            <tr>
                <td>Maior que 40.0</td>
                <td>Obesidade grave</td>
                <td>III</td>
            </tr>
        </tbody>
      </table>
      <button className='output-button' onClick={() => setIsSubmit(0)}>Voltar</button>
    </section>
  )
}

export default output
