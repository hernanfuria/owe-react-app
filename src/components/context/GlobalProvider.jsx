import { useState } from "react"
import { GlobalContext } from "./GlobalContext"


// const user = {
//     id: 132,
//     name: 'asd lkjjk',
//     mail: 'asd@dfg.com',
// }

export const GlobalProvider = ({children}) => {

    // const [user, setUser] = useState()

    const [names, setNames] = useState([])
    // const [payments, setPayments] = useState([])
    const [namesDefined, setNamesDefined] = useState(false)

    const defineNames = () => {
        setNamesDefined(true)
    }

    return (
        <GlobalContext.Provider value={{names, setNames, defineNames}}>
            {children}
        </GlobalContext.Provider>
    )
}