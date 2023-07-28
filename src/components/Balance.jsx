import { useContext, useEffect } from "react"
import { GlobalContext } from "./context/GlobalContext"
import { DebtMatrix } from "../resources/DebtMatrix"

export const Balance = () => {
    const {names, payments, navigate} = useContext(GlobalContext)

    useEffect(() => {
        let debtMatrix = new DebtMatrix(names.map(person => {return person.name}));
        for (const payment of payments) {
            debtMatrix.addPayment(payment)
        }
        console.log(debtMatrix.matrix)
        console.log(debtMatrix.resolve())


    }, [])
    

    const backToPayments = () => {
        navigate('/paymentslist')
    }

    return (
        <>
            <div>Balance</div>
            <button onClick={backToPayments}>Back to payments</button>
        </>
    )
}
