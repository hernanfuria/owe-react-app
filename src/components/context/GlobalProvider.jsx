import { useState } from "react"
import { GlobalContext } from "./GlobalContext"
import { useNavigate } from "react-router-dom"


// const user = {
//     id: 132,
//     name: 'asd lkjjk',
//     mail: 'asd@dfg.com',
// }

const testPayments = [
    {
        payer: 'juan',
        amount: 100,
        consumers: ['juan', 'carlos', 'roberto']
    },
    {
        payer: 'carlos',
        amount: 200,
        consumers: ['juan', 'carlos', 'roberto']
    },
    {
        payer: 'roberto',
        amount: 300,
        consumers: ['juan', 'carlos', 'roberto']
    },
]

export const GlobalProvider = ({children}) => {

    // const [user, setUser] = useState()

    const [names, setNames] = useState([])
    const [payments, setPayments] = useState([])
    const [paymentsIdsCounter, setPaymentsIdsCounter] = useState(0)
    const [namesDefined, setNamesDefined] = useState(false)

    const navigate = useNavigate()


    return (
        <GlobalContext.Provider value={{
            names, 
            setNames, 
            payments, 
            setPayments, 
            paymentsIdsCounter,
            setPaymentsIdsCounter, 
            namesDefined, 
            setNamesDefined, 
            navigate
            }}>

            {children}
        </GlobalContext.Provider>
    )
}