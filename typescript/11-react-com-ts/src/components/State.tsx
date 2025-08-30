import React, { useState } from 'react'


const State = () => {

    const [text, setText] = useState("Texto inicial")

  return (
    <div>
        <p>O texto é: {text}</p>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  )
}

export default State