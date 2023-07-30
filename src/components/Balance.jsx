import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "./context/GlobalContext"
import { DebtMatrix } from "../resources/DebtMatrix"

export const Balance = () => {
    const {names, payments, navigate} = useContext(GlobalContext)

    const [listOfDebts, setListOfDebts] = useState([])

    useEffect(() => {
        let debtMatrix = new DebtMatrix(names.map(person => {return person.name}));
        for (const payment of payments) {
            debtMatrix.addPayment(payment)
        }

        setListOfDebts(debtMatrix.resolve())
    }, [])
    

    const backToPayments = () => {
        navigate('/paymentslist')
    }

    return (
        <>
            <div>Balance</div>

            {
                listOfDebts.map(debt => {
                    return (
                        <p>{debt.giver} owes {debt.amount} to {debt.receiver}</p>
                    )
                })
            }

            <button onClick={backToPayments}>Back to payments</button>
        </>
    )
}
