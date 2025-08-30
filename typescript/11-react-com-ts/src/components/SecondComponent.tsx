import React from 'react'

interface Props {
    name: string
}

const SecondComponent = (props: Props) => {
  return (
    <div>
        <p>Meu segundo componente</p>
        <p>o nome é: {props.name}</p>
    </div>
  )
}

export default SecondComponent