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
        <div className="balance">
            <span className="form title">Balance</span>

            <TotalPayedList />

            <DebtsList />

            <div className="form-control">
                <button 
                    className="back" 
                    onClick={backToPayments}
                >
                        Back to payments
                </button>
            </div>
        </div>
    )
}
