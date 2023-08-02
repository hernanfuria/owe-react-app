import { useState } from "react"
import { GlobalContext } from "./GlobalContext"
import { useNavigate } from "react-router-dom"


const testNames = [
    {
        name: '',
        id: 1,
    },
    {
        name: '',
        id: 2,
    },
    {
        name: '',
        id: 3,
    }
]

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
    // {
    //     payer: 'roberto',
    //     amount: 400,
    //     consumers: ['carlos', 'roberto']
    // }
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