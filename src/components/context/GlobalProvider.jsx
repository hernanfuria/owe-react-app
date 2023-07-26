import { useState } from "react"
import { GlobalContext } from "./GlobalContext"
import { useNavigate } from "react-router-dom"


// const user = {
//     id: 132,
//     name: 'asd lkjjk',
//     mail: 'asd@dfg.com',
// }

export const GlobalProvider = ({children}) => {

    // const [user, setUser] = useState()

    const [names, setNames] = useState([])
    const [payments, setPayments] = useState([])
    const [namesDefined, setNamesDefined] = useState(false)

    const navigate = useNavigate()


    return (
        <GlobalContext.Provider value={{
            names, 
            setNames, 
            payments, 
            setPayments, 
            namesDefined, 
            setNamesDefined, 
            navigate
            }}>
                
            {children}
        </GlobalContext.Provider>
    )
}