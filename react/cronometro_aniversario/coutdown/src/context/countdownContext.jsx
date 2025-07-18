import { useState, createContext, Children } from "react";

const countdownContext = createContext(null)

const CountdownProvider = ({children}) => {

    const [event, setEvent] = useState(null)

    return (
        <countdownContext.Provider value={{event, setEvent}}>
            {children}
        </countdownContext.Provider>
    )
}

export {countdownContext, CountdownProvider} 