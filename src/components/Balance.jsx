import { useContext } from "react"
import { GlobalContext } from "./context/GlobalContext"

export const Balance = () => {
    const {payments, navigate} = useContext(GlobalContext)

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
