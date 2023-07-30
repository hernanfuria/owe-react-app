import { useContext } from "react"
import { GlobalContext } from "./context/GlobalContext"
import { TotalPayedList } from "./TotalPayedList"
import { DebtsList } from "./DebtsList"

export const Balance = () => {
    const {navigate} = useContext(GlobalContext)

    const backToPayments = () => {
        navigate('/paymentslist')
    }

    return (
        <>
            <div>Balance</div>

            <TotalPayedList />

            <DebtsList />

            <button onClick={backToPayments}>Back to payments</button>
        </>
    )
}
