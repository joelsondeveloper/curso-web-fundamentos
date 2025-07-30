import { useLayoutEffect, useEffect, useState } from "react"

const HookUseLayoutEffect = () => {
    const [name, setName] = useState("Algum nome")

    useEffect(() => {
        console.log("2")
        setName("mudou de nome")

    }, [])

    useLayoutEffect(() => {
        console.log("3")
        setName("outro nome")
    }, [])

    console.log(name)

  return (
    <div>
      <h2>useLayoutEffect</h2>
      <p>nome: {name}</p>
      <hr />
    </div>
  )
}

export default HookUseLayoutEffect
